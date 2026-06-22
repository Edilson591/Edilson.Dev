import { motion } from "framer-motion";
import { Download, Github, Linkedin } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { useTranslation } from "@/context/Transalation/TranslationContext";


export function Hero() {
  const handleScrollToAbout = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    window.open("/Curriculo Edilson.pdf", "_blank", "noopener,noreferrer");
  };

  const {t} = useTranslation()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-bg-secondary/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
               {t.hero.greeting}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text mb-4"
          >
            Edilson <span className="text-primary">Luciano</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl text-text/80">
              {t.hero.subtitle}{" "}
              <span className="text-primary font-semibold">Full-Stack</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-text/70 text-base md:text-lg max-w-2xl mb-8 leading-relaxed"
          >
            {t.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button size="lg" onClick={handleScrollToAbout} className="group">
              {t.hero.ctaProjects}
              <motion.span
                className="ml-2 inline-block"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ↓
              </motion.span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group"
              onClick={handleDownloadCV}
            >
              <Download size={18} className="mr-2" />
              {t.hero.ctaDownload}
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex gap-4"
          >
            <motion.a
              href="https://github.com/edilson591"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-bg-secondary/30 text-text hover:bg-primary hover:text-text transition-all"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/edilsonluciano/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-bg-secondary/30 text-text hover:bg-primary hover:text-text transition-all"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={handleScrollToAbout}
          className="flex flex-col items-center text-text/50 hover:text-primary transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm mb-2">Scroll</span>
          <ChevronDown size={24} />
        </motion.button>
      </motion.div> */}
    </section>
  );
}
