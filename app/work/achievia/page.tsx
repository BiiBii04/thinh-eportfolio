import CaseStudy from "../../components/CaseStudy";

export const metadata = {
  title: "Achievia — Thinh Ngo",
  description:
    "Top 20 of 200 at LotusHacks 2026. AI study-abroad guidance for Vietnamese students. I led the pitch and the live demo.",
};

export default function Page() {
  return (
    <CaseStudy
      n="02"
      title="Achievia"
      tagline="AI study-abroad coaching for Vietnamese students — built for the speaking and writing their schools skip."
      facts={[
        { label: "Event", value: "LotusHacks 2026 (HackHarvard × GenAI Fund)" },
        { label: "Result", value: "Top 20 of 200" },
        { label: "Duration", value: "36 hours" },
        { label: "My role", value: "Pitch lead, market research, live demo" },
        { label: "Team", value: "4 — I owned the narrative layer" },
        { label: "Stack", value: "ElevenLabs, Bright Data, Manus AI" },
      ]}
      tldr="36-hour build unifying IELTS/SAT prep, university matching, and scholarship discovery. I owned the pitch, market research, user framing, and the live demo. Top 20 of 200."
      blocks={[
        {
          heading: "The user",
          body: (
            <p>
              VN public-school English drills grammar, reading, and listening — rarely speaking or writing. The gap shows at application time: interviews, essays, scholarships. We scoped to those students and built the Speaking Coach (ElevenLabs voice) around them.
            </p>
          ),
        },
        {
          heading: "What I did",
          body: (
            <p>
              I didn&rsquo;t write code — I owned the narrative layer: market research, user framing, the pitch, and the live demo. Ran it end-to-end and fielded judge questions solo. Translating technical work for a non-technical room is my core skill.
            </p>
          ),
        },
        {
          heading: "Hardest 36 hours",
          body: (
            <p>
              Halfway in we were proving the problem, validating users, designing, and building all at once — on no sleep — and decisions started slipping. We took a walk, reset, and made our best scoping calls right after.
            </p>
          ),
        },
        {
          heading: "Honest framing",
          body: (
            <p>
              No live demo to link — a teammate locked the repo post-event. The proof is the deck, the write-up, and the Top 20 result. Next time I&rsquo;d treat the hackathon as networking, not just competition.
            </p>
          ),
        },
      ]}
      artifacts={[
        {
          label: "LinkedIn write-up — LotusHacks 2026",
          href: "https://www.linkedin.com/posts/thinhngo0108_lotushacks2026-hackharvard-achievia-ugcPost-7442107335210184704-ycpt/",
        },
        {
          label: "Pitch deck — Achievia (PDF)",
          href: "/achievia-deck.pdf",
        },
        {
          label: "GitHub repository",
          note: "Locked by repo owner post-event",
        },
      ]}
      next={{ href: "/work/wws", label: "WWS" }}
    />
  );
}
