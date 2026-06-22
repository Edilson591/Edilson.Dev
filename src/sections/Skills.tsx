import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { SkillCard } from '@/components/shared/SkillCard';
import { skills, skillCategories } from '@/data/skills';
import { cn } from '@/utils/cn';
import { useTranslation } from '@/context/Transalation/TranslationContext';

export function Skills() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>('frontend');

  const filteredSkills = skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="section-container">
      <Container>
        <SectionTitle
          title={t.skills.title}
          subtitle={t.skills.subtitle}
        />

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'relative px-6 py-3 rounded-full font-medium transition-all duration-300',
                activeCategory === category.id
                  ? 'text-text'
                  : 'text-text/60 hover:text-text'
              )}
            >
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{t.skills.categories[category.id as keyof typeof t.skills.categories]}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, index) => (
              <SkillCard key={skill.id} skill={skill} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-6 p-6 bg-bg-secondary/20 rounded-2xl border border-bg-secondary/30">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-text/70 text-sm">{t.skills.levels.basic}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="text-text/70 text-sm">{t.skills.levels.intermediate}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-text/70 text-sm">{t.skills.levels.advanced}</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
