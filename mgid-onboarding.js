import { imageComparison, setupImageComparisons } from "./components/ui/image-comparison-slider.js?v=clean-routes-1";
import { videoIllustration, setupVideoIllustrations } from "./components/ui/video-illustration.js";

// Page-only content. Set a visual's src and alt when the final asset is ready.
const visuals = {
  hero: { label: "HERO VISUAL — FIRST-TIME USER JOURNEY", src: "", alt: "" },
  research: { label: "[IMAGE PLACEHOLDER — FULL USER FEEDBACK SYNTHESIS BOARD]", src: "/assets/mgid-onboarding-feedback-board.png", alt: "Full user feedback synthesis board from usability tests and interviews" },
  access: { label: "PRODUCT VISUAL — SIGNUP AND LOGIN", src: "", alt: "" },
  verification: { label: "PRODUCT VISUAL — VERIFICATION FLOW", src: "/assets/mgid-verification-flow.png", alt: "Users can move from signup or login to campaign and ad creation, completing account verification before campaign launch" },
  guidance: { label: "PRODUCT VIDEO — GUIDED ONBOARDING", type: "video", src: "/assets/mgid-guided-onboarding.mp4", alt: "Guided onboarding walkthrough" }
};

const results = [
  ["22%", "reduction in drop-off at key signup friction points"],
  ["16%", "increase in user activation"],
  ["28%", "faster verification completion"]
];

const features = [
  {
    label: "01 / ACCOUNT ACCESS",
    title: "Reducing friction before users entered the product",
    context: "Signup, login, and account recovery created unnecessary barriers before users could access the platform.",
    changes: [
      "Simplified signup, login, and account recovery flows",
      "Removed unnecessary fields and clarified validation",
      "Improved navigation and access to support",
      "Added lightweight segmentation to tailor onboarding"
    ],
    visual: "access"
  },
  {
    label: "02 / VERIFICATION",
    title: "Reordering verification to preserve momentum",
    context: "Verification appeared before users had enough context or product value, interrupting their path to activation.",
    changes: [
      "Moved verification later in the activation journey",
      "Reduced unnecessary steps and clarified requirements",
      "Added progress indicators and real-time status updates",
      "Improved transitions to the third-party verification flow"
    ],
    visual: "verification"
  },
  {
    label: "03 / EARLY EXPLORATION",
    title: "Guiding users through early exploration",
    context: "New and migrating users lacked clear guidance on where to begin and what to do next.",
    changes: [
      "Created guided onboarding with progress indicators",
      "Personalized content based on user type",
      "Added a Get Started checklist for essential tasks",
      "Designed a dedicated feature overview for legacy-platform users"
    ],
    visual: "guidance"
  }
];

function visual(key, className = "") {
  if (key === "access") return imageComparison();
  const item = visuals[key];
  return `<div class="onboarding-visual ${className}" data-onboarding-visual="${key}">
    ${item.src
      ? item.type === "video"
        ? videoIllustration(item.src, "/assets/mgid-guided-onboarding-poster.jpg", item.alt)
        : `<img src="${item.src}" alt="${item.alt}" />`
      : `<div class="onboarding-placeholder" role="img" aria-label="${item.label}"><span>${item.label}</span></div>`}
    ${key === "verification" ? `<div class="onboarding-verification-legend" aria-label="Verification journey paths">
      <span><i class="onboarding-path-before" aria-hidden="true"></i><span>Before — verification immediately after signup</span></span>
      <span><i class="onboarding-path-after" aria-hidden="true"></i><span>After — verification later in the journey</span></span>
    </div>` : ""}
  </div>`;
}

function metrics(primary = false) {
  return `<div class="onboarding-metrics${primary ? " onboarding-metrics-primary" : ""}" aria-label="${primary ? "Results" : "Results preview"}">
    ${results.map(([value, label]) => `<div class="onboarding-metric"><strong>${value}</strong><p>${label}</p></div>`).join("")}
  </div>`;
}

function researchArtifact() {
  const item = visuals.research;
  return `<figure class="onboarding-research-artifact">
    ${item.src ? `<button class="onboarding-research-board" type="button" data-lightbox-image="${item.src}" data-lightbox-caption="Research synthesis from usability tests and user interviews" aria-label="Open larger research synthesis board"><img src="${item.src}" alt="${item.alt}" /></button>` : visual("research")}
    <figcaption>Research synthesis from usability tests and user interviews</figcaption>
  </figure>`;
}

function columns(items, className, headingTag = "h3") {
  return `<div class="onboarding-columns ${className}">${items.map(([title, body]) => `<div class="onboarding-column"><${headingTag}>${title}</${headingTag}><p>${body}</p></div>`).join("")}</div>`;
}

function section(id, title, content, className = "") {
  return `<section id="${id}" class="section section-tight case-reference-section case-section case-study-section ${className}">
    <div class="case-reference-grid"><div class="case-reference-content">${title ? `<h2>${title}</h2>` : ""}${content}</div></div>
  </section>`;
}

export function renderMgidOnboarding(project, otherCases, cta) {
  const nav = [["tldr", "TL;DR"], ["research", "RESEARCH"], ["activation", "ACTIVATION"], ["outcome", "OUTCOME"], ["reflection", "REFLECTION"]];
  return `<article class="case-page case-page-mgid-user-activation">
    <section class="section case-layout-section">
      <div class="case-layout case-hero-layout">
        <div class="case-hero-copy"><div class="case-panel-heading">
          <p class="case-panel-eyebrow">2023–2024 / MGID · ADTECH</p>
          <h1 class="page-title">Helping new advertisers succeed from day one</h1>
        </div></div>
        <div class="case-hero-content"><div class="case-hero-details">
          <article><span>ROLE</span><p>Senior Product Designer</p></article>
          <article><span>SCOPE</span><p>First-time user journey · Signup and login · Verification · Onboarding strategy · User activation</p></article>
          <article><span>APPROACH</span><p>User research · CJM · User flow redesign · UX/UI · Prototyping · A/B testing · Post-release analysis</p></article>
        </div></div>
      </div>
    </section>
    <section class="section case-visual-section"><div class="case-visual-container">
      ${visual("hero", "case-hero-visual")}
    </div></section>
    <div class="case-study-layout case-study-body">
      <aside class="case-section-nav-shell case-study-sidebar" aria-label="Case navigation">
        <nav class="case-section-nav" aria-label="Case sections">${nav.map(([id, label]) => `<a href="#${id}">${label}</a>`).join("")}</nav>
      </aside>
      <main class="case-study-main case-study-content">
        ${section("tldr", "", `
          <p class="onboarding-lead">After MGID launched its modernized advertising platform, feedback and behavioral data revealed friction across signup, verification, and early product exploration. Users were dropping off before they could understand the platform’s value.</p>
          <p class="body-copy">I redesigned the first-time journey as a guided path from signup to activation—simplifying account access, reordering verification, and introducing contextual onboarding. These changes reduced drop-offs and helped users reach product value sooner.</p>`, "case-section-intro")}
        ${section("research", "Understanding where activation broke down", `
          <p class="body-copy">Friction extended across the first-time journey: from account creation to early product exploration. Working with UX research, I combined interviews and think-aloud usability tests with funnel drop-offs and session recordings to understand where users lost momentum.</p>
          ${columns([
            ["OBJECTIVE", "Identify friction across account access, verification, and early product exploration."],
            ["INTERVIEW FORMAT", "Open-ended interview and think-aloud usability test (~1 hour)."],
            ["PARTICIPANTS", "25 users migrating from MGID’s legacy platform."]
          ], "onboarding-research-method", "h6")}
          ${researchArtifact()}
          <p class="body-copy onboarding-research-transition">The synthesis revealed three recurring barriers to activation: friction in account access, premature verification, and a lack of guidance during early exploration.</p>`, "case-section-chapter")}
        ${section("activation", "", `
          <p class="onboarding-lead case-challenge-statement"><span class="case-challenge-label">Approach</span> Instead of treating onboarding as a short product introduction, I approached it as a guided path toward activation.</p>
          <p class="body-copy">The experience needed to reduce friction, explain what was required, and help users make progress without overwhelming them. It also had to support both first-time advertisers and existing customers moving from the legacy platform.</p>
          <div class="case-feature-list case-feature-list-grid">
            ${features.map(item => `<article id="solution-${item.visual}" class="case-feature-row case-feature-card onboarding-solution-feature">
              <div class="case-feature-copy">
                <p class="case-feature-label">${item.label}</p>
                <h3>${item.title}</h3>
                <div class="onboarding-solution-description">
                  <div class="onboarding-friction">
                    <p class="onboarding-decision-copy"><strong>Friction:</strong></p>
                    <p>${item.context}</p>
                  </div>
                  <div class="onboarding-changes">
                    <p class="onboarding-decision-copy"><strong>What I did:</strong></p>
                    <ul>${item.changes.map(change => `<li>${change}</li>`).join("")}</ul>
                  </div>
                </div>
              </div>
              ${visual(item.visual, "case-feature-media")}
            </article>`).join("")}
          </div>`, "case-section-chapter case-feature-layout-section")}
        ${section("outcome", "", `
          <p class="onboarding-lead">Post-launch data showed measurable improvements across every redesigned stage of the activation journey.</p>
          ${metrics(true)}`, "case-section-chapter")}
        ${section("reflection", "", `
          <p class="onboarding-lead case-challenge-statement"><span class="case-challenge-label">KEY LESSON</span> Activation is shaped by the entire journey. Account access, the timing of required steps, and early guidance all influence whether users continue and experience value, while combining behavioral data with direct feedback makes it possible to keep improving the journey after launch.</p>
          <p class="body-copy">If I revisited the project, I would explore deeper onboarding personalization based on advertisers’ experience, goals, and intended use of the platform.</p>`, "case-section-reflection")}
      </main>
    </div>
    ${otherCases(project)}
    ${cta()}
  </article>`;
}

let navigationCleanup;

// Track this page's chapters against their actual sticky-header offsets,
// including on short screens where a fixed viewport observation band misses them.
export function setupMgidOnboardingNavigation() {
  navigationCleanup?.();
  setupImageComparisons();
  setupVideoIllustrations();
  const page = document.querySelector(".case-page-mgid-user-activation");
  if (!page) return;
  const links = [...page.querySelectorAll(".case-section-nav a")];
  const sections = links.map(link => page.querySelector(link.getAttribute("href")));
  let frame;
  const sync = () => {
    let active = 0;
    sections.forEach((section, index) => {
      const offset = parseFloat(getComputedStyle(section).scrollMarginTop) || 0;
      if (section.getBoundingClientRect().top <= offset + 2) active = index;
    });
    links.forEach((link, index) => {
      link.classList.toggle("is-active", index === active);
      if (index === active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };
  const schedule = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(sync);
  };
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  sync();
  navigationCleanup = () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", schedule);
  };
}
