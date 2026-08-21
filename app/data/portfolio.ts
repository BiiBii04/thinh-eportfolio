/**
 * Single source of truth for every artefact on this site.
 *
 * Content comes from Part 1 version 2 of the assignment inventory
 * (Business-graduate-folio/Assignment-2/official-files/part-1-artefact-inventory.md).
 * Every entry carries title, author, date and a career-direction line, because
 * the rubric grades all four on every artefact.
 *
 * Two rules encoded here, do not break them without changing Part 1 first:
 *  - Project cards carry OUTCOMES, never marks. A project page shows work from
 *    more than one assessment, so a single mark lands on the wrong document.
 *  - Coursework entries carry marks, because one entry maps to one assessment.
 */

export const CAREER_DIRECTION =
  "Business Analyst moving toward Product Owner, in enterprise software and emerging technology.";

export type CategoryId = "design" | "assessment" | "decision";

export const CATEGORIES: {
  id: CategoryId;
  name: string;
  claim: string;
}[] = [
  {
    id: "design",
    name: "Design and build",
    claim: "Taking a problem to a designed answer somebody could act on.",
  },
  {
    id: "assessment",
    name: "Technology and regulatory assessment",
    claim:
      "Deciding whether a technology should be used at all, saying where it fails, and knowing what the law does to it.",
  },
  {
    id: "decision",
    name: "Analysis into decision",
    claim: "Turning a market or a dataset into a rule somebody can act on.",
  },
];

/** A published file. `kind` drives the label a reader sees before they click. */
export type Doc = {
  label: string;
  href: string;
  kind: "Report" | "Slides" | "Spreadsheet" | "Proposal";
  note?: string;
};

/** The three capabilities this site argues. Tags link back to /about. */
export type CapabilityName = "Digitally Adept" | "Critically Engaged" | "Connected";

export type Project = {
  slug: string;
  n: string;
  title: string;
  kicker: string;
  category: CategoryId;
  author: string;
  date: string;
  outcome?: string;
  summary: string;
  whyItMatters: string;
  /** What the experience taught me. Case-study pages close on this. */
  taught?: string;
  /** Which of the three capabilities the work built. */
  capabilities?: CapabilityName[];
  /** Case-study page exists at /work/<slug>. Otherwise the card is the artefact. */
  hasPage: boolean;
  preview?: string;
  external?: { label: string; href: string };
  docs?: Doc[];
};

export const PROJECTS: Project[] = [
  {
    slug: "scf",
    n: "01",
    title: "SCF Protocol",
    kicker: "Supply-chain finance on W3C Verifiable Credentials",
    category: "design",
    author:
      "Team of 4, RMIT ECON1598 Digital Economy Projects capstone. I designed the Verifiable Payables Token layer, ran the anchor-buyer interviews and led the ethics synthesis.",
    date: "22 May 2026",
    outcome:
      "Pitched live to an industry panel including Gary Liu (Co-Founder and CEO, Terminal 3; Chair, Web3 Harbour) and Jeffrey Tchui (Executive Director and Head of APAC, Hashgraph)",
    summary:
      "Tier-2 and tier-3 Vietnamese suppliers cannot turn purchase orders into working capital, so they borrow informally at around 22%. A permissioned consortium protocol under VIFC sandbox status, deliberately not a single-owner platform.",
    whyItMatters:
      "Section VII of the report records the panel calling the stack over-engineered, my cut from twelve components to five, and where my reasoning differed from theirs. Taking criticism, acting on it, and defending a boundary with evidence is the behaviour I want to be hired for, and this is the only place it exists on the record.",
    taught:
      "That a signature is a behaviour before it is a cryptographic act. The design only holds if the buyer's purchasing and finance teams already agree with each other, so I moved the incentives into the protocol instead of assuming cooperation. I also learned to cut my own work on someone else's evidence and still say which part I was keeping.",
    capabilities: ["Critically Engaged", "Connected"],
    hasPage: true,
    preview: "/scf-preview.jpg",
    external: { label: "scfprotocol.xyz", href: "https://www.scfprotocol.xyz/" },
    docs: [
      {
        label: "Business proposal",
        href: "/econ1598-a3-scf-protocol-report.pdf",
        kind: "Report",
        note: "27 pages, 2,983 words",
      },
      {
        label: "Pilot economics appendix",
        href: "/econ1598-a3-scf-pilot-economics.xlsx",
        kind: "Spreadsheet",
        note: "Unit economics and the 24-month pilot model",
      },
      { label: "Pitch deck", href: "/scf-deck.pdf", kind: "Slides" },
    ],
  },
  {
    slug: "achievia",
    n: "02",
    title: "Achievia",
    kicker: "AI study-abroad coaching for Vietnamese students",
    category: "design",
    author:
      "Team of 4 at LotusHacks 2026 (HackHarvard and GenAI Fund). I owned market research, user framing, the pitch and the live demo.",
    date: "March 2026, built in 36 hours",
    outcome: "Top 20 of 200",
    summary:
      "A study-abroad coaching product scoped, built and demoed inside a 36-hour hackathon, then defended in front of judges.",
    whyItMatters:
      "Scoping under a hard constraint and explaining technical work to a room that is not technical are the two things a product owner does every week. I fielded the judges' questions on my own.",
    taught:
      "That the demo is the argument. With 36 hours I spent a disproportionate share of them on what the judges would see rather than on what we had built, and that was the right call. It is also where I learned how fast a scope has to be cut when the deadline is fixed and the team is four people.",
    capabilities: ["Digitally Adept"],
    hasPage: true,
    preview: "/achievia-preview.png",
  },
  {
    slug: "wws",
    n: "03",
    title: "WWS",
    kicker:
      "A two-sided workplace simulation for HR teams and job seekers with disabilities",
    category: "design",
    author:
      "Team of 3 across psychology and business. I led interface design, solution development and the cost structure. Mentored by Ms Thuy NG and Mr Quang Trinh.",
    date:
      "April 2025 to September 2025, at the RMIT Accessibility Design Competition 2025",
    outcome: "Top 12 semifinalist",
    summary:
      "We started on every major disability, mentors called it unshippable, and we narrowed to neurodivergent and visually impaired users and rebuilt the flows around them.",
    whyItMatters:
      "It is the scoping story a product owner is hired for, and it carries a change of mind I never got to build: HR will not log into a separate platform, so this should have been a plug-in inside tools they already use.",
    taught:
      "That distribution decides whether a product gets used, and that a mentor telling you the thing is unshippable is worth more than a mentor telling you it is promising. We started on every major disability because it felt fairer, and narrowing to two user groups is what made it designable at all.",
    capabilities: ["Critically Engaged", "Connected"],
    hasPage: true,
    preview: "/wws-preview.png",
  },
  {
    slug: "apec",
    n: "04",
    title: "APEC Water",
    kicker:
      "A digital-transformation blueprint for a reverse-osmosis water filtration business",
    category: "design",
    author:
      "Team of 4, RMIT ISYS2128 Digital Business Design and Innovation. I owned the system architecture and network topology and drove requirements.",
    date: "December 2024 to January 2025",
    summary:
      "Process mapping with Rich Picture, BPMN and Fishbone analysis, the bottleneck traced to quality control, and a costed five-year system with ROI and payback. Academic case study, and the proposal was never sent.",
    whyItMatters:
      "It is the closest thing I have to a business analyst brief carried end to end: map the process, find the constraint, then cost the system that fixes it. The course description is also the only one in either of my majors that names business analysis outright.",
    taught:
      "That the bottleneck is rarely the thing people describe. What was visible was hand inspection, shipping errors and reactive support after the sale. Rich Picture, BPMN and Fishbone mapping put the constraint at quality control, and no amount of asking people where the problem was would have got there.",
    capabilities: ["Critically Engaged"],
    hasPage: true,
    preview: "/apec-preview.png",
  },
  {
    slug: "microloan",
    n: "05",
    title: "Microloan default prediction",
    kicker: "A credit-risk model and the screening rule that came out of it",
    category: "decision",
    author: "Individual, RMIT ECON1612 Big Data, Machine Learning and Society, Assessment 2.",
    date: "December 2025 to January 2026",
    summary:
      "A plain screening rule that isolates 8.4% of applicants at a 54.6% default rate against 7.3% for the rest. Built leakage-free on purpose with a time-based split.",
    whyItMatters:
      "The model is not the deliverable, the rule is. A credit officer can apply it without running anything. Synthetic teaching dataset, and one feature carries most of the signal, so the method is the value and not the score.",
    taught:
      "That a model nobody can act on is not a deliverable. The screening rule came after the model and it is the only part of the work a credit officer could use on Monday morning. Splitting by application date rather than at random also taught me how easily a good score hides a leak.",
    capabilities: ["Critically Engaged"],
    hasPage: true,
    preview: "/microloan-preview.png",
  },
  {
    slug: "ups",
    n: "06",
    title: "UPS location suitability model",
    kicker: "A ranked expansion lead list across 29,943 US ZIP codes",
    category: "decision",
    author:
      "Team of 4, RMIT ECON1612 Big Data, Machine Learning and Society, Assessment 3. I led the framing, variable selection and exploratory analysis, and owned the business translation and ethics.",
    date: "Around January 2026",
    summary:
      "Public census data becomes a shortlist of areas with no current drop box and predicted suitability above 70%, at a recommended 60% threshold, piloted before rollout. Precision is 50.8%, so it halves the search space rather than picking winners.",
    whyItMatters:
      "It answers the question a product owner is actually asked, which is where to put the next thing and why. The repository is public, so it is the one artefact a stranger can audit end to end.",
    taught:
      "That precision at 50.8% is still useful once you say what it is for. It halves the search space, it does not pick winners, and writing that limit down was harder than improving the number would have been. Publishing the AI assistance disclosure with it was the same instinct.",
    capabilities: ["Digitally Adept"],
    hasPage: true,
    preview: "/ups-preview.png",
    external: {
      label: "github.com/BiiBii04/ups-location-suitability",
      href: "https://github.com/BiiBii04/ups-location-suitability",
    },
  },
  {
    slug: "greenharvest",
    n: "07",
    title: "GreenHarvest",
    kicker: "A blockchain suitability assessment for an agricultural supply chain",
    category: "assessment",
    author:
      "Individual, RMIT INTE2581 Digital Economy and Blockchain Applications, Assessment 2.",
    date: "September 2025",
    summary:
      "PESTLE, Five Whys, a suitability decision path that argues three cheaper alternatives out before arguing blockchain in, then a four-layer architecture chosen around Vietnam's Personal Data Protection Law. GreenHarvest is a hypothetical teaching case, so the 20 to 40 day payment delay is the exercise premise rather than a measured finding.",
    whyItMatters:
      "Deciding whether a technology should be used at all is the core business-analyst judgement, and this is the one document where I make it rather than assume it.",
    hasPage: false,
    docs: [
      {
        label: "Suitability assessment and proposal",
        href: "/inte2581-a2-greenharvest.pdf",
        kind: "Report",
      },
    ],
  },
  {
    slug: "power-ledger",
    n: "08",
    title: "Power Ledger",
    kicker: "A critical economic analysis of a live blockchain energy platform",
    category: "assessment",
    author: "Individual, RMIT ECON1558 Frontiers of the Digital Economy, Assessment 3.",
    date: "16 January 2026",
    summary:
      "Distributed energy resources under Vietnam's Decree 135/2024 export cap, then Power Ledger's dual-token design, EcoChain, state channels and FuseBox assessed against each problem. Closes on the real EVNCPC deployment from March 2023 and notes there has been little news of it since.",
    whyItMatters:
      "The limitations section is the point. The binding constraint on the first problem is regulatory, so the platform routes around it rather than fixing it. Immutability does not guarantee input integrity. And an immutable ledger may conflict with the right to be forgotten under both Vietnam's PDPL and the GDPR.",
    hasPage: false,
    docs: [
      {
        label: "Whitepaper analysis",
        href: "/econ1558-a3-power-ledger.pdf",
        kind: "Report",
        note: "10 pages, 1,309 words",
      },
    ],
  },
  {
    slug: "singhealth",
    n: "09",
    title: "SingHealth CyberAI",
    kicker: "An AI security solution for a hospital group",
    category: "design",
    author:
      "Group of 5, RMIT ISYS3444 Introduction to Enterprise Artificial Intelligence, Assessment 3. I wrote the account of the AI the group already ran, the proposed solution, the stakeholder analysis, the data strategy, the system architecture and part of the Business Model Canvas.",
    date: "January 2024",
    outcome: "The only assessment in that course pitched live",
    summary:
      "Analysed from published reporting, no client engagement. The sections I owned are the group's existing AI use, solution definition, stakeholders, data strategy and architecture.",
    whyItMatters:
      "It is the earliest work on this site, and it is already product-owner shaped. January 2024 is a year before I first wrote down that this was the direction, so the work came first and the label came second.",
    hasPage: false,
    docs: [
      {
        label: "Solution report",
        href: "/isys3444-a3-singhealth-report.pdf",
        kind: "Report",
      },
      {
        label: "Pitch deck",
        href: "/isys3444-a3-singhealth-slides.pdf",
        kind: "Slides",
      },
    ],
  },
];

export type Coursework = {
  code: string;
  course: string;
  assessment: string;
  title: string;
  /** Normalised to a scale of 100. Drives the position of the marker on the band scale. */
  mark: number;
  band: "PA" | "CR" | "DI" | "HD";
  date: string;
  author: string;
  category: CategoryId;
  summary: string;
  achievements: string[];
  whyItMatters: string;
  docs?: Doc[];
};

/** RMIT grade bands. The scale runs from the pass mark, not from zero. */
export const BANDS = [
  { code: "PA", floor: 50 },
  { code: "CR", floor: 60 },
  { code: "DI", floor: 70 },
  { code: "HD", floor: 80 },
];
export const SCALE_MIN = 50;
export const SCALE_MAX = 100;

export const COURSEWORK: Coursework[] = [
  {
    code: "LAW2619",
    course: "Legal Considerations of AI, Big Data and Blockchain",
    assessment: "Assessment 3",
    title: "US healthcare data under HIPAA, NIST and the EU HLEG guidelines",
    mark: 81.7,
    band: "HD",
    date: "May 2024",
    author: "Individual",
    category: "assessment",
    summary:
      "A US healthcare data scenario analysed against three regimes rather than one, using real case law in In re Anthem.",
    achievements: [
      "Analysed a binding statute (HIPAA) alongside a voluntary framework (the NIST Cybersecurity Framework) and a set of guidelines (EU HLEG), which each carry different force.",
      "NIST is voluntary guidance from a US federal agency, not legislation, and the analysis had to handle that difference rather than flatten it.",
      "Built the argument on In re Anthem rather than on a hypothetical breach.",
      "My highest published mark, and the strongest single piece of regulatory work I have.",
    ],
    whyItMatters:
      "It is the only substantial data-regulation evidence I have, and it is the training under the SCF Protocol ethics work and the sandbox reasoning, which would otherwise read as instinct.",
    docs: [
      {
        label: "Legal analysis report",
        href: "/law2619-a3-healthcare-hipaa-nist.pdf",
        kind: "Report",
      },
    ],
  },
  {
    code: "ECON1558",
    course: "Frontiers of the Digital Economy",
    assessment: "Assessment 2",
    title: "Blockchain applied to warehouse storage and handling contracts",
    mark: 80,
    band: "HD",
    date: "Semester C 2025 to 2026",
    author:
      "Group of 4, Team 02. I authored slides 8, 13 and 14, each carrying my initials and student ID, and contributed to slides 20 to 22 under joint credit.",
    category: "assessment",
    summary:
      "Williamson's transaction cost economics applied to warehouse contracts: asset specificity, opportunism and bounded rationality mapped to ex-ante formation cost and ex-post monitoring cost.",
    achievements: [
      "Slide 8, the ex-post transaction cost: hidden action against hidden information, the lock-in effect, and the RGIS shrinkage case requiring ten auditors over four weeks.",
      "Slide 13, the warehouse management system as an ex-post ledger, each workflow component mapped to the Williamson factor it addresses.",
      "Slide 14, where that system fails: agent-controlled ledger, single point of failure, ghost inventory, and the XYZ Warehouse case at 52.85% inaccurate tracking against a 0.53% discrepancy rate.",
      "Slides 13 and 14 are a matched pair, the mechanism and then its limits.",
    ],
    whyItMatters:
      "This is the cleanest role attribution in my whole portfolio, because the deck credits authorship slide by slide with my student ID on it. On group work I only claim what I can point at.",
    docs: [
      {
        label: "Group deck",
        href: "/econ1558-a2-warehouse-contracts.pdf",
        kind: "Slides",
        note: "30 slides. Mine are 8, 13 and 14, each signed with my student ID",
      },
    ],
  },
  {
    code: "ECON1624",
    course: "Economic Foundation of the Digital World",
    assessment: "Assessment 1",
    title: "How AI and digital platforms transformed the ride-hailing industry",
    mark: 80,
    band: "HD",
    date: "March 2026",
    author: "Individual",
    category: "decision",
    summary:
      "Creative destruction tabled across four dimensions, then multi-sided market theory traced through Grab's platform evolution, closing on two adoption recommendations for Vietnamese SMEs.",
    achievements: [
      "Traced Grab from two-sided to multi-sided across 2012, 2016 and 2019, with cross-side network effects and the chicken-and-egg problem.",
      "Evidenced winner-takes-all dynamics with Gojek's share falling from 30% to 7% before it exited in mid-2024.",
      "Named real systems rather than generic AI: Uber's DeepETA trained on 1.4 billion ETA requests, Grab's GrabRideGuide cutting idle driving 20%.",
      "Closed on two recommendations for Vietnamese SMEs, each with an adoption path and a risk-management note.",
    ],
    whyItMatters:
      "It ends on a recommendation with an adoption path attached, which is what separates analysis into decision from description. The industry was assigned rather than chosen, so I claim no selection judgement on it.",
    docs: [
      {
        label: "Analysis deck",
        href: "/econ1624-a1-ride-hailing.pdf",
        kind: "Slides",
        note: "16 slides",
      },
    ],
  },
];

/**
 * Courses whose artefacts are already project cards. Listed, never captioned twice, and no marks.
 * `href` overrides the default `/work/{slug}` link for the two cards that have no case-study page,
 * so every row opens something instead of 404ing.
 */
export const COURSE_CROSSREFS: {
  code: string;
  course: string;
  slug: string;
  label: string;
  href?: string;
}[] = [
  { code: "ECON1598", course: "Digital Economy Projects (capstone)", slug: "scf", label: "SCF Protocol" },
  { code: "ISYS2128", course: "Digital Business Design and Innovation", slug: "apec", label: "APEC Water" },
  { code: "ECON1612", course: "Big Data, Machine Learning and Society, Assessment 2", slug: "microloan", label: "Microloan default prediction" },
  { code: "ECON1612", course: "Big Data, Machine Learning and Society, Assessment 3", slug: "ups", label: "UPS location suitability model" },
  { code: "INTE2581", course: "Digital Economy and Blockchain Applications", slug: "greenharvest", label: "GreenHarvest", href: "/inte2581-a2-greenharvest.pdf" },
  { code: "ISYS3444", course: "Introduction to Enterprise Artificial Intelligence", slug: "singhealth", label: "SingHealth CyberAI", href: "/isys3444-a3-singhealth-report.pdf" },
];

export type Entry = {
  title: string;
  org: string;
  date: string;
  summary: string;
  points?: string[];
  whyItMatters: string;
  /** "YYYY-MM". Drives the span bar. Omit `to` for a single-date event. */
  span?: { from: string; to?: string };
  /** Who signed the certificate. Attestation is the anchor where a mark would be. */
  signedBy?: string;
};

/** The window the leadership span bars are drawn against. */
export const TIMELINE = { from: "2023-01", to: "2026-09" };

export const LEADERSHIP: Entry[] = [
  {
    title: "External Relations Member",
    org: "ENACTUS RMIT Vietnam",
    date: "March 2024 to May 2026",
    span: { from: "2024-03", to: "2026-05" },
    summary:
      "Named point of contact for roughly ten external guest speakers across two years and two months, and invited them successfully. My longest-running commitment of any kind.",
    points: [
      "Point of contact for around ten external guest speakers, spread across the full two years rather than one event.",
      "The Event Scale 3 certificate, Ink Your Mark, documents the role for the Semester 1 2025 event.",
      "The role is Member. Three of my own documents used to say Officer, and all three have been corrected.",
    ],
    whyItMatters:
      "RMIT's wording for the Connected capability is meaningful connections with peer, industry, government and community networks. This is the one artefact that evidences it directly rather than through a course project, and it is the capability I have named as my growth area.",
  },
  {
    title: "Project Leader, ENCHANTUS Competition",
    org: "ENACTUS RMIT Vietnam, team of 6",
    date: "March to May 2024",
    span: { from: "2024-03", to: "2024-05" },
    summary:
      "Led a six-person team to a placed finish on a social project, negotiating with ten shelters and running the event.",
    whyItMatters:
      "Stakeholder management with no authority to fall back on, which is where a business analyst spends most of the job. It is also the earliest evidence of me owning an outcome rather than a task.",
  },
  {
    title: "RMIT Big Industry Challenge 2024",
    org: "A team of about 10, multi-disciplinary and multi-national, for Survival Skills Vietnam",
    date: "June 2024, a two-day programme",
    span: { from: "2024-06" },
    summary:
      "A communications campaign for a real client, aimed at remote areas where digital literacy is low, so reach was the actual problem. A workshop, not a competition: no ranking, no placement, no prize.",
    whyItMatters:
      "My best evidence of collaborating across disciplines and nationalities on a real client brief.",
  },
];

export const RECOGNITION: Entry[] = [
  {
    title:
      "Certificate of Appreciation, Top 12 Teams, RMIT Accessibility Design Competition 2025",
    org: "RMIT University, Careers, Alumni and Industry Relations",
    signedBy: "Manuela Spiga, Director",
    date: "2025",
    summary: "Awarded to Ngo Phuc Thinh, Team The WWS.",
    whyItMatters:
      "Independent confirmation that the WWS product work stood up against a field, and it dates the first time my product judgement was assessed by strangers.",
  },
  {
    title: "Certificate of Recognition, 2nd Runner Up, ENCHANTUS Competition",
    org: "ENACTUS RMIT Vietnam",
    signedBy: "Lam Quoc Thinh, President Gen 14",
    date: "Semester 1 2024",
    summary: "Awarded to Ngo Phuc Thinh.",
    whyItMatters:
      "A placed result is the clearest thing a recruiter reads in the ten seconds a CV gets, and it is the outcome behind the project-leader role.",
  },
  {
    title:
      "Certificate of Recognition, External Relations Member of Event Scale 3: Ink Your Mark",
    org: "ENACTUS RMIT Vietnam with the RMIT Student Club Program",
    signedBy:
      "Ta Uyen Tho, President Gen 15, and Dang Thi Ngoc Thuy, Student Club Activity Office",
    date: "Semester 1 2025",
    summary: "Awarded to Ngo Phuc Thinh.",
    whyItMatters:
      "The document behind the external relations work, and the reason the role is described as Member everywhere on this site.",
  },
  {
    title: "RMIT Global Leader Experience, Hanoi",
    org: "Common Purpose Charitable Trust",
    signedBy: "Adirupa Sengupta, Group Chief Executive",
    span: { from: "2023-06" },
    date: "June 2023",
    summary:
      "Awarded to Thinh Ngo. One certificate for one programme. The items listed on my LinkedIn are the credentials RMIT stated participants would earn, not separate awards.",
    whyItMatters:
      "An external body, not RMIT, assessing me in a mixed group early in the degree. It is the start of the line this portfolio traces, and the only artefact issued by an organisation outside the university.",
  },
];

export const EXPERIENCE: Entry[] = [
  {
    title: "Student Support Officer",
    org: "RMIT Student Connect, RMIT University Vietnam, Ho Chi Minh City campus",
    date: "February 2025 to August 2025",
    summary:
      "More than 1,000 student inquiries resolved in two languages, including more than 300 calls handled fully in English.",
    whyItMatters:
      "The plainest proof that I can turn an official system into a next step somebody can follow, which is most of what requirements work is.",
  },
  {
    title: "Fundraising Sales",
    org: "ENACTUS RMIT SGS, a student-led social enterprise",
    date: "July 2024 to January 2025",
    summary:
      "Sold to more than 50 students a shift at 100% transaction and data-entry accuracy, funding a charity trip that reached more than 150 people.",
    whyItMatters:
      "Small, and it stays because accuracy under repetition is a checkable claim and the trip gives the number a purpose.",
  },
];

export const EDUCATION = {
  degree: "Bachelor of Business",
  majors: "Dual major: Business and Technology, plus Blockchain-enabled Business",
  note: "RMIT has since renamed the Blockchain-enabled Business major to Digital Economy.",
  org: "RMIT University Vietnam",
  date: "October 2022 to April 2027 (expected)",
  availability: "Coursework complete September 2026, graduating April 2027",
  whyItMatters:
    "Two full majors rather than one plus a track is the structural basis of the interdisciplinary claim, which is what RMIT means by expertise across fields rather than depth in one.",
};

/**
 * RMIT's Graduate Capability Framework, in RMIT's own wording.
 * Two dominant, one subordinate. Naming a weakness with a plan attached is the
 * point of the framework, not a gap in it.
 */
export const CAPABILITIES: {
  name: string;
  weight: "Dominant" | "Growing";
  rmitWording: string;
  myReading: string;
  evidence: { label: string; href?: string }[];
}[] = [
  {
    name: "Digitally Adept",
    weight: "Dominant",
    rmitWording:
      "The blend of the tool and the person using it, rather than knowledge of the tool.",
    myReading:
      "Anyone can open the same models I can. What is mine is which tools I combined and why, and whether I checked the output before I used it. I have four dated instances of documenting that check, two of them scoring generated answers against HELM Instruct, Stanford CRFM's published evaluation framework. All four predate any careers session telling me to do it.",
    evidence: [
      { label: "UPS location model, with a full AI assistance disclosure", href: "/work/ups" },
      { label: "Achievia: ElevenLabs voice, Bright Data crawling and Manus AI wired into one product in 36 hours", href: "/work/achievia" },
      { label: "This site, hand-built in Next.js rather than a page builder" },
    ],
  },
  {
    name: "Critically Engaged",
    weight: "Dominant",
    rmitWording:
      "Independent judgement: evidence-based decisions, assumptions actually challenged, and research done properly.",
    myReading:
      "Once formal study ends nobody structures the learning path for me, so the judgement has to be mine and the evidence has to carry the argument. In the microloan model I suspected the data was leaking, built a time-based split to prove it, then turned the result into a screening rule a credit officer can apply. On the capstone I cut twelve components to five after an industry panel called the design over-engineered, and section VII records where my reasoning still differed from theirs. Deciding which criticism to act on is the part I want to be hired for.",
    evidence: [
      { label: "SCF Protocol: twelve components cut to five, and the disagreement kept on the record", href: "/work/scf" },
      { label: "Microloan model: leakage suspected, proved with a time-based split, turned into a screening rule", href: "/work/microloan" },
      { label: "US healthcare under HIPAA, NIST and the EU HLEG guidelines", href: "/coursework" },
    ],
  },
  {
    name: "Connected",
    weight: "Growing",
    rmitWording:
      "Meaningful connections with peer, industry, government and community networks.",
    myReading:
      "Of the four networks RMIT names, my peer and community layers are solid and my industry and government layers are thin. Two years of external relations work and one capstone pitched to an industry panel is a start, not a network. What I am doing about it: alumni and Boolean search on LinkedIn, and the Career Ready Hub at R 1.1.033. I would rather name this than pad it.",
    evidence: [
      { label: "ENACTUS External Relations, 26 months, roughly ten external speakers", href: "/leadership" },
      { label: "Anchor-buyer interviews on the SCF Protocol capstone", href: "/work/scf" },
      { label: "Four multi-disciplinary teams across psychology, business and engineering" },
    ],
  },
];

/**
 * Skills, each with the artefact that evidences it. The brief clarification asks
 * for skills AND capabilities, each supported by evidence, so a skill with no
 * link does not belong in this list. Rendered on /resume and /about.
 */
export const SKILLS: { skill: string; evidence: string; href: string }[] = [
  {
    skill:
      "Requirements and process modelling: BPMN, Rich Picture, Fishbone, FURPS, MoSCoW",
    evidence: "APEC Water, mapped to a quality-control bottleneck",
    href: "/work/apec",
  },
  {
    skill: "Stakeholder interviews and external relations",
    evidence:
      "Anchor-buyer interviews on the capstone, and ten external speakers over 26 months",
    href: "/leadership",
  },
  {
    skill:
      "Predictive modelling and honest validation: XGBoost, logistic regression, time-based splits",
    evidence: "Microloan screening rule and the UPS location model, both public",
    href: "/work/ups",
  },
  {
    skill:
      "Regulatory analysis: HIPAA, the NIST framework, EU HLEG guidelines, Vietnam's PDPL",
    evidence: "A marked legal analysis built on In re Anthem",
    href: "/coursework",
  },
  {
    skill:
      "Economic diagnosis: transaction costs, principal-agent problems, multi-sided markets",
    evidence:
      "Warehouse contracts under Williamson, and Grab's platform evolution",
    href: "/coursework",
  },
  {
    skill: "Product scoping under constraint, and pitching the result live",
    evidence:
      "Achievia in 36 hours, and the capstone in front of an industry panel",
    href: "/work/scf",
  },
  {
    skill: "Interface and prototype design, plus documented AI verification",
    evidence: "WWS flows for two user groups, and four dated AI disclosures",
    href: "/work/wws",
  },
];

export const CREDENTIALS = {
  note: "Short courses and badges completed alongside the degree, listed for completeness rather than as qualifications.",
  items: [
    "Fundamentals of Generative AI, Microsoft Learn Student Ambassadors, June 2024",
    "Fundamentals of Azure AI Document Intelligence, Microsoft",
    "Learning GDPR, LinkedIn Learning, April 2025",
  ],
};