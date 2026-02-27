import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const blogPosts = [
  {
    id: "kidney-stones-prevention",
    title: "Kidney Stones: Causes, Prevention & Modern Treatment Options",
    excerpt: "Kidney stones are one of the most common urological conditions affecting millions worldwide. Learn about causes, dietary changes, and advanced treatments like laser lithotripsy that make stone removal minimally invasive.",
    date: "February 15, 2026",
    readTime: "6 min read",
    category: "Kidney Health",
    content: `Kidney stones (renal calculi) are hard deposits of minerals and salts that form inside the kidneys. They affect approximately 1 in 10 people during their lifetime, and rates are rising globally due to dietary changes and dehydration.

**What Causes Kidney Stones?**

Kidney stones form when urine becomes concentrated, allowing minerals to crystallize. Common types include:
- **Calcium Oxalate Stones** – The most common type (80%), often linked to high-oxalate foods, inadequate fluid intake, and metabolic disorders.
- **Uric Acid Stones** – Associated with high-purine diets (red meat, organ meats) and conditions like gout.
- **Struvite Stones** – Caused by urinary tract infections, these can grow quickly and become quite large.
- **Cystine Stones** – Rare, caused by a hereditary disorder called cystinuria.

**Prevention Strategies**

1. **Stay Hydrated** – Drink at least 2.5-3 liters of water daily. Your urine should be light yellow or clear.
2. **Dietary Modifications** – Reduce sodium intake, limit animal protein, and eat calcium-rich foods (paradoxically, dietary calcium reduces stone risk).
3. **Avoid Excess Oxalate** – Limit spinach, rhubarb, nuts, and chocolate if you're prone to calcium oxalate stones.
4. **Regular Check-ups** – If you've had a stone before, your risk of recurrence is 50% within 5 years.

**Modern Treatment Options**

- **Extracorporeal Shock Wave Lithotripsy (ESWL)** – Non-invasive shock waves break stones into fragments.
- **Ureteroscopy with Laser Lithotripsy** – A thin scope is passed through the urinary tract; laser energy fragments the stone.
- **Percutaneous Nephrolithotomy (PCNL)** – For large stones (>2cm), a small incision in the back allows direct stone removal.
- **Medical Expulsive Therapy** – Small stones (<5mm) may pass naturally with medications that relax the ureter.

At our clinic, Dr. Milind Bapat uses the latest minimally invasive techniques to ensure quick recovery and minimal discomfort. If you experience severe flank pain, blood in urine, or difficulty urinating, consult immediately.`,
  },
  {
    id: "prostate-health-men-over-50",
    title: "Prostate Health: What Every Man Over 50 Should Know",
    excerpt: "Benign Prostatic Hyperplasia (BPH) affects over 50% of men over 50. Understand the symptoms, when to seek help, and the latest surgical and non-surgical treatments available.",
    date: "January 28, 2026",
    readTime: "7 min read",
    category: "Prostate",
    content: `The prostate is a walnut-sized gland that is part of the male reproductive system. As men age, the prostate naturally enlarges — a condition known as Benign Prostatic Hyperplasia (BPH). While BPH is not cancer, it can significantly impact quality of life.

**Understanding BPH**

BPH affects approximately:
- 50% of men aged 51-60
- 70% of men aged 61-70
- 90% of men over 80

The enlarged prostate compresses the urethra, leading to urinary symptoms.

**Warning Signs to Watch For**

- Frequent urination, especially at night (nocturia)
- Weak or interrupted urinary stream
- Difficulty starting urination (hesitancy)
- Feeling of incomplete bladder emptying
- Urgency or sudden need to urinate
- Dribbling after urination

**When to See a Urologist**

Don't wait until symptoms become severe. Consult a urologist if:
- You wake up more than twice at night to urinate
- You notice blood in your urine
- You experience pain during urination
- Your symptoms affect your daily activities or sleep

**Diagnosis**

- **Digital Rectal Examination (DRE)** – Physical assessment of prostate size
- **PSA Blood Test** – Prostate-Specific Antigen levels help rule out cancer
- **Uroflowmetry** – Measures urinary flow rate
- **Ultrasound** – Assesses prostate size and post-void residual urine

**Treatment Options**

1. **Lifestyle Modifications** – Fluid management, bladder training, reducing caffeine and alcohol
2. **Medications** – Alpha-blockers (tamsulosin), 5-alpha reductase inhibitors (finasteride)
3. **Minimally Invasive Procedures** – UroLift, Rezūm water vapor therapy
4. **Surgical Options** – TURP (Transurethral Resection of the Prostate), laser prostatectomy

Dr. Milind Bapat has over 30 years of experience treating prostate conditions and will recommend the most appropriate treatment based on your specific situation.`,
  },
  {
    id: "understanding-uti",
    title: "Understanding Urinary Tract Infections: Causes & Treatment",
    excerpt: "UTIs are among the most common infections, especially in women. Learn about causes, risk factors, antibiotic resistance concerns, and preventive measures to keep infections at bay.",
    date: "January 10, 2026",
    readTime: "5 min read",
    category: "UTI",
    content: `Urinary Tract Infections (UTIs) are bacterial infections that can affect any part of the urinary system — kidneys, ureters, bladder, and urethra. They are the second most common type of infection in the body.

**Types of UTIs**

- **Cystitis (Bladder Infection)** – Most common, causes burning urination, frequency, and pelvic pain
- **Pyelonephritis (Kidney Infection)** – More serious, causes fever, flank pain, nausea
- **Urethritis** – Infection of the urethra, often related to sexually transmitted organisms

**Risk Factors**

- Female anatomy (shorter urethra)
- Sexual activity
- Menopause (reduced estrogen)
- Urinary catheter use
- Kidney stones or urinary obstruction
- Diabetes or immunosuppression
- Prostate enlargement in men

**Prevention Tips**

1. Drink plenty of water (flush bacteria naturally)
2. Don't hold urine for prolonged periods
3. Urinate after sexual intercourse
4. Maintain proper hygiene (front-to-back wiping)
5. Cranberry products may help some individuals
6. Probiotics can support urogenital health

**Treatment Approach**

Most UTIs are treated with antibiotics. However, growing antibiotic resistance is a concern. At our clinic:
- We always perform urine culture and sensitivity testing before prescribing antibiotics
- We prescribe targeted antibiotics based on culture results
- We investigate recurrent UTIs for underlying structural or functional abnormalities
- We provide preventive strategies for patients with frequent infections

If you experience burning urination, cloudy/bloody urine, or lower abdominal pain, don't delay — early treatment prevents complications.`,
  },
  {
    id: "male-infertility-guide",
    title: "Male Infertility: A Complete Guide to Diagnosis & Treatment",
    excerpt: "Male factor infertility contributes to nearly 50% of all infertility cases. Explore the diagnostic workup, common causes, and advanced treatments including microsurgical sperm retrieval.",
    date: "December 18, 2025",
    readTime: "8 min read",
    category: "Andrology",
    content: `Male infertility is more common than many realize — it contributes to approximately 40-50% of all infertility cases. Despite this, many men hesitate to seek evaluation, often due to stigma or lack of awareness.

**Common Causes**

1. **Varicocele** – Enlarged veins in the scrotum, the most common reversible cause (affects 35-40% of infertile men)
2. **Hormonal Imbalances** – Low testosterone, elevated prolactin, thyroid disorders
3. **Obstructive Azoospermia** – Blockage preventing sperm from reaching the ejaculate
4. **Non-obstructive Azoospermia** – Impaired sperm production
5. **Infections** – Sexually transmitted infections, mumps orchitis
6. **Lifestyle Factors** – Smoking, excessive alcohol, obesity, heat exposure, stress

**Diagnostic Workup**

- **Semen Analysis** – The cornerstone test evaluating sperm count, motility, and morphology
- **Hormonal Profile** – FSH, LH, testosterone, prolactin, thyroid function
- **Scrotal Ultrasound** – Assesses testicular size, varicocele, obstructions
- **Genetic Testing** – Karyotyping, Y-chromosome microdeletion analysis
- **Post-ejaculation Urinalysis** – Rules out retrograde ejaculation

**Treatment Options**

- **Medical Therapy** – Hormonal treatments, antioxidant supplements, lifestyle modifications
- **Varicocelectomy** – Microsurgical repair of varicocele, improves semen parameters in 60-70% of men
- **TESA/PESA** – Testicular/Epididymal Sperm Aspiration for men with obstructive azoospermia
- **Micro-TESE** – Microsurgical testicular sperm extraction for non-obstructive azoospermia
- **IUI/IVF/ICSI** – Assisted reproductive techniques using retrieved sperm

**When to Seek Help**

If you and your partner have been trying to conceive for over 12 months (or 6 months if the female partner is over 35), both partners should be evaluated. A semen analysis is simple, non-invasive, and provides valuable information.

Dr. Milind Bapat specializes in male infertility evaluation and microsurgical sperm retrieval procedures (PESA/TESA), offering hope to couples struggling with infertility.`,
  },
  {
    id: "erectile-dysfunction-treatments",
    title: "Erectile Dysfunction: Breaking the Stigma & Finding Solutions",
    excerpt: "ED affects 1 in 5 men over 40 but remains under-discussed. Learn about the medical causes, relationship between ED and heart disease, and the full spectrum of treatment options.",
    date: "November 25, 2025",
    readTime: "6 min read",
    category: "Andrology",
    content: `Erectile Dysfunction (ED) — the inability to achieve or maintain an erection sufficient for sexual intercourse — is far more common than most people think. Studies suggest it affects approximately 20% of men over 40, with prevalence increasing with age.

**ED is Often a Medical Condition, Not Just "In Your Head"**

While psychological factors play a role, the majority of ED cases have an underlying physical cause:

- **Cardiovascular Disease** – ED is often an early warning sign of heart disease (appears 3-5 years before cardiac events)
- **Diabetes** – Up to 50% of diabetic men experience ED
- **Hypertension** – Both the condition and its medications can cause ED
- **Hormonal Issues** – Low testosterone (hypogonadism)
- **Neurological Conditions** – Multiple sclerosis, Parkinson's disease, spinal cord injury
- **Medications** – Antidepressants, antihypertensives, antiandrogens
- **Lifestyle** – Smoking, excessive alcohol, obesity, sedentary lifestyle

**The Heart-ED Connection**

ED and cardiovascular disease share the same underlying mechanism — endothelial dysfunction (damage to blood vessel lining). If you have ED, it's important to get a cardiovascular assessment. ED may be saving your life by providing an early warning.

**Treatment Options**

1. **Lifestyle Modifications** – Exercise, weight loss, smoking cessation, stress management
2. **Oral Medications** – PDE5 inhibitors (sildenafil, tadalafil) — effective in 60-70% of men
3. **Vacuum Erection Devices** – Non-invasive, useful for men who can't take medications
4. **Intracavernosal Injections** – Direct injection therapy, highly effective
5. **Penile Prosthesis Surgery** – For men who don't respond to other treatments, satisfaction rates exceed 90%
6. **Hormonal Therapy** – Testosterone replacement when levels are low

**Don't Suffer in Silence**

ED is a medical condition that deserves proper evaluation and treatment. Dr. Milind Bapat provides a confidential, non-judgmental consultation environment. With decades of experience in andrology, he can help identify the cause and recommend the most appropriate treatment for your situation.`,
  },
  {
    id: "blood-in-urine-hematuria",
    title: "Blood in Urine (Hematuria): When Should You Worry?",
    excerpt: "Seeing blood in your urine can be alarming. While sometimes benign, hematuria can also signal serious conditions like bladder or kidney cancer. Know when to see a urologist immediately.",
    date: "November 5, 2025",
    readTime: "5 min read",
    category: "Kidney Health",
    content: `Blood in urine (hematuria) is a symptom that should never be ignored. While it may have benign causes, it can also be the first sign of serious urological conditions including cancer.

**Types of Hematuria**

- **Gross (Visible) Hematuria** – Blood visible to the naked eye; urine appears pink, red, or cola-colored
- **Microscopic Hematuria** – Blood detected only under a microscope during routine urinalysis

**Common Causes**

1. **Urinary Tract Infections** – The most common cause, especially in women
2. **Kidney or Bladder Stones** – Stones can scratch the urinary tract lining
3. **Enlarged Prostate (BPH)** – In older men, enlarged prostate can cause bleeding
4. **Bladder Cancer** – Painless hematuria in adults over 50 is bladder cancer until proven otherwise
5. **Kidney Cancer** – Can cause intermittent painless bleeding
6. **Glomerulonephritis** – Kidney inflammation from various causes
7. **Vigorous Exercise** – "Runner's hematuria" — usually temporary
8. **Medications** – Blood thinners (warfarin, heparin), aspirin

**Red Flags — See a Urologist Immediately If:**

- You are over 40 and notice blood in urine for the first time
- Blood in urine is painless (painless hematuria has a higher association with cancer)
- You have risk factors: smoking history, chemical/dye exposure, radiation history
- Blood in urine is persistent or recurrent
- Associated with weight loss or flank pain

**Diagnostic Evaluation**

- **Urine Analysis & Culture** – Rule out infection
- **Urine Cytology** – Looks for abnormal cells
- **CT Urogram** – Detailed imaging of the entire urinary tract
- **Cystoscopy** – Direct visualization of the bladder with a camera
- **Ultrasound** – Initial screening tool

**Key Message**

Even a single episode of visible blood in urine warrants a complete urological evaluation. Early detection of urological cancers dramatically improves outcomes. Dr. Milind Bapat recommends that anyone experiencing hematuria should schedule an evaluation promptly — don't wait and hope it goes away.`,
  },
];

const BlogSection = () => {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Health Blog</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-2">
            Expert Health Insights
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Stay informed with the latest articles on urology, andrology, and men's health by Dr. Milind Bapat.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Link
                to={`/blog/${post.id}`}
                className="block bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow group h-full"
              >
                <div className="p-6 flex flex-col h-full">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium mb-4 w-fit">
                    {post.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <Link to="/blog">
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
