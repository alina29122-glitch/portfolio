// Editable case-study skeleton; temporary copy will be refined section by section.
export const yolaGrowthCase = {
  heroTitle: "Product design that drives growth",
  heroPlaceholder: "HERO IMAGE — PLACEHOLDER",
  metadata: [
    { label: "Role & teams", text: "Product Designer · Activation & Monetization teams" },
    { label: "Scope", text: "Activation & retention · Monetization · User acquisition · Product growth strategy" },
    { label: "Delivered", text: "Activation journeys & Website Assistant · Paywall, checkout & domain purchase flows · 20+ templates across 16 business verticals" }
  ],
  sections: [
    {
      id: "tldr", eyebrow: "TL;DR",
      summary: "Yola is a website-building platform that helps people and small businesses create and publish websites without coding. My task was to improve growth across the customer journey, helping new users reach value sooner, publish their sites, and move toward paid plans.",
      body: "I worked across activation, monetization, and acquisition, designing connected improvements throughout the journey: from personalized onboarding and product guidance to paywalls, checkout, domain purchase flows, and new website templates."
    },
    {
      id: "strategy", eyebrow: "STRATEGY",
      type: "statement",
      title: "<span class=\"strategy-inputs\">Acquisition + activation + monetization = inputs</span> <span class=\"strategy-outcome\">Sustainable product growth = outcome</span>"
    },
    {
      id: "activation", eyebrow: "ACTIVATION",
      title: "Helping users reach value sooner",
      approach: "I mapped where users lost momentum from initial intent to publishing, focusing on two stages: reaching first value and creating reasons to return.",
      valueJourneys: [
        { title: "First value", steps: "Define the goal → Set up the site → Build → Publish" },
        { title: "Ongoing value", steps: "Return → Discover more value → Expand usage → Upgrade" }
      ],
      valueJourneysClosing: "These stages shaped the activation work that followed: personalized setup, contextual guidance, and a clearer path to publishing.",
      featureLayout: true,
      caseFeatureRows: [
        {
          "label": "PERSONALIZATION",
          "title": "Adapting setup to user goals",
          "changes": [
            "Added self-classification to setup",
            "Captured website type and goals",
            "Tailored starting paths by user needs"
          ],
          "result": "Better segmentation enabled relevant recommendations and clearer paths to first value.",
          "image": "yola-personalized-activation"
        },
        {
          "label": "PRODUCT GUIDANCE",
          "title": "Turning guidance into progress",
          "changes": [
            "Designed task-based welcome guidance",
            "Added contextual Website Assistant tips",
            "Surfaced relevant next steps"
          ],
          "result": "Users completed key tasks with fewer errors, supporting activation and early retention.",
          "image": "yola-product-guidance"
        },
        {
          "label": "EDITING & PUBLISHING",
          "title": "Reducing friction before publishing",
          "changes": [
            "Improved image, text, button, and link editing",
            "Streamlined block discovery and customization",
            "Added clearer publishing and upgrade triggers"
          ],
          "result": "Website-quality proxy metrics improved, reinforcing their link to publishing and retention.",
          "image": "yola-editing-publishing"
        }
      ]
    },
    {
      id: "monetization", eyebrow: "MONETIZATION",
      title: "Making upgrades feel clear, not disruptive",
      challenge: {
        label: "Approach",
        statement: "Timing + transparency + tone = less disruptive selling."
      },
      body: "Monetization needed to support the user journey without undermining trust or interrupting users before they understood the product’s value.",
      featureLayout: true,
      caseFeatureRows: [
        {
          "label": "PAYWALL",
          "title": "Clarifying value before upgrade",
          "changes": [
            "Redesigned in-app and website paywalls",
            "Simplified pricing and plan comparison",
            "Optimized plan selection for mobile"
          ],
          "result": "Clearer choices improved conversion from paywall display to hosting purchase.",
          "image": "yola-paywall"
        },
        {
          "label": "CHECKOUT",
          "title": "Reducing friction at purchase",
          "changes": [
            "Created a responsive checkout flow",
            "Simplified multi-product purchases",
            "Clarified payments and order details"
          ],
          "result": "Checkout abandonment decreased while mobile engagement increased.",
          "image": "yola-checkout"
        },
        {
          "label": "DOMAIN PURCHASE",
          "title": "Making domain selection easier",
          "changes": [
            "Redesigned domain search and selection",
            "Added autocomplete and clearer results",
            "Matched domain offers to relevant plans"
          ],
          "result": "The updated flow improved domain purchase conversion and supported stronger retention.",
          "image": "yola-domain-purchase"
        }
      ]
    },
    {
      id: "acquisition", eyebrow: "ACQUISITION",
      title: "Turning customer needs into discoverable templates",
      opportunity: "Customer requests revealed gaps in Yola’s template library across key business categories, limiting product relevance and organic discovery.",
      changes: [
        "Analyzed requests and missing categories",
        "Prioritized high-value template opportunities",
        "Built a repeatable design-to-launch process",
        "Created 20+ SEO-ready templates across 16 verticals"
      ],
      media: [{ src: "assets/case-02.png", alt: "Yola skincare business template example with a product page and search result preview" }]
    },
    {
      id: "outcome", eyebrow: "OUTCOME",
      summary: "The redesigned journey helped more users return, reach value, and publish their websites.",
      metrics: [["+16.1%", "Day-1 user retention"], ["+6.4%", "user activation rate"], ["+10.3%", "site publish rate"]],
      closingBody: "The work also established a more connected product-growth approach across activation, monetization, and acquisition."
    },
    {
      id: "reflection", eyebrow: "REFLECTION",
      challenge: { label: "KEY LESSON", statement: "Sustainable growth comes from connecting the entire customer journey rather than optimizing individual screens." },
      lessonCardsLayout: "editorial",
      lessonCards: [
        { title: "Design for the journey", body: "Small improvements become more meaningful when they support a connected path toward customer value." },
        { title: "Align user and business value", body: "Activation and monetization work best when users understand the product’s value before being asked to upgrade." },
        { title: "Measure beyond the interface", body: "Funnel data, behavioral signals, and direct feedback helped connect design changes to retention and growth." }
      ]
    }
  ]
};
