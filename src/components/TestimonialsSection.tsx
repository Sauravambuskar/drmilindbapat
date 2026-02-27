import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anil Patil",
    text: "Dr. Milind Bapat is the best Urologist in Pune. He gives a patient hearing, explains the condition and discusses options with patients and relatives. A pretty rare quality found among doctors these days.",
    condition: "Kidney Stone Treatment",
  },
  {
    name: "Sanjay Deshmukh",
    text: "Dr. Milind Bapat Sir is one of the best urologists in Pune. Accurate diagnosis, listens to you patiently, explains every minute aspect of your problem, even responds online. Operation was successful. Highly recommended.",
    condition: "Prostate Surgery",
  },
  {
    name: "Rajesh Kulkarni",
    text: "Visited Dr. Bapat for kidney stone problem. He explained the entire procedure clearly, from diagnosis to laser lithotripsy. The surgery was smooth and recovery was quick. His team is also very supportive and professional.",
    condition: "Laser Lithotripsy",
  },
  {
    name: "Meena Joshi",
    text: "My husband was treated by Dr. Bapat for male infertility. He was very understanding and sensitive about the issue. After thorough evaluation and TESA procedure, we were blessed with a baby. Forever grateful.",
    condition: "Male Infertility (TESA)",
  },
  {
    name: "Prakash Nair",
    text: "I had been suffering from frequent UTIs for years. Dr. Bapat did a thorough investigation, found the root cause, and treated it completely. No recurrence since then. His attention to detail is remarkable.",
    condition: "Recurrent UTI Treatment",
  },
  {
    name: "Suresh Bhosale",
    text: "Excellent experience with Dr. Milind Bapat for prostate treatment. He recommended medication first and monitored my progress regularly. When surgery was needed, he performed TURP with great precision. Back to normal life now.",
    condition: "BPH / TURP Surgery",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-2">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Hear from patients who trust Dr. Milind Bapat for their urological and andrological care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-7 shadow-[var(--shadow-card)] relative"
            >
              <Quote className="w-10 h-10 text-primary/15 absolute top-6 right-6" />
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-5 text-sm">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.condition}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
