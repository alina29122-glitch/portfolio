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
