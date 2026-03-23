# Authority Rescue Plan — March 2026

## Situation: DR 0, 90/2,513 Pages Indexed, 2 Google Clicks/Month

Google doesn't trust this domain. Bing does (1,700 sessions/mo). AI engines cite us. The content is ready — 2,500+ pages. The site needs authority and trust signals.

---

## PHASE 1: DAMAGE CONTROL (This Week — Days 1-3)

### 1.1 Disavow Spam Backlinks
**Why:** 5 referring domains are all SEO spam. They may be triggering negative trust signals.
**Action:** Create and submit disavow file to Google Search Console.
**Domains to disavow:**
- seo-backlink.agency
- grow-your.website
- primeseo.xyz
- fiverr-affordable-seo-services.site
- seodaro.com
- seonexi.com
**Owner:** Claude (automated)
**Status:** READY TO EXECUTE

### 1.2 Bot Traffic Filtering in GA4
**Why:** ~1,600 fake sessions from Singapore/China are polluting analytics, making it impossible to measure real progress.
**Action:**
- Create GA4 data filter excluding Singapore + China traffic
- Or create a "Clean Traffic" exploration that excludes known bot countries
- Set up an internal dashboard that shows only real traffic
**Owner:** Claude (automated)
**Status:** READY TO EXECUTE

### 1.3 Bing Webmaster Tools Optimization
**Why:** Bing is actually sending 1,700 real sessions/mo. We're ignoring our best search channel.
**Action:**
- Verify site in Bing Webmaster Tools (if not already)
- Submit sitemap.xml to Bing
- Submit top 50 priority URLs for indexing
- Check Bing's crawl settings and indexation rate
- Enable Bing URL submission API for automatic submissions
**Owner:** Human (account setup) + Claude (submissions)
**Status:** NEEDS HUMAN FOR INITIAL SETUP

### 1.4 Reduce Crawl Waste
**Why:** 2,513 pages is too many for a DR 0 site. Google's crawl budget is being wasted on low-value pages.
**Action:**
- Noindex the 123 Tier C news articles (already done)
- Noindex the ~500 city pages in /local/ (low value, thin content, cannibalizing)
- Noindex duplicate/near-duplicate learn article variants
- Keep only the strongest 200-300 pages indexed
- Goal: Reduce indexable pages from 2,513 to ~500 high-quality pages
**Owner:** Claude (automated)
**Rationale:** Google is overwhelmed. A DR 0 site with 2,500 pages looks like a content farm. Cutting to 500 quality pages concentrates authority and signals quality.
**Status:** NEEDS ANALYSIS TO IDENTIFY WHICH PAGES TO KEEP

---

## PHASE 2: AUTHORITY BUILDING (Weeks 1-4)

### 2.1 Substack Weekly Posts (AUTOMATED)
**Schedule:** Every Tuesday 9am
**Expected output:** 4 dofollow backlinks/month from DR 93
**30-day target:** 4 links
**Status:** LIVE — scheduled task running

### 2.2 HARO Auto-Responses (AUTOMATED)
**Schedule:** Weekdays 10:22am
**Expected output:** 5-10 responses/week, 1-2 placements/month
**30-day target:** 1-2 high-DR editorial backlinks
**Status:** LIVE — scheduled task running

### 2.3 Broken Link Outreach (AUTOMATED)
**Schedule:** Wednesdays 11:17am
**Expected output:** 2-3 pitches/week
**30-day target:** 1-2 broken link replacements (Forbes, Investopedia, CBS targets)
**Status:** LIVE — scheduled task running

### 2.4 Medium Syndication
**Why:** DR 94, competitors have 5+ links from Medium. Easy content republishing.
**Action:**
- Create Medium profile for Thomas Richardson
- Republish 4 articles/month with canonical tags pointing to richdadretirement.com
- Articles to syndicate: gold-ira-statistics, gold-ira-fees, is-gold-a-good-investment, gold-ira-rollover
**Owner:** Claude (can automate as scheduled task)
**30-day target:** 4 links from DR 94
**Status:** READY TO BUILD

### 2.5 Quora Authority Building
**Why:** DR 93, answer retirement questions → profile links to site → citation links in answers
**Action:**
- Create Quora profile for Thomas Richardson
- Answer 3-5 retirement/gold IRA questions per week
- Cite richdadretirement.com data naturally in answers
**Owner:** Claude (can automate as scheduled task)
**30-day target:** 12-20 answers with site mentions
**Status:** READY TO BUILD

### 2.6 Reddit Engagement
**Why:** DR 97, genuine participation builds karma → then occasional link sharing
**Action:**
- Create u/TheIRAAdvisor Reddit account
- Comment genuinely in r/retirement, r/personalfinance, r/GoldIRA
- NO links for first 2 weeks (build karma)
- After karma is established, occasionally share relevant articles
**Owner:** Human (needs authentic voice)
**30-day target:** 20+ karma, 2-3 helpful link shares
**Status:** NEEDS HUMAN

---

## PHASE 3: GOOGLE RE-EVALUATION (Weeks 2-6)

### 3.1 Strategic Page Indexing Requests
**Why:** GSC allows ~10 URL submissions/day. Use them strategically on our best pages.
**Action:**
- Submit 10 pages/day to GSC, prioritized by:
  1. Pages already ranking on Bing (proven quality)
  2. Pages targeting KD 0-5 keywords
  3. Pages with the most internal links
  4. Pages cited by AI engines
- Track which pages get indexed after submission
**Owner:** Claude (can automate as scheduled task)
**Schedule:** Daily
**Status:** READY TO BUILD

### 3.2 Internal Link Consolidation
**Why:** With 2,500 pages, link equity is diluted to nothing. Consolidating to 500 pages concentrates authority.
**Action:**
- Identify the top 50 "money pages" (highest conversion potential + best keyword targets)
- Ensure every money page has 10+ internal links pointing to it
- Add contextual links from news articles to money pages
- Create a hub-and-spoke structure: each hub page links to 5-10 spoke pages
**Owner:** Claude (automated)
**Status:** NEEDS ANALYSIS

### 3.3 Schema Markup Audit
**Why:** Rich results increase CTR. AI engines prefer structured data.
**Action:**
- Verify all pages have correct schema (Article, FAQ, HowTo, Review, FinancialProduct)
- Add BreadcrumbList schema to all pages
- Add Organization schema with sameAs links to all social profiles
- Test all schema with Google's Rich Results Test
**Owner:** Claude (automated)
**Status:** NEEDS AUDIT

### 3.4 Core Web Vitals Fix
**Why:** CWV is a ranking factor. If performance is poor, it compounds the authority problem.
**Action:**
- Run Lighthouse audit on top 10 pages
- Fix any LCP, FID, CLS issues
- Optimize image loading (already using avif/webp)
- Verify Vercel CDN is properly configured
**Owner:** Claude (automated)
**Status:** NEEDS AUDIT

---

## PHASE 4: CONTENT QUALITY SIGNAL (Weeks 4-8)

### 4.1 Author Entity Building
**Why:** Google E-E-A-T requires demonstrable expertise. "Thomas Richardson" needs to exist beyond the site.
**Action:**
- Substack profile (DONE)
- Medium profile (Phase 2.4)
- Quora profile (Phase 2.5)
- LinkedIn personal profile for Thomas Richardson
- Author page on richdadretirement.com with links to all profiles
- Schema Person markup connecting all profiles
**Owner:** Mixed
**Target:** Thomas Richardson appears on 5+ platforms, all cross-linked

### 4.2 Editorial Policy & Trust Pages
**Why:** Google's Quality Rater Guidelines look for editorial standards, corrections policy, and author transparency.
**Action:**
- Create /editorial-policy page (how we research, fact-check, update)
- Create /about/thomas-richardson author page with credentials
- Add "Last updated" dates to all guide pages
- Add "Reviewed by" attribution
- Add "Sources" section to all data-driven pages
**Owner:** Claude (automated)
**Status:** READY TO BUILD

### 4.3 AI Citation Optimization (GEO)
**Why:** AI engines are already citing us (87 sessions/mo from Copilot, ChatGPT, Claude). This channel has the BEST engagement and will grow.
**Action:**
- Ensure answer-first format on all pages (first 2-3 sentences directly answer the query)
- Add more structured comparison tables (AI models love scannable data)
- Increase statistics density with named sources
- Monitor Brand Radar for AI mentions (Ahrefs tool)
**Owner:** Claude (automated)
**Status:** PARTIALLY DONE — needs expansion

---

## PHASE 5: SCALE (Months 2-3)

### 5.1 Guest Post Campaign
**Action:** Pitch 5 guest posts/week to DR 20-50 finance blogs
**Target:** 4-6 published guest posts with dofollow links
**Owner:** Automated outreach + Human for writing

### 5.2 Podcast Appearances
**Action:** Pitch Thomas Richardson to 10 retirement/finance podcasts
**Target:** 2-3 appearances with show notes linking to site
**Owner:** Human

### 5.3 Digital PR
**Action:** Create data-driven studies from our 1,359 article archive
**Target:** 1 linkable data study per month (e.g., "2026 Gold IRA Industry Report")
**Owner:** Claude (content creation) + Human (promotion)

### 5.4 Competitor Backlink Replication
**Action:** Weekly analysis of new backlinks to Augusta, Goldco, Birch Gold
**Target:** Replicate 5-10 competitor links/month
**Owner:** Automated via weekly-competitor-gap task

---

## MEASUREMENT & MILESTONES

### Weekly KPIs (tracked by automated tasks)
- New referring domains gained
- Domain Rating change
- Pages indexed in GSC
- Organic clicks (Google + Bing)
- AI referral sessions
- HARO responses sent / placements won
- Outreach emails sent / links won

### 30-Day Milestones
| Metric | Current | 30-Day Target |
|--------|---------|---------------|
| Domain Rating | 0 | 5-8 |
| Real Referring Domains | 0 | 10-15 |
| Indexed Pages (Google) | 90 | 150-200 |
| Organic Keywords | 3 | 20-40 |
| Google Clicks/mo | 2 | 30-50 |
| Bing Traffic/mo | 1,700 | 2,000+ |
| AI Referrals/mo | 87 | 120+ |

### 60-Day Milestones
| Metric | 60-Day Target |
|--------|---------------|
| Domain Rating | 10-15 |
| Real Referring Domains | 25-40 |
| Indexed Pages (Google) | 300-400 |
| Organic Keywords | 50-100 |
| Google Clicks/mo | 100-200 |

### 90-Day Milestones
| Metric | 90-Day Target |
|--------|---------------|
| Domain Rating | 15-20 |
| Real Referring Domains | 50-80 |
| Indexed Pages (Google) | 500+ |
| Organic Keywords | 100-200 |
| Google Clicks/mo | 300-500 |

---

## EXECUTION PRIORITY (What to do in what order)

### THIS WEEK (Phase 1)
1. ✅ Substack created + first post published
2. ✅ HARO auto-response bot running
3. ✅ Broken link outreach bot running
4. ⬜ Disavow spam backlinks (Claude — NOW)
5. ⬜ GA4 bot traffic filter (Claude — NOW)
6. ⬜ Bing Webmaster Tools setup (Human)

### NEXT WEEK (Phase 2 start)
7. ⬜ Crawl waste reduction — noindex low-value pages
8. ⬜ Medium syndication task
9. ⬜ Quora answer task
10. ⬜ Daily GSC URL submission task
11. ⬜ Internal link consolidation

### WEEK 3-4 (Phase 3)
12. ⬜ Editorial policy + trust pages
13. ⬜ Author entity cross-linking
14. ⬜ Schema audit
15. ⬜ Core Web Vitals audit

### MONTH 2-3 (Phase 4-5)
16. ⬜ Guest post campaign
17. ⬜ Podcast pitching
18. ⬜ Digital PR data studies
19. ⬜ Competitor backlink replication

---

## THE BOTTOM LINE

The site has a content advantage (2,500+ pages, 43 calculators, daily news) but zero authority. Google treats it like a content farm because it IS a content farm — just one with good content.

The fix is two-fold:
1. **Reduce footprint** — noindex weak pages, concentrate on 500 quality pages
2. **Build authority** — real backlinks from real sites, author entity, trust signals

Bing and AI engines already trust the content. Google will follow once authority metrics improve. Target: DR 15+ unlocks the floodgates.
