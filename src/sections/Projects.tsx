import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { projects } from '@/data/projects';
import { useTranslation } from '@/context/Transalation/TranslationContext';

export function Projects() {
  const { t } = useTranslation();

  const translatedProjects = projects.map((project) => {
    const data = t.projectData[project.id as keyof typeof t.projectData];
    return {
      ...project,
      title: data.title,
      description: data.description,
      details: project.details
        ? { ...project.details, longDescription: (data as { longDescription?: string }).longDescription ?? project.details.longDescription }
        : undefined,
    };
  });

  const featuredProject = translatedProjects.find((project) => project.featured);
  const otherProjects = translatedProjects.filter((project) => !project.featured);

  return (
    <section id="projects" className="section-container bg-bg-secondary/10">
      <Container>
        <SectionTitle
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        {featuredProject && (
          <div className="mb-10">
            <ProjectCard project={featuredProject} index={0} featured />
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index + 1} />
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/edilson591"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-text transition-colors font-medium"
            whileHover={{ x: 5 }}
          >
            {t.projects.viewMore}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </Container>
    </section>
  );
}
