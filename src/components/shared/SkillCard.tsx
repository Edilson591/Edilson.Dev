import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import {
  Code2,
  FileType,
  FileCode2,
  Layout,
  Palette,
  Paintbrush,
  Move,
  Database,
  Server,
  Layers,
  FileCode,
  Globe,
  GitBranch,
  Github,
  Code,
  Figma,
  Zap,
  Package,
  type LucideIcon,
} from 'lucide-react';
import type { Skill } from '@/types';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  FileType,
  FileCode2,
  Layout,
  Palette,
  Paintbrush,
  Move,
  Database,
  Server,
  Layers,
  FileCode,
  Globe,
  GitBranch,
  Github,
  Code,
  Figma,
  Zap,
  Package,
};

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const IconComponent = iconMap[skill.icon] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={cn(
        'group relative p-6 rounded-xl transition-all duration-300',
        'bg-bg-secondary/20 border border-bg-secondary/30',
        'hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10'
      )}
    >
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-text transition-colors"
        >
          <IconComponent size={24} />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-text">{skill.name}</h4>
          <div className="mt-2 h-2 bg-bg-secondary/50 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.proficiency}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
              className="h-full bg-primary rounded-full"
            />
          </div>
        </div>
        <span className="text-sm text-text/60 font-medium">
          {skill.proficiency}%
        </span>
      </div>
    </motion.div>
  );
}
