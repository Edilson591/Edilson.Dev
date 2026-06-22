import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import { useTranslation } from "@/context/Transalation/TranslationContext";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectModal } from "@/components/shared/ProjectModal";
import type { Project } from "@/types";
import { cn } from "@/utils/cn";

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

export function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hasDetails = Boolean(project.details);
  const hasLiveDemo = project.demoUrl && project.demoUrl !== "#";

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Card className={cn("h-full flex flex-col overflow-hidden group relative", featured && "lg:grid lg:grid-cols-[1.25fr_1fr] lg:items-stretch border-primary/50 shadow-lg shadow-primary/10")}>
          {project.lastUpdated && <span className="absolute top-2 right-2 z-30 text-xs bg-primary text-text px-2 py-1 rounded-md">
            {project.lastUpdated}
          </span>}
          {/* Image */}
          <div className={cn("relative overflow-hidden", featured ? "h-64 lg:h-full" : "h-48")}>
            <img
              src={project.image}
              alt={`Captura de tela do projeto ${project.title}`}
              loading="lazy"
              className="absolute inset-0 z-10 h-full w-full object-contain p-4"
            />
            <div className="w-full h-full bg-bg-secondary/50 flex items-center justify-center">
              <span className="text-text/40 text-sm">{project.title}</span>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-primary/20 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <div className="flex gap-3">
                {hasDetails && !project.githubUrl && (
                  <Button
                    size="sm"
                    variant="primary"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <Eye size={16} className="mr-1" />
                    {t.projectCard.details}
                  </Button>
                )}
                {hasLiveDemo &&  (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-text transition-all duration-200 hover:bg-[#d99a2b] active:scale-95"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-3 py-1.5 text-sm font-medium text-primary transition-all duration-200 hover:bg-primary hover:text-text active:scale-95"
                  >
                    <Github size={16} className="mr-1" />
                    {t.projectCard.code}
                  </a>
                )}
              </div>
            </motion.div>
          </div>

          <div className="flex flex-1 flex-col">
            <CardHeader>
              {featured && <span className="mb-2 inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{t.projectCard.featured}</span>}
              <CardTitle className={featured ? "text-2xl md:text-3xl" : undefined}>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter>
              <div className="flex flex-col gap-3 w-full sm:flex-row">
                {hasDetails && (
                  <Button
                    size="sm"
                    variant="primary"
                    className="flex-1"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <Eye size={16} className="mr-1" />
                    {t.projectCard.viewDetails}
                  </Button>
                )}
                {/* {hasLiveDemo && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-lg border-2 border-primary px-3 py-1.5 text-sm font-medium text-primary transition-all duration-200 hover:bg-primary hover:text-text active:scale-95"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    {t.projectCard.viewDemo}
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-lg border-2 border-primary px-3 py-1.5 text-sm font-medium text-primary transition-all duration-200 hover:bg-primary hover:text-text active:scale-95"
                  >
                    <Github size={16} className="mr-1" />
                    {hasDetails || hasLiveDemo
                      ? t.projectCard.code
                      : t.projectCard.viewCode}
                  </a>
                )} */}
              </div>
            </CardFooter>
          </div>
        </Card>
      </motion.div>

      {hasDetails && (
        <ProjectModal
          project={project}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
