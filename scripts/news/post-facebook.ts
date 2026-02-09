/**
 * Facebook Page Poster
 * Posts to Facebook Page via the Graph API
 */

import { CONFIG } from "./config.js";

/**
 * Post to Facebook Page
 * Returns true if successful, false otherwise
 */
export async function postToFacebook(message: string, link: string): Promise<boolean> {
    if (!CONFIG.facebook.enabled) {
        console.log("  Facebook API not configured, skipping post");
        console.log("  Set FACEBOOK_PAGE_ID and FACEBOOK_PAGE_TOKEN in .env.local");
        return false;
    }

    try {
        const url = `https://graph.facebook.com/v24.0/${CONFIG.facebook.pageId}/feed`;

        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                message,
                link,
                access_token: CONFIG.facebook.pageToken,
            }),
        });

        const data = await response.json() as { id?: string; error?: { message: string } };

        if (data.id) {
            console.log(`  Facebook post created! ID: ${data.id}`);
            return true;
        } else {
            console.error("  Facebook API error:", data.error?.message || data);
            return false;
        }
    } catch (error) {
        console.error("  Error posting to Facebook:", error);
        return false;
    }
}
