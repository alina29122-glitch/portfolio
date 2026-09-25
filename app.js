import { renderMgidOnboarding, setupMgidOnboardingNavigation } from "./mgid-onboarding.js?v=clean-routes-1";
import { yolaGrowthCase } from "./yola-growth.js?v=clean-routes-1";

import { edtechCase } from "./edtech-case.js?v=clean-routes-1";
import { CustomCursor, cursorShapes } from "./components/CustomCursor.js?v=cursor-follow-6";

const projects = [
  {
    slug: "new-project",
    cardEyebrow: "2025–2026 / NDA · EDTECH",
    cardTitle: "From product opportunity to AI learning experience",
    cardSummary: "Worked across a portfolio of AI-powered education products, from a flagship learning experience to new web and mobile tools for studying, writing, and problem-solving.",
    years: "2025-2026",
    company: "NDA · EdTech",
    title: "From product opportunity to AI learning experience",
    image: "case-ai-education",
    previewVideo: "/assets/nda-case-hero.mp4",
    previewPoster: "/assets/nda-case-preview.jpg",
    summary:
      "Exploring AI learning opportunities through research, concept validation, product strategy, and end-to-end design for web and mobile experiences.",
    role:
      "Product Designer · Founding Product Designer · R&D & Venture",
    delivered: "Research, concept validation, product strategy, UX/UI, functional prototyping, and post-release iteration.",
    whatIDid: ["Opportunity discovery", "Market research", "Product strategy", "Concept validation", "UX/UI", "AI-assisted MVP development", "Post-launch optimization"],
    sidebarNote: {
      label: "Note",
      body: "Covered by NDA. This case focuses on the process rather than confidential details."
    },
  },
  {
    slug: "mgid-feature-design",
    cardEyebrow: "2023–2024 / MGID · ADTECH",
    cardTitle: "Driving smarter advertising for 850M+ monthly users",
    cardSummary: "MGID is a global native advertising platform connecting advertisers and publishers. I designed and improved core workflows for campaign management, tracking, integrations, targeting, and monetization across the platform.",
    years: "2023–2024",
    company: "MGID · AdTech",
    title: "Driving smarter advertising for 850M+ monthly users",
    image: "case-06",
    caseHeroImage: "mgid-dashboard-hero-gif",
    summary:
      "Improving a large-scale advertising platform: simplifying campaign setup, ad creation, and management while building scalable experiences across the product ecosystem.",
    role: "Senior Product Designer · Advertiser, Publisher, Compliance & Antifraud teams",
    scope: "End-to-end feature design · User research · Design systems · A/B testing · Post-release data analysis · Iterative improvements",
    team: "Product · Engineering · Compliance · Antifraud",
    delivered: "Campaign management improvements · Tracking and integrations · 60+ native ad formats",
    whatIDid: ["Product discovery", "UX/UI", "Complex workflows", "Data analysis", "Design systems", "Design documentation", "A/B testing", "Post-release optimization"],
    outcome: "Improved advertiser workflows · Expanded publisher monetization · Built a scalable widget system",
    sections: [
      {
        eyebrow: "/TL;DR",
        body:
          "MGID connects advertisers running campaigns with publishers monetizing content across their websites. Designing for both sides meant balancing advertiser control and performance with publisher revenue and audience trust within an already data-heavy platform.\n\nI improved campaign management, tracking, integrations, and traffic controls for advertisers, and led the design of 60+ native ad formats and built a scalable widget system for publishers. I owned features end to end, partnering with product and engineering from research through post-release analysis.",
        ecosystemDiagram: {
          items: [
            {
              title: "Advertisers",
              body: "Launch and optimize campaigns."
            },
            {
              title: "MGID platform",
              body: "Matches campaigns with audiences and publisher placements through AI and real-time bidding.",
              emphasis: true
            },
            {
              title: "Publishers",
              body: "Monetize content through native ad placements."
            }
          ]
        },
        bullets: []
      },
      {
        title: "Designing scalable advertiser workflows",
        eyebrow: "/ADVERTISERS",
        challenge: {
          label: "CHALLENGE",
          statement: "Advertisers manage performance, budgets, tracking, and traffic controls in one data-heavy platform. As MGID evolved, new capabilities had to fit into existing workflows without making frequent tasks harder to complete."
        },
        body: "I designed advertiser-focused features to improve campaign management, performance tracking, integrations, and targeting precision. My goal was to help advertisers launch, optimize, and scale campaigns efficiently while making data-backed decision-making intuitive and accessible.",
        bullets: [],
        featureLayout: "grid",
        caseFeatureRows: [
          {
            label: "Campaign management",
            title: "Managing campaigns at scale",
            context: "The dashboard combined real-time performance analytics, budget tracking, and targeting controls in one data-heavy workspace.",
            solution: "Working with the team, I improved frequent workflows through smarter filtering, bulk actions, CPC controls, and clearer budget tracking.",
            image: "mgid-dashboard-feature-01"
          },
          {
            label: "Tracking & integrations",
            title: "Simplifying performance tracking",
            context: "The platform supported pixels, postbacks, webhooks, UTM parameters, conversion goals, and native integrations.",
            solution: "I simplified how these methods were organized and configured, reducing manual setup and making campaign performance easier to track.",
            image: "mgid-dashboard-feature-02"
          },
          {
            label: "Transparency & control",
            title: "Giving advertisers greater control",
            context: "Advertisers needed greater visibility into campaign placements and more control over traffic quality, brand safety, and spend.",
            solution: "I designed bid adjustments and blocklist tools across placements, geographies, devices, and traffic sources.",
            image: "mgid-dashboard-feature-04"
          }
        ]
      },
      {
        title: "Designing 60+ native ad formats",
        eyebrow: "/PUBLISHERS",
        body:
          "I led the end-to-end design of 60+ native ad widget formats, balancing monetization, visibility, and engagement while integrating ads naturally into publisher content.\n\nUsing heatmaps, session recordings, performance analytics, A/B testing, and publisher feedback, I evaluated how placement and presentation affected engagement. I also built MGID’s widget design system from scratch, turning recurring design decisions into reusable rules for creating and adapting new formats across publisher platforms.",
        challenge: {
          label: "CHALLENGE",
          statement: "Publishers needed ad formats that generated revenue and remained visible without disrupting how people consumed content. Different page structures, customization needs, and monetization goals made one fixed format impossible to scale."
        },
        bullets: [],
        featureLayout: "stack",
        caseFeatureRows: [
          {
            label: "Smart widgets",
            title: "Optimizing formats for engagement",
            context: "Publishers needed ad formats that could adapt to different content environments and audience behaviors while keeping recommendations relevant and engaging.",
            solution: "I designed flexible, AI-powered widget layouts that adjusted content hierarchy and presentation to improve engagement while supporting publisher monetization.",
            image: "mgid-widget-01"
          },
          {
            label: "Native placements",
            title: "Preserving the reading experience",
            context: "Ads needed to remain visible and effective without disrupting how people consumed content on publisher websites.",
            solution: "I designed native placements that integrated recommendations into the reading flow, balancing ad visibility and engagement with audience trust.",
            image: "mgid-widget-02"
          }
        ]
      },
      {
        title: "",
        eyebrow: "/retrospective",
        challenge: {
          label: "KEY LESSON",
          statement: "Designing for a two-sided platform meant that no decision could be made in isolation. Improving advertiser control could affect publisher monetization and audience trust, so the strongest solutions came from evaluating each change across the entire ecosystem."
        },
        lessonCardsLayout: "editorial",
        lessonCards: [
          {
            title: "What changed my approach",
            body: "Behavioral research explained user needs, while post-release data showed how solutions performed in real conditions."
          },
          {
            title: "What made the work scale",
            body: "The widget design system turned repeated decisions into reusable rules, making new formats faster and more consistent to deliver."
          },
          {
            title: "What I’d explore next",
            body: "If I revisited the project, I would explore deeper personalization around the distinct jobs-to-be-done of advertisers and publishers."
          }
        ],
        bullets: []
      }
    ]
  },
  {
    slug: "mgid-user-activation",
    cardEyebrow: "2023–2024 / MGID · ADTECH",
    cardTitle: "Turning first-time users into active advertisers",
    cardSummary: "For MGID’s advertiser platform, I redesigned the journey from signup and verification to first campaign setup. The goal was to make onboarding clearer and help new users reach value faster.",
    years: "2023-2024",
    company: "MGID · AdTech",
    title: "Helping new advertisers succeed from day one",
    image: "case-05",
    summary:
      "Redesigned the first-time user journey: from signup and verification to a new onboarding strategy that reduced friction and increased user activation.",
    role: "Senior Product Designer",
    delivered:
      "Redesigned the first-time user journey: from signup and verification to a new onboarding strategy that reduced friction and increased user activation.",
    whatIDid: ["User research", "CJM", "User flow redesign", "Onboarding strategy", "UX/UI", "Prototyping", "A/B testing", "Post-release analysis", "User feedback loop"],
    outcome:
      "A scalable onboarding strategy, improved first-time user experience, and measurable activation gains.",
    stats: [
      ["22%", "Lower drop-off at key signup friction points"],
      ["16%", "Increase in user activation rate"],
      ["28%", "Faster verification completion time"]
    ],
    sections: [
      {
        title: "First impression matters",
        body:
          "This project focused on improving the user's initial experience and optimizing the onboarding journey. The goal was to create a seamless, engaging, and conversion-focused onboarding experience.",
        bullets: [
          "Conducted user-flow analysis to identify barriers and logic issues.",
          "Designed a comprehensive onboarding experience to improve engagement and activation.",
          "Integrated a third-party onboarding tool and managed setup for product use."
        ]
      },
      {
        title: "Research and activation barriers",
        body:
          "After MGID launched a modernized platform, early user feedback became essential. I collaborated with UX research to categorize feedback, identify friction points, and prioritize improvements.",
        bullets: [
          "Analyzed feedback from platform switchers moving from the legacy product.",
          "Identified confusion in sign-up, verification, and early product exploration.",
          "Connected qualitative insights with funnel drop-offs and session-recording evidence."
        ]
      },
      {
        title: "Onboarding as a product strategy",
        body:
          "I introduced a guided activation approach with progress indicators, personalized onboarding content, a get-started checklist, and a dedicated overview for users switching from the legacy platform.",
        bullets: [
          "Simplified sign-up and login flows.",
          "Moved verification later in the activation journey so users could see product value first.",
          "Created repeatable feedback loops that became part of the team's design workflow."
        ]
      }
    ]
  },
  {
    slug: "yola-growth",
    cardEyebrow: "YOLA · GROWTH",
    cardTitle: "Designing growth across the customer journey",
    cardSummary: "Yola is a website-building platform for small businesses and creators. I worked across acquisition, activation, and monetization to improve how users discovered the product, started building, and moved toward paid plans.",
    years: "2021-2022",
    company: "Yola · Sitebuilder",
    title: "Product design that drives growth",
    image: "case-02",
    summary:
      "Helped shape Yola’s growth strategy, turning user insights and funnel opportunities into product improvements across activation, retention, monetization, and acquisition.",
    role: "Product Designer",
    delivered: "Helped shape Yola’s growth strategy, turning user insights and funnel opportunities into product improvements across activation, retention, monetization, and acquisition.",
    whatIDid: ["Growth strategy", "UX research", "Product data analysis", "Funnel analysis", "UX audit", "Opportunity discovery", "UX/UI", "A/B testing", "Post-release analysis"],
    outcome: "Design strategies that supported activation, monetization, and acquisition goals.",
    sections: [
      {
        title: "Product design for growth",
        body:
          "Working inside a product team, I helped shape experiments and product improvements connected to growth metrics while keeping user needs central.",
        bullets: [
          "Explored activation barriers and opportunities in the site-builder journey.",
          "Designed monetization touchpoints with attention to timing and clarity.",
          "Created acquisition-related concepts and supported team decision-making."
        ]
      }
    ]
  },
  {
    slug: "latitude-retention",
    cardEyebrow: "YOLA · ONBOARDING",
    cardTitle: "Helping new users succeed from day one",
    cardSummary: "For Yola’s website builder, I redesigned early product experiences to help first-time users understand the platform, start building with confidence, and reach meaningful progress sooner.",
    years: "2021-2022",
    company: "Yola · Website Builder",
    title: "Turning user JTBD into personalized experiences",
    image: "case-03",
    summary:
      "Redesigned the onboarding experience around real user behavior and JTBD, turning research insights into personalized guidance that improved Day-1 retention, activation, and site publishing rate.",
    role: "Product Designer",
    delivered: "Redesigned the onboarding experience around real user behavior and JTBD, turning research insights into personalized guidance that improved Day-1 retention, activation, and site publishing rate.",
    whatIDid: ["User interviews", "User research", "JTBD", "Journey mapping", "Usability testing", "UX/UI", "Prototyping", "Post-release analysis"],
    outcome: "126% increase in Day-1 user retention.",
    stats: [["126%", "Increase in Day-1 user retention"]],
    sections: [
      {
        title: "Redesigning the first session",
        body:
          "The project focused on making the first product session clearer and more motivating for new users. I tested assumptions through usability sessions and refined the onboarding based on observed behavior.",
        bullets: [
          "Created wireframes for a new onboarding direction.",
          "Organized, designed, and conducted usability testing sessions.",
          "Used findings to refine the final design version."
        ]
      }
    ]
  },
  {
    slug: "sitebuilder-tools",
    cardEyebrow: "YOLA · WEBSITE BUILDER",
    cardTitle: "Building the foundation of a new website builder",
    cardSummary: "Helped shape a new generation of Yola’s website-building product. I designed core creation tools and reusable patterns that made building and editing websites simpler and more scalable.",
    years: "2018-2020",
    company: "Yola · Sitebuilder",
    title: "Building a website builder from scratch to launch",
    image: "case-01",
    summary:
      "Helped shape a new site-building platform from early concept to MVP and launch, designing 65+ features and scalable patterns that made website creation simpler for users without technical expertise.",
    role: "UX/UI Designer",
    delivered: "Helped shape a new site-building platform from early concept to MVP and launch, designing 65+ features and scalable patterns that made website creation simpler for users without technical expertise.",
    whatIDid: ["UX research", "Product design", "UX/UI", "Prototyping", "Design systems", "Feature design", "Post-launch iteration"],
    outcome: "A broad suite of usable site-building tools for small-business users.",
    sections: [
      {
        title: "Building a product foundation",
        body:
          "With deep empathy for the audience, I focused on creating a friendly interface that helped users build their online presence without unnecessary complexity.",
        bullets: [
          "Designed tools and patterns for a new site-building platform.",
          "Balanced feature depth with approachable interaction design.",
          "Collaborated across design and product to support a platform launch."
        ]
      }
    ]
  },
  {
    slug: "site-templates",
    cardEyebrow: "YOLA · TEMPLATES",
    cardTitle: "Helping users go from blank page to published website",
    cardSummary: "Designed and evolved Yola’s template experience to give users a stronger starting point. The work helped people choose, customize, and launch websites with less effort.",
    years: "2018-2019",
    company: "Yola · Sitebuilder",
    title: "Designing a template system from the ground up",
    image: "case-04",
    summary:
      "Created Yola’s template system from scratch for the new sitebuilder, combining reusable blocks, flexible customization, and niche-specific templates to help users launch professional websites faster.",
    role: "UX/UI Designer",
    delivered: "Created Yola’s template system from scratch for the new sitebuilder, combining reusable blocks, flexible customization, and niche-specific templates to help users launch professional websites faster.",
    whatIDid: ["Template strategy", "UX/UI", "Design systems", "Component architecture", "Visual design", "Prototyping", "Design documentation"],
    outcome: "Reusable template starting points for different small-business categories.",
    sections: [
      {
        title: "Templates as product onboarding",
        body:
          "Templates gave users a practical starting point and reduced the blank-page problem. I designed flexible layouts that could adapt across business categories and screen sizes.",
        bullets: [
          "Created responsive, customizable templates.",
          "Designed for different business niches and user intents.",
          "Balanced visual polish with practical editing flexibility."
        ]
      }
    ]
  }
];

const experience = [
  ["Apr 2023 - Dec 2024", "MGID | Senior Product Designer", "Designed and launched features for a new advertising platform, shaping hypotheses, design variations, and improvements."],
  ["Aug 2022 - Present", "Self-employed | Design mentor", "Shared product-design knowledge with UX and Product Designers across levels."],
  ["Dec 2020 - Sep 2022", "Yola | Product Designer", "Built solutions that met users' needs and supported stronger business results."],
  ["Dec 2019 - Dec 2020", "Yola | Senior UX/UI Designer", "Performed research across product limitations and dependencies to define practical solutions."],
  ["Dec 2017 - Dec 2019", "Yola | UX/UI Designer", "Supported the legacy platform and helped create a new site-building platform from scratch."],
  ["Oct 2014 - Dec 2017", "Freelance Web Designer", "Designed landing pages, websites, desktop apps, and mobile applications across domains."]
];

const testimonials = [
  {
    quote: "It was a pleasure to work with Alina. She made an outstanding contribution as a UI/UX and Product designer. She helped establish user experience best practices and patterns for a DIY web presence solution used by millions of users. Her ability to conduct customer research to amplify the voice of the customer and to drive experimentation helped drive measurable product metric improvements.",
    name: "Brent Viljoen",
    role: "Co-founder and CEO - Yola",
    initials: "BV"
  },
  {
    quote: "Alina is a talented Product Designer with great empathy toward users. She advocates for users' needs and converts her knowledge into features that are useful for users and profitable for a company.",
    name: "Andrei Karol",
    role: "Vice President of Product - Yola",
    initials: "AK"
  }
];

const isBrowser = typeof document !== "undefined";
const app = isBrowser ? document.querySelector("#app") : { innerHTML: "" };
const header = isBrowser ? document.querySelector("[data-header]") : null;
const menuToggle = isBrowser ? document.querySelector(".portfolio-menu-toggle") : null;
function setNavigationOpen(open) {
  header?.classList.toggle("is-menu-open", open);
  menuToggle?.setAttribute("aria-expanded", String(open));
  menuToggle?.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
}
if (isBrowser) {
  menuToggle?.addEventListener("click", () => {
    setNavigationOpen(menuToggle.getAttribute("aria-expanded") !== "true");
  });
  header?.addEventListener("click", (event) => {
    if (event.target.closest("a")) setNavigationOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header?.classList.contains("is-menu-open")) {
      setNavigationOpen(false);
      menuToggle?.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!header?.contains(event.target)) setNavigationOpen(false);
  });
  window.matchMedia("(min-width: 992px)").addEventListener("change", () => setNavigationOpen(false));
}
const motionQuery = [
  ".project-card",
  ".featured-project-card",
  ".testimonial-shell",
  ".cta-band > *",
  ".two-column",
  ".timeline-item",
  ".process-card",
  ".stat-card",
  ".case-meta",
  ".visual-panel",
  ".other-case-card",
  ".case-section ul"
].join(",");

let hasRendered = false;
let routeTimer;
let revealObserver;
let linkPreviewCleanup;
let projectShowcaseCleanup;
let testimonialsCleanup;
let caseLightboxCleanup;
let caseHeroParallaxCleanup;
let homeHeroScrollCleanup;
let projectPreviewCleanup;
let caseSectionNavCleanup;
let caseSectionNavObserver;


function projectUrl(slug) {
  return `/case/${slug}`;
}

function projectsSection(items, { showSeeAll = false, label = "/projects" } = {}) {
  return `
    <section class="section section-tight projects-section" id="projects">
      <div class="projects-shell">
        ${label ? `
          <div class="projects-label">
            <p class="project-year">${label}</p>
          </div>
        ` : ""}
        <div class="projects-list">
          ${items.map((project) => projectCard(project, { home: true })).join("")}
        </div>
        ${showSeeAll ? `
          <div class="projects-actions">
            <a class="button projects-see-all" href="/projects">
              <span>All cases here</span>
              <img src="/assets/lets-talk-icon.svg" alt="" />
            </a>
          </div>
        ` : ""}
      </div>
    </section>
  `;
}

function projectsBySlug(slugs) {
  return slugs.map((slug) => projects.find((project) => project.slug === slug)).filter(Boolean);
}

function workProjectGroups() {
  return [
    {
      year: "2025-2026",
      label: "AI · EdTech",
      items: projectsBySlug(["new-project"])
    },
    {
      year: "2023-2024",
      label: "MGID · AdTech",
      items: projectsBySlug(["mgid-feature-design", "mgid-user-activation"])
    },
    {
      year: "2018-2022",
      label: "Yola · Site Builder",
      items: projectsBySlug(["yola-growth", "latitude-retention", "sitebuilder-tools", "site-templates"])
    }
  ];
}

function groupedProjectsSection(groups) {
  return `
    <section class="section section-tight projects-section work-timeline-section" id="projects">
      <div class="projects-shell work-timeline-shell">
        <div class="work-project-groups">
          ${groups.map((group) => `
            <section class="work-project-group" aria-label="${group.year} ${group.label}">
              <div class="work-project-group-meta">
                <p class="work-project-group-year">${group.year}</p>
                <p class="work-project-group-label">${group.label}</p>
              </div>
              <div class="work-project-group-list">
                ${group.items.map((project) => projectCard(project)).join("")}
              </div>
            </section>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function featuredProjectsSection(items, { showSeeAll = false } = {}) {
  return `
    <section class="section section-tight featured-projects-section" id="projects">
      <div class="featured-projects-shell">
        <div class="projects-label">
          <p class="project-year">Selected works</p>
        </div>
        <div class="featured-projects-list">
          ${items.map((project) => `
            <a class="featured-project-card" href="${projectUrl(project.slug)}" aria-label="${project.title}">
              <span class="featured-project-media">
                <span class="project-image ${project.image}"></span>
              </span>
              <span class="featured-project-copy">
                <span class="project-year">${project.years} / ${project.company}</span>
                <span class="featured-project-text">
                  <h3>${project.title}</h3>
                  <span>${project.delivered}</span>
                </span>
                <span class="featured-project-link">Read case ↗</span>
              </span>
            </a>
          `).join("")}
        </div>
        ${showSeeAll ? `
          <div class="projects-actions featured-projects-actions">
            <a class="button projects-see-all" href="/projects">
              <span>All cases here</span>
            </a>
          </div>
        ` : ""}
      </div>
    </section>
  `;
}

function testimonialsSection() {
  return `
    <section class="section testimonial" data-testimonials>
      <div class="testimonial-shell">
        <p class="project-year">Testimonials</p>
        <div class="testimonial-quotes">
          ${testimonials.map((testimonial, index) => `
            <blockquote class="testimonial-quote${index === 0 ? " is-active" : ""}" data-testimonial-quote data-testimonial-index="${index}">
              ${testimonial.quote}
            </blockquote>
          `).join("")}
        </div>
        <div class="testimonial-author-row">
          <div class="testimonial-author-buttons" aria-label="Testimonials">
            ${testimonials.map((testimonial, index) => `
              <button class="testimonial-author-button${index === 0 ? " is-active" : ""}" type="button" data-testimonial-trigger data-testimonial-index="${index}" aria-label="Show testimonial from ${testimonial.name}" aria-pressed="${index === 0 ? "true" : "false"}">
                <span>${testimonial.initials}</span>
              </button>
            `).join("")}
          </div>
          <span class="testimonial-divider" aria-hidden="true"></span>
          <div class="testimonial-author-info">
            ${testimonials.map((testimonial, index) => `
              <cite class="testimonial-author-panel${index === 0 ? " is-active" : ""}" data-testimonial-author data-testimonial-index="${index}">
                <span>${testimonial.name}</span>
                <span>${testimonial.role}</span>
              </cite>
            `).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderHome() {
  const latestProjects = projects.slice(0, 4);
  const floatingImages = [
    ["edtech-math-solver-v2.png", 5, 18, 180],
    ["mgid-dashboard-feature-01.png", 71, 4, 220],
    ["yola-editing-publishing.png", 34, 38, 170],
    ["edtech-study-practice-v2.png", 89, 48, 150],
    ["mgid-widget-02.png", 17, 66, 190],
    ["yola-product-guidance.png", 58, 85, 200],
    ["edtech-learning-companion-v3.png", 4, 112, 170],
    ["mgid-dashboard-feature-03.png", 81, 133, 210],
    ["yola-domain-purchase.png", 38, 155, 180],
    ["edtech-academic-writing-v2.png", 65, 180, 170],
    ["mgid-widget-01.png", 13, 197, 200],
    ["yola-checkout.png", 90, 218, 170],
  ];

  app.innerHTML = `
    <div class="home-hero-scroll">
    <section class="minimal-hero opportunity-hero" aria-labelledby="opportunity-hero-title">
      <div class="opportunity-hero-shell">
        <div class="opportunity-hero-copy">
          <h1 id="opportunity-hero-title"><span>I’m a Senior Product Designer shaping products from discovery to launch.</span> Always learning to make better products and grow as a designer (/human)</h1>
        </div>
        <div class="opportunity-hero-photo-placeholder"><img class="opportunity-hero-photo" src="/assets/home-hero-portrait.png" alt="Alina Diadenko" width="1122" height="1402" fetchpriority="high" /></div>
        <div class="opportunity-hero-facts" aria-label="Portfolio overview">
          <div class="opportunity-hero-fact opportunity-hero-experience">
            <span class="opportunity-hero-fact-label">Experience</span>
            <p>10+ years in product design · B2B &amp; B2C · SaaS</p>
            <a class="opportunity-hero-cta" href="#projects"><span>View work</span><span aria-hidden="true">↗</span></a>
          </div>
          <div class="opportunity-hero-fact">
            <span class="opportunity-hero-fact-label">Domains</span>
            <p>AdTech · EdTech · Website builders</p>
          </div>
          <div class="opportunity-hero-fact">
            <span class="opportunity-hero-fact-label">Contact</span>
            <p class="opportunity-hero-contact-links">
              <a href="mailto:alina.dyadenko@gmail.com">alina.dyadenko@gmail.com</a>
              <a href="https://www.linkedin.com/in/alina-diadenko/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            </p>
            <a class="opportunity-hero-cta" href="mailto:alina.dyadenko@gmail.com"><span>Let’s talk</span><span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
      <div class="home-hero-float-layer" aria-hidden="true">
        ${floatingImages.map(([src, x, offset, width], index) => `
          <img class="home-hero-float-card" src="/assets/${src}" alt="" decoding="async"
            style="--card-x: ${x}%; --card-width: ${width}px"
            data-offset="${offset}" data-speed="${0.9 + (index % 3) * 0.08}" />
        `).join("")}
      </div>
    </section>
    </div>

    ${projectsSection(latestProjects, { showSeeAll: projects.length > latestProjects.length, label: "Selected works" })}

    ${testimonialsSection()}

    ${cta()}
  `;
}

function renderProjects() {
  app.innerHTML = `
    <section class="section work-page-intro">
      <div class="work-page-intro-shell">
        <p class="intro-text">A selection of projects shaped through<br /><span>thoughtful design, clear strategy,</span><br /><span>and measurable impact.</span></p>
      </div>
    </section>
    ${groupedProjectsSection(workProjectGroups())}
    ${cta()}
  `;
}

function projectCard(project, { home = false, cursorVariant = project.cursorVariant || Object.keys(cursorShapes)[projects.indexOf(project) % Object.keys(cursorShapes).length] } = {}) {
  const homeNda = home && project.slug === "new-project";
  const cardTitle = home ? project.cardTitle || project.title : project.title;
  return `
    <article class="project-card${homeNda ? " project-card-home-nda" : ""}">
      <a class="project-media"${cursorVariant ? ` data-cursor="${cursorVariant}"` : ""} href="${projectUrl(project.slug)}" aria-label="${cardTitle}">
        ${project.previewVideo ? `
          <img class="project-image project-preview-poster" src="${project.previewPoster}" alt="" loading="lazy" />
          <video class="project-preview-video" data-preview-src="${project.previewVideo}" muted loop playsinline preload="none" aria-hidden="true"></video>
        ` : `<span class="project-image ${project.image}"></span>`}
      </a>
      <div class="project-card-info">
        <div class="card-info">
          <p class="project-year">${home && project.cardEyebrow ? project.cardEyebrow : `${project.years} / ${project.company}`}</p>
          <div>
            <h3><a class="project-title-link" href="${projectUrl(project.slug)}">${homeNda ? "From product<br>opportunity to AI<br>learning experience" : cardTitle}</a></h3>
            <p>${home && project.cardSummary ? project.cardSummary : project.delivered}</p>
            ${!home && project.whatIDid ? `
              <div class="project-scope">
                <span>What I did</span>
                <ul>
                  ${project.whatIDid.map((item) => `<li>${item}</li>`).join("")}
                </ul>
              </div>
            ` : ""}

          </div>
          <a class="underline-link" href="${projectUrl(project.slug)}" data-preserve-label="true">
            <span>Explore case</span>
            <img src="/assets/lets-talk-icon.svg" alt="" />
          </a>
        </div>
      </div>
    </article>
  `;
}

function otherCases(currentProject) {
  const currentIndex = projects.findIndex((project) => project.slug === currentProject.slug);
  const orderedProjects = [
    ...projects.slice(currentIndex + 1),
    ...projects.slice(0, currentIndex)
  ].filter((project) => project.slug !== currentProject.slug);
  const relatedProjects = orderedProjects.slice(0, 2);

  if (!relatedProjects.length) return "";

  return `
    <section class="section section-tight other-cases">
      <div>
        <h2 class="other-cases-heading">Other cases.</h2>
        <div class="other-cases-grid">
          ${relatedProjects.map((project) => `
            <a class="other-case-card" href="${projectUrl(project.slug)}" aria-label="${project.title}">
              <span class="other-case-media">
                <span class="project-image ${project.image}"></span>
              </span>
              <span class="other-case-caption">
                <span>${project.title}</span>
                <span>${project.years}</span>
              </span>
            </a>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function sectionLabel(section, index) {
  return (section.eyebrow || section.title || `Section ${index + 1}`).replace(/^\//, "");
}

function caseHeroInfo(project) {
  if (project.metadata) return project.metadata;
  if (project.slug === "mgid-feature-design") {
    return [
      { label: "Role & teams", text: project.role },
      { label: "Scope", text: project.scope },
      { label: "Delivered", text: project.delivered }
    ];
  }

  return [
    { label: "Role", text: project.role },
    { label: "Scope", text: project.delivered || project.summary },
    { label: "Approach", text: project.whatIDid?.join(" · ") }
  ].filter((item) => item.text);
}

function caseSectionId(project, section, index) {
  if (section.id) return section.id;
  if (project.slug === "mgid-feature-design") {
    const key = sectionLabel(section, index);
      const idOverrides = {
        Context: "context",
        "TL;DR": "context",
      "dashboard features": "advertisers",
      "for advertisers": "advertisers",
      ADVERTISERS: "advertisers",
      "ad widgets": "publishers",
      PUBLISHERS: "publishers",
      retrospective: "reflection"
    };
    if (idOverrides[key]) return idOverrides[key];
  }

  return `case-s-${index}`;
}

function caseSideLabel(project, section, index) {
  const label = sectionLabel(section, index);
  if (project.slug === "mgid-feature-design") {
    const labelOverrides = {
      Context: "Context",
      "dashboard features": "Advertiser experience",
      "for advertisers": "/for advertisers",
      ADVERTISERS: "/ADVERTISERS",
      "ad widgets": "Publisher experience",
      PUBLISHERS: "/PUBLISHERS",
      retrospective: "Reflection"
    };
    return labelOverrides[label] || label;
  }

  return label;
}

function caseReferenceNav(project, sections) {
  const links = sections
    .map((section, sectionIndex) => {
      const index = sectionIndex + 1;
      const label = caseSideLabel(project, section, index).replace(/^\//, "");
      return {
        href: `#${caseSectionId(project, section, index)}`,
        label
      };
    })
    .filter((item) => item.label);

  if (!links.length) return "";

  return `
    <nav class="case-section-nav" aria-label="Case sections">
      ${links.map((link) => `<a href="${link.href}">${link.label}</a>`).join("")}
    </nav>
  `;
}

function renderAbout() {
  app.innerHTML = `
    <section class="section">
      <div class="two-column">
        <h1 class="lead">I’m an ally to people who use products I designed</h1>
        <div class="body-copy">
          <p>With ~10 years of design experience, I apply my expertise to create a vision for developing products, focusing on users' and clients' goals to achieve better results and providing a complete, start-to-finish design service.</p>
          <p>My avocation is design mentorship. I share knowledge and experience with UX/Product Designers at different levels, helping them advance careers, build technical and soft skills, develop portfolios, and achieve their goals.</p>
          <p>I'm dedicated to creating thoughtful and functional design that delivers customer value and positively impacts society.</p>
        </div>
      </div>
    </section>

    <section class="section section-tight">
      <div class="timeline">
        ${experience.map(([date, title, description]) => `
          <article class="timeline-item">
            <div class="project-year">${date}</div>
            <div>
              <h3>${title}</h3>
              <p class="body-copy">${description}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="section section-tight">
      <div class="two-column">
        <h2 class="lead">My work process & responsibilities</h2>
        <p class="body-copy">As a Product Designer, I work closely with product and engineering teams to improve platforms and develop new features from ideation to launch, including post-release support and analysis.</p>
      </div>
      <div class="process-grid">
        <article class="process-card"><h3>Co-author</h3><p class="body-copy">Strategic planning, ideation, prioritization, product research, and requirements with the product team.</p></article>
        <article class="process-card"><h3>Primary responsibilities</h3><p class="body-copy">User research, concept design, prototyping, testing, design artifacts, requirements, development support, and QA.</p></article>
        <article class="process-card"><h3>Support & quality control</h3><p class="body-copy">Release support, announcements, product communication, user feedback loops, and post-release analysis.</p></article>
      </div>
    </section>

    ${cta()}
  `;
}

function cta() {
  return `
    <section class="section cta-band">
      <div class="cta-content">
        <div class="cta-copy">
          <p class="project-year">/Let's talk/</p>
          <h2>Want to create something great together?</h2>
        </div>
        <a class="button cta-contact-button" href="https://ua.linkedin.com/in/alina-diadenko" target="_blank" rel="noreferrer">
          <span>Contact me</span>
        </a>
      </div>
    </section>
  `;
}

function renderCase(slug) {
  const sourceProject = projects.find((item) => item.slug === slug);
  if (!sourceProject) {
    renderNotFound();
    return;
  }

  const caseContent = { "yola-growth": yolaGrowthCase, "new-project": edtechCase }[slug];
  const project = caseContent ? { ...sourceProject, ...caseContent } : sourceProject;

  if (slug === "mgid-user-activation") {
    app.innerHTML = renderMgidOnboarding(project, otherCases, cta);
    return;
  }

  const caseHeroTitle = project.heroTitle || project.title;
  const contentSections = project.sections;

  const renderBodyWithEcosystemDiagram = (section) => {
    if (!section.body) return "";

    const paragraphs = section.body.split("\n\n");
    const bodyMarkup = paragraphs.map((paragraph) => `<p class="body-copy">${paragraph}</p>`);

    if (section.ecosystemDiagram && bodyMarkup.length > 1) {
      bodyMarkup.splice(1, 0, `
        <div class="case-ecosystem-diagram">
          ${section.ecosystemDiagram.label ? `<p class="case-ecosystem-label">${section.ecosystemDiagram.label}</p>` : ""}
          <div class="case-ecosystem-row">
            ${section.ecosystemDiagram.items.map((item, itemIndex) => `
              ${itemIndex > 0 ? `<span class="case-ecosystem-connector" aria-hidden="true">↔</span>` : ""}
              <div class="case-ecosystem-item${item.emphasis ? " is-emphasized" : ""}">
                <h3>${item.title}</h3>
                <p>${item.body}</p>
              </div>
            `).join("")}
          </div>
        </div>
      `);
    }

    return bodyMarkup.join("");
  };

  const renderResearchTags = (section) => section.researchTags ? `
        <div class="case-research-tags">
          <p class="case-research-tags-label">${section.researchLabel}</p>
          <div class="case-research-tags-list">
            ${section.researchTags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </div>
      ` : "";

  const renderSectionContent = (section) => `
    <div class="case-reference-content">
      ${section.chapterLabel ? `<p class="case-feature-label">${section.chapterLabel}</p>` : ""}
      ${section.title ? `<h2>${section.title}</h2>` : ""}
      ${section.summary ? `<p class="case-challenge-statement case-summary">${section.summary}</p>` : ""}
      ${section.lead ? `<p class="case-section-lead">${section.lead}</p>` : ""}
      ${section.challenge ? `
        <div class="case-challenge-block">
          <p class="case-challenge-statement"><span class="case-challenge-label">${section.challenge.label}</span> ${section.challenge.statement}</p>
          ${section.challenge.question ? `<p class="case-challenge-question">${section.challenge.question}</p>` : ""}
        </div>
      ` : ""}
      ${section.accentBody ? `<p class="case-section-accent">${section.accentBody}</p>` : ""}
      ${section.bodyTitle ? `<h2 class="case-body-title">${section.bodyTitle}</h2>` : ""}
      ${renderBodyWithEcosystemDiagram(section)}
      ${section.note ? `<aside class="case-disclosure" aria-label="${section.noteLabel || "Project note"}"><img src="/assets/lock.svg" width="16" height="16" alt="" />${section.noteLabel ? `<p class="case-disclosure-label">${section.noteLabel}</p>` : ""}<p class="case-disclosure-copy">${section.note}</p></aside>` : ""}
      ${section.phases ? `<div class="case-phases">${section.phases.map(phase => `<article class="case-ecosystem-item"><h3>${phase.title}</h3><p>${phase.role}</p><ul>${phase.focus.map(item => `<li>${item}</li>`).join("")}</ul></article>`).join("")}</div>` : ""}
      ${section.approach ? `<div class="case-challenge-block"><p class="case-challenge-statement"><span class="case-challenge-label">Approach</span> ${section.approach}</p></div>` : ""}
      ${section.growthStages ? `<div class="case-growth-stages" aria-label="Connected stages of product growth">${section.growthStages.map((stage, index) => `${index ? '<span aria-hidden="true">→</span>' : ''}<span>${stage}</span>`).join("")}</div>` : ""}
      ${section.valueJourneys ? `<p class="body-copy case-value-journeys">${section.valueJourneys.map(journey => `${journey.title}: <span class="case-value-steps">${journey.steps}</span>`).join("<br>")}</p>${section.valueJourneysClosing ? `<p class="body-copy case-value-closing">${section.valueJourneysClosing}</p>` : ""}` : ""}
      ${section.opportunity ? `<div class="case-opportunity-columns"><div><h3>Opportunity:</h3><p>${section.opportunity}</p></div><div><h3>What I did:</h3><ul>${section.changes.map(change => `<li>${change}</li>`).join("")}</ul></div></div>` : ""}
      ${section.changes && !section.opportunity ? `<div class="case-changes"><p class="case-feature-label">${section.changesLabel || "What changed"}</p><ul>${section.changes.map(change => `<li>${change}</li>`).join("")}</ul></div>` : ""}
      ${section.media ? `<div class="case-evidence">${section.media.map(item => item.src ? `<button class="case-feature-media" type="button" data-lightbox-image="${item.src}" data-lightbox-caption="${item.alt}" aria-label="Open image: ${item.alt}"><img class="case-feature-image" src="${item.src}" alt="${item.alt}" loading="lazy" width="1242" height="807" /></button>` : `<div class="case-media-placeholder" role="img" aria-label="${item.placeholder}"><span>${item.placeholder}</span></div>`).join("")}</div>` : ""}
      ${section.metrics ? `<div class="case-result-metrics" aria-label="Results">${section.metrics.map(([value, label]) => `<div><strong>${value}</strong><p>${label}</p></div>`).join("")}</div>` : ""}
      ${section.bullets && section.bullets.length ? `<ul>${section.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>` : ""}
      ${!section.researchTagsAfterEvidence ? renderResearchTags(section) : ""}
      ${section.textBlocks ? `
        <div class="case-text-blocks">
          ${section.textBlocks.map((block, blockIndex) => `
            <article class="case-text-block">
              <p class="case-feature-label">${String(blockIndex + 1).padStart(2, "0")} / ${block.label}</p>
              <h3>${block.title}</h3>
              <p>${block.body}</p>
            </article>
          `).join("")}
        </div>
      ` : ""}
      ${section.infoCards ? `
        <div class="case-info-card-grid">
          ${section.infoCards.map((card) => `
            <article class="case-info-card">
              <span class="case-info-card-icon" aria-hidden="true"></span>
              <h4>${card.title}</h4>
              <ul>
                ${card.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
              </ul>
            </article>
          `).join("")}
        </div>
      ` : ""}
      ${section.opportunityCards ? `
        <div class="opportunity-cards">
          ${section.opportunityCards.map((card) => `
            <article class="opportunity-card">
              ${card.counter ? `<p class="opportunity-counter">${card.counter}</p>` : ""}
              <h3>${card.title}</h3>
              <div class="opportunity-card-body">
                ${card.meta ? `<p class="opportunity-meta">${card.meta}</p>` : ""}
                ${card.body ? `<p>${card.body}</p>` : ""}
              </div>
            </article>
          `).join("")}
        </div>
      ` : ""}
      ${section.lessonCards ? `
        <div class="lesson-cards${section.lessonCardsLayout === "editorial" ? " lesson-cards-editorial" : ""}">
          ${section.lessonCards.map((lesson, lessonIndex) => `
            <article class="lesson-card">
              ${section.lessonCardsLayout === "editorial" ? "" : `<p class="lesson-card-number">${String(lessonIndex + 1).padStart(2, "0")}</p>`}
              <h3>${lesson.title}</h3>
              <p>${lesson.body}</p>
            </article>
          `).join("")}
        </div>
      ` : ""}
      ${section.closingBody ? `<p class="body-copy case-closing-body">${section.closingBody}</p>` : ""}
      ${section.next ? `<p class="case-challenge-statement case-next"><span class="case-challenge-label">NEXT</span> ${section.next}</p>` : ""}
      ${section.closingStatement ? section.closingTitle ? `
        <div class="case-scaling-step">
          <p class="case-scaling-step-label">${section.closingLabel}</p>
          <h3>${section.closingTitle}</h3>
          <p>${section.closingStatement}</p>
        </div>
      ` : `<p class="case-closing-statement">${section.closingStatement}</p>` : ""}
      ${section.featureGrid ? `
        <div class="case-feature-grid">
          ${section.featureGrid.map((item) => `
            <article class="case-feature-grid-item">
              ${item.image ? `
                <button
                  class="case-feature-grid-media"
                  type="button"
                  data-lightbox-image="/assets/${item.image}.png"
                  data-lightbox-caption="${item.title}"
                  aria-label="Open ${item.title} image fullscreen"
                >
                  <span class="project-image ${item.image}"></span>
                </button>
              ` : ""}
              <div class="case-feature-grid-copy">
                <h3>${item.title}</h3>
                <p>${item.body}</p>
              </div>
            </article>
          `).join("")}
        </div>
      ` : ""}
      ${section.caseFeatureRows ? `
        <div class="${section.featureLayout ? "case-feature-list case-feature-list-grid" : "case-feature-list"}">
          ${section.caseFeatureRows.map((item) => `
            <article class="${section.featureLayout ? "case-feature-row case-feature-card case-feature-card-detailed" : "case-feature-row"}${section.featureLayout === "full-width" ? " case-feature-card-full-width" : ""}">
              <div class="case-feature-copy">
                <p class="case-feature-label">${item.label}</p>
                ${section.featureLayout ? `
                  <div class="case-feature-bottom-group">
                    ${item.platform && item.platformAboveTitle ? `<p class="case-feature-platform">${item.platform}</p>` : ""}
                    <h3>${item.title}</h3>
                    ${item.platform && !item.platformAboveTitle ? `<p class="case-feature-platform${item.platformPill ? " case-feature-platform-pill" : ""}">${item.platform}</p>` : ""}
                    <div class="case-feature-body-group">
                      ${item.description ? item.descriptionLabel ? `<div class="case-feature-detail"><h4>${item.descriptionLabel}:</h4><p>${item.description}</p></div>` : `<p>${item.description}</p>` : ""}
                      ${item.changes
                        ? `<div class="case-feature-detail"><h4>${item.changesLabel || "What I did"}:</h4><ul>${item.changes.map(change => `<li>${change}</li>`).join("")}</ul></div>${item.result ? `<div class="case-feature-detail"><h4>${item.resultLabel || "Result"}:</h4><p>${item.result}</p></div>` : ""}`
                        : item.context && item.solution
                        ? `<p>${item.context}</p><p>${item.solution}</p>`
                        : item.body.split("\n\n").map((paragraph) => `<p>${paragraph}</p>`).join("")}
                    </div>
                  </div>
                ` : `
                  <h3>${item.title}</h3>
                  ${item.body.split("\n\n").map((paragraph) => `<p>${paragraph}</p>`).join("")}
                `}
              </div>
              ${item.image ? `<button
                class="case-feature-media"
                type="button"
                data-lightbox-image="/assets/${item.image}.png"
                data-lightbox-caption="${item.title}"
                aria-label="Open ${item.title} image fullscreen"
              >
                <img class="case-feature-image" src="/assets/${item.image}.png" alt="" />
              </button>` : `<div class="case-feature-media case-media-placeholder" role="img" aria-label="${item.placeholder}"><span>${item.placeholder}</span></div>`}
            </article>
          `).join("")}
        </div>
      ` : ""}
      ${section.questionEvidence ? `
        <div class="question-evidence${section.questionEvidenceLayout === "editorial" ? " question-evidence-editorial lesson-cards lesson-cards-editorial" : ""}" aria-label="Validation questions and evidence">
          ${section.questionEvidence.map((item, itemIndex) => section.questionEvidenceLayout === "editorial" ? `
            <article class="question-evidence-item lesson-card">
              <p class="question-evidence-stage">${String(itemIndex + 1).padStart(2, "0")} / ${item.stage}</p>
              ${item.question ? `<h3>${item.question}</h3>` : ""}
              <div class="question-evidence-copy">${item.reducedUncertainty ? `<p>${item.reducedUncertainty}</p>` : ""}${item.points ? `<ul class="question-evidence-points">${item.points.map(point => `<li>${point}</li>`).join("")}</ul>` : ""}${item.methods ? `<ul class="question-evidence-methods-list">${item.methods.map(method => `<li>${method}</li>`).join("")}</ul>` : ""}</div>
            </article>` : `
            <article class="question-evidence-item">
              <div class="question-evidence-copy">
                <h3>${section.questionEvidenceLayout === "editorial" ? `<span class="case-question-number">${String(itemIndex + 1).padStart(2, "0")}</span> ` : ""}${item.question}</h3>
                <p>${item.reducedUncertainty}</p>
                ${item.methods ? `
                  <ul class="question-evidence-methods">
                    ${item.methods.map((method) => `<li>${method}</li>`).join("")}
                  </ul>
                ` : ""}
              </div>
              ${section.questionEvidenceLayout === "editorial" ? "" : `<div class="question-evidence-funnel" aria-hidden="true">
                <span class="question-evidence-segment">
                  <span class="question-evidence-marker">${String(itemIndex + 1).padStart(2, "0")}</span>
                </span>
              </div>`}
            </article>
          `).join("")}
        </div>
      ` : ""}
      ${section.questionEvidenceClosing ? `<p class="body-copy question-evidence-closing">${section.questionEvidenceClosing}</p>` : ""}
      ${section.researchTagsAfterEvidence ? renderResearchTags(section) : ""}
      ${section.cards ? `
        <div class="visual-cards${section.cardLayout === "compact" ? " visual-cards-compact" : ""}">
          ${section.cards.map((card) => `
            <article class="visual-card">
              <span class="visual-card-icon" aria-hidden="true">${card.iconText ? `<span class="visual-card-icon-text">${card.iconText}</span>` : card.icon ? `<img src="${card.icon}" alt="" />` : ""}</span>
              <div class="visual-card-copy">
                <h4>${card.title}</h4>
                ${card.body ? `<p>${card.body}</p>` : ""}
              </div>
            </article>
          `).join("")}
        </div>
      ` : ""}
    </div>
  `;

  app.innerHTML = `
    <article class="case-page case-page-${project.slug}">
    <section class="section case-layout-section">
      <div class="case-layout case-hero-layout">
        <div class="case-hero-copy">
          <div class="case-panel-heading">
            <p class="case-panel-eyebrow">${project.years} / ${project.company.toUpperCase()}</p>
            <h1 class="page-title">${caseHeroTitle}</h1>
            ${project.heroSubtitle ? `<p class="body-copy case-hero-subtitle">${project.heroSubtitle}</p>` : ""}
          </div>
        </div>
        <div class="case-hero-content">
          <div class="case-hero-details">
            ${caseHeroInfo(project).map((item) => `<article><span>${item.label}</span><p>${item.text}</p></article>`).join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="section case-visual-section">
      <div class="case-visual-container">
        <div class="case-hero-visual" aria-label="${project.title} image">
          ${project.heroVideo ? `<video class="case-hero-video" autoplay muted loop playsinline preload="metadata" aria-label="${project.title}"><source src="${project.heroVideo}" type="video/mp4"></video>` : project.heroPlaceholder ? `<div class="case-media-placeholder" role="img" aria-label="${project.heroPlaceholder}"><span>${project.heroPlaceholder}</span></div>` : `<span class="project-image ${project.caseHeroImage || project.image}"></span>`}
        </div>
      </div>
    </section>

    <div class="case-study-layout case-study-body">
      <aside class="case-section-nav-shell case-study-sidebar" aria-label="Case navigation">
        ${caseReferenceNav(project, contentSections)}
      </aside>
      <main class="case-study-main case-study-content">
        ${project.stats ? `
          <section class="section section-tight">
            <div class="stats-grid">
              ${project.stats.map(([value, label]) => `<article class="stat-card"><strong>${value}</strong><p>${label}</p></article>`).join("")}
            </div>
          </section>
        ` : ""}

        ${contentSections.map((section, sectionIndex) => {
          const index = sectionIndex + 1;
          const sectionId = caseSectionId(project, section, index);
          const sectionLayoutClass = [
            section.featureLayout ? "case-feature-layout-section" : "",
            sectionIndex === 0 && !project.stats ? "case-section-intro" : "",
            section.lessonCards ? "case-section-reflection" : "",
            (sectionIndex > 0 || project.stats) && !section.lessonCards ? "case-section-chapter" : ""
          ].filter(Boolean).map((name) => ` ${name}`).join("");
          return section.type === "statement" ? `
            <section id="${sectionId}" class="section section-tight case-reference-section case-section case-study-section case-statement">
              <div class="case-reference-grid">
                <div class="case-reference-content">
                  <h2>${section.title}</h2>
                </div>
              </div>
            </section>
          ` : `
            <section id="${sectionId}" class="section section-tight case-reference-section case-section case-study-section${sectionLayoutClass}">
              <div class="case-reference-grid">
                ${renderSectionContent(section)}
              </div>
            </section>
          `;
        }).join("")}
      </main>
    </div>
    ${otherCases(project)}
    ${cta()}
    </article>
  `;
}

function renderNotFound() {
  app.innerHTML = `
    <section class="section not-found">
      <h1 class="page-title">Page not found</h1>
      <p class="intro-text">This page does not exist yet.</p>
      <p><a class="button" href="/">Go home</a></p>
    </section>
  `;
}

export const pagePaths = ["/", "/projects", "/about", ...projects.map(project => projectUrl(project.slug))];

export function pageMetadata(path) {
  const project = projects.find(item => projectUrl(item.slug) === path);
  const content = project && ({ "new-project": edtechCase, "yola-growth": yolaGrowthCase }[project.slug] || project);
  return {
    title: project ? `${content.heroTitle || project.title} | Alina Diadenko` :
      path === "/projects" ? "Projects | Alina Diadenko" :
      path === "/about" ? "About | Alina Diadenko" :
      path === "/" ? "Alina Diadenko | Product Designer Portfolio" : "Page not found | Alina Diadenko",
    description: project ? project.cardSummary || project.summary :
      "Alina Diadenko, Senior Product Designer portfolio: case studies, experience, design process, and contact details.",
    canonical: `https://alina-di.com${path === "/" ? "/" : path}`
  };
}

function renderCurrentRoute(path) {
  const caseMatch = path.match(/^\/case\/([^/]+)$/);
  if (path === "/") renderHome();
  else if (path === "/projects") renderProjects();
  else if (path === "/about") renderAbout();
  else if (caseMatch) renderCase(caseMatch[1]);
  else renderNotFound();
}

// The build and the browser use exactly the same semantic page markup.
export function renderPage(path) {
  renderCurrentRoute(path);
  return app.innerHTML;
}

function updatePageMetadata(path) {
  const meta = pageMetadata(path);
  document.title = meta.title;
  document.querySelector('meta[name="description"]').content = meta.description;
  document.querySelector('link[rel="canonical"]').href = meta.canonical;
  document.querySelector('meta[name="robots"]').content = pagePaths.includes(path) ? "index, follow" : "noindex";
}

function currentPath() {
  return window.location.pathname.replace(/\/+$/, "") || "/";
}

// One-time compatibility for bookmarks shared before the clean-URL migration.
function migrateLegacyUrl() {
  const fragment = window.location.hash;
  if (fragment.startsWith("#/")) {
    const legacy = fragment.slice(1);
    const match = legacy.match(/^(\/case\/[^/#]+)(?:[/#]([^/]+))?$/);
    const target = match ? match[1] + (match[2] ? `#${match[2]}` : "") : legacy;
    history.replaceState(null, "", target);
  } else if (currentPath() === "/" && /^#(context|advertisers|publishers|reflection|advertiser-experience|publisher-experience)$/.test(fragment)) {
    const anchor = fragment.replace("advertiser-experience", "advertisers").replace("publisher-experience", "publishers");
    history.replaceState(null, "", `/case/mgid-feature-design${anchor}`);
  }
}

let renderedPath;
function route() {
  const path = currentPath();
  // Fragment navigation stays within the current document; it never remounts a case.
  if (hasRendered && renderedPath === path && !app.classList.contains("is-changing")) return;
  projectCursor.hide();
  projectPreviewCleanup?.();
  setNavigationOpen(false);
  document.body.classList.toggle("is-home-route", path === "/");
  document.body.classList.toggle("is-work-route", path === "/projects" || path.startsWith("/case/"));
  const activeNavItem = path === "/about" ? "about" : path === "/" ? "home" : "work";
  document.querySelectorAll("[data-nav-link]").forEach(link => {
    const active = link.dataset.navLink === activeNavItem;
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", path.startsWith("/case/") ? "location" : "page");
    else link.removeAttribute("aria-current");
  });
  const render = () => {
    renderCurrentRoute(path);
    updatePageMetadata(path);
    requestAnimationFrame(() => {
      makeLinksSentenceCase();
      setupAccordions();
      setupMotion();
      setupProjectShowcaseHover();
      setupProjectVideoPreviews();
      setupTestimonials();
      setupHoverLinkPreviews();
      setupCaseLightbox();
      setupCaseSectionNav();
      if (app.querySelector(".case-page-mgid-user-activation")) caseSectionNavObserver?.disconnect();
      setupMgidOnboardingNavigation();
      app.classList.remove("is-changing");
      const anchor = window.location.hash.slice(1);
      const target = anchor ? document.getElementById(anchor) : null;
      if (target) target.scrollIntoView({ behavior: "instant", block: "start" });
      else window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      setupCaseHeroParallax();
      renderedPath = path;
      hasRendered = true;
    });
  };
  clearTimeout(routeTimer);
  if (!hasRendered) render();
  else {
    app.classList.add("is-changing");
    routeTimer = setTimeout(render, 180);
  }
}

function setupHistoryNavigation() {
  document.addEventListener("click", event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest("a[href]");
    if (!link || link.hasAttribute("download") || (link.target && link.target !== "_self")) return;
    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin) return;
    const path = url.pathname.replace(/\/+$/, "") || "/";
    if (!pagePaths.includes(path)) return;
    if (path === currentPath() && url.hash) return;
    event.preventDefault();
    if (path === currentPath()) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    history.pushState(null, "", url.pathname + url.search + url.hash);
    route();
  });
  window.addEventListener("popstate", route);
}

function toSentenceCase(str) {
  if (!str) return str;
  const s = String(str).trim().toLowerCase();
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function makeLinksSentenceCase() {
  const selectors = [
    '.site-footer nav a',
    '.underline-link'
  ];
  const nodes = document.querySelectorAll(selectors.join(','));
  nodes.forEach((a) => {
    if (!a || a.dataset._caseNormalized || a.dataset.preserveLabel) return;
    if (a.querySelector('img, svg')) return;
    const text = a.textContent || '';
    const normalized = toSentenceCase(text);
    if (normalized && normalized !== text) a.textContent = normalized;
    a.dataset._caseNormalized = '1';
  });
}

function setupAccordions() {
  app.querySelectorAll(".process-pipeline").forEach((pipeline) => {
    const cards = [...pipeline.querySelectorAll(".pipeline-card")];

    cards.forEach((card) => {
      card.addEventListener("toggle", () => {
        if (!card.open) return;
        cards.forEach((otherCard) => {
          if (otherCard !== card) otherCard.open = false;
        });
      });
    });
  });
}

function updateCaseSectionNavActive() {
  const nav = app.querySelector(".case-section-nav");
  if (!nav) return;

  const links = [...nav.querySelectorAll('a[href^="#"]:not([href="/projects"])')];
  const sections = links
    .map((link) => ({ link, section: document.querySelector(link.getAttribute("href")) }))
    .filter((item) => item.section);

  if (!sections.length) return;

  const anchorOffset = window.innerHeight * 0.28;
  const active = sections.reduce((current, item) => {
    const top = item.section.getBoundingClientRect().top;
    return top <= anchorOffset ? item : current;
  }, sections[0]);

  links.forEach((link) => {
    const isActive = link === active.link;
    link.classList.toggle("is-active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function setupCaseSectionNav() {
  caseSectionNavCleanup?.();
  caseSectionNavObserver?.disconnect();
  const nav = app.querySelector(".case-section-nav");
  if (!nav) {
    caseSectionNavCleanup = null;
    caseSectionNavObserver = null;
    return;
  }

  const links = [...nav.querySelectorAll('a[href^="#"]:not([href="/projects"])')];
  const sectionById = new Map(
    links
      .map((link) => {
        const id = link.getAttribute("href")?.slice(1);
        const section = id ? app.querySelector(`#${id}`) : null;
        return section ? [id, { link, section }] : null;
      })
      .filter(Boolean)
  );

  const setActiveLink = (id) => {
    links.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const caseBody = app.querySelector(".case-page .case-study-body");
  const sidebar = caseBody?.querySelector(".case-study-sidebar");
  const syncStickyPosition = () => {
    if (!caseBody || !sidebar) return;
    if (window.matchMedia("(max-width: 1199px)").matches) {
      const navTop = Math.ceil((header?.getBoundingClientRect().height || 74) + 12);
      caseBody.style.setProperty("--case-sticky-offset", `${navTop}px`);
      sectionById.forEach(({ section }) => {
        section.style.setProperty("--case-anchor-offset", `${navTop + sidebar.offsetHeight + 24}px`);
      });
      return;
    }

    const headerHeight = header?.getBoundingClientRect().height || 74;
    const initialGap = parseFloat(getComputedStyle(caseBody).paddingTop) || 0;
    const availableTop = window.innerHeight - sidebar.offsetHeight - 24;
    const stickyTop = Math.round(Math.max(headerHeight + 24, Math.min(headerHeight + initialGap, availableTop)));
    caseBody.style.setProperty("--case-sticky-offset", `${stickyTop}px`);
    sectionById.forEach(({ section }) => {
      const style = getComputedStyle(section);
      const contentInset = parseFloat(style.paddingTop) + parseFloat(style.borderTopWidth);
      section.style.setProperty("--case-anchor-offset", `${stickyTop - contentInset}px`);
    });
  };
  const stickyResizeObserver = caseBody && "ResizeObserver" in window
    ? new ResizeObserver(syncStickyPosition)
    : null;
  if (caseBody) {
    window.addEventListener("resize", syncStickyPosition);
    [header, sidebar, caseBody].filter(Boolean).forEach((element) => stickyResizeObserver?.observe(element));
    syncStickyPosition();
  }
  const cleanupStickyPosition = () => {
    stickyResizeObserver?.disconnect();
    window.removeEventListener("resize", syncStickyPosition);
    caseBody?.style.removeProperty("--case-sticky-offset");
    sectionById.forEach(({ section }) => section.style.removeProperty("--case-anchor-offset"));
  };

  const handleNavClick = (event) => {
    const href = event.currentTarget.getAttribute("href");
    if (!href || href === "/projects") return;
    event.preventDefault();
    const sectionId = href.slice(1);
    const section = document.getElementById(sectionId);
    if (!section) {
      console.error(`Missing case-study section: ${sectionId}`);
      return;
    }

    setActiveLink(sectionId);
    syncStickyPosition();
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    section.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start"
    });
    history.replaceState(null, "", `${window.location.pathname}${window.location.search}#${sectionId}`);
  };

  links.forEach((link) => link.addEventListener("click", handleNavClick));

  const handleBodyEndActiveState = () => {
    const body = app.querySelector(".case-study-body");
    const lastSectionId = Array.from(sectionById.keys()).pop();
    if (!body || !lastSectionId) return;
    if (body.getBoundingClientRect().bottom <= window.innerHeight + 2) {
      setActiveLink(lastSectionId);
    }
  };

  window.addEventListener("scroll", handleBodyEndActiveState, { passive: true });

  if ("IntersectionObserver" in window) {
    caseSectionNavObserver = new IntersectionObserver((entries) => {
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));
      if (!visibleEntries.length) return;
      setActiveLink(visibleEntries[0].target.id);
    }, {
      rootMargin: "-20% 0px -65% 0px",
      threshold: 0
    });

    sectionById.forEach(({ section }) => caseSectionNavObserver.observe(section));
  } else {
    const handleScroll = () => updateCaseSectionNavActive();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    caseSectionNavCleanup = () => {
      cleanupStickyPosition();
      links.forEach((link) => link.removeEventListener("click", handleNavClick));
      window.removeEventListener("scroll", handleBodyEndActiveState);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
    updateCaseSectionNavActive();
    return;
  }

  const currentAnchor = window.location.hash.replace("#", "");
  setActiveLink(sectionById.has(currentAnchor) ? currentAnchor : sectionById.keys().next().value);

  caseSectionNavCleanup = () => {
    cleanupStickyPosition();
    links.forEach((link) => link.removeEventListener("click", handleNavClick));
    window.removeEventListener("scroll", handleBodyEndActiveState);
    caseSectionNavObserver?.disconnect();
    caseSectionNavObserver = null;
  };
}

function setupMotion() {
  revealObserver?.disconnect();
  const targets = [...app.querySelectorAll(motionQuery)].filter((target) => (
    !target.closest(".hero") &&
    !target.closest(".pipeline-copy") &&
    !target.closest(".question-evidence") &&
    !target.closest(".case-page-new-project .case-feature-detail")
  ));

  if (!("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  targets.forEach((target, index) => {
    target.classList.add("motion-item");
    target.style.transitionDelay = `${Math.min(index % 4, 3) * 60}ms`;
  });

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, {
    rootMargin: "0px 0px 16% 0px",
    threshold: 0.04
  });

  targets.forEach((target) => {
    if (target.getBoundingClientRect().top < window.innerHeight) {
      target.classList.add("is-visible");
      return;
    }
    revealObserver.observe(target);
  });
}

function setupHoverLinkPreviews() {
  linkPreviewCleanup?.();
  linkPreviewCleanup = null;

  const links = [...document.querySelectorAll("[data-preview-image]")];
  if (!links.length) return;

  const preview = document.createElement("div");
  preview.className = "hover-link-preview";
  preview.setAttribute("aria-hidden", "true");
  preview.innerHTML = `
    <div class="hover-link-preview-inner">
      <img alt="" draggable="false" />
      <div class="hover-link-preview-title"></div>
      <div class="hover-link-preview-subtitle"></div>
    </div>
  `;
  document.body.appendChild(preview);

  const image = preview.querySelector("img");
  const title = preview.querySelector(".hover-link-preview-title");
  const subtitle = preview.querySelector(".hover-link-preview-subtitle");
  const state = {
    currentX: 0,
    currentY: 0,
    targetX: 0,
    targetY: 0,
    rotate: 0,
    targetRotate: 0,
    prevX: null,
    lastPointer: null,
    frameId: 0
  };

  const renderPreview = () => {
    state.currentX += (state.targetX - state.currentX) * 0.18;
    state.currentY += (state.targetY - state.currentY) * 0.18;
    state.rotate += (state.targetRotate - state.rotate) * 0.16;
    preview.style.transform = `translate3d(${state.currentX}px, ${state.currentY}px, 0) rotate(${state.rotate}deg)`;
    state.frameId = requestAnimationFrame(renderPreview);
  };

  const showPreview = (event) => {
    const link = event.currentTarget;
    image.dataset.fallback = link.dataset.previewFallback || "/assets/photo.jpg";
    image.src = link.dataset.previewImage;
    image.alt = `${link.textContent.trim()} link preview`;
    title.textContent = link.dataset.previewTitle || "";
    subtitle.textContent = link.dataset.previewSubtitle || "";
    title.hidden = !title.textContent;
    subtitle.hidden = !subtitle.textContent;
    state.prevX = null;
    preview.classList.add("is-visible");
    movePreview(event);
    state.currentX = state.targetX;
    state.currentY = state.targetY;
    cancelAnimationFrame(state.frameId);
    state.frameId = requestAnimationFrame(renderPreview);
  };

  image.addEventListener("error", () => {
    if (image.src.endsWith(image.dataset.fallback || "")) return;
    image.src = image.dataset.fallback || "/assets/photo.jpg";
  });

  image.addEventListener("load", () => {
    if (!preview.classList.contains("is-visible") || !state.lastPointer) return;
    movePreview(state.lastPointer);
    state.currentX = state.targetX;
    state.currentY = state.targetY;
  });

  const hidePreview = () => {
    preview.classList.remove("is-visible");
    state.prevX = null;
    state.targetRotate = 0;
    cancelAnimationFrame(state.frameId);
  };

  function movePreview(event) {
    const previewWidth = preview.offsetWidth || 296;
    const previewHeight = preview.offsetHeight || 176;
    const offsetY = 20;
    state.targetX = event.clientX - previewWidth / 2;
    state.targetY = event.clientY - previewHeight - offsetY;

    if (state.targetX + previewWidth > window.innerWidth - 20) {
      state.targetX = window.innerWidth - previewWidth - 20;
    }

    if (state.targetX < 20) {
      state.targetX = 20;
    }

    if (state.targetY < 20) {
      state.targetY = event.clientY + offsetY;
    }

    if (state.prevX !== null) {
      const deltaX = event.clientX - state.prevX;
      state.targetRotate = Math.max(-15, Math.min(15, deltaX * 1.2));
    }
    state.prevX = event.clientX;
    state.lastPointer = { clientX: event.clientX, clientY: event.clientY };
  }

  links.forEach((link) => {
    link.addEventListener("mouseenter", showPreview);
    link.addEventListener("mouseleave", hidePreview);
    link.addEventListener("mousemove", movePreview);
  });

  linkPreviewCleanup = () => {
    links.forEach((link) => {
      link.removeEventListener("mouseenter", showPreview);
      link.removeEventListener("mouseleave", hidePreview);
      link.removeEventListener("mousemove", movePreview);
    });
    cancelAnimationFrame(state.frameId);
    preview.remove();
  };
}

function setupProjectVideoPreviews() {
  projectPreviewCleanup?.();
  const controller = new AbortController();
  const options = { signal: controller.signal };
  const hover = window.matchMedia("(hover: hover) and (pointer: fine)");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const stops = [];
  app.querySelectorAll(".project-preview-video").forEach(video => {
    const card = video.closest(".project-card");
    let hovered = false;
    let focused = false;
    let generation = 0;
    const stop = () => {
      generation++;
      video.classList.remove("is-playing");
      video.pause();
      if (video.readyState > 0) video.currentTime = 0;
    };
    const sync = () => {
      if ((!hovered && !focused) || reduced.matches || document.hidden) {
        stop();
        return;
      }
      const request = ++generation;
      if (!video.getAttribute("src")) video.src = video.dataset.previewSrc;
      video.muted = true;
      video.play().then(() => {
        if (generation === request) video.classList.add("is-playing");
      }).catch(() => {
        if (generation === request) stop();
      });
    };
    card.addEventListener("pointerenter", event => {
      hovered = hover.matches && event.pointerType !== "touch";
      sync();
    }, options);
    card.addEventListener("pointerleave", () => { hovered = false; sync(); }, options);
    card.addEventListener("focusin", () => { focused = true; sync(); }, options);
    card.addEventListener("focusout", event => {
      if (!card.contains(event.relatedTarget)) { focused = false; sync(); }
    }, options);
    window.addEventListener("blur", stop, options);
    document.addEventListener("visibilitychange", stop, options);
    reduced.addEventListener("change", sync, options);
    hover.addEventListener("change", () => { hovered = false; sync(); }, options);
    stops.push(stop);
  });
  projectPreviewCleanup = () => {
    controller.abort();
    stops.forEach(stop => stop());
  };
}

function setupProjectShowcaseHover() {
  projectShowcaseCleanup?.();
  projectShowcaseCleanup = null;

  const section = app.querySelector("[data-project-showcase]");
  if (!section || window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

  const rows = [...section.querySelectorAll("[data-project-showcase-row]")];
  const preview = section.querySelector("[data-project-showcase-preview]");
  const previewImages = [...section.querySelectorAll("[data-project-showcase-image]")];
  if (!rows.length || !preview || !previewImages.length) return;

  const state = {
    currentX: 0,
    currentY: 0,
    frameId: 0,
    targetX: 0,
    targetY: 0
  };

  const setActiveProject = (index) => {
    rows.forEach((row) => {
      row.classList.toggle("is-active", row.dataset.projectIndex === String(index));
    });

    previewImages.forEach((image) => {
      image.classList.toggle("is-active", image.dataset.projectIndex === String(index));
    });
  };

  const animatePreview = () => {
    state.currentX += (state.targetX - state.currentX) * 0.16;
    state.currentY += (state.targetY - state.currentY) * 0.16;
    preview.style.transform = `translate3d(${state.currentX.toFixed(1)}px, ${state.currentY.toFixed(1)}px, 0)`;
    state.frameId = requestAnimationFrame(animatePreview);
  };

  const movePreview = (event) => {
    const width = preview.offsetWidth || 560;
    const height = preview.offsetHeight || 360;
    const offset = 22;
    const minEdge = 18;
    const sourceRect = event.currentTarget?.getBoundingClientRect();
    const clientX = Number.isFinite(event.clientX)
      ? event.clientX
      : (sourceRect ? sourceRect.right : window.innerWidth / 2);
    const clientY = Number.isFinite(event.clientY)
      ? event.clientY
      : (sourceRect ? sourceRect.top + sourceRect.height / 2 : window.innerHeight / 2);

    state.targetX = Math.min(
      window.innerWidth - width - minEdge,
      Math.max(minEdge, clientX + offset)
    );
    state.targetY = Math.min(
      window.innerHeight - height - minEdge,
      Math.max(minEdge, clientY - height / 2)
    );
  };

  const showPreview = (event) => {
    setActiveProject(event.currentTarget.dataset.projectIndex);
    movePreview(event);

    if (!preview.classList.contains("is-visible")) {
      state.currentX = state.targetX;
      state.currentY = state.targetY;
      preview.style.transform = `translate3d(${state.currentX.toFixed(1)}px, ${state.currentY.toFixed(1)}px, 0)`;
      preview.classList.add("is-visible");
    }

    if (!state.frameId) {
      state.frameId = requestAnimationFrame(animatePreview);
    }
  };

  const hidePreview = () => {
    preview.classList.remove("is-visible");
    rows.forEach((row) => row.classList.remove("is-active"));
    cancelAnimationFrame(state.frameId);
    state.frameId = 0;
  };

  rows.forEach((row) => {
    row.addEventListener("mouseenter", showPreview);
    row.addEventListener("focus", showPreview);
    row.addEventListener("mousemove", movePreview);
    row.addEventListener("mouseleave", hidePreview);
    row.addEventListener("blur", hidePreview);
  });

  projectShowcaseCleanup = () => {
    rows.forEach((row) => {
      row.removeEventListener("mouseenter", showPreview);
      row.removeEventListener("focus", showPreview);
      row.removeEventListener("mousemove", movePreview);
      row.removeEventListener("mouseleave", hidePreview);
      row.removeEventListener("blur", hidePreview);
      row.classList.remove("is-active");
    });
    preview.classList.remove("is-visible");
    preview.style.transform = "";
    cancelAnimationFrame(state.frameId);
  };
}

function setupTestimonials() {
  testimonialsCleanup?.();
  testimonialsCleanup = null;

  const cleanupTasks = [];

  app.querySelectorAll("[data-testimonials]").forEach((section) => {
    const triggers = [...section.querySelectorAll("[data-testimonial-trigger]")];
    const quotes = [...section.querySelectorAll("[data-testimonial-quote]")];
    const authors = [...section.querySelectorAll("[data-testimonial-author]")];
    if (triggers.length < 2) return;

    let activeIndex = triggers.findIndex((trigger) => trigger.classList.contains("is-active"));
    if (activeIndex < 0) activeIndex = 0;
    let intervalId = 0;

    const setActive = (index) => {
      activeIndex = Number(index);

      triggers.forEach((trigger) => {
        const isActive = trigger.dataset.testimonialIndex === String(activeIndex);
        trigger.classList.toggle("is-active", isActive);
        trigger.setAttribute("aria-pressed", isActive ? "true" : "false");
      });

      quotes.forEach((quote) => {
        quote.classList.toggle("is-active", quote.dataset.testimonialIndex === String(activeIndex));
      });

      authors.forEach((author) => {
        author.classList.toggle("is-active", author.dataset.testimonialIndex === String(activeIndex));
      });
    };

    const showNext = () => setActive((activeIndex + 1) % triggers.length);

    const startCarousel = () => {
      clearInterval(intervalId);
      intervalId = window.setInterval(showNext, 10000);
    };

    const handleClick = (event) => {
      setActive(event.currentTarget.dataset.testimonialIndex);
      startCarousel();
    };

    triggers.forEach((trigger) => trigger.addEventListener("click", handleClick));
    startCarousel();

    cleanupTasks.push(() => {
      clearInterval(intervalId);
      triggers.forEach((trigger) => {
        trigger.removeEventListener("click", handleClick);
      });
    });
  });

  testimonialsCleanup = () => {
    cleanupTasks.forEach((cleanup) => cleanup());
  };
}

function setupCaseLightbox() {
  caseLightboxCleanup?.();
  caseLightboxCleanup = null;

  const triggers = [...app.querySelectorAll("[data-lightbox-image]")];
  if (!triggers.length) return;

  const lightbox = document.createElement("div");
  lightbox.className = "case-lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-hidden", "true");
  lightbox.innerHTML = `
    <button class="case-lightbox-close" type="button" aria-label="Close fullscreen image">×</button>
    <figure class="case-lightbox-figure">
      <img alt="" draggable="false" />
      <figcaption></figcaption>
    </figure>
  `;
  document.body.appendChild(lightbox);

  const closeButton = lightbox.querySelector(".case-lightbox-close");
  const image = lightbox.querySelector("img");
  const caption = lightbox.querySelector("figcaption");
  let previousFocus = null;

  const openLightbox = (event) => {
    const trigger = event.currentTarget;
    previousFocus = document.activeElement;
    image.src = trigger.dataset.lightboxImage;
    image.alt = trigger.dataset.lightboxCaption || "Project feature image";
    caption.textContent = trigger.dataset.lightboxCaption || "";
    caption.hidden = !caption.textContent;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-lightbox-open");
    closeButton.focus({ preventScroll: true });
  };

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-lightbox-open");
    image.removeAttribute("src");
    if (previousFocus && typeof previousFocus.focus === "function") {
      previousFocus.focus({ preventScroll: true });
    }
  };

  const handleBackdropClick = (event) => {
    if (event.target === lightbox) closeLightbox();
  };

  const handleKeydown = (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", openLightbox);
  });
  closeButton.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", handleBackdropClick);
  document.addEventListener("keydown", handleKeydown);

  caseLightboxCleanup = () => {
    triggers.forEach((trigger) => {
      trigger.removeEventListener("click", openLightbox);
    });
    closeButton.removeEventListener("click", closeLightbox);
    lightbox.removeEventListener("click", handleBackdropClick);
    document.removeEventListener("keydown", handleKeydown);
    document.body.classList.remove("is-lightbox-open");
    lightbox.remove();
  };
}

function setupHomeHeroScroll() {
  homeHeroScrollCleanup?.();
  homeHeroScrollCleanup = null;
  const stage = app.querySelector(".home-hero-scroll");
  if (!stage) return;
  const hero = stage.querySelector(".opportunity-hero");
  const cards = [...stage.querySelectorAll(".home-hero-float-card")];
  const motion = window.matchMedia("(min-width: 768px) and (min-height: 600px) and (prefers-reduced-motion: no-preference)");
  let frame = 0;
  let start = 0;
  let travel = 0;
  let viewport = 0;
  const clamp = (value) => Math.max(0, Math.min(1, value));

  const paint = () => {
    frame = 0;
    if (!motion.matches) return;
    const progress = clamp((window.scrollY - start) / travel);
    // Cards cross the pinned hero in staggered lanes, like the video reference.
    cards.forEach((card) => {
      const y = viewport * (1.12 + Number(card.dataset.offset) / 100 - progress * 4 * Number(card.dataset.speed));
      card.style.transform = `translate3d(-50%, ${y.toFixed(1)}px, 0)`;
    });
    hero.style.setProperty("--float-opacity", String(clamp(progress * 12) * clamp((1 - progress) * 10)));
    hero.style.setProperty("--portrait-opacity", String(1 - Math.sin(progress * Math.PI) * 0.78));
  };
  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(paint);
  };
  const measure = () => {
    stage.classList.toggle("is-scroll-active", motion.matches);
    if (!motion.matches) return;
    viewport = window.innerHeight;
    const height = hero.offsetHeight;
    travel = viewport * 1.6;
    start = stage.getBoundingClientRect().top + window.scrollY + Math.max(0, height - viewport);
    stage.style.setProperty("--hero-pin-height", `${height}px`);
    stage.style.setProperty("--hero-scroll-travel", `${travel}px`);
    stage.style.setProperty("--hero-pin-top", `${Math.min(0, viewport - height)}px`);
    schedule();
  };
  const observer = new ResizeObserver(measure);
  observer.observe(hero);
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", measure);
  motion.addEventListener("change", measure);
  measure();
  homeHeroScrollCleanup = () => {
    cancelAnimationFrame(frame);
    observer.disconnect();
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", measure);
    motion.removeEventListener("change", measure);
  };
}

function setupCaseHeroParallax() {
  caseHeroParallaxCleanup?.();
  caseHeroParallaxCleanup = null;

  const visual = app.querySelector(".case-visual-section .case-hero-visual");
  const image = visual?.querySelector(".project-image");
  if (!visual || !image || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let frameId = 0;

  const syncParallax = () => {
    frameId = 0;
    const rect = visual.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
    const clamped = Math.max(0, Math.min(1, progress));
    const translateY = (clamped - 0.5) * -56;
    image.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0) scale(1.06)`;
  };

  const requestSync = () => {
    if (frameId) return;
    frameId = requestAnimationFrame(syncParallax);
  };

  window.addEventListener("scroll", requestSync, { passive: true });
  window.addEventListener("resize", requestSync);
  syncParallax();

  caseHeroParallaxCleanup = () => {
    window.removeEventListener("scroll", requestSync);
    window.removeEventListener("resize", requestSync);
    cancelAnimationFrame(frameId);
    image.style.transform = "";
  };
}

function setupGlobalInteractions() {
  const getHeaderScrollThreshold = () => {
    const hero = app.querySelector(".minimal-hero");
    if (document.body.classList.contains("is-home-route") && hero) {
      return Math.max(12, hero.offsetTop + hero.offsetHeight - 1);
    }

    return 12;
  };

  const syncHeaderState = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > getHeaderScrollThreshold());
  };

  window.addEventListener("scroll", () => {
    syncHeaderState();
  }, { passive: true });

  window.addEventListener("resize", () => {
    syncHeaderState();
  });

  syncHeaderState();
}

let projectCursor;
if (isBrowser) {
  migrateLegacyUrl();
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  setupGlobalInteractions();
  projectCursor = new CustomCursor({ selector: '.projects-section .project-media[data-cursor]' });
  setupHistoryNavigation();
  route();
}
