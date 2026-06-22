import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { useTranslation } from "@/context/Transalation/TranslationContext";

function Counter({
  from,
  to,
  duration = 2,
}: {
  from: number;
  to: number;
  duration?: number;
}) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      ease: "easeOut",
    });

    return controls.stop;
  }, [count, to, duration]);

  return <motion.span>{rounded}</motion.span>;
}

export function About() {
  const { t } = useTranslation();
  const stats = [
    { value: 1, label: t.about.stats.experience, suffix: "+" },
    { value: 10, label: t.about.stats.projects, suffix: "+" },
    { value: 5, label: t.about.stats.technologies, suffix: "+" },
    { value: 100, label: t.about.stats.commits, suffix: "+" },
  ];

  return (
    <section id="about" className="section-container bg-bg-secondary/10">
      <Container>
        <SectionTitle
          title={t.about.title}
          subtitle={t.about.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-primary/20 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-2xl" />

              {/* Main content */}
              <div className="relative bg-bg-secondary/30 rounded-2xl p-8 flex flex-col items-center justify-center h-full">
                <div className="text-6xl mb-4">👨‍💻</div>
                <h3 className="text-2xl font-bold text-text mb-2">
                  Edilson Luciano
                </h3>
                <p className="text-primary font-medium">
                  {t.about.role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-text/80 leading-relaxed">
                {t.about.bio1}
              </p>

              <p className="text-text/80 leading-relaxed">
                {t.about.bio2}
              </p>

              <p className="text-text/80 leading-relaxed">
                {t.about.bio3}
              </p>
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {[
                "React",
                "TypeScript",
                "Node.js",
                "Go",
                "Laravel",
                "Tailwind CSS",
              ].map((tech) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-bg-secondary/20 rounded-xl border border-bg-secondary/30"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <Counter from={0} to={stat.value} />
                {stat.suffix}
              </div>
              <p className="text-text/70 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
