import { Container } from './Container';
import { navLinks } from '@/data/experience';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/context/Transalation/TranslationContext';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();



  const handleNavClick = (to: string) => {
    const element = document.getElementById(to);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-bg-secondary/20 border-t border-bg-secondary/30">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <motion.a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('hero');
                }}
                className="inline-block text-2xl font-bold text-text"
                whileHover={{ scale: 1.05 }}
              >
                Edilson<span className="text-primary">.Dev</span>
              </motion.a>
              <p className="text-text/70 text-sm max-w-xs">
                {t.footer.description}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-text font-semibold mb-4">{t.footer.quickLinks}</h4>
              <ul className="space-y-2">
                {navLinks.slice(1).map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNavClick(link.to)}
                      className="text-text/70 hover:text-primary transition-colors text-sm"
                    >
                      {t.navbar[link.id as keyof typeof t.navbar]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-text font-semibold mb-4">{t.footer.connect}</h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/edilson591"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-bg-secondary/30 rounded-lg text-text hover:text-primary hover:bg-bg-secondary/50 transition-all"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/edilsonluciano/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-bg-secondary/30 rounded-lg text-text hover:text-primary hover:bg-bg-secondary/50 transition-all"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="mailto:edilson591@gmail.com"
                  className="p-2 bg-bg-secondary/30 rounded-lg text-text hover:text-primary hover:bg-bg-secondary/50 transition-all"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Email"
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-bg-secondary/30 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-text/60 text-sm flex items-center gap-1">
              © {currentYear} Edilson Luciano.
            </p>
            <p className="text-text/50 text-xs">
              {t.footer.rights}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
