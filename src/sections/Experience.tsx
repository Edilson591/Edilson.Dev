import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { experiences } from "@/data/experience";
import { cn } from "@/utils/cn";
import { useTranslation } from "@/context/Transalation/TranslationContext";

export function Experience() {
  const { t } = useTranslation();
  const translatedExperiences = experiences.map((exp) => ({
    ...exp,
    ...t.experienceData[exp.id as keyof typeof t.experienceData],
  }));

  return (
    <section id="experience" className="section-container">
      <Container>
        <SectionTitle
          title={t.experience.title}
          subtitle={t.experience.subtitle}
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-bg-secondary/50 -translate-x-1/2" />

            {/* Experience Items */}
            <div className="space-y-12">
              {translatedExperiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    "relative flex flex-col md:flex-row gap-8",
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                  )}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                      className={cn(
                        "w-4 h-4 rounded-full border-4",
                        exp.type === "freelance"
                          ? "bg-primary border-primary"
                          : "bg-bg border-bg-secondary",
                      )}
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={cn(
                      "ml-12 md:ml-0 md:w-1/2",
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12",
                    )}
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      className={cn(
                        "p-6 rounded-xl bg-bg-secondary/20 border border-bg-secondary/30",
                        "hover:border-primary/50 transition-all duration-300",
                        exp.type === "freelance" && "border-primary/30",
                      )}
                    >
                      {/* Header */}
                      <div
                        className={cn(
                          "flex flex-col gap-2 mb-4",
                          index % 2 === 0 ? "md:items-end" : "md:items-start",
                        )}
                      >
                        <div className="flex items-center gap-2 text-primary">
                          <Briefcase size={18} />
                          <span className="font-semibold">{exp.company}</span>
                        </div>

                        <h3 className="text-xl font-bold text-text">
                          {exp.role}
                        </h3>

                        <div
                          className={cn(
                            "flex flex-wrap items-center gap-4 text-text/60 text-sm",
                            index % 2 === 0 ? "md:justify-end" : "",
                          )}
                        >
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p
                        className={cn(
                          "text-text/70 mb-4 leading-relaxed",
                          index % 2 === 0 ? "md:text-right" : "",
                        )}
                      >
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div
                        className={cn(
                          "flex flex-wrap gap-2",
                          index % 2 === 0 ? "md:justify-end" : "",
                        )}
                      >
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant={
                              exp.type === "work" ? "primary" : "outline"
                            }
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Highlight Badge for Laravel Experience */}
                      {exp.type === "work" &&
                        exp.technologies.includes("Laravel") && (
                          <div
                            className={cn(
                              "mt-4",
                              index % 2 === 0 ? "md:text-right" : "",
                            )}
                          >
                            <Badge variant="primary" className="text-xs">
                              {t.experience.laravelBadge}
                            </Badge>
                          </div>
                        )}
                      {exp.type === "work" &&
                        exp.technologies.includes("React") && (
                          <div
                            className={cn(
                              "mt-4",
                              index % 2 === 0 ? "md:text-right" : "",
                            )}
                          >
                            <Badge variant="primary" className="text-xs">
                              {t.experience.reactBadge}
                            </Badge>
                          </div>
                        )}
                    </motion.div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
