/**
 * patch-all.mjs
 * Fixes: spacing/padding reduction · em dash removal · footer white
 * Targets: generate-locations.mjs (then re-runs it) + all existing HTML pages
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { execSync } from 'child_process';

const DEMO = '/Users/yaqeen/Savannah/demo';

// ─── spacing replacements applied to generate-locations.mjs ──────────────────
const generatorReplacements = [

  // ── Em dash → <br> in every h1 string ──────────────────────────────────────
  [/ — /g, '<br>'],

  // Allow <br> through in the H1 template output (don't html-escape it)
  [`\${escapeHtml(city.h1)}`, `\${city.h1}`],

  // ── Hero section ────────────────────────────────────────────────────────────
  [
    `background: var(--sand); min-height: 60vh; display: flex;\n      align-items: center; padding: 80px clamp(20px,4vw,64px) 64px;`,
    `background: var(--sand); min-height: 44vh; display: flex;\n      align-items: center; padding: 52px clamp(16px,3vw,48px) 36px;`
  ],
  // hero inner max-width unchanged — already fine

  // hero-label margin
  [
    `text-transform: uppercase; color: var(--teal);\n      display: flex; align-items: center; gap: 12px; margin-bottom: 24px;`,
    `text-transform: uppercase; color: var(--teal);\n      display: flex; align-items: center; gap: 10px; margin-bottom: 14px;`
  ],

  // hero-h1
  [
    `font-size: clamp(36px, 7vw, 68px); line-height: 1.05;\n      letter-spacing: -0.025em; font-weight: 600; margin-bottom: 24px;`,
    `font-size: clamp(28px, 4.5vw, 54px); line-height: 1.1;\n      letter-spacing: -0.02em; font-weight: 600; margin-bottom: 16px;\n      word-break: break-word; overflow-wrap: break-word;`
  ],

  // hero-sub
  [
    `font-size: clamp(15px, 2vw, 18px); font-weight: 400; color: var(--soft);\n      line-height: 1.65; max-width: 560px; margin-bottom: 36px;`,
    `font-size: clamp(15px, 1.8vw, 17px); font-weight: 400; color: var(--soft);\n      line-height: 1.65; max-width: 520px; margin-bottom: 24px;`
  ],

  // ── Section headings / body ──────────────────────────────────────────────────
  [
    `font-size: clamp(28px, 4vw, 44px); line-height: 1.1;\n      letter-spacing: -0.02em; font-weight: 600; margin-bottom: 16px;`,
    `font-size: clamp(24px, 3.2vw, 38px); line-height: 1.1;\n      letter-spacing: -0.02em; font-weight: 600; margin-bottom: 12px;`
  ],
  [
    `line-height: 1.65; max-width: 640px; margin-bottom: 48px;`,
    `line-height: 1.65; max-width: 600px; margin-bottom: 28px;`
  ],

  // ── Features section ─────────────────────────────────────────────────────────
  [
    `.features { padding: 64px clamp(20px,4vw,64px); background: var(--white); }`,
    `.features { padding: 40px clamp(16px,3vw,48px); background: var(--white); }`
  ],
  [
    `.feature-card { background: var(--white); padding: 36px 28px; }`,
    `.feature-card { background: var(--white); padding: 24px 20px; }`
  ],
  [
    `font-size: 0.75rem; color: var(--teal); margin-bottom: 14px; display: block;`,
    `font-size: 0.75rem; color: var(--teal); margin-bottom: 8px; display: block;`
  ],

  // ── Shannon section ──────────────────────────────────────────────────────────
  [
    `.shannon { background: var(--sand); padding: 64px clamp(20px,4vw,64px); }`,
    `.shannon { background: var(--sand); padding: 40px clamp(16px,3vw,48px); }`
  ],
  [
    `display: grid; grid-template-columns: 1fr; gap: 40px; align-items: center;`,
    `display: grid; grid-template-columns: 1fr; gap: 24px; align-items: center;`
  ],
  [
    `.shannon-badge { background: var(--teal); border-radius: 8px; padding: 36px 28px; }`,
    `.shannon-badge { background: var(--teal); border-radius: 8px; padding: 24px 20px; }`
  ],
  [
    `font-size: clamp(16px, 2vw, 20px); line-height: 1.5;\n      border-left: 2px solid var(--teal); padding-left: 20px; margin-bottom: 16px;`,
    `font-size: clamp(15px, 1.8vw, 18px); line-height: 1.5;\n      border-left: 2px solid var(--teal); padding-left: 16px; margin-bottom: 12px;`
  ],

  // ── Local area section ───────────────────────────────────────────────────────
  [
    `.local-area { padding: 64px clamp(20px,4vw,64px); background: var(--teal-lt); }`,
    `.local-area { padding: 40px clamp(16px,3vw,48px); background: var(--teal-lt); }`
  ],

  // ── FAQ section ──────────────────────────────────────────────────────────────
  [
    `.faq-section { padding: 64px clamp(20px,4vw,64px); background: var(--white); }`,
    `.faq-section { padding: 40px clamp(16px,3vw,48px); background: var(--white); }`
  ],
  [
    `padding: 22px 0; cursor: pointer; display: flex;`,
    `padding: 14px 0; cursor: pointer; display: flex;`
  ],

  // ── CTA section ──────────────────────────────────────────────────────────────
  [
    `.cta { background: var(--teal); padding: 80px clamp(20px,4vw,64px); text-align: center; }`,
    `.cta { background: var(--teal); padding: 52px clamp(16px,3vw,48px); text-align: center; }`
  ],
  [
    `font-size: clamp(28px, 5vw, 48px); color: #fff;`,
    `font-size: clamp(24px, 3.8vw, 40px); color: #fff;`
  ],

  // ── Mobile overrides ─────────────────────────────────────────────────────────
  [
    `.hero { padding: 88px 20px 48px; min-height: auto; align-items: flex-start; }`,
    `.hero { padding: 64px 16px 32px; min-height: auto; align-items: flex-start; }`
  ],
  [
    `.hero-h1 { font-size: clamp(36px, 10vw, 64px); }`,
    `.hero-h1 { font-size: clamp(26px, 8vw, 40px); line-height: 1.15; }`
  ],
  [
    `.section-h2 { font-size: clamp(26px, 8vw, 40px); }`,
    `.section-h2 { font-size: clamp(22px, 7vw, 34px); }`
  ],
  [
    `.cta h2 { font-size: clamp(26px, 8vw, 40px); }`,
    `.cta h2 { font-size: clamp(22px, 7vw, 34px); }`
  ],

  // ── Footer: black → white ────────────────────────────────────────────────────
  [
    `.footer-v2 { background: var(--ink-deep, #0a0a0a); padding: 64px clamp(20px, 4vw, 64px) 0; }`,
    `.footer-v2 { background: #ffffff; border-top: 1px solid rgba(0,0,0,0.08); padding: 40px clamp(16px,3vw,48px) 0; }`
  ],
  [
    `border-bottom: 1px solid rgba(255,255,255,0.07);`,
    `border-bottom: 1px solid rgba(0,0,0,0.08);`
  ],
  // footer-v2-top gap
  [
    `gap: 48px; padding-bottom: 48px;`,
    `gap: 28px; padding-bottom: 28px;`
  ],
  [
    `color: rgba(255,255,255,0.5); line-height: 1; }`,
    `color: rgba(0,0,0,0.45); line-height: 1; }`
  ],
  [
    `.footer-logo-primary { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 22px; color: #fff;`,
    `.footer-logo-primary { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 22px; color: var(--ink);`
  ],
  [
    `color: rgba(255,255,255,0.38); line-height: 1.6; margin-bottom: 20px; }`,
    `color: rgba(0,0,0,0.45); line-height: 1.6; margin-bottom: 20px; }`
  ],
  [
    `background: rgba(255,255,255,0.06); display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.45);`,
    `background: rgba(0,0,0,0.05); display: flex; align-items: center; justify-content: center; color: rgba(0,0,0,0.45);`
  ],
  [
    `.footer-social a:hover { background: rgba(255,255,255,0.08); color: #fff; }`,
    `.footer-social a:hover { background: rgba(0,0,0,0.08); color: var(--ink); }`
  ],
  [
    `color: rgba(255,255,255,0.32); margin-bottom: 16px; }`,
    `color: rgba(0,0,0,0.45); margin-bottom: 16px; }`
  ],
  [
    `.footer-col-links a { font-size: 14px; color: rgba(255,255,255,0.5);`,
    `.footer-col-links a { font-size: 14px; color: var(--soft);`
  ],
  [
    `.footer-col-links a:hover { color: rgba(255,255,255,0.88); }`,
    `.footer-col-links a:hover { color: var(--ink); }`
  ],
  [
    `.footer-col-contact a, .footer-col-contact span { font-size: 14px; color: rgba(255,255,255,0.5);`,
    `.footer-col-contact a, .footer-col-contact span { font-size: 14px; color: var(--soft);`
  ],
  [
    `.footer-col-contact a:hover { color: rgba(255,255,255,0.88); }`,
    `.footer-col-contact a:hover { color: var(--ink); }`
  ],
  [
    `border: 1px solid rgba(255,255,255,0.08); padding: 3px 8px; border-radius: 3px; font-size: 10px; color: rgba(255,255,255,0.28);`,
    `border: 1px solid rgba(0,0,0,0.12); padding: 3px 8px; border-radius: 3px; font-size: 10px; color: rgba(0,0,0,0.45);`
  ],
  [
    `color: rgba(255,255,255,0.5); }
    .footer-guide-headline`,
    `color: var(--soft); }
    .footer-guide-headline`
  ],
  [
    `color: rgba(255,255,255,0.88); line-height: 1.2; }`,
    `color: var(--ink); line-height: 1.2; }`
  ],
  [
    `border: 1px solid rgba(255,255,255,0.3); background: transparent; color: rgba(255,255,255,0.8);`,
    `border: 1px solid rgba(0,0,0,0.2); background: transparent; color: var(--ink);`
  ],
  [
    `.footer-v2-bottom span { font-size: 11px; color: rgba(255,255,255,0.25); }`,
    `.footer-v2-bottom span { font-size: 11px; color: rgba(0,0,0,0.4); }`
  ],
  [
    `.footer-v2-legal a { font-size: 11px; color: rgba(255,255,255,0.25);`,
    `.footer-v2-legal a { font-size: 11px; color: rgba(0,0,0,0.4);`
  ],
  [
    `.footer-v2-legal a:hover { color: rgba(255,255,255,0.5); }`,
    `.footer-v2-legal a:hover { color: rgba(0,0,0,0.65); }`
  ],
];

// ─── apply to generator ───────────────────────────────────────────────────────
let gen = readFileSync(`${DEMO}/generate-locations.mjs`, 'utf8');

for (const [find, replace] of generatorReplacements) {
  if (find instanceof RegExp) {
    gen = gen.replace(find, replace);
  } else {
    // literal — replace all occurrences
    const safe = find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\n/g, '\\n');
    const re = new RegExp(safe.split('\\n').join('[\\s\\S]{0,4}'), 'g');
    const before = gen;
    gen = gen.split(find).join(replace);
    if (gen === before) {
      // fallback: try regex
      gen = gen.replace(re, replace);
      if (gen === before) console.warn(`  ⚠ no match: ${String(find).slice(0,60)}`);
    }
  }
}

writeFileSync(`${DEMO}/generate-locations.mjs`, gen);
console.log('Patched generate-locations.mjs');

// ─── re-run generator ─────────────────────────────────────────────────────────
execSync(`node ${DEMO}/generate-locations.mjs`, { stdio: 'inherit' });
console.log('Re-ran generator — 8 location pages updated');

// ─── patch existing pages (footer + spacing) ──────────────────────────────────
const existingPages = [
  'index.html', 'about.html', 'faq.html', 'careers.html', 'care-options.html'
];

// Spacing tokens for existing pages — same reductions
const htmlReplacements = [
  // footer black → white
  [`background: var(--ink-deep, #0a0a0a); padding: 64px clamp(20px, 4vw, 64px) 0;`,
   `background: #ffffff; border-top: 1px solid rgba(0,0,0,0.08); padding: 40px clamp(16px,3vw,48px) 0;`],
  [`background: var(--ink-deep); padding: 64px clamp(20px, 4vw, 64px) 0;`,
   `background: #ffffff; border-top: 1px solid rgba(0,0,0,0.08); padding: 40px clamp(16px,3vw,48px) 0;`],
  // footer text colors white → dark
  [`color: rgba(255,255,255,0.5); line-height: 1; }`, `color: rgba(0,0,0,0.45); line-height: 1; }`],
  [`color: #fff; line-height: 1.1; letter-spacing: -0.01em; }`, `color: var(--ink, #1d1d1f); line-height: 1.1; letter-spacing: -0.01em; }`],
  [`color: rgba(255,255,255,0.38); line-height: 1.6; margin-bottom: 20px; }`, `color: rgba(0,0,0,0.45); line-height: 1.6; margin-bottom: 20px; }`],
  [`background: rgba(255,255,255,0.06); display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.45);`,
   `background: rgba(0,0,0,0.05); display: flex; align-items: center; justify-content: center; color: rgba(0,0,0,0.45);`],
  [`.footer-social a:hover { background: rgba(255,255,255,0.08); color: #fff; }`,
   `.footer-social a:hover { background: rgba(0,0,0,0.08); color: var(--ink); }`],
  [`color: rgba(255,255,255,0.32); margin-bottom: 16px; }`, `color: rgba(0,0,0,0.45); margin-bottom: 16px; }`],
  [`.footer-col-links a { font-size: 14px; color: rgba(255,255,255,0.5);`, `.footer-col-links a { font-size: 14px; color: var(--soft, #6e6e73);`],
  [`.footer-col-links a:hover { color: rgba(255,255,255,0.88); }`, `.footer-col-links a:hover { color: var(--ink); }`],
  [`.footer-col-contact a, .footer-col-contact span { font-size: 14px; color: rgba(255,255,255,0.5);`,
   `.footer-col-contact a, .footer-col-contact span { font-size: 14px; color: var(--soft, #6e6e73);`],
  [`.footer-col-contact a:hover { color: rgba(255,255,255,0.88); }`, `.footer-col-contact a:hover { color: var(--ink); }`],
  [`border: 1px solid rgba(255,255,255,0.08); padding: 3px 8px; border-radius: 3px; font-size: 10px; color: rgba(255,255,255,0.28);`,
   `border: 1px solid rgba(0,0,0,0.12); padding: 3px 8px; border-radius: 3px; font-size: 10px; color: rgba(0,0,0,0.45);`],
  [`border-bottom: 1px solid rgba(255,255,255,0.07);`, `border-bottom: 1px solid rgba(0,0,0,0.08);`],
  [`.footer-guide-headline { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 17px; color: rgba(255,255,255,0.88);`,
   `.footer-guide-headline { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 17px; color: var(--ink, #1d1d1f);`],
  [`border: 1px solid rgba(255,255,255,0.3); background: transparent; color: rgba(255,255,255,0.8);`,
   `border: 1px solid rgba(0,0,0,0.2); background: transparent; color: var(--ink, #1d1d1f);`],
  [`.footer-v2-bottom span { font-size: 11px; color: rgba(255,255,255,0.25); }`,
   `.footer-v2-bottom span { font-size: 11px; color: rgba(0,0,0,0.4); }`],
  [`.footer-v2-legal a { font-size: 11px; color: rgba(255,255,255,0.25);`,
   `.footer-v2-legal a { font-size: 11px; color: rgba(0,0,0,0.4);`],
  [`.footer-v2-legal a:hover { color: rgba(255,255,255,0.5); }`, `.footer-v2-legal a:hover { color: rgba(0,0,0,0.65); }`],
  // guide eyebrow color
  [`letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,0.5); }`,
   `letter-spacing: 0.14em; text-transform: uppercase; color: var(--soft, #6e6e73); }`],

  // section padding reductions (common patterns in existing pages)
  [`padding: 80px clamp(20px, 4vw, 64px);`, `padding: 52px clamp(16px,3vw,48px);`],
  [`padding: 64px clamp(20px, 4vw, 64px);`, `padding: 40px clamp(16px,3vw,48px);`],
  [`padding: 80px clamp(20px,4vw,64px);`, `padding: 52px clamp(16px,3vw,48px);`],
  [`padding: 64px clamp(20px,4vw,64px);`, `padding: 40px clamp(16px,3vw,48px);`],
  // footer padding
  [`padding: 64px clamp(20px, 4vw, 64px) 0;`, `padding: 40px clamp(16px,3vw,48px) 0;`],
];

for (const file of existingPages) {
  const fp = `${DEMO}/${file}`;
  let html = readFileSync(fp, 'utf8');
  let changed = 0;
  for (const [find, replace] of htmlReplacements) {
    const before = html;
    html = html.split(find).join(replace);
    if (html !== before) changed++;
  }
  writeFileSync(fp, html);
  console.log(`  ${file}: ${changed} replacements`);
}

// ─── care-options: remove black/dark sections ─────────────────────────────────
let co = readFileSync(`${DEMO}/care-options.html`, 'utf8');

// Replace any dark-background non-footer sections
const darkSectionPatterns = [
  // common dark hero/compare variants
  [`background: var(--ink-deep);`, `background: var(--sand, #F0FAFA);`],
  [`background: var(--ink, #1d1d1f);`, `background: var(--sand, #F0FAFA);`],
  [`background: #0a0a0a;`, `background: var(--sand, #F0FAFA);`],
  [`background: #111;`, `background: var(--sand, #F0FAFA);`],
  [`background: #111111;`, `background: var(--sand, #F0FAFA);`],
  [`background: #1d1d1f;`, `background: var(--sand, #F0FAFA);`],
];

let coDark = 0;
for (const [find, replace] of darkSectionPatterns) {
  const before = co;
  // Only apply to non-footer CSS blocks
  co = co.split(find).join(replace);
  if (co !== before) coDark++;
}
writeFileSync(`${DEMO}/care-options.html`, co);
console.log(`  care-options.html: ${coDark} dark-section removals`);

console.log('\nAll done. Restart the dev server to see changes.');
