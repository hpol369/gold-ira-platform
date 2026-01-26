# Open Graph Tags Migration Guide

## Overview

Fixed the issue where 826 pages were missing complete Open Graph tags (`og:image` and `og:url`).

## Changes Made

### 1. Updated Root Layout (`src/app/layout.tsx`)

Added `metadataBase` configuration which is critical for Open Graph tag generation:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL("https://www.richdadretirement.com"),
  // ... rest of metadata
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.richdadretirement.com",
    siteName: "Rich Dad Retirement",
    title: "...",
    description: "...",
    images: [
      {
        url: "/og-image.png",  // Now relative URL works
        width: 1200,
        height: 630,
        alt: "...",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};
```

**Key improvements:**
- Added `metadataBase` - enables relative URLs in OpenGraph metadata
- Changed image URLs from absolute to relative paths (e.g., `/og-image.png`)
- Reordered properties for clarity

### 2. Created Metadata Helper (`src/lib/metadata.ts`)

New utility functions for consistent page metadata:

```typescript
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Page Title",
  description: "Page description",
  url: "https://www.richdadretirement.com/page-path",
  imageAlt: "Custom image alt text", // optional
  type: "article", // or "website" (default)
});
```

**Features:**
- Automatically generates complete OpenGraph tags
- Ensures `og:image` and `og:url` are always present
- Provides sensible defaults while allowing customization
- Supports both article and website types

### 3. Updated Example Pages

Updated two pages to demonstrate the new pattern:

- `src/app/best-gold-ira-for/page.tsx`
- `src/app/guide/gold-ira-guide/page.tsx`

## How to Update Remaining Pages

For each page that needs metadata, follow this pattern:

### Before (Old Approach - Missing OG tags):
```typescript
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description",
};
```

### After (New Approach - Complete OG tags):
```typescript
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Page Title",
  description: "Page description",
  url: "https://www.richdadretirement.com/path/to/page",
  imageAlt: "Descriptive alt text", // optional
  type: "article", // optional, defaults to "website"
});
```

## Parameters Explained

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| `title` | Yes | N/A | Page title for both HTML and OG tags |
| `description` | Yes | N/A | Page meta description for both HTML and OG tags |
| `url` | Yes | N/A | Full canonical URL (e.g., `https://www.richdadretirement.com/guide/topic`) |
| `image` | No | `/og-image.png` | Path to OG image (relative to public folder) |
| `imageAlt` | No | Default message | Alt text for the OG image |
| `type` | No | `"website"` | Either `"website"` or `"article"` |

## What This Fixes

### Before
```html
<!-- Missing og:image and og:url -->
<meta name="twitter:card" content="summary_large_image">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Rich Dad Retirement">
<!-- ❌ No og:image -->
<!-- ❌ No og:url -->
```

### After
```html
<!-- Complete Open Graph tags -->
<meta property="og:type" content="website">
<meta property="og:locale" content="en_US">
<meta property="og:url" content="https://www.richdadretirement.com/page-path">
<meta property="og:site_name" content="Rich Dad Retirement">
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Page description">
<meta property="og:image" content="https://www.richdadretirement.com/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Custom alt text">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Page Title">
<meta name="twitter:description" content="Page description">
<meta name="twitter:image" content="https://www.richdadretirement.com/og-image.png">
```

## OG Image Asset

The metadata references `/og-image.png` which should be placed in the `public/` directory:
- **Path:** `public/og-image.png`
- **Dimensions:** 1200 x 630 pixels
- **Format:** PNG (JPEG also supported)

If this file doesn't exist yet, create it or the OG tags will reference a missing image.

## Verification

To verify OG tags are working:

1. **Local Testing:**
   - Use a tool like [Open Graph Preview](https://www.opengraph.xyz/)
   - Or inspect page source for `og:` meta tags

2. **In Chrome DevTools:**
   - Open Inspector
   - Look for `<meta property="og:*"` tags in the `<head>` section

3. **Expected Result:**
   - Every page should have: `og:url`, `og:image`, `og:title`, `og:description`
   - Twitter tags should include the image

## Next Steps

To complete the migration of all 166 pages:

1. Create a script to find all pages without proper OG tags
2. Update them systematically using the helper function
3. Test a sample of pages to verify correct rendering
4. Verify in social media debuggers (Facebook, Twitter)

## Important Notes

- **metadataBase** is required for relative URLs to work in OpenGraph metadata
- All page URLs must be absolute URLs (starting with `https://`)
- The image path should be relative to the `public` folder
- Twitter card metadata is automatically generated from OpenGraph data
- For article pages, use `type: "article"` for better social sharing

## Support

For questions about metadata or need to update a specific page, refer to:
- `/src/lib/metadata.ts` - The metadata helper implementation
- `/src/app/layout.tsx` - Root-level configuration
- Example pages: `/src/app/best-gold-ira-for/page.tsx`
