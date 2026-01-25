import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, result } = body;

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        // Define the path to the local JSON file
        const filePath = path.join(process.cwd(), 'src', 'data', 'leads.json');

        // Read existing leads
        let leads = [];
        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            try {
                leads = JSON.parse(fileContent);
            } catch (error) {
                console.error('Error parsing leads file:', error);
                leads = [];
            }
        }

        // Add new lead
        const newLead = {
            id: crypto.randomUUID(),
            email,
            date: new Date().toISOString(),
            auditResult: result || {},
            source: 'sovereign-wealth-audit'
        };

        leads.push(newLead);

        // Save back to file
        fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));

        return NextResponse.json({ success: true, message: 'Lead captured successfully' });

    } catch (error) {
        console.error('Error capturing lead:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
