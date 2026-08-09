import CaseStudy from "../../components/CaseStudy";

export const metadata = {
  title: "APEC Water — Thinh Ngo",
  description:
    "Distinction. A digital-transformation blueprint giving a US water-filtration brand real-time control over quality, inventory, and post-sale support. I owned the system architecture and network topology.",
};

export default function Page() {
  return (
    <CaseStudy
      n="04"
      title="APEC Water"
      tagline="A digital-transformation blueprint that gives a water-filtration company real-time control over quality, inventory, and post-sale support."
      facts={[
        { label: "Course", value: "RMIT — ISYS2128 Digital Business Design & Innovation" },
        { label: "Result", value: "Distinction" },
        { label: "My role", value: "System architecture, network topology, solution development" },
        { label: "Team", value: "4" },
        { label: "Client", value: "APEC Water — US RO-filtration brand (academic case study)" },
        { label: "Stack", value: "Oracle NetSuite, AWS IoT, Nyckel AI computer vision" },
      ]}
      tldr="Team consulting project (Distinction) for APEC Water, a US reverse-osmosis brand. We traced the operational bottlenecks — hand-inspected QC, blind inventory, no post-sale visibility — to a centralized system on Oracle NetSuite, AWS IoT, and Nyckel AI computer vision. I owned the system architecture and network topology."
      blocks={[
        {
          heading: "The problem",
          body: (
            <p>
              APEC inspected every unit by hand, tracked stock manually, and gave customers no visibility after the sale — so shipping errors, quality slips, and reactive support piled up. We mapped it with Rich Picture, BPMN, and Fishbone analysis and pinned the bottleneck on quality control.
            </p>
          ),
        },
        {
          heading: "What we designed",
          body: (
            <p>
              A centralized system, not a single tool: Oracle NetSuite as the ERP hub, AWS IoT sensors streaming live filtration data, and Nyckel AI auto-flagging defects before packing — plus a customer portal for device tracking and proactive alerts. We costed it over five years with ROI and payback.
            </p>
          ),
        },
        {
          heading: "What I owned",
          body: (
            <p>
              I led the system architecture and network topology: a thin-client, cloud-based client-server design with NetSuite at the centre, and a star-plus-hierarchical hybrid topology mapping how cameras, IoT gateways, and workstations feed the cloud. I also drove the broader solution and requirements.
            </p>
          ),
        },
        {
          heading: "Honest framing",
          body: (
            <p>
              APEC Water is real, but this was an academic case study — the proposal was never sent, and the portal is a Figma prototype, not a shipped product. The value was the rigour: turning a vague &ldquo;operations feel inefficient&rdquo; into a costed, architected system an SME could act on.
            </p>
          ),
        },
      ]}
      artifacts={[
        {
          label: "Design proposal (PDF)",
          href: "/apec-proposal.pdf",
        },
        {
          label: "Prototype report (PDF)",
          href: "/apec-prototype-report.pdf",
        },
        {
          label: "Presentation deck (PDF)",
          href: "/apec-presentation.pdf",
        },
      ]}
      next={{ href: "/work/microloan", label: "Microloan Default" }}
    />
  );
}
