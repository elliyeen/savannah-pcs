import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = __dirname;

// ─────────────────────────────────────────────
// CITIES DATA
// ─────────────────────────────────────────────
const cities = [
  {
    slug: 'savannah',
    name: 'Savannah',
    county: 'Chatham County',
    zip: '31401',
    lat: 32.0835, lng: -81.0998,
    metaDescription: 'Home care in Savannah, GA founded by a Certified Nursing Assistant. Free same-day assessment. Caregiver matched in 48 hours. Shannon present on the first visit. Call (912) 856-1885.',
    h1: 'Home Care in Savannah, GA<br>Founded Here. Built for Here.',
    heroPara: 'Savannah is where Shannon started. Every process, every standard, every expectation was built for the families in this city first. Not a franchise. Not a call center. A CNA who decided her hometown deserved better.',
    featuresLabel: 'Why Savannah families choose us',
    featuresH2: 'This is where the standard was built.',
    featuresPara: 'Shannon did not move to Savannah to open a business. She built this agency for the families she already knew, because she had been in their homes as a caregiver and knew what was missing.',
    card1Title: 'Free Same-Day Assessment',
    card1Body: 'A 20-minute call that tells you exactly what care would look like and what it costs. No obligation, no sales pitch. Just clarity.',
    card2Title: 'One Caregiver. Matched in 48 Hours.',
    card2Body: "We select one specific person based on your loved one's personality and routine, not whoever is free. You receive their profile before the first visit.",
    card3Title: 'Shannon on Day One',
    card3Body: 'Shannon or a senior coordinator is present for every first visit. That is how trust gets built in the room, not in a brochure.',
    shannonPara: 'Savannah families who call Shannon are not talking to a dispatch queue. They are talking to the person who built this from the inside, as a Certified Nursing Assistant who held every caregiver on her team to the same standard she held herself.',
    localAngle: 'Serving all Savannah neighborhoods: Historic District, Ardsley Park, Midtown, Southside, Georgetown, Windsor Forest, and beyond.',
    faq: [
      { q: 'Do you serve all Savannah neighborhoods?', a: 'Yes. We serve the entire Savannah metro area including the Historic District, Ardsley Park, Southside, Georgetown, Midtown, Windsor Forest, and surrounding communities.' },
      { q: 'How quickly can care start in Savannah?', a: 'Same-day assessment. Caregiver match within 48 hours. Most Savannah families have care in place within 2-3 days of the first call.' },
      { q: 'Is Shannon personally involved with Savannah clients?', a: 'Yes. Shannon is present on every first visit and personally reviews all care plans for Savannah families.' },
      { q: 'What makes SPCS different from other Savannah home care agencies?', a: 'Shannon is a Certified Nursing Assistant who built this agency — not a business operator who hired caregivers. Every process was designed from clinical experience, not a franchise manual.' }
    ]
  },
  {
    slug: 'pooler',
    name: 'Pooler',
    county: 'Chatham County',
    zip: '31322',
    lat: 32.1149, lng: -81.2498,
    metaDescription: 'Home care in Pooler, GA by a CNA-founded agency. Free same-day assessment, caregiver matched in 48 hours, founder present on day one. Call (912) 856-1885.',
    h1: 'Home Care in Pooler, GA<br>The Same Standard, Closer to Home.',
    heroPara: "Pooler is growing. The families moving here deserve care that does not feel distant or corporate. Shannon's team brings the same five-step process to Pooler that Savannah families have trusted — same response time, same caregiver vetting, same supervised first visit.",
    featuresLabel: 'Why Pooler families choose us',
    featuresH2: 'Distance does not change the standard.',
    featuresPara: 'Pooler families receive the same caregiver matching, the same supervised first visit, and the same 72-hour written follow-up as every family we serve. Geography changes. The standard does not.',
    card1Title: 'Free Same-Day Assessment',
    card1Body: 'One call tells you exactly what care would cost and who would provide it. No obligation, no surprises.',
    card2Title: 'Caregiver Matched in 48 Hours',
    card2Body: "One specific person, selected for your loved one's personality and routine — not just whoever is available this week.",
    card3Title: 'Supervised First Visit',
    card3Body: "Shannon or a senior coordinator is in the room on day one. A stranger does not walk into your parent's home alone.",
    shannonPara: 'Pooler families who call Shannon get the same attention as Savannah families who have known her for years. The drive is different. The standard is not.',
    localAngle: 'Serving Pooler, Godley Station, Pooler Parkway corridor, and surrounding Chatham County communities.',
    faq: [
      { q: 'Do you serve all of Pooler, GA?', a: 'Yes. We serve all Pooler neighborhoods including Godley Station and the Pooler Parkway area, as well as surrounding communities in western Chatham County.' },
      { q: 'Is the response time the same in Pooler as in Savannah?', a: 'Yes. Same-day assessment, caregiver match within 48 hours, and care in place within 2-3 days, regardless of whether you are in Pooler or Savannah.' },
      { q: "Will Shannon personally be involved with my family's care in Pooler?", a: 'Yes. Shannon or a senior coordinator is present on the first visit for every Pooler family, and Shannon reviews all care plans personally.' }
    ]
  },
  {
    slug: 'tybee-island',
    name: 'Tybee Island',
    county: 'Chatham County',
    zip: '31328',
    lat: 31.9982, lng: -80.8437,
    metaDescription: 'Home care on Tybee Island, GA. CNA-founded. Shannon present on day one. Free same-day assessment. The island is home — we come to you. Call (912) 856-1885.',
    h1: 'Home Care on Tybee Island<br>The Island Is Home. We Come to You.',
    heroPara: "Tybee Island is not just a beach town — it is home to families who have lived here for decades and have no intention of leaving. When care is needed, it should come to the island. Shannon's team does.",
    featuresLabel: 'Why Tybee Island families choose us',
    featuresH2: 'Care that comes to where you live,<br>not the other way around.',
    featuresPara: "Tybee Island families should not have to leave their community to get qualified home care. Shannon's team travels to the island and delivers the same five-step process as every family we serve on the mainland.",
    card1Title: 'We Come to Tybee',
    card1Body: 'The assessment, the caregiver match, and the first visit all happen on the island. You do not have to go anywhere.',
    card2Title: 'One Caregiver. Matched for the Person.',
    card2Body: 'Island routines are different. We account for that in every match, selecting for personality, schedule, and the rhythms of life on Tybee.',
    card3Title: 'Shannon on Day One',
    card3Body: 'Shannon or a senior coordinator is present for the first visit on Tybee Island. Every time. No exceptions.',
    shannonPara: "Tybee Island families who call Shannon do not get handed to a coordinator in a downtown office. They get someone who has been to the island, who knows the community, and who holds her team to the same standard whether the client is in the Historic District or at the end of Butler Avenue.",
    localAngle: 'Serving all of Tybee Island including North Beach, South End, and mid-island neighborhoods.',
    faq: [
      { q: 'Do you really travel to Tybee Island for home care?', a: 'Yes. We serve Tybee Island directly. The assessment, caregiver introduction, and all scheduled care visits happen on the island.' },
      { q: 'Is the rate the same on Tybee as on the mainland?', a: 'Call us at (912) 856-1885 for pricing. We discuss all costs during the free 20-minute assessment before any decision is made.' },
      { q: 'What if my parent needs care during storm season?', a: 'We plan ahead with every island family. If conditions require schedule adjustments, we communicate proactively and ensure continuity of care.' }
    ]
  },
  {
    slug: 'wilmington-island',
    name: 'Wilmington Island',
    county: 'Chatham County',
    zip: '31410',
    lat: 32.0468, lng: -81.0138,
    metaDescription: 'Home care on Wilmington Island, GA. CNA-founded agency serving island families with a free same-day assessment and founder present on the first visit. Call (912) 856-1885.',
    h1: 'Home Care on Wilmington Island<br>Community Care from Someone Who Earned It.',
    heroPara: "Wilmington Island families have built their lives here. When a parent needs support, the care should come from someone who understands what this community expects, not a franchise that sees an address on a dispatch list.",
    featuresLabel: 'Why Wilmington Island families choose us',
    featuresH2: 'An island community deserves a care standard that reflects it.',
    featuresPara: "Wilmington Island is one of Savannah's most established communities. The families here expect quality. Shannon's five-step process was built to deliver it — same caregiver vetting, same first-visit supervision, same 72-hour follow-up.",
    card1Title: 'Free Same-Day Assessment',
    card1Body: 'We come to Wilmington Island for the assessment. One call starts the process. No obligation, no pressure.',
    card2Title: 'Caregiver Matched for Your Loved One',
    card2Body: 'One specific person, selected for personality fit — not availability. You receive their profile and credentials before anyone enters your home.',
    card3Title: 'Supervised First Visit',
    card3Body: 'Shannon or a senior coordinator is present for every first visit on Wilmington Island. Trust is built in person, not promised in a contract.',
    shannonPara: "Wilmington Island families who call Shannon are not calling a call center. They are talking to someone who built this agency from clinical experience, and who holds every member of her Care Team to the same standard she held herself as a CNA.",
    localAngle: 'Serving all Wilmington Island neighborhoods including Wilmington Park, Dutch Island area, and surrounding communities.',
    faq: [
      { q: 'Do you serve all of Wilmington Island?', a: 'Yes. We serve all Wilmington Island neighborhoods and surrounding Chatham County communities near the island.' },
      { q: 'How fast can care begin on Wilmington Island?', a: 'Same-day assessment. Caregiver match within 48 hours. Most families have care in place within 2-3 days of the first call.' },
      { q: 'What is the cost of home care on Wilmington Island?', a: 'We review all costs during the free 20-minute care assessment, before any decision is made. Call (912) 856-1885 to discuss pricing specific to your situation.' }
    ]
  },
  {
    slug: 'brunswick',
    name: 'Brunswick',
    county: 'Glynn County',
    zip: '31520',
    lat: 31.1499, lng: -81.4915,
    metaDescription: 'Home care in Brunswick, GA and the Golden Isles. CNA-founded. Free same-day assessment, caregiver matched in 48 hours, Shannon present on the first visit. Call (912) 856-1885.',
    h1: 'Home Care in Brunswick, GA<br>The Golden Isles Standard.',
    heroPara: "Brunswick families deserve more than a distant agency with a local phone number. Shannon built this from clinical experience, and every Brunswick family receives the same five-step process as every family we have served since the beginning.",
    featuresLabel: 'Why Brunswick and Golden Isles families choose us',
    featuresH2: 'The Golden Isles deserve care that came from real clinical experience.',
    featuresPara: "Brunswick is home to families who know the difference between a franchise and a person. Shannon's team travels to Brunswick with the same vetting process, the same supervised first visit, and the same follow-up that every family receives.",
    card1Title: 'Free Same-Day Assessment',
    card1Body: 'A 20-minute conversation with no agenda except understanding what your family needs. We come to Brunswick.',
    card2Title: 'Caregiver Matched in 48 Hours',
    card2Body: 'One specific caregiver, selected for personality fit and daily routine, not just availability. Profile shared before day one.',
    card3Title: 'Supervised First Visit',
    card3Body: 'Shannon or a senior coordinator is in the room on day one. This is how trust gets built — not promised in a brochure.',
    shannonPara: 'Brunswick families who call Shannon are not talking to a dispatcher. They are talking to someone who has sat with elderly patients, managed complex care routines, and built a team to the same standard she held as a CNA. That is rare in Glynn County. That is the difference.',
    localAngle: 'Serving Brunswick, St. Simons Island, Sea Island, Jekyll Island, and surrounding Glynn County communities.',
    faq: [
      { q: 'Do you serve St. Simons Island and Jekyll Island from Brunswick?', a: 'Yes. We serve Brunswick and the surrounding Golden Isles communities including St. Simons Island, Sea Island, and Jekyll Island.' },
      { q: 'How long does it take to get care started in Brunswick?', a: 'Same-day assessment. Caregiver match within 48 hours. We aim to have care in place within 2-3 days of your first call.' },
      { q: "Is Shannon's team certified to work in Glynn County?", a: 'Yes. Savannah Personal Care Services holds a Georgia PHCP license [verify number] and serves Glynn County families under the same standards as all of coastal Georgia.' }
    ]
  },
  {
    slug: 'hinesville',
    name: 'Hinesville',
    county: 'Liberty County',
    zip: '31313',
    lat: 31.8468, lng: -81.5968,
    metaDescription: 'Home care in Hinesville, GA for military families and Liberty County residents. CNA-founded. Free same-day assessment. Shannon present on day one. Call (912) 856-1885.',
    h1: 'Home Care in Hinesville, GA<br>Care That Shows Up. Every Time.',
    heroPara: "Hinesville is home to military families who understand what it means to show up when it matters. Shannon built her agency around that same principle — consistent, reliable, no excuses. When a parent needs care in Liberty County, we are there.",
    featuresLabel: 'Why Hinesville families choose us',
    featuresH2: 'Military families near Fort Stewart deserve care that understands commitment.',
    featuresPara: "Families stationed near Fort Stewart often manage a parent's care from a distance, or return home to find a situation that changed faster than expected. Shannon's team provides the reliability that military families already know how to demand.",
    card1Title: 'Free Same-Day Assessment',
    card1Body: 'One call. We tell you exactly what care looks like, what it costs, and who would provide it. No obligation.',
    card2Title: 'One Caregiver. Dependable Schedule.',
    card2Body: 'Consistency matters to military families. We match one specific caregiver and build a schedule that does not change without your knowledge.',
    card3Title: 'Supervised First Visit. Always.',
    card3Body: 'Shannon or a senior coordinator is in the room on day one, for every Hinesville family, every time.',
    shannonPara: 'Hinesville and Fort Stewart families who call Shannon get someone who takes reliability seriously — not as a marketing promise, but as the operating standard. Every visit. Every follow-up. Every time.',
    localAngle: 'Serving Hinesville, Fort Stewart area families, Flemington, Walthourville, and surrounding Liberty County communities.',
    faq: [
      { q: 'Do you work with military families at Fort Stewart?', a: 'Yes. We serve families in the Hinesville and Fort Stewart area, including active-duty families managing a parent\'s care near base.' },
      { q: 'What if a military family needs to transfer and care continuity is at risk?', a: 'We plan transitions proactively. When a family member is redeployed or PCSing, we work with the family in advance to ensure the care plan does not lapse.' },
      { q: 'How soon can care start in Hinesville?', a: 'Same-day assessment. Caregiver match within 48 hours. Most families have care in place within 2-3 days of the first call.' }
    ]
  },
  {
    slug: 'bloomingdale',
    name: 'Bloomingdale',
    county: 'Effingham County',
    zip: '31302',
    lat: 32.1215, lng: -81.3057,
    metaDescription: 'Home care in Bloomingdale, GA. CNA-founded agency serving Effingham County families. Free same-day assessment. Shannon present on the first visit. Call (912) 856-1885.',
    h1: 'Home Care in Bloomingdale, GA<br>Personal Care for a Close-Knit Community.',
    heroPara: "Bloomingdale is a small community with high expectations. Families here know their neighbors and expect the same from anyone they let into their home. Shannon's agency was built on that same trust — person by person, family by family.",
    featuresLabel: 'Why Bloomingdale families choose us',
    featuresH2: 'Small community. High standard.',
    featuresPara: 'Bloomingdale families do not want a corporate agency. They want someone who picks up the phone, knows their situation, and sends the same caregiver every time. That is exactly what Shannon built.',
    card1Title: 'Free Same-Day Assessment',
    card1Body: 'We come to you. One conversation tells you everything — what care looks like, who provides it, and what it costs.',
    card2Title: 'Consistent Caregiver. Matched Carefully.',
    card2Body: "One person, selected for your loved one. Same face, same routine. Not whoever is available that morning.",
    card3Title: 'Shannon on Day One',
    card3Body: "A founder-supervised first visit is not standard in home care. It is Shannon's standard. Every Bloomingdale family gets it.",
    shannonPara: 'Bloomingdale families who call Shannon do not get lost in a system. They get personal attention from an agency small enough to know their situation, and credentialed enough to handle it.',
    localAngle: 'Serving Bloomingdale, Rincon, Guyton, and surrounding Effingham County communities.',
    faq: [
      { q: 'Do you serve all of Effingham County from Bloomingdale?', a: 'Yes. We serve Bloomingdale, Rincon, Guyton, and surrounding Effingham County communities.' },
      { q: 'My parent lives in a rural area near Bloomingdale. Can you still help?', a: 'Yes. Call us and describe the location. We work with families throughout the Bloomingdale and Effingham County area.' },
      { q: 'How quickly can care begin in Bloomingdale?', a: 'Same-day assessment. Caregiver match within 48 hours. Most families have care in place within 2-3 days.' }
    ]
  },
  {
    slug: 'port-wentworth',
    name: 'Port Wentworth',
    county: 'Chatham County',
    zip: '31407',
    lat: 32.1490, lng: -81.1657,
    metaDescription: 'Home care in Port Wentworth, GA. CNA-founded agency. Free same-day assessment. Caregiver matched in 48 hours. Shannon present on the first visit. Call (912) 856-1885.',
    h1: 'Home Care in Port Wentworth, GA<br>Reliable Care for Working Families.',
    heroPara: "Port Wentworth families work hard. The care for their parents should work just as hard. Shannon built this agency around one principle: reliability. Same caregiver. Same schedule. Same founder-supervised first visit. Every time.",
    featuresLabel: 'Why Port Wentworth families choose us',
    featuresH2: 'Working families deserve care they can actually count on.',
    featuresPara: "Port Wentworth families need an agency that does not miss visits, change caregivers without notice, or leave them guessing. Shannon's five-step process was built to eliminate every one of those problems before they start.",
    card1Title: 'Free Same-Day Assessment',
    card1Body: "One call. No commitment. We tell you exactly what care looks like and what it costs before you decide anything.",
    card2Title: 'One Caregiver. Every Visit.',
    card2Body: "Consistency is not optional. We match one specific person to your loved one and protect that relationship.",
    card3Title: 'Supervised First Visit',
    card3Body: "Shannon or a senior coordinator is present on day one. No stranger walks into your parent's home without us there.",
    shannonPara: 'Port Wentworth families who call Shannon get someone who understands that reliability is not a feature — it is the whole point. Shannon built this agency because she had seen what happens when it is missing.',
    localAngle: 'Serving Port Wentworth, Garden City, and surrounding north Chatham County communities.',
    faq: [
      { q: 'Do you serve Garden City and surrounding areas near Port Wentworth?', a: 'Yes. We serve Port Wentworth, Garden City, and surrounding north Chatham County communities.' },
      { q: 'My parent works an overnight schedule. Can caregivers accommodate that?', a: "Yes. We discuss scheduling in detail during the free assessment and match caregivers to your family's specific routine, including non-standard hours." },
      { q: 'How fast can care begin in Port Wentworth?', a: 'Same-day assessment. Caregiver matched within 48 hours. Most families have care in place within 2-3 days of the first call.' }
    ]
  }
];

// ─────────────────────────────────────────────
// ALL CITY LINKS (for strips + chips)
// ─────────────────────────────────────────────
const allCities = [
  { slug: 'savannah',         name: 'Savannah' },
  { slug: 'pooler',           name: 'Pooler' },
  { slug: 'tybee-island',     name: 'Tybee Island' },
  { slug: 'wilmington-island',name: 'Wilmington Island' },
  { slug: 'brunswick',        name: 'Brunswick' },
  { slug: 'hinesville',       name: 'Hinesville' },
  { slug: 'bloomingdale',     name: 'Bloomingdale' },
  { slug: 'port-wentworth',   name: 'Port Wentworth' },
];

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildLocalBusinessSchema(city) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "name": "Savannah Personal Care Services",
    "description": `CNA-founded home care agency serving ${city.name}, GA`,
    "url": `https://savannahpersonalcareservices.com/home-care-${city.slug}-ga`,
    "telephone": "+19128561885",
    "email": "savpcs@yahoo.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": "GA",
      "postalCode": city.zip,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.lat,
      "longitude": city.lng
    },
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "containedInPlace": { "@type": "State", "name": "Georgia" }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Home Care Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Transitional Care" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Daily Living Assistance" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dementia Care Support" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Respite Care" } }
      ]
    },
    "founder": {
      "@type": "Person",
      "name": "Shannon Stafford Simpson",
      "jobTitle": "Founder & Certified Nursing Assistant"
    },
    "sameAs": ["https://www.facebook.com/share/1JH11GeHQ5/"]
  };
}

function buildBreadcrumbSchema(city) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://savannahpersonalcareservices.com/" },
      { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://savannahpersonalcareservices.com/" },
      { "@type": "ListItem", "position": 3, "name": `${city.name}, GA`, "item": `https://savannahpersonalcareservices.com/home-care-${city.slug}-ga` }
    ]
  };
}

function buildFaqSchema(city) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": city.faq.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };
}

function buildAreasStrip(currentSlug) {
  return allCities.map(c => {
    const isCurrent = c.slug === currentSlug;
    return `      <a href="./${c.slug}.html" class="area-chip${isCurrent ? ' current' : ''}"${isCurrent ? ' aria-current="page"' : ''}>${escapeHtml(c.name)}, GA</a>`;
  }).join('\n');
}

function buildCitiesStrip(currentSlug) {
  const items = allCities.map((c, i) => {
    const isCurrent = c.slug === currentSlug;
    const link = `<a href="./${c.slug}.html"${isCurrent ? ' aria-current="page"' : ''}>${escapeHtml(c.name)}, GA</a>`;
    if (i === 0) return link;
    return `<span class="cities-sep" aria-hidden="true">·</span>${link}`;
  }).join('\n      ');
  return items;
}

function buildHeroCities(currentSlug) {
  return allCities.map(c => {
    const isCurrent = c.slug === currentSlug;
    return `<a href="./${c.slug}.html" class="hero-city-chip${isCurrent ? ' current' : ''}"${isCurrent ? ' aria-current="page"' : ''}>${escapeHtml(c.name)}</a>`;
  }).join('\n        ');
}

function buildFaqItems(faqArray) {
  return faqArray.map((item, i) => `
    <div class="faq-item" id="faq-item-${i}">
      <button class="faq-btn" aria-expanded="false" aria-controls="faq-ans-${i}">
        ${escapeHtml(item.q)}
        <span class="faq-caret" aria-hidden="true">+</span>
      </button>
      <div class="faq-answer" id="faq-ans-${i}" role="region" aria-labelledby="faq-item-${i}">
        ${item.a}
      </div>
    </div>`).join('');
}

// ─────────────────────────────────────────────
// PAGE TEMPLATE
// ─────────────────────────────────────────────
function buildPage(city) {
  const canonicalUrl = `https://savannahpersonalcareservices.com/home-care-${city.slug}-ga`;
  const ogTitle = `Home Care in ${city.name}, GA | Savannah Personal Care Services`;
  const pageTitle = ogTitle;

  const lbSchema = JSON.stringify(buildLocalBusinessSchema(city), null, 2);
  const bcSchema = JSON.stringify(buildBreadcrumbSchema(city), null, 2);
  const faqSchema = JSON.stringify(buildFaqSchema(city), null, 2);

  const areasStrip = buildAreasStrip(city.slug);
  const citiesStrip = buildCitiesStrip(city.slug);
  const heroCities = buildHeroCities(city.slug);
  const faqItems = buildFaqItems(city.faq);

  // Preposition for "in" vs "on" for island pages
  const prep = (city.slug === 'tybee-island' || city.slug === 'wilmington-island') ? 'on' : 'in';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <title>${escapeHtml(pageTitle)}</title>
  <meta name="description" content="${escapeHtml(city.metaDescription)}" />
  <meta name="keywords" content="home care ${escapeHtml(city.name)} GA, in-home care ${escapeHtml(city.name)}, senior care ${escapeHtml(city.name)}, CNA home care ${escapeHtml(city.name)}, personal care services ${escapeHtml(city.name)}, Savannah Personal Care Services" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Shannon Stafford Simpson, Savannah Personal Care Services" />
  <link rel="canonical" href="${canonicalUrl}" />

  <!-- Theme & Mobile -->
  <meta name="theme-color" content="#4AABA5" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  <meta name="apple-mobile-web-app-title" content="SPCS" />
  <meta name="format-detection" content="telephone=yes" />

  <!-- Geo -->
  <meta name="geo.region" content="US-GA" />
  <meta name="geo.placename" content="${escapeHtml(city.name)}, Georgia" />
  <meta name="geo.position" content="${city.lat};${city.lng}" />
  <meta name="ICBM" content="${city.lat}, ${city.lng}" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="${escapeHtml(ogTitle)}" />
  <meta property="og:description" content="${escapeHtml(city.metaDescription)}" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:site_name" content="Savannah Personal Care Services" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:image" content="https://savannahpersonalcareservices.com/shannon-founder.jpg" />
  <meta property="og:image:alt" content="Shannon Stafford Simpson, Founder &amp; CNA, Savannah Personal Care Services" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(ogTitle)}" />
  <meta name="twitter:description" content="${escapeHtml(city.metaDescription)}" />
  <meta name="twitter:image" content="https://savannahpersonalcareservices.com/shannon-founder.jpg" />
  <meta name="twitter:image:alt" content="Shannon Stafford Simpson, Founder &amp; CNA" />

  <!-- JSON-LD: LocalBusiness -->
  <script type="application/ld+json">
${lbSchema}
  </script>

  <!-- JSON-LD: BreadcrumbList -->
  <script type="application/ld+json">
${bcSchema}
  </script>

  <!-- JSON-LD: FAQPage -->
  <script type="application/ld+json">
${faqSchema}
  </script>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600&display=block" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600&display=block" />

  <style>
    /* =========================================
       DESIGN TOKENS
    ========================================= */
    :root {
      --teal:      #4AABA5;
      --teal-dark: #2A8280;
      --teal-lt:   #E3F5F4;
      --sand:      #F0FAFA;
      --ink:       #1d1d1f;
      --ink-deep:  #0a0a0a;
      --soft:      #6e6e73;
      --white:     #ffffff;
      --gold:      #c09040;
      --rule:      rgba(74,171,165,0.15);
      --muted:     #9a9a9a;
    }

    /* =========================================
       RESET + BASE
    ========================================= */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; text-size-adjust: 100%; }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-size: 17px; line-height: 1.7; color: var(--ink); background: var(--white);
      overflow-x: hidden; -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale; text-rendering: optimizeLegibility;
      font-optical-sizing: auto; font-synthesis: none;
      padding-top: 68px;
    }
    a { color: inherit; text-decoration: none; }
    button { font-family: inherit; cursor: pointer; border: none; background: none; }
    .serif { font-family: 'Cormorant Garamond', Georgia, serif; }

    /* =========================================
       NAV
    ========================================= */
    .nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      height: 68px; display: flex; align-items: center;
      justify-content: space-between;
      padding: 0 clamp(20px, 3.5vw, 48px);
      background: rgba(255,255,255,0.96);
      backdrop-filter: saturate(180%) blur(20px);
      -webkit-backdrop-filter: saturate(180%) blur(20px);
    }
    .nav-logo-link {
      display: flex; align-items: flex-start; flex-shrink: 0;
      text-decoration: none; height: 38px; overflow: hidden;
    }
    .nav-logo-link img { height: 62px; width: auto; display: block; flex-shrink: 0; }
    .nav-right { display: flex; align-items: center; gap: 4px; }
    .nav-phone {
      font-size: 1rem; font-weight: 700; color: var(--ink);
      min-height: 44px; display: flex; align-items: center;
      padding: 0 10px; white-space: nowrap; letter-spacing: -0.01em;
    }
    .nav-phone:hover { color: #000; }
    /* Desktop nav links */
    .nav-links {
      display: none; list-style: none; align-items: center; gap: 4px;
      position: absolute; left: 50%; transform: translateX(-50%);
    }
    @media (min-width: 760px) { .nav-links { display: flex; } }
    .nav-links a {
      font-size: 0.9rem; font-weight: 500; color: var(--ink);
      padding: 8px 16px; border-radius: 6px;
      transition: color 0.15s, background 0.15s;
      white-space: nowrap; min-height: 44px; display: flex; align-items: center;
    }
    .nav-links a:hover, .nav-links a:focus-visible {
      color: var(--ink); background: rgba(17,17,17,0.05);
    }
    .nav-dropdown { position: relative; }
    .nav-caret {
      font-size: 0.65rem; margin-left: 3px; opacity: 0.55;
      transition: transform 0.18s ease; display: inline-block;
    }
    .nav-dropdown:hover .nav-caret, .nav-dropdown:focus-within .nav-caret { transform: rotate(180deg); }
    .nav-dropdown-menu {
      position: absolute; top: calc(100% + 6px); left: 50%;
      transform: translateX(-50%) translateY(-6px);
      background: var(--white); border-radius: 12px;
      box-shadow: 0 8px 40px rgba(4,35,32,0.13);
      min-width: 230px; opacity: 0; pointer-events: none;
      transition: opacity 0.18s ease, transform 0.18s ease;
      padding: 8px; z-index: 200;
    }
    .nav-dropdown-menu::before {
      content: ''; position: absolute; top: -12px; left: 0; right: 0; height: 12px;
    }
    .nav-dropdown:hover .nav-dropdown-menu, .nav-dropdown:focus-within .nav-dropdown-menu {
      opacity: 1; pointer-events: all; transform: translateX(-50%) translateY(0);
    }
    .nav-dropdown-menu a {
      display: block !important; padding: 11px 16px !important;
      border-radius: 7px !important; font-size: 0.84rem !important;
      color: var(--ink) !important; min-height: auto !important;
      line-height: 1.3 !important; transition: background 0.12s, color 0.12s !important;
    }
    .nav-dropdown-menu a:hover, .nav-dropdown-menu a:focus-visible {
      background: rgba(17,17,17,0.05) !important; color: var(--ink) !important;
    }
    /* Hamburger button */
    .nav-menu-btn {
      display: flex; flex-direction: column; justify-content: center; gap: 5px;
      width: 44px; height: 44px; align-items: center;
      background: none; border: none; cursor: pointer; padding: 0;
      border-radius: 6px; transition: background 0.15s; flex-shrink: 0;
    }
    .nav-menu-btn:hover, .nav-menu-btn:focus-visible { background: rgba(74,171,165,0.12); }
    .nav-menu-btn span {
      display: block; width: 22px; height: 1.5px;
      background: var(--ink); border-radius: 2px;
      transition: transform 0.25s, opacity 0.2s;
    }
    .nav-menu-btn.is-open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
    .nav-menu-btn.is-open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
    .nav-menu-btn.is-open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
    @media (min-width: 760px) { .nav-menu-btn { display: none; } }
    /* Nav drawer */
    .nav-drawer {
      position: fixed; top: 68px; left: 0; right: 0; z-index: 99;
      background: var(--white);
      border-bottom: 1px solid rgba(74,171,165,0.15);
      box-shadow: 0 12px 40px rgba(4,35,32,0.12);
      transform: translateY(-8px); opacity: 0; pointer-events: none;
      transition: transform 0.25s ease, opacity 0.2s ease;
    }
    .nav-drawer.is-open { transform: translateY(0); opacity: 1; pointer-events: all; }
    .nav-drawer-inner { max-width: 1200px; margin: 0 auto; padding: 8px 24px 24px; }
    .nav-drawer-links {
      list-style: none;
      border-bottom: 1px solid rgba(74,171,165,0.15);
      margin-bottom: 20px; padding-bottom: 8px;
    }
    .nav-drawer-links li a {
      display: flex; align-items: center; padding: 14px 4px;
      font-size: 1rem; font-weight: 400; color: var(--ink);
      border-bottom: 1px solid rgba(74,171,165,0.1);
      transition: color 0.15s, padding-left 0.15s; text-decoration: none;
    }
    .nav-drawer-links li:last-child a { border-bottom: none; }
    .nav-drawer-links li a:hover, .nav-drawer-links li a:focus-visible {
      color: var(--ink); font-weight: 500; padding-left: 8px;
    }
    .nav-drawer-arrow { margin-left: auto; font-size: 0.75rem; color: var(--soft); opacity: 0.7; }
    .nav-drawer-actions { display: flex; gap: 10px; flex-wrap: wrap; }
    .nav-drawer-actions .btn { flex: 1; min-width: 140px; justify-content: center; }
    .nav-backdrop {
      position: fixed; inset: 68px 0 0 0; z-index: 98;
      background: rgba(4,35,32,0.3); opacity: 0; pointer-events: none;
      transition: opacity 0.25s;
    }
    .nav-backdrop.is-open { opacity: 1; pointer-events: all; }

    /* =========================================
       BUTTONS
    ========================================= */
    .btn {
      display: inline-flex; align-items: center; justify-content: center;
      padding: 14px 28px; border-radius: 999px;
      font-size: 0.9rem; font-weight: 600; min-height: 44px;
      border: 1px solid transparent;
      transition: background 0.18s, color 0.18s, border-color 0.18s;
    }
    .btn-teal  { background: var(--teal); color: #fff; border-color: var(--teal); }
    .btn-teal:hover { background: var(--teal-dark); border-color: var(--teal-dark); }
    .btn-ghost { background: transparent; color: var(--ink); border-color: rgba(74,171,165,0.3); }
    .btn-ghost:hover { border-color: var(--teal); }
    .btn-white { background: #fff; color: var(--teal); border-color: #fff; }
    .btn-white:hover { opacity: 0.9; }
    .btn-ghost-white { background: transparent; color: rgba(255,255,255,0.85); border-color: rgba(255,255,255,0.35); }
    .btn-ghost-white:hover { border-color: rgba(255,255,255,0.7); }

    /* =========================================
       SHARED TYPOGRAPHY
    ========================================= */
    .label {
      font-size: 0.68rem; font-weight: 500; letter-spacing: 0.16em;
      text-transform: uppercase; color: var(--teal); display: block; margin-bottom: 12px;
    }
    .section-h2 {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: clamp(24px, 3.2vw, 38px); line-height: 1.1;
      letter-spacing: -0.02em; font-weight: 600; margin-bottom: 12px;
    }
    .section-body {
      font-size: clamp(14px, 1.6vw, 16px); font-weight: 400; color: var(--soft);
      line-height: 1.65; max-width: 600px; margin-bottom: 28px;
    }

    /* =========================================
       HERO
    ========================================= */
    .hero {
      background: var(--sand); min-height: 44vh; display: flex;
      align-items: center; padding: 52px clamp(16px,3vw,48px) 36px;
    }
    .hero-inner { max-width: 720px; margin: 0 auto; }
    .hero-label {
      font-size: 0.68rem; font-weight: 500; letter-spacing: 0.16em;
      text-transform: uppercase; color: var(--teal);
      display: flex; align-items: center; gap: 10px; margin-bottom: 14px;
    }
    .hero-label::before {
      content: ''; display: block; width: 20px; height: 1px;
      background: var(--teal); flex-shrink: 0;
    }
    .hero-h1 {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: clamp(28px, 4.5vw, 54px); line-height: 1.1;
      letter-spacing: -0.02em; font-weight: 600; margin-bottom: 16px;
      word-break: break-word; overflow-wrap: break-word;
    }
    .hero-sub {
      font-size: clamp(15px, 1.8vw, 17px); font-weight: 400; color: var(--soft);
      line-height: 1.65; max-width: 520px; margin-bottom: 24px;
    }
    .hero-ctas { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }

    /* Hero cities scroll strip */
    .hero-cities-scroll {
      overflow-x: auto; -webkit-overflow-scrolling: touch;
      scrollbar-width: none; -ms-overflow-style: none;
      margin-top: 28px; padding-top: 18px;
      border-top: 1px solid rgba(74,171,165,0.2);
    }
    .hero-cities-scroll::-webkit-scrollbar { display: none; }
    .hero-cities-track {
      display: flex; gap: 8px; white-space: nowrap; padding-bottom: 2px;
    }
    .hero-city-chip {
      font-family: 'Inter', -apple-system, sans-serif;
      font-size: 11px; font-weight: 500; letter-spacing: 0.09em;
      text-transform: uppercase; color: var(--soft);
      padding: 6px 13px; border: 1px solid rgba(0,0,0,0.12);
      border-radius: 40px; white-space: nowrap; flex-shrink: 0;
      text-decoration: none; display: inline-block;
      -webkit-tap-highlight-color: transparent;
      transition: color 0.18s ease, border-color 0.18s ease, background 0.18s ease;
    }
    .hero-city-chip:hover { color: var(--teal-dark); border-color: var(--teal); }
    .hero-city-chip.current {
      color: var(--teal-dark); border-color: var(--teal);
      background: var(--teal-lt); font-weight: 600;
    }

    /* =========================================
       FEATURES
    ========================================= */
    .features { padding: 40px clamp(16px,3vw,48px); background: var(--white); }
    .features-inner { max-width: 1200px; margin: 0 auto; }
    .grid-3 {
      display: grid; grid-template-columns: 1fr; gap: 1px;
      background: rgba(74,171,165,0.15); border-radius: 10px; overflow: hidden;
    }
    @media (min-width: 600px) { .grid-3 { grid-template-columns: repeat(3, 1fr); } }
    .feature-card { background: var(--white); padding: 24px 20px; }
    .feature-num {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 0.75rem; color: var(--teal); margin-bottom: 8px; display: block;
    }
    .feature-title {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 1.1rem; font-weight: 600; margin-bottom: 10px;
    }
    .feature-body { font-size: 0.85rem; font-weight: 400; color: var(--soft); line-height: 1.65; }

    /* =========================================
       SHANNON CREDENTIAL
    ========================================= */
    .shannon { background: var(--sand); padding: 40px clamp(16px,3vw,48px); }
    .shannon-inner {
      max-width: 1200px; margin: 0 auto;
      display: grid; grid-template-columns: 1fr; gap: 24px; align-items: center;
    }
    @media (min-width: 640px) { .shannon-inner { grid-template-columns: 200px 1fr; } }
    .shannon-badge { background: var(--teal); border-radius: 8px; padding: 24px 20px; }
    .shannon-name { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.5rem; color: #fff; margin-bottom: 6px; }
    .shannon-role { font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.5); margin-bottom: 16px; }
    .shannon-cred { display: flex; flex-wrap: wrap; gap: 6px; }
    .shannon-cred span {
      border: 1px solid rgba(255,255,255,0.2); color: rgba(255,255,255,0.75);
      font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.06em;
      padding: 4px 8px; border-radius: 4px;
    }
    .shannon-quote {
      font-family: 'Cormorant Garamond', Georgia, serif; font-style: italic;
      font-size: clamp(15px, 1.8vw, 18px); line-height: 1.5;
      border-left: 2px solid var(--teal); padding-left: 16px; margin-bottom: 12px;
    }
    .shannon-body { font-size: 0.9rem; font-weight: 400; color: var(--soft); line-height: 1.7; }

    /* =========================================
       LOCAL AREA
    ========================================= */
    .local-area { padding: 40px clamp(16px,3vw,48px); background: var(--teal-lt); }
    .local-inner { max-width: 1200px; margin: 0 auto; }
    .areas-strip { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 24px; }
    .area-chip {
      display: inline-flex; align-items: center;
      padding: 6px 14px; border-radius: 999px;
      border: 1px solid rgba(74,171,165,0.35);
      font-size: 0.8rem; font-weight: 500; color: var(--ink);
      text-decoration: none; background: var(--white);
      transition: border-color 0.15s, background 0.15s;
    }
    .area-chip:hover { border-color: var(--teal); background: var(--teal-lt); }
    .area-chip.current { background: var(--teal); color: #fff; border-color: var(--teal); }

    /* =========================================
       FAQ
    ========================================= */
    .faq-section { padding: 40px clamp(16px,3vw,48px); background: var(--white); }
    .faq-inner { max-width: 760px; margin: 0 auto; }
    .faq-list { margin-top: 40px; }
    .faq-item { border-top: 1px solid rgba(74,171,165,0.2); }
    .faq-item:last-child { border-bottom: 1px solid rgba(74,171,165,0.2); }
    .faq-btn {
      width: 100%; text-align: left; background: none; border: none;
      padding: 14px 0; cursor: pointer; display: flex;
      justify-content: space-between; align-items: center; gap: 16px;
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: clamp(16px, 1.8vw, 19px); font-weight: 600;
      color: var(--ink); line-height: 1.3;
    }
    .faq-caret { flex-shrink: 0; font-size: 1rem; color: var(--teal); transition: transform 0.2s; }
    .faq-item.is-open .faq-caret { transform: rotate(45deg); }
    .faq-answer {
      font-size: 0.95rem; line-height: 1.7; color: var(--soft);
      max-height: 0; overflow: hidden;
      transition: max-height 0.3s ease, padding 0.3s ease;
    }
    .faq-item.is-open .faq-answer { max-height: 300px; padding-bottom: 22px; }

    /* =========================================
       CTA SECTION
    ========================================= */
    .cta { background: var(--teal); padding: 52px clamp(16px,3vw,48px); text-align: center; }
    .cta-inner { max-width: 560px; margin: 0 auto; }
    .cta h2 {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: clamp(24px, 3.8vw, 40px); color: #fff;
      margin-bottom: 14px; font-weight: 600; line-height: 1.1;
    }
    .cta p {
      font-size: clamp(14px, 1.6vw, 17px); font-weight: 400;
      color: rgba(255,255,255,0.7); margin-bottom: 36px; line-height: 1.65;
    }
    .cta-btns { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; }
    .cta-note { font-size: 0.72rem; color: rgba(255,255,255,0.35); margin-top: 20px; }

    /* =========================================
       CITIES NAV STRIP
    ========================================= */
    .cities-strip {
      padding: 20px clamp(20px,4vw,64px);
      border-top: 1px solid rgba(74,171,165,0.15);
      background: var(--white);
    }
    .cities-strip-inner {
      max-width: 1200px; margin: 0 auto;
      display: flex; flex-wrap: wrap; align-items: center; gap: 8px 16px;
    }
    .cities-strip-label {
      font-size: 0.65rem; font-weight: 500; letter-spacing: 0.14em;
      text-transform: uppercase; color: var(--teal); flex-shrink: 0;
    }
    .cities-strip a {
      font-size: 0.82rem; color: var(--soft);
      transition: color 0.15s; text-decoration: none;
    }
    .cities-strip a:hover { color: var(--ink); }
    .cities-strip a[aria-current="page"] { color: var(--ink); font-weight: 600; }
    .cities-sep { color: rgba(74,171,165,0.35); font-size: 0.7rem; }

    /* =========================================
       FOOTER V2
    ========================================= */
    .footer-v2 { background: #ffffff; border-top: 1px solid rgba(0,0,0,0.08); padding: 40px clamp(16px,3vw,48px) 0; }
    .footer-v2-inner { max-width: 1200px; margin: 0 auto; }
    .footer-v2-top {
      display: grid; grid-template-columns: 1fr;
      gap: 28px; padding-bottom: 28px;
      border-bottom: 1px solid rgba(0,0,0,0.08);
    }
    @media (min-width: 640px) {
      .footer-v2-top { grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 32px; }
    }
    .footer-logo-mark { display: flex; flex-direction: column; gap: 1px; text-decoration: none; margin-bottom: 20px; }
    .footer-logo-eyebrow { font-family: 'Inter', system-ui, sans-serif; font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.2em; color: rgba(0,0,0,0.45); line-height: 1; }
    .footer-logo-primary { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 22px; color: var(--ink); line-height: 1.1; letter-spacing: -0.01em; }
    .footer-brand-tagline { font-size: 13px; color: rgba(0,0,0,0.45); line-height: 1.6; margin-bottom: 20px; }
    .footer-social { display: flex; gap: 12px; }
    .footer-social a { width: 36px; height: 36px; border-radius: 8px; background: rgba(0,0,0,0.05); display: flex; align-items: center; justify-content: center; color: rgba(0,0,0,0.45); transition: background 0.15s, color 0.15s; }
    .footer-social a:hover { background: rgba(0,0,0,0.08); color: var(--ink); }
    .footer-social svg { width: 16px; height: 16px; }
    .footer-col-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(0,0,0,0.45); margin-bottom: 16px; }
    .footer-col-links { display: flex; flex-direction: column; gap: 10px; }
    .footer-col-links a { font-size: 14px; color: var(--soft); transition: color 0.15s; line-height: 1.3; }
    .footer-col-links a:hover { color: var(--ink); }
    .footer-col-contact { display: flex; flex-direction: column; gap: 10px; }
    .footer-col-contact a, .footer-col-contact span { font-size: 14px; color: var(--soft); line-height: 1.3; transition: color 0.15s; }
    .footer-col-contact a:hover { color: var(--ink); }
    .footer-license-badge { display: inline-flex; align-items: center; border: 1px solid rgba(0,0,0,0.12); padding: 3px 8px; border-radius: 3px; font-size: 10px; color: rgba(0,0,0,0.45); margin-top: 8px; }
    .footer-guide-bar { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px; padding: 28px 32px; margin: 40px 0 0; border-radius: 10px; background: rgba(74,171,165,0.08); border: 1px solid rgba(74,171,165,0.18); }
    .footer-guide-text { display: flex; flex-direction: column; gap: 4px; }
    .footer-guide-eyebrow { font-size: 10px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: var(--soft); }
    .footer-guide-headline { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 17px; color: var(--ink); line-height: 1.2; }
    .footer-guide-btn { display: inline-flex; align-items: center; gap: 8px; padding: 11px 22px; border-radius: 999px; font-size: 0.82rem; font-weight: 500; min-height: 42px; border: 1px solid rgba(0,0,0,0.2); background: transparent; color: var(--ink); text-decoration: none; white-space: nowrap; transition: background 0.18s, border-color 0.18s, color 0.18s; flex-shrink: 0; }
    .footer-guide-btn:hover { background: var(--teal); border-color: var(--teal); color: #fff; }
    .footer-v2-bottom { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; padding: 20px 0 24px; }
    .footer-v2-bottom span { font-size: 11px; color: rgba(0,0,0,0.4); }
    .footer-v2-legal { display: flex; gap: 20px; flex-wrap: wrap; }
    .footer-v2-legal a { font-size: 11px; color: rgba(0,0,0,0.4); transition: color 0.15s; }
    .footer-v2-legal a:hover { color: rgba(0,0,0,0.65); }

    /* =========================================
       RESPONSIVE
    ========================================= */
    @media (max-width: 768px) {
      .hero { padding: 36px 16px 28px; min-height: auto; align-items: flex-start; }
      .hero-inner { width: 100%; }
      .hero-h1 { font-size: clamp(26px, 8vw, 40px); line-height: 1.15; }
      .hero-sub { font-size: 16px; }
      .hero-ctas { flex-direction: column; }
      .hero-ctas .btn { width: 100%; min-height: 52px; font-size: 16px; font-weight: 700; justify-content: center; }
      .hero-cities-scroll { margin-top: 20px; padding-top: 14px; }
      .hero-city-chip { font-size: 10px; padding: 5px 11px; }
      .section-h2 { font-size: clamp(22px, 7vw, 34px); }
      .section-body { font-size: 16px; }
      .feature-body { font-size: 15px; }
      .cta h2 { font-size: clamp(22px, 7vw, 34px); }
      .cta p { font-size: 16px; }
      .cta-btns { flex-direction: column; align-items: stretch; }
      .cta-btns .btn { width: 100%; min-height: 52px; font-size: 16px; font-weight: 700; justify-content: center; }
      .footer-guide-bar { flex-direction: column; align-items: flex-start; }
      .shannon-inner { flex-direction: column; gap: 24px; }
      .shannon-badge { padding: 24px; }
    }
    @media (max-width: 390px) {
      .hero-h1 { font-size: 26px; }
      .hero { padding: 28px 16px 24px; }
    }
  </style>
</head>
<body>

<!-- ========== NAV ========== -->
<nav class="nav" role="navigation" aria-label="Main navigation">
  <a class="nav-logo-link" href="./index.html" aria-label="Savannah Personal Care Services home">
    <img src="./logo.png" alt="Savannah Personal Care Services sea turtle logo" />
  </a>
  <ul class="nav-links" role="list">
    <li class="nav-dropdown">
      <a href="./care-options.html">Types of Care <span class="nav-caret" aria-hidden="true">&#9662;</span></a>
      <div class="nav-dropdown-menu">
        <a href="./care-options.html#transitional">Transitional Care</a>
        <a href="./care-options.html#daily-living">Daily Living Assistance</a>
        <a href="./care-options.html#dementia">Dementia Care Support</a>
        <a href="./care-options.html#respite">Respite Care</a>
      </div>
    </li>
    <li><a href="./index.html#process">How It Works</a></li>
    <li><a href="./about.html">About Us</a></li>
    <li><a href="./careers.html">Careers</a></li>
  </ul>
  <div class="nav-right">
    <a class="nav-phone" href="tel:+19128561885" aria-label="Call us at (912) 856-1885">(912) 856-1885</a>
    <button class="nav-menu-btn" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- NAV DRAWER -->
<div class="nav-backdrop" id="nav-backdrop" aria-hidden="true"></div>
<div class="nav-drawer" id="nav-drawer" aria-label="Mobile navigation" hidden>
  <div class="nav-drawer-inner">
    <ul class="nav-drawer-links" role="list">
      <li>
        <a href="./care-options.html">
          Types of Care
          <span class="nav-drawer-arrow" aria-hidden="true">&#8594;</span>
        </a>
        <ul style="list-style:none;padding:0 0 8px 16px;margin:0;">
          <li><a href="./care-options.html#transitional" style="font-size:13px;color:rgba(29,29,31,0.6);padding:6px 0;display:block;">Transitional Care</a></li>
          <li><a href="./care-options.html#daily-living" style="font-size:13px;color:rgba(29,29,31,0.6);padding:6px 0;display:block;">Daily Living Assistance</a></li>
          <li><a href="./care-options.html#dementia" style="font-size:13px;color:rgba(29,29,31,0.6);padding:6px 0;display:block;">Dementia Care Support</a></li>
          <li><a href="./care-options.html#respite" style="font-size:13px;color:rgba(29,29,31,0.6);padding:6px 0;display:block;">Respite Care</a></li>
        </ul>
      </li>
      <li>
        <a href="./index.html#process">How It Works <span class="nav-drawer-arrow" aria-hidden="true">&#8594;</span></a>
      </li>
      <li>
        <a href="./about.html">About Us <span class="nav-drawer-arrow" aria-hidden="true">&#8594;</span></a>
      </li>
      <li>
        <a href="./careers.html">Careers <span class="nav-drawer-arrow" aria-hidden="true">&#8594;</span></a>
      </li>
    </ul>
    <div class="nav-drawer-actions">
      <a class="btn btn-ghost" href="tel:+19128561885">Call (912) 856-1885</a>
      <a class="btn btn-teal" href="./index.html">Get Care &#8594;</a>
    </div>
  </div>
</div>

<!-- ========== MAIN ========== -->
<main>

  <!-- HERO -->
  <section class="hero" aria-labelledby="page-h1">
    <div class="hero-inner">
      <div class="hero-label">Home Care &middot; ${escapeHtml(city.name)}, GA</div>
      <h1 class="hero-h1 serif" id="page-h1">${city.h1}</h1>
      <p class="hero-sub">${city.heroPara}</p>
      <div class="hero-ctas">
        <a class="btn btn-teal" href="tel:+19128561885">Call (912) 856-1885</a>
        <a class="btn btn-ghost" href="./index.html#about">Meet Shannon</a>
      </div>
      <div class="hero-cities-scroll" aria-label="Browse all service areas">
        <div class="hero-cities-track">
        ${heroCities}
        </div>
      </div>
    </div>
  </section>

  <!-- FEATURES -->
  <section class="features" aria-labelledby="features-h2">
    <div class="features-inner">
      <span class="label">${escapeHtml(city.featuresLabel)}</span>
      <h2 class="section-h2 serif" id="features-h2">${city.featuresH2}</h2>
      <p class="section-body">${city.featuresPara}</p>
      <div class="grid-3" role="list">
        <div class="feature-card" role="listitem">
          <span class="feature-num">01</span>
          <p class="feature-title serif">${city.card1Title}</p>
          <p class="feature-body">${city.card1Body}</p>
        </div>
        <div class="feature-card" role="listitem">
          <span class="feature-num">02</span>
          <p class="feature-title serif">${city.card2Title}</p>
          <p class="feature-body">${city.card2Body}</p>
        </div>
        <div class="feature-card" role="listitem">
          <span class="feature-num">03</span>
          <p class="feature-title serif">${city.card3Title}</p>
          <p class="feature-body">${city.card3Body}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- SHANNON CREDENTIAL -->
  <section class="shannon" aria-labelledby="shannon-h2">
    <div class="shannon-inner">
      <div class="shannon-badge">
        <p class="shannon-name serif">Shannon<br />Stafford<br />Simpson</p>
        <p class="shannon-role">Founder &amp; CNA</p>
        <div class="shannon-cred">
          <span>Certified CNA</span>
          <span>CPR</span>
          <span>Med Tech</span>
        </div>
      </div>
      <div>
        <span class="label">Founded by a caregiver</span>
        <h2 class="section-h2 serif" id="shannon-h2">Every other agency hired caregivers. Shannon was one.</h2>
        <blockquote class="shannon-quote">"I didn't buy a franchise. I earned a credential &mdash; then built a team I'd trust with my own mother."</blockquote>
        <p class="shannon-body">${city.shannonPara}</p>
      </div>
    </div>
  </section>

  <!-- LOCAL AREA -->
  <section class="local-area" aria-labelledby="local-h2">
    <div class="local-inner">
      <span class="label">Areas we serve ${prep} ${escapeHtml(city.name)}</span>
      <h2 class="section-h2 serif" id="local-h2">We know ${escapeHtml(city.name)}.</h2>
      <p class="section-body" style="margin-bottom: 0;">${city.localAngle}</p>
      <div class="areas-strip" role="navigation" aria-label="All service areas">
${areasStrip}
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="faq-section" id="faq" aria-labelledby="faq-h2">
    <div class="faq-inner">
      <span class="label">Common questions</span>
      <h2 class="section-h2 serif" id="faq-h2">Questions from ${escapeHtml(city.name)} families.</h2>
      <div class="faq-list" role="list">
${faqItems}
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta" aria-labelledby="cta-h2">
    <div class="cta-inner">
      <span class="label" style="color:rgba(255,255,255,0.4)">Get Started &middot; ${escapeHtml(city.name)}, GA</span>
      <h2 id="cta-h2" class="serif">The first conversation costs nothing.</h2>
      <p>Free 20-minute care assessment. We tell you exactly what care looks like and what it costs before you decide anything.</p>
      <div class="cta-btns">
        <a class="btn btn-white" href="tel:+19128561885">Call (912) 856-1885</a>
        <a class="btn btn-ghost-white" href="./index.html">See the full site &#8594;</a>
      </div>
      <p class="cta-note">No pressure &middot; Same-day response &middot; Free, no obligation</p>
    </div>
  </section>

</main>

<!-- ========== CITIES STRIP ========== -->
<nav class="cities-strip" aria-label="All service areas">
  <div class="cities-strip-inner">
    <span class="cities-strip-label">Service areas</span>
    ${citiesStrip}
  </div>
</nav>

<!-- ========== FOOTER V2 ========== -->
<footer class="footer-v2" role="contentinfo">
  <div class="footer-v2-inner">
    <div class="footer-v2-top">

      <!-- Brand column -->
      <div>
        <a href="./index.html" class="footer-logo-mark" aria-label="Savannah Personal Care Services home">
          <span class="footer-logo-eyebrow">Savannah</span>
          <span class="footer-logo-primary">Personal Care Services</span>
        </a>
        <p class="footer-brand-tagline">Bringing Compassion and Mercy Home.</p>
        <div class="footer-social">
          <a href="https://www.facebook.com/share/1JH11GeHQ5/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
        </div>
      </div>

      <!-- Care Services column -->
      <div>
        <p class="footer-col-label">Care Services</p>
        <nav class="footer-col-links" aria-label="Care services">
          <a href="./care-options.html#transitional">Transitional Care</a>
          <a href="./care-options.html#daily-living">Daily Living Assistance</a>
          <a href="./care-options.html#dementia">Dementia Care Support</a>
          <a href="./care-options.html#respite">Respite Care</a>
          <a href="./care-options.html">Compare All Services</a>
        </nav>
      </div>

      <!-- Company column -->
      <div>
        <p class="footer-col-label">Company</p>
        <nav class="footer-col-links" aria-label="Company links">
          <a href="./about.html">About Shannon</a>
          <a href="./index.html#process">How It Works</a>
          <a href="./careers.html">Careers</a>
          <a href="./index.html#guide-section">Free Family Guide</a>
        </nav>
      </div>

      <!-- Contact column -->
      <div>
        <p class="footer-col-label">Contact</p>
        <div class="footer-col-contact">
          <a href="tel:+19128561885">(912) 856-1885</a>
          <a href="mailto:savpcs@yahoo.com">savpcs@yahoo.com</a>
          <span>Savannah, Georgia</span>
          <span class="footer-license-badge">Georgia PHCP Licensed</span>
        </div>
      </div>

    </div>

    <!-- Guide bar -->
    <div class="footer-guide-bar">
      <div class="footer-guide-text">
        <span class="footer-guide-eyebrow">Free Resource</span>
        <span class="footer-guide-headline">The Savannah Family Guide to Home Care</span>
      </div>
      <a class="footer-guide-btn" href="./index.html#guide-section">Download the Free Family Guide &#8594;</a>
    </div>

    <div class="footer-v2-bottom">
      <span>&copy; 2026 Savannah Personal Care Services. All rights reserved.</span>
      <nav class="footer-v2-legal" aria-label="Legal links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms &amp; Conditions</a>
        <a href="#">Accessibility</a>
      </nav>
    </div>
  </div>
</footer>

<!-- ========== JS: MOBILE NAV + FAQ ACCORDION ========== -->
<script>
(function () {
  'use strict';

  /* ---------- MOBILE NAV ---------- */
  var menuBtn    = document.querySelector('.nav-menu-btn');
  var navDrawer  = document.getElementById('nav-drawer');
  var navBackdrop = document.getElementById('nav-backdrop');
  var drawerOpen = false;

  function openDrawer() {
    drawerOpen = true;
    navDrawer.removeAttribute('hidden');
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        navDrawer.classList.add('is-open');
        navBackdrop.classList.add('is-open');
        menuBtn.classList.add('is-open');
        menuBtn.setAttribute('aria-expanded', 'true');
        menuBtn.setAttribute('aria-label', 'Close menu');
        document.body.style.overflow = 'hidden';
      });
    });
    document.addEventListener('keydown', onDrawerKey);
  }

  function closeDrawer() {
    drawerOpen = false;
    navDrawer.classList.remove('is-open');
    navBackdrop.classList.remove('is-open');
    menuBtn.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onDrawerKey);
    setTimeout(function () {
      if (!drawerOpen) navDrawer.setAttribute('hidden', '');
    }, 260);
  }

  function onDrawerKey(e) { if (e.key === 'Escape') closeDrawer(); }

  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      drawerOpen ? closeDrawer() : openDrawer();
    });
  }
  if (navBackdrop) { navBackdrop.addEventListener('click', closeDrawer); }
  if (navDrawer) {
    navDrawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeDrawer);
    });
  }

  /* ---------- FAQ ACCORDION ---------- */
  var faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    var btn    = item.querySelector('.faq-btn');
    var answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;

    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open');

      // Close all
      faqItems.forEach(function (el) {
        el.classList.remove('is-open');
        var b = el.querySelector('.faq-btn');
        var a = el.querySelector('.faq-answer');
        if (b) b.setAttribute('aria-expanded', 'false');
        if (a) a.style.maxHeight = null;
      });

      // If it was closed, open this one
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

})();
</script>

</body>
</html>`;
}

// ─────────────────────────────────────────────
// GENERATE ALL PAGES
// ─────────────────────────────────────────────
function wordCount(html) {
  // Strip tags, collapse whitespace, count words
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return text.split(' ').filter(w => w.length > 0).length;
}

console.log('\nGenerating location pages for Savannah Personal Care Services...\n');
console.log('File                        Size (KB)   Word Count');
console.log('─'.repeat(52));

cities.forEach(city => {
  const html = buildPage(city);
  const filename = `${city.slug}.html`;
  const filepath = join(OUTPUT_DIR, filename);
  writeFileSync(filepath, html, 'utf8');

  const sizeKB = (Buffer.byteLength(html, 'utf8') / 1024).toFixed(1);
  const words  = wordCount(html);
  const pad    = filename.padEnd(28);
  console.log(`${pad}${String(sizeKB).padStart(6)} KB   ${words} words`);
});

console.log('\nAll 8 pages written to ' + OUTPUT_DIR);
