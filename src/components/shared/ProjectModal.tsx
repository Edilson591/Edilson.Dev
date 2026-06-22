import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/types";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const images = project.details?.images ?? [project.image];

  useEffect(() => {
    if (!isOpen) setCurrentImage(0);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const prev = useCallback(() => {
    setCurrentImage((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);
  const next = useCallback(() =>
    setCurrentImage((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, next, onClose, prev]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="relative z-10 w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
            style={{ background: "var(--bg)", border: "1px solid color-mix(in srgb, var(--bg-secondary) 40%, transparent)" }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Fechar"
              className="absolute top-4 right-4 z-20 p-2 rounded-full transition-all"
              style={{ background: "color-mix(in srgb, var(--bg-secondary) 60%, transparent)", color: "var(--text)" }}
            >
              <X size={18} />
            </button>

            {/* Image Gallery */}
            <div
              className="relative h-64 sm:h-[600px] overflow-hidden rounded-t-2xl"
              style={{ background: "color-mix(in srgb, var(--bg-secondary) 30%, transparent)" }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={images[currentImage]}
                  alt={`${project.title} - imagem ${currentImage + 1}`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.22 }}
                  className="w-full h-full object-contain"
                />
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    aria-label="Imagem anterior"
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/65 text-white transition-all"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Próxima imagem"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/65 text-white transition-all"
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 items-center">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImage(i)}
                        aria-label={`Ver imagem ${i + 1} de ${project.title}`}
                        className="h-2 rounded-full transition-all duration-300"
                        style={{
                          width: i === currentImage ? "1.5rem" : "0.5rem",
                          background: i === currentImage ? "var(--btn-primary, #eaac35)" : "rgba(255,255,255,0.45)",
                        }}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Image counter */}
              {images.length > 1 && (
                <span className="absolute top-3 left-3 text-xs text-white bg-black/40 px-2 py-0.5 rounded-full">
                  {currentImage + 1} / {images.length}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <h2
                id="project-modal-title"
                className="text-2xl font-bold mb-3"
                style={{ color: "var(--text)" }}
              >
                {project.title}
              </h2>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Divider */}
              <div
                className="mb-5 h-px"
                style={{ background: "color-mix(in srgb, var(--bg-secondary) 40%, transparent)" }}
              />

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: "color-mix(in srgb, var(--text) 80%, transparent)" }}
              >
                {project.details?.longDescription ?? project.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
