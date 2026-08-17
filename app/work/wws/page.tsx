import CaseStudy from "../../components/CaseStudy";

export const metadata = {
  title: "WWS · Thinh Ngo",
  description:
    "Top 12 Semifinalist at the RMIT Accessibility Design Competition 2025. A two-sided platform connecting HR and people with disabilities.",
};

export default function Page() {
  return (
    <CaseStudy
      slug="wws"
      n="03"
      title="WWS"
      tagline="A two-sided workplace simulation: HR learns to work with people with disabilities; PWDs prepare for the job market."
      facts={[
        { label: "Event", value: "RMIT Accessibility Design Competition 2025" },
        { label: "Result", value: "Top 12 Semifinalist" },
        { label: "My role", value: "Interface design, solution dev, cost structure" },
        { label: "Team", value: "3: psychology, business, me" },
        { label: "Format", value: "Deck, proposal, demo video" },
        { label: "Status", value: "Competition prototype" },
      ]}
      tldr="Two-sided platform. One side trains HR to work with people with disabilities, the other prepares PWDs for the job market. I led interface design, solution development, and cost structure. Top 12."
      blocks={[
        {
          heading: "Scoping decision",
          body: (
            <p>
              We started trying to cover &ldquo;all major disabilities&rdquo;, which was unshippable, and mentors said so. We narrowed to two groups, neurodivergent and visually impaired users, and rebuilt the flows around them. My first versions run too broad; this is where I learned to cut early.
            </p>
          ),
        },
        {
          heading: "What I owned",
          body: (
            <p>
              Interface design: how the two sides met and how the simulation felt to move through, with Lam&rsquo;s behavioural research shaping cognitive-load and sensory choices. And the cost structure: which features ran free, which carried cost, and where a business model could sit without compromising accessibility.
            </p>
          ),
        },
        {
          heading: "Mentor insight",
          body: (
            <p>
              A mentor named the real adoption problem: HR won&rsquo;t log into a separate platform, they&rsquo;ll adopt a plugin inside tools they already use. That turned the product from a destination into an extension layer. We couldn&rsquo;t rebuild in time, but it&rsquo;s the first change I&rsquo;d make.
            </p>
          ),
        },
        {
          heading: "What was best",
          body: (
            <p>
              Real mentors who knew the space, called out what was wrong, and redirected without taking over. I&rsquo;m a better product thinker for it, and that&rsquo;s the environment I want next.
            </p>
          ),
        },
      ]}
      artifacts={[
        {
          label: "Final pitch deck (PDF)",
          href: "/wws-deck.pdf",
        },
        {
          label: "Round 2 proposal (PDF)",
          href: "/wws-proposal.pdf",
        },
        {
          label: "Round 2 submission demo video",
          note: "Available on request",
        },
      ]}
      next={{ href: "/work/apec", label: "APEC Water" }}
    />
  );
}
