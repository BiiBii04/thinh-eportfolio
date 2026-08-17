import CaseStudy from "../../components/CaseStudy";

export const metadata = {
  title: "UPS location suitability model · Thinh Ngo",
  description:
    "A machine-learning model that ranks 29,943 US ZIP codes into a drop-box expansion lead list for a parcel network. XGBoost at ROC-AUC 0.78, with demand features engineered from census and facility data.",
};

export default function Page() {
  return (
    <CaseStudy
      slug="ups"
      n="06"
      title="UPS Location Model"
      tagline="Where should a parcel network put its next drop boxes? A model that turns public census and facility data into a ranked expansion lead list across 29,943 ZIP codes."
      facts={[
        { label: "Course", value: "RMIT, ECON1612 Big Data, Machine Learning and Society" },
        { label: "Type", value: "Team of 4 (Assessment 3)" },
        { label: "My role", value: "Analytical lead: framing, variables & EDA, business implications" },
        { label: "Best model", value: "XGBoost · ROC-AUC 0.78" },
        { label: "Stack", value: "Python, XGBoost, scikit-learn" },
        { label: "Output", value: "Ranked expansion lead list" },
      ]}
      tldr="A network-design problem framed as machine learning: given an area&rsquo;s demographics, economy, and infrastructure, is it a good candidate for a drop box? We cleaned 29,943 ZIP codes, engineered demand features that beat raw population, and shipped a ranked lead list of underserved high-potential areas, not just a chart."
      blocks={[
        {
          heading: "The problem",
          body: (
            <p>
              A parcel network wants to grow its drop-box footprint, but &ldquo;where next&rdquo; is usually decided by intuition. With almost 30,000 ZIP codes to weigh, the real question is which underserved areas have the demand to justify a new location. We framed it as a binary suitability problem and let the data rank the candidates.
            </p>
          ),
        },
        {
          heading: "What we built",
          body: (
            <p>
              We merged US Census data (income, employment, internet access, housing, age) with a UPS facility dataset, then cleaned 29,943 ZIP codes: standardised fields, converted placeholder tokens to missing, removed ghost-town ZIPs with zero households, and imputed the rest. The features carried business meaning rather than raw counts: a tech-wealth index (income times internet penetration), a total tech volume that separates small rich enclaves from large high-value markets, and an employment-density proxy for daytime foot traffic.
            </p>
          ),
        },
        {
          heading: "What I owned",
          body: (
            <p>
              I led the initial UPS research and shaped the analytical flow, then guided data collection, variable selection, and the exploratory analysis, with hands-on coding support. I had a say in model selection, and I owned the part that makes a model matter: translating the outcomes into plain business language, the ethics analysis, and the implications for where and why UPS should expand.
            </p>
          ),
        },
        {
          heading: "What the model found",
          body: (
            <p>
              Across Logistic Regression, Random Forest, and XGBoost, XGBoost won at ROC-AUC 0.78 with balanced precision and recall, chosen on ROC-AUC because two thirds of areas are the negative class. Household count, employment density, and the tech-wealth signal drove predictions, so connectivity and wealth mattered more than raw population. Calibration held: predicted probabilities matched actual frequencies across confidence bands.
            </p>
          ),
        },
        {
          heading: "The business output",
          body: (
            <p>
              The model surfaced &ldquo;missed opportunity&rdquo; ZIP codes: areas with no current drop box but high predicted suitability. That&rsquo;s a direct expansion lead list. We paired it with a threshold tuned as a business trade-off and a phased deployment plan (pilot the top candidates, monitor, then scale) rather than treating the score as a verdict. At heart it&rsquo;s network design: deciding where physical nodes should sit to serve demand efficiently.
            </p>
          ),
        },
      ]}
      artifacts={[
        {
          label: "GitHub repository",
          href: "https://github.com/BiiBii04/ups-location-suitability",
        },
        {
          label: "Presentation slides (PDF)",
          href: "/ups-slides.pdf",
        },
      ]}
      next={{ href: "/work/scf", label: "SCF Protocol" }}
    />
  );
}
