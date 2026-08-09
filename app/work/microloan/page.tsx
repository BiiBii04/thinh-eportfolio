import CaseStudy from "../../components/CaseStudy";

export const metadata = {
  title: "Microloan Default Prediction — Thinh Ngo",
  description:
    "A machine-learning credit-risk model that predicts 90-day microloan default on a Vietnamese fintech dataset. Leakage-free pipeline, model comparison, SHAP, and a screening rule that concentrates 7.5x the default rate into 8.4% of applicants.",
};

export default function Page() {
  return (
    <CaseStudy
      n="05"
      title="Microloan Default"
      tagline="A credit-risk model that flags likely microloan defaulters before disbursement — then turns the maths into one screening rule a credit team can actually use."
      facts={[
        { label: "Course", value: "RMIT — ECON1612 Big Data, Machine Learning and Society" },
        { label: "Type", value: "Individual (Assessment 2)" },
        { label: "Focus", value: "Credit-risk classification, imbalanced data" },
        { label: "Best model", value: "Logistic Regression · test ROC-AUC 0.93" },
        { label: "Stack", value: "Python, scikit-learn, SHAP" },
        { label: "Output", value: "Model + a 7.5x-risk screening rule" },
      ]}
      tldr="An end-to-end credit-risk pipeline on 6,000 Vietnamese microloan applications. I built it leakage-free — a time-based out-of-time split, every transform fit on train only — compared three models, and read the drivers three ways. The useful part isn&rsquo;t the score: a simple rule isolates 8.4% of applicants whose default rate is 54.6%, against 7.3% for everyone else."
      blocks={[
        {
          heading: "The problem",
          body: (
            <p>
              A lender needs to catch high-risk applicants before the money goes out. Both mistakes cost &mdash; approving a defaulter loses the principal, rejecting a good borrower loses a customer. The target is default within 90 days, and only 10.9% of applicants default, so the class is heavily imbalanced. That imbalance shaped every decision.
            </p>
          ),
        },
        {
          heading: "What I built",
          body: (
            <p>
              I split train and test by application date, not randomly, so the model is judged on predicting future borrowers from past ones &mdash; and I fit every transform on the training window only, so nothing leaks backward. Then the unglamorous work that actually decides quality: missingness flags, sentinel-code detection (the 999 placeholder), logical-consistency checks, and IQR winsorization instead of dropping rows.
            </p>
          ),
        },
        {
          heading: "What the model found",
          body: (
            <p>
              Across Logistic Regression, HistGradientBoosting, and Random Forest, Logistic Regression won on the out-of-time test set (ROC-AUC 0.93) and stayed interpretable. I read importance three ways &mdash; coefficients, permutation, SHAP &mdash; so the drivers agreed rather than resting on one method. Savings balance dominated; unemployed applicants defaulted at 50%, against 6% for the formally employed. I tuned the threshold toward recall, since a missed defaulter usually costs more than a second look at a good one.
            </p>
          ),
        },
        {
          heading: "The decision, not just the score",
          body: (
            <p>
              A model is only useful if someone can act on it &mdash; so I derived a plain screening rule (low savings, high debt-to-income, high loan-to-income) that flags 8.4% of applicants whose actual default rate is 54.6%, against 7.3% for the rest. That&rsquo;s a 7.5x concentration of risk in a small, explainable segment a credit officer can apply without running a model live.
            </p>
          ),
        },
        {
          heading: "Honest framing",
          body: (
            <p>
              This is a synthetic teaching dataset, and one feature &mdash; savings balance &mdash; carries most of the signal, which inflates the AUC beyond what real lending data would give. On real data I&rsquo;d expect lower scores, and I&rsquo;d guard against any single feature dominating. The value here is the method, not the number.
            </p>
          ),
        },
      ]}
      artifacts={[
        {
          label: "GitHub repository",
          href: "https://github.com/BiiBii04/microloan-default-prediction",
        },
      ]}
      next={{ href: "/work/ups", label: "UPS Location Model" }}
    />
  );
}
