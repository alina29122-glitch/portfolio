const contexts = {
  "mgid-feature-design": [
    "Advertisers managing campaigns and publishers monetizing website content.",
    "An established ad platform was expanding advertiser tools and publisher formats.",
    "Balance advertiser control, publisher revenue, and audience trust."
  ],
  "mgid-user-activation": [
    "New advertisers onboarding to MGID.",
    "Early drop-off was limiting activation on the new platform.",
    "Simplify onboarding without compromising verification requirements."
  ],
  "yola-growth": [
    "Small businesses and creators building websites without coding.",
    "Growth became a key focus across activation, monetization, and acquisition.",
    "Balance user progress with opportunities to introduce paid value."
  ],
  "latitude-retention": [
    "First-time website builders with different goals and levels of experience.",
    "Yola was improving early activation, retention, and site publishing.",
    "Make the first session useful without overwhelming new users."
  ],
  "sitebuilder-tools": [
    "Small-business users creating websites without technical expertise.",
    "A new website-building platform was moving from concept through MVP to launch.",
    "Balance feature depth with simple interactions and reusable patterns."
  ],
  "site-templates": [
    "People choosing and customizing a starting point for their business website.",
    "A new sitebuilder needed a reusable template system for different business niches.",
    "Keep templates flexible, responsive, and easy to customize."
  ]
};

export function caseContextFor(slug) {
  return (contexts[slug] || []).map((body, index) => ({
    title: ["USERS", "BUSINESS CONTEXT", "CONSTRAINTS"][index], body
  }));
}

export function renderCaseContext(columns) {
  return `<div class="case-context-columns">${columns.map(({ title, body }) => `<article><h3>${title}</h3><p>${body}</p></article>`).join("")}</div>`;
}
