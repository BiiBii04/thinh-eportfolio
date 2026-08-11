import CaseStudy from "../../components/CaseStudy";

export const metadata = {
  title: "SCF Protocol — Thinh Ngo",
  description:
    "A blockchain protocol that lets banks verify supply-chain payment obligations, unlocking finance for Vietnam's export suppliers. Pitched live to an industry panel. I owned the Verifiable Payables Token layer, anchor-buyer interviews, and ethics synthesis.",
};

export default function Page() {
  return (
    <CaseStudy
      n="01"
      title="SCF Protocol"
      tagline="A blockchain protocol that turns confirmed export orders into working capital for Vietnam's tier-2/3 suppliers — no collateral, no anchor-buyer ERP."
      facts={[
        { label: "Course", value: "RMIT — ECON1598 Digital Economy Projects (capstone)" },
        {
          label: "Panel",
          value:
            "Pitched live to Gary Liu (Co-Founder and CEO, Terminal 3; Chair, Web3 Harbour) and Jeffrey Tchui (Executive Director and Head of APAC, Hashgraph)",
        },
        { label: "My role", value: "Payables Token design, anchor-buyer interviews, ethics synthesis" },
        { label: "Team", value: "4 — I owned the Verifiable Payables Token layer" },
        { label: "Stack", value: "W3C Verifiable Credentials, DIDs, blockchain (VIFC sandbox)" },
        { label: "Output", value: "Live protocol site + pitch" },
      ]}
      tldr="Final-year capstone, submitted 22 May 2026. A protocol on W3C Verifiable Credentials that lets any bank verify supply-chain payment obligations, unlocking factoring for the 150k–200k Vietnamese suppliers shut out of formal credit. I owned the Verifiable Payables Token layer, anchor-buyer interviews, and ethics synthesis. Section VII of the report records the panel calling the stack over-engineered, my cut from twelve components to five, and where my reasoning differed from theirs."
      blocks={[
        {
          heading: "The problem",
          body: (
            <p>
              Vietnamese tier-2/3 export suppliers wait 60–120 days for payment but need cash in 7–30. Banks can&rsquo;t verify the obligations behind those orders, so factoring sits at 0.09% of credit and 150k–200k SMEs borrow informally at 24–36%. The money exists; the proof doesn&rsquo;t.
            </p>
          ),
        },
        {
          heading: "What we built",
          body: (
            <p>
              A protocol, not a platform. Tier-1 buyers self-attest payment obligations as W3C Verifiable Credentials, so any bank can verify them — no phone call, no anchor-buyer ERP. Layered on top: an AI nudge engine, dual-key co-signing, progressive disclosure for privacy, and AI credit scoring for first-time borrowers.
            </p>
          ),
        },
        {
          heading: "What I owned",
          body: (
            <p>
              I designed the Verifiable Payables Token layer and ran empathy interviews with an anchor buyer to ground it in real behaviour. I also led the ethics synthesis — arguing that selective attestation by powerful buyers needs an institutional guardrail, which became the VIFC sandbox.
            </p>
          ),
        },
        {
          heading: "Honest framing",
          body: (
            <p>
              A designed protocol, not a deployed one — and the token&rsquo;s legal status under Vietnamese law is still open, which is why it&rsquo;s scoped to a sandbox. The biggest lesson was human, not cryptographic: signatures fail if the buyer&rsquo;s Purchasing and Finance teams aren&rsquo;t aligned, so we built the behavioural incentives into the protocol itself.
            </p>
          ),
        },
      ]}
      artifacts={[
        {
          label: "Live protocol — scfprotocol.xyz",
          href: "https://www.scfprotocol.xyz/",
        },
        {
          label: "Pitch deck (PDF)",
          href: "/scf-deck.pdf",
        },
        {
          label: "GitHub repository",
          note: "Private — available on request",
        },
      ]}
      next={{ href: "/work/achievia", label: "Achievia" }}
    />
  );
}
