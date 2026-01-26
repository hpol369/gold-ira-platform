import { redirect } from 'next/navigation';

// Redirect /guide to /guide/gold-ira-guide
export default function GuidePage() {
  redirect('/guide/gold-ira-guide');
}
