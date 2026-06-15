const Certifications = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-doto uppercase font-bold">Certifications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-border bg-muted p-6 rounded-md space-y-4 flex flex-col">
          <div className="flex justify-between items-center">
            <h3 className="font-doto text-lg text-white">AWS Certified</h3>
            <span className="text-sm text-muted-foreground">Jun 2026</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
            Foundations of Prompt Engineering. Completed AWS-certified course covering zero-shot, few-shot, and chain-of-thought prompting.
          </p>
          <a href="/aws_prompt_engineering_certification.pdf" target="_blank" rel="noreferrer">
            <img src="/aws_cert.jpg" alt="AWS Certificate" className="w-full h-auto border border-border opacity-80 hover:opacity-100 transition-opacity rounded-sm" />
          </a>
        </div>

        <div className="border border-border bg-muted p-6 rounded-md space-y-4 flex flex-col">
          <div className="flex justify-between items-center">
            <h3 className="font-doto text-lg text-white">Databricks Certified</h3>
            <span className="text-sm text-muted-foreground">Jun 2026</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
            Generative AI Fundamentals. Covered foundations of Generative AI including LLMs, diffusion models, and transformer architectures.
          </p>
          <a href="/1765_3_1596441_1780923224_Databricks - Generic.pdf" target="_blank" rel="noreferrer">
            <img src="/databricks_cert.jpg" alt="Databricks Certificate" className="w-full h-auto border border-border opacity-80 hover:opacity-100 transition-opacity rounded-sm" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Certifications;
