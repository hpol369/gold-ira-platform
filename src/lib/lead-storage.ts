// src/lib/lead-storage.ts
// Simple in-memory + file-based lead storage for Vercel compatibility
// Uses /tmp directory for JSON file storage (persists across requests in same instance)

import { promises as fs } from 'fs';
import path from 'path';

export interface QuizLead {
  id: string;
  productType: string;
  budget: string;
  answers: Record<string, string>;
  recommendedCompany: string;
  email?: string;
  createdAt: string;
  utmParams?: Record<string, string>;
}

// In-memory cache for faster reads
let leadsCache: QuizLead[] | null = null;

// File path for persistent storage (Vercel uses /tmp)
const LEADS_FILE = process.env.NODE_ENV === 'production'
  ? '/tmp/quiz-leads.json'
  : path.join(process.cwd(), '.tmp', 'quiz-leads.json');

/**
 * Ensures the storage directory exists
 */
async function ensureStorageDir(): Promise<void> {
  const dir = path.dirname(LEADS_FILE);
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

/**
 * Loads leads from file storage into memory cache
 */
async function loadLeads(): Promise<QuizLead[]> {
  if (leadsCache !== null) {
    return leadsCache;
  }

  try {
    await ensureStorageDir();
    const data = await fs.readFile(LEADS_FILE, 'utf-8');
    leadsCache = JSON.parse(data) as QuizLead[];
    return leadsCache;
  } catch (error) {
    // File doesn't exist or is invalid - start with empty array
    leadsCache = [];
    return leadsCache;
  }
}

/**
 * Persists leads from memory cache to file storage
 */
async function persistLeads(): Promise<void> {
  if (leadsCache === null) {
    return;
  }

  try {
    await ensureStorageDir();
    await fs.writeFile(LEADS_FILE, JSON.stringify(leadsCache, null, 2), 'utf-8');
  } catch (error) {
    console.error('Failed to persist leads:', error);
    // Don't throw - data is still in memory cache
  }
}

/**
 * Saves a new lead and returns its generated ID
 */
export async function saveLead(
  lead: Omit<QuizLead, 'id' | 'createdAt'>
): Promise<string> {
  const leads = await loadLeads();

  const newLead: QuizLead = {
    ...lead,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };

  leads.push(newLead);
  leadsCache = leads;

  await persistLeads();

  return newLead.id;
}

/**
 * Retrieves a lead by its ID
 */
export async function getLead(id: string): Promise<QuizLead | null> {
  const leads = await loadLeads();
  return leads.find((lead) => lead.id === id) || null;
}

/**
 * Retrieves all stored leads
 */
export async function getAllLeads(): Promise<QuizLead[]> {
  return loadLeads();
}

/**
 * Clears all leads (useful for testing)
 */
export async function clearAllLeads(): Promise<void> {
  leadsCache = [];
  await persistLeads();
}

/**
 * Gets the count of stored leads
 */
export async function getLeadCount(): Promise<number> {
  const leads = await loadLeads();
  return leads.length;
}
