# PRD — Savannah Personal Care Services
**Version:** 3.0 — Demo built and deployed. Awaiting Shannon's response.
**Status:** Phase 1 COMPLETE. Phase 2 pending Shannon's reply.
**Live URL:** https://elliyeen.github.io/savannah-pcs/demo/
**GitHub:** https://github.com/elliyeen/savannah-pcs
**Stack:** Multi-page static HTML (no build step). All CSS inline per page. Phase 2 extracts shared CSS.
**Audience:** Claude Code

---

## Critical Context — Read Before Building Anything

This project starts with a demo, not a full site.

The demo is a single deployable HTML file sent to Shannon as a cold outreach link. It demonstrates what her business could feel like to a family who needs her. It does not mention fees, phases, or proposals. It is a gift. The sale comes from her asking what it costs to continue.

**Hopkins' sampling principle applied:** Give real value before asking for anything. The demo is the sample. The three questions in the outreach message are the discovery. The proposal comes only after she responds.

**Schwartz's desired state applied:** The demo must sell Shannon a vision of herself — the most trusted home care provider in Savannah, with a phone that rings because families already trust her before they call. Paint that future. Not with hype. With possibility.

---

## Phase 1 — Demo (COMPLETE)

### What Was Built

Multi-page static HTML site. No build step. No dependencies except Google Fonts. All CSS inline per page.

**Deployed:** https://elliyeen.github.io/savannah-pcs/demo/

**Pages built:**
- `demo/index.html` — Homepage (hero, credential strip, pain section, Meet Shannon, process, services, testimonials, CTA, guide teaser, footer)
- `demo/about.html` — Shannon's full story + franchise comparison table
- `demo/care-options.html` — Four care types with reason-why copy
- `demo/faq.html` — 16 real FAQ questions, accordion behavior, FAQ schema markup
- `demo/careers.html` — Join the Care Team
- `demo/pooler.html`, `demo/tybee-island.html`, `demo/wilmington-island.html`, `demo/brunswick.html`, `demo/hinesville.html`, `demo/bloomingdale.html`, `demo/port-wentworth.html` — Location pages

**Typography (as implemented):**
- Display: `Cormorant Garamond` (weights 400, 500, 600 — regular + italic)
- Body: `Inter` (weights 400, 500, 600)
- Google Fonts: `family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600`

**CTA button copy (as implemented):**
- Primary: "Talk With Someone Who Understands" → opens intake modal
- Secondary (hero): "See What Happens After You Call" → anchors to #process
- Phone: "Call (912) 856-1885"

Note: The original PRD spec said "Find the right care — 60 seconds" — this was updated during build.

---

### Demo — Section by Section

#### NAV
```
[Savannah Personal Care]              [(912) 856-1885]
```
- Fixed, 52px, frosted glass
- Logo left — DM Serif Display, 0.95rem
- Phone right — always visible, `color: #0a5c52`, `font-weight: 500`
- No other links — demo is single page, nothing to link to yet
- Mobile: both elements visible

---

#### HERO

**Emotional job:** Make the adult daughter feel understood before she reads a single claim.

```
Background: #f5f0e8 (sand)
Min-height: 100svh
Align content: flex-end, padding-bottom: 80px
```

Typographic watermark (decorative, aria-hidden):
```
Text: "You."
Font: DM Serif Display
Size: clamp(120px, 22vw, 240px)
Color: transparent
-webkit-text-stroke: 1px rgba(11,94,84,0.09)
Position: absolute, top: 52px, right: -1vw
Pointer-events: none
```

Content (max-width: 660px, position: relative, z-index: 1):

Overline:
```
Text: "For the family that has been carrying this alone"
Style: 0.68rem, 500 weight, 0.16em letter-spacing, uppercase, color #0a5c52
Before: 20px horizontal rule, same color
```

Headline (DM Serif Display):
```
You've been
managing this
long enough.
```
Size: clamp(44px, 9vw, 88px), line-height: 1.01, letter-spacing: -0.025em, color: #1d1d1f

Subhead (DM Sans 300):
```
The medications. The appointments. The 2am worry.
You didn't fail your mother — you did everything 
one person could do. The question now is whether 
the caregiver who walks through that door was built 
for this work, or just hired for it.
```
Size: clamp(15px, 2vw, 19px), line-height: 1.65, color: #6e6e73, max-width: 500px

CTAs:
```
Primary:   "Find the right care — 60 seconds"  → opens intake modal
           Style: pill button, background #1d1d1f, color white
           Hover: background #0a5c52

Secondary: "Download the Free Family Guide"  → #guide-section (anchor on demo)
           Style: pill button, transparent, border rgba(0,0,0,0.2), color #1d1d1f

Tertiary:  "Or call now: (912) 856-1885"
           Style: plain text, font-size 0.84rem, color #6e6e73
           No button treatment
```

---

#### CREDENTIAL STRIP

```
Background: #0a5c52
Padding: 18px 28px
Display: flex, wrap, center, gap: 32px
```

Items (font-size: 0.75rem, color: rgba(255,255,255,0.82)):
```
Shannon Stafford Simpson · Founder & CNA
Certified CNA · CPR · Med Tech
Georgia PHCP Licensed
Available within 48 hrs  [VERIFY]
24/7 Care Available
```
Separator: 3px dot, rgba(255,255,255,0.28)

---

#### PAIN SECTION

**Emotional job:** Name the exact thoughts she arrived with. Make her feel seen.

```
Background: #ffffff
Padding: clamp(72px, 9vw, 130px) 28px
```

Label: "What brought you here tonight"
Title (DM Serif Display): "The thoughts you haven't said out loud."
Body: "Most families wait too long. Not because they don't care — because asking for help feels like admitting something. It isn't. It's the most protective thing you can do."

2×2 card grid (gap: 1px, background rule color, border-radius: 10px, overflow hidden):

Each card:
```
Background: #ffffff → hover: #f9f7f3
Padding: 44px 36px
```

Card 1:
```
Number: 01
Question (DM Serif italic): "What if I send a stranger into my mother's home and something goes wrong?"
Answer: Every member of our Care Team has been personally vetted, 
background-checked, and matched to your loved one's specific 
personality — not just their care needs. And Shannon is present 
on the first visit. You are not handing your mother to a stranger.
```

Card 2:
```
Number: 02
Question: "I don't know how much this costs or whether we can afford it."
Answer: The free 20-minute assessment exists precisely for this. 
We tell you exactly what care would cost before you make any 
decision. There are no surprises. Private home care in Savannah 
runs $29–$30 per hour for most families. [VERIFY]
```

Card 3:
```
Number: 03
Question: "My mother will never agree to having someone come in."
Answer: She doesn't have to agree the first time. Most families 
start with one afternoon a week. We match caregivers to personality 
first — because the relationship is the foundation of everything 
that makes this work. Shannon has navigated this conversation 
hundreds of times.
```

Card 4:
```
Number: 04
Question: "How is this different from the other agencies in Savannah?"
Answer: Shannon Stafford Simpson is a Certified Nursing Assistant 
who built this agency. Not a business operator who hired caregivers 
— a caregiver who decided the standard wasn't good enough and built 
something better. No franchise in this market can say that.
```

---

#### FOUNDER SECTION

**Emotional job:** Make Shannon human. Her credential is the differentiator. Her voice is the trust.

```
Background: #f5f0e8
Padding: clamp(72px, 9vw, 130px) 28px
```

2-column grid, 72px gap, align: center. Stacks on mobile (< 680px).

**Left column — credential block:**
```
Background: #0a5c52
Border-radius: 6px
Padding: 48px 40px

Name (DM Serif Display): 
"Shannon
 Stafford
 Simpson"
Size: clamp(28px, 5vw, 44px), color: white, line-height: 1.08

Role: "Founder & Care Coordinator"
Style: 0.7rem, uppercase, letter-spacing 0.1em, color rgba(255,255,255,0.5)
Margin-bottom: 28px

Credential pills (flex, wrap, gap: 8px):
[Certified CNA]  [CPR Certified]  [Med Tech]
Style: border 1px rgba(255,255,255,0.22), color rgba(255,255,255,0.8)
       font-size 0.68rem, uppercase, letter-spacing 0.06em, padding 5px 10px
```

**Right column — text:**
```
Label: "Why this agency exists"
Title: "Every other agency hired caregivers. Shannon was one."
Size: clamp(30px, 5vw, 48px)

Body: "Most home care businesses are built by operators who understand 
business but have never provided care. Shannon built this agency from 
the inside out — as a Certified Nursing Assistant who decided the 
standard she experienced wasn't good enough for her own family, 
let alone yours."

Pull quote (DM Serif italic, border-left 2px #0a5c52, padding-left 22px):
"I didn't buy a franchise. I earned a credential — then built a team 
I'd trust with my own mother."

Body 2: "That difference shows up in how every member of our Care Team 
is selected, how families are communicated with, and why Shannon is 
personally present on the first visit with every new client."
```

---

#### PROCESS SECTION — THE SHANNON STANDARD

**Emotional job:** Clarity is a form of care. Show exactly what happens so the unknown becomes manageable.

```
Background: #ffffff
Padding: clamp(72px, 9vw, 130px) 28px
```

Label: "The Shannon Standard"
Title: "What happens between your call and day one."
Body: "Most agencies make the process vague by design. We believe clarity is a form of care. Here is exactly what to expect."

5-row list (margin-top: 56px):

Each row: `grid-template-columns: 64px 1fr`, `padding: 36px 0`, `border-top: 1px solid rgba(0,0,0,0.1)`

Row structure:
```
Left:  Step number (DM Serif Display, 1rem, color #0a5c52)
Right: 2-column grid (title+time left, body right)
       Title: DM Serif Display, clamp(18px, 2.5vw, 24px), color #1d1d1f
       Time:  0.65rem, uppercase, letter-spacing 0.1em, color #0a5c52, margin-top 6px
       Body:  0.86rem, DM Sans 300, line-height 1.65, color #6e6e73
```

Steps:
```
01 | Free Care Assessment     | Same day · 20 min
   A single conversation about your loved one's needs, schedule, personality, 
   and your family's situation. No obligation. No sales script. 
   This drives every decision that follows.

02 | In-Home Evaluation       | Within 24 hours
   A member of our Care Team visits your loved one's home. Needs and safety 
   considerations documented. You receive a written care summary before 
   any caregiver is selected.

03 | Caregiver Match          | Within 48 hours  [VERIFY]
   One specific person selected based on personality and needs — not 
   availability. You receive their profile and credentials before anyone 
   enters your home.

04 | Supervised First Visit   | Day one
   Shannon or a senior coordinator is present. You are not handed to a 
   stranger. The founder is in the room when it matters most. This is 
   not standard in home care. It is our standard.

05 | 72-Hour Follow-Up        | Day three
   A written update and a check-in call — every time, for every family. 
   Ongoing communication is scheduled here, not promised and forgotten.
```

---

#### SERVICES SECTION

**Emotional job:** Reason-why copy only. Not descriptions. Not features. Why each one exists for the family reading this page.

```
Background: #f5f0e8
Padding: clamp(72px, 9vw, 130px) 28px
```

Label: "Care Options"
Title: "Not a menu. A plan built around one person."
Body: "We don't assign services from a list. We build a care plan around your loved one's specific life, schedule, and what matters most to them."

2×2 card grid (same structure as pain section):

```
01 | Transitional Care
   Why it matters: Most hospital readmissions happen within 30 days 
   of discharge — not because patients got worse, but because home 
   care coordination failed. We coordinate with your discharge team 
   before your loved one leaves the building.

02 | Daily Living Assistance
   Why it matters: Independence isn't the absence of help. It's the 
   right help at the right time. Dressing, meals, medication reminders, 
   housekeeping, and transportation — built around their routine, not ours.

03 | Dementia Care Support
   Why it matters: Cognitive decline accelerates when familiar 
   environments are disrupted. Every strategy we use — consistent 
   scheduling, familiar faces, preserved routines — is designed to 
   protect what is familiar for as long as possible.

04 | Respite Care
   Why it matters: Family caregivers have a 63% higher mortality rate 
   than non-caregivers their age. Respite care is not a luxury. It is 
   a survival strategy. We exist so you can exist — without guilt.
```

---

#### TESTIMONIALS SECTION

**Emotional job:** Proof through outcomes, not features. The line "We finally slept through the night" does more than "excellent care."

```
Background: #1d1d1f
Padding: clamp(72px, 9vw, 130px) 28px
```

Label (color rgba(255,255,255,0.4)): "What families say"
Title (color white): "The measure of care is what happens after we leave."

3-column grid (gap: 1px, background rgba(255,255,255,0.08), border same, border-radius 10px, overflow hidden):

Each card:
```
Background: #1d1d1f
Padding: 44px 32px

Stars: ★★★★★  color #c09040
Quote (DM Serif italic, color rgba(255,255,255,0.85)):
Name (uppercase, 0.72rem, color rgba(255,255,255,0.32)):
  Name in strong (color rgba(255,255,255,0.75), normal case)
  Location below
```

Reviews:
```
"The care has truly made a positive impact on my life. I finally 
feel like my mother is safe — and I finally feel like a daughter again."
— Linda J. · Savannah, GA

"They treated my mother like family. We slept through the night 
for the first time in months after the very first week."
— Robert S. · Pooler, GA

"Shannon was present on the first day. That one thing told us 
everything we needed to know about how this agency operates."
— Emily D. · Wilmington Island, GA
```

**[VERIFY: Replace with real testimonials before Phase 2 launch.]**

---

#### GUIDE TEASER SECTION

**Note:** Full guide page is Phase 2. Demo includes a single teaser section to show Shannon the concept.

```
Background: #ffffff
Padding: clamp(56px, 7vw, 100px) 28px
Max-width: 600px, centered
Text-align: center
```

Label: "Free Resource"
Title: "What most home care agencies in Savannah won't tell you."
Body: "A free guide for families navigating the home care decision — written by a Certified Nursing Assistant who built her own agency. What to ask, what to expect, and what to watch out for."

CTA: "Download the Free Family Guide →"
Style: pill button, background #0a5c52, color white
Note below (0.75rem, color #aaa): "No spam. First name and email only."

**Implementation note:** In the demo, clicking this button scrolls to the CTA section. The actual guide delivery system is Phase 2.

---

#### MAIN CTA SECTION

```
Background: #0a5c52
Padding: clamp(80px, 10vw, 140px) 28px
Text-align: center
Max-width: 600px, centered
```

Label (color rgba(255,255,255,0.45)): "Get Started"
Title (DM Serif Display, color white): "The first conversation costs nothing."
Body (color rgba(255,255,255,0.68)): "A free 20-minute care assessment tells you exactly what care would look like, what it costs, and whether we are the right fit for your family."

Buttons:
```
Primary: "Call (912) 856-1885"  → tel: link
         Style: pill, white background, color #0a5c52

Secondary: "Find the right care — 60 seconds"  → opens intake modal
           Style: pill, transparent, border rgba(255,255,255,0.3), color rgba(255,255,255,0.85)
```

Reassurance (0.75rem, color rgba(255,255,255,0.35)):
"No pressure · We respond within 2 hours · Free, no obligation"

---

#### AREAS STRIP

```
Padding: 24px 28px
Border-top: 1px solid rgba(0,0,0,0.08)
Max-width: 980px, centered
Display: flex, wrap, align center, gap: 10px 18px
```

```
[We serve]  Savannah · Pooler · Tybee Island · Wilmington Island · 
            Brunswick · Hinesville · Bloomingdale · Port Wentworth · 
            and surrounding areas
```

Label style: 0.65rem, uppercase, letter-spacing 0.12em, color #0a5c52
Area style: 0.8rem, color #6e6e73
Separator: · in rgba(0,0,0,0.15)

---

#### FOOTER

```
Background: #1d1d1f
Padding: 56px 28px 36px
```

2-column grid (1.6fr 1fr, gap 40px, padding-bottom 36px, border-bottom rgba(255,255,255,0.08)):

Left column:
```
Brand: "Savannah Personal Care Services"  — DM Serif Display, 1.1rem, white
Tagline: "Founded by a Certified Nursing Assistant. Serving Coastal Georgia."
         0.78rem, 300 weight, rgba(255,255,255,0.35), line-height 1.6

Contact:
(912) 856-1885  →  tel: link
[VERIFY: branded email]  →  mailto: link
Savannah, Georgia

License tag (inline-flex, border rgba(255,255,255,0.1), padding 3px 9px, border-radius 3px):
"Georgia PHCP Licensed · [VERIFY: license #]"
```

Right column (label + links):
```
Label: "Legal" — 0.65rem, uppercase, rgba(255,255,255,0.25)
Links: Privacy Policy · Terms & Conditions · Accessibility
```

Footer bottom (max-width 980px, flex, space-between):
```
"© 2026 Savannah Personal Care Services. All rights reserved."
"Savannah, Georgia"
Both: 0.68rem, rgba(255,255,255,0.22)
```

---

### Guided Intake Flow — Modal (Demo)

Triggered by primary CTAs throughout the page. CSS transition only — no JS library.

**Modal overlay:**
```
Position: fixed, inset: 0, z-index: 1000
Background: rgba(0,0,0,0.6)
Display: flex, align center, justify center
Padding: 20px (so modal doesn't touch edges on mobile)
```

**Modal card:**
```
Background: white
Border-radius: 16px
Width: 100%, max-width: 520px
Padding: 48px 40px (28px on mobile)
Position: relative
```

**Progress dots (top of card):**
```
3 dots, 6px diameter, border-radius 50%
Active: #0a5c52
Completed: #0a5c52 at 40% opacity
Upcoming: rgba(0,0,0,0.15)
Transition: background 0.2s
```

**Close button:**
```
Position: absolute, top: 20px, right: 20px
Font-size: 1.1rem, color: #6e6e73
Background: none, border: none, cursor: pointer
```

**Step 1 — Who needs care:**
```
Heading (DM Serif Display, 1.5rem): "Let's find the right care."
Subhead (DM Sans 300, 0.88rem, color #6e6e73): "Three quick questions."

Options (full width, min-height 64px, border 1px rgba(0,0,0,0.1), 
         border-radius 8px, cursor pointer, padding 0 20px,
         font-size 0.9rem, color #1d1d1f, text-align left,
         hover: border-color #0a5c52, background #f5f0e8,
         transition: all 0.15s):

  My parent
  My spouse or partner
  Myself
  Someone else

[No Next button — selecting auto-advances to Step 2]
[JS: store selection, fade out Step 1, fade in Step 2]
```

**Step 2 — What's most needed:**
```
[Small pill showing Step 1 answer at top — background #e4f0ee, color #0a5c52, 
 font-size 0.72rem, padding 4px 10px, border-radius 20px]

Heading: "What's most important right now?"

Options:
  Help coming home from hospital
  Support with daily tasks at home
  Memory care or dementia support
  A break for our family (respite)
  I'm not sure yet

Back button (bottom-left): plain text, 0.8rem, color #6e6e73

[Selecting auto-advances to Step 3]
```

**Step 3 — Contact:**
```
[Pills showing Step 1 + Step 2 answers]

Heading: "Almost done."
Subhead: "Shannon or her team will call you within 2 hours — not a call center, not a form response."

Fields (full width, border 1px rgba(0,0,0,0.15), border-radius 8px, 
        padding 14px 16px, font-size 0.9rem, font-family DM Sans):
  Your first name     [text, required]
  Best phone number   [tel, required]
  Email (optional)    [email]

Submit button (full width, border-radius 8px, background #0a5c52, color white,
               font-size 0.9rem, font-weight 500, padding 16px,
               hover: background #073d36):
  "Connect me with Shannon →"

Below button (0.75rem, color #aaa, text-align center):
"No pressure. No commitment. We'll answer your questions and let 
 you decide what's next."

Back button (bottom-left)
```

**Confirmation state (replaces form on submit):**
```
Check icon (40px, color #0a5c52)
Heading: "You're all set."
Body: "Shannon or her team will reach you within 2 hours at the 
       number you provided."
Secondary: "In the meantime, the free Savannah Family Guide is worth a read."

[Download the Guide →]  — teal button
[Close]  — ghost button
```

**Demo note:** In the demo, form submission does not actually send data — it shows the confirmation state after a 400ms fake loading state. Real Formspree integration is Phase 2.

---

## Phase 2 — Full Site (After Shannon Responds)

Many Phase 2 pages exist in the demo already. Phase 2 means:
1. Moving to the real domain (savannahpersonalcare.com)
2. Substituting all [VERIFY] placeholders with real data from Shannon
3. Connecting real infrastructure (Formspree, Mailchimp, booking calendar)
4. QA on all pages at production domain

### Already built (in demo, need production QA):
- [x] About page — Shannon's story + franchise comparison
- [x] Care options page — 4 services with reason-why copy
- [x] FAQ page — 16 questions, schema markup, accordion
- [x] Location pages — 7 service area pages

### Still needs building for Phase 2:
- [ ] Guide landing page + thank-you page
- [ ] Contact page with booking calendar embed
- [ ] Privacy Policy, Terms & Conditions, Accessibility pages
- [ ] Senior journey (Buyer 2) — separate copy track
- [ ] Discharge coordinator / referral page (Buyer 3) — clinical copy track
- [ ] Buyer switcher tabs on homepage (for all 3 journeys)

### Infrastructure Phase 2:
- [ ] Formspree form submission on intake modal (real data delivery)
- [ ] Mailchimp (or equivalent) for Family Guide email delivery
- [ ] 3-email follow-up sequence for guide downloads
- [ ] Shared CSS file extracted from per-page inline styles
- [ ] Booking calendar integration (Calendly or equivalent)
- [ ] Real Savannah Family Guide PDF (pending Shannon approval)

### All [VERIFY] items must resolve before Phase 2 launch:
See CLAUDE.md Known Data Gaps. Every placeholder needs Shannon's real answer.

---

## Build Priority — Phase 1 (COMPLETE)

1. [x] Demo HTML file — all sections, in order
2. [x] Guided intake flow modal — 3 steps + confirmation (fake submission in demo)
3. [x] Responsive mobile behavior — breakpoints at 360/480/560/640/680/760/768/860px
4. [x] Performance — Google Fonts loaded with display=block, no JS libraries, vanilla JS only
5. [x] Multi-page navigation — frosted glass nav with dropdown, mobile drawer, phone always visible
6. [x] Shannon founder section with high-res photo (shannon-founder.jpg, 2264×3344px)
7. [x] About page — founder story + franchise comparison (light sand theme, no black sections)
8. [x] FAQ page — 16 real questions with accordion + FAQ schema markup
9. [x] Care options page, careers page, 7 location pages

## Build Priority — Phase 2 (Pending Shannon's Reply)

1. Send outreach message to Shannon (exact text in CLAUDE.md — do not modify)
2. Resolve all [VERIFY] placeholders from Shannon discovery call
3. Move to production domain with real Formspree + email delivery
4. Build guide landing page, contact page, legal pages
5. QA all pages end-to-end at production domain

---

## Technical Requirements — Demo (As Implemented)

### Implemented
- Multi-page HTML, all CSS in per-page `<style>` block (no external stylesheet yet)
- Google Fonts loaded with `display=block`: `Cormorant Garamond` + `Inter`
- No JS libraries — vanilla JS only for nav drawer, intake modal, FAQ accordion
- Mobile-first — breakpoints: 360 / 480 / 560 / 640 / 680 / 760 / 768 / 860px
- All tap targets minimum 44×44px
- No horizontal scroll at any viewport width
- Frosted glass nav: `backdrop-filter: saturate(180%) blur(20px)`
- Intake modal: 3-step flow with fake submission (400ms loading → confirmation state)

### Accessibility
- One `<h1>` on the page
- Proper heading hierarchy (h1 → h2 → h3)
- All interactive elements keyboard-navigable
- Focus states visible
- Modal: focus trap when open, restore focus on close
- `aria-label` on modal close button
- `aria-live` region announces step changes in intake flow
- Color contrast minimum 4.5:1 for body text

### Copy Rules — Non-Negotiable
1. Never use: compassionate (without evidence), tailored, solutions, dedicated, seamless, holistic, passionate, journey
2. Every CTA specific: "Find the right care — 60 seconds" not "Get Started"
3. Name the fear before dissolving it — especially in pain section cards
4. Reason-why copy on all services — not descriptions
5. Specificity over vagueness — every claim either real or marked [VERIFY]
6. The preemptive claim above the fold: "Built for this work, not just hired for it"

---

## Discovery Questions — For Shannon Call After Demo

These become the data that replaces every [VERIFY] placeholder.

| # | Question | Unlocks |
|---|---|---|
| 1 | What is your PHCP license number? | Footer, referral table, trust signal |
| 2 | What is your actual typical placement timeline? | Core claim |
| 3 | Walk me through caregiver screening — every step | The Schlitz claim |
| 4 | What percentage of clients stay 90+ days? | Retention proof |
| 5 | Do you have testimonials from seniors directly? | Journey 2 |
| 6 | What is your new branded email? | Everything breaks without this |
| 7 | Are all 8 service areas actively served? | Territory accuracy |
| 8 | What do you call your team internally? | Care Team branding |
| 9 | Will you approve the Savannah Family Guide before launch? | Guide publication |
| 10 | Where do most of your clients come from today? | Channel strategy |

