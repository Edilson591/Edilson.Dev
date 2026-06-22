import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Empresa de Plataforma Educacional",
    role: "Desenvolvedor Full-Stack (PJ)",
    period: "2025 - Presente",
    description:
      "Atuação no desenvolvimento e manutenção de uma plataforma educacional, trabalhando no back-end com Laravel/PHP e no front-end com React. Responsável pela implementação de novas funcionalidades, correção de bugs, integração com APIs e melhoria de performance do sistema. Participação na definição de regras de negócio e evolução contínua da aplicação.",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "JQuery"],
    type: "work",
  },
  {
    id: "2",
    company: "Plataforma de Gestão Escolar",
    role: "Desenvolvedor Front-End",
    period: "2025 - Presente",
    description:
      "Atuação no desenvolvimento de uma plataforma educacional voltada para gestão escolar, utilizando React, JavaScript e TypeScript no front-end. Responsável pela construção de interfaces, consumo de APIs, implementação de funcionalidades e melhorias na experiência do usuário. Colaboração na evolução contínua do sistema e adaptação às regras de negócio da área educacional.",
    technologies: ["React", "TypeScript", "JavaScript"],
    type: "work",
  },

  {
    id: "3",
    company: "Projeto de Gestão de Clínica",
    role: "Desenvolvedor Full-Stack",
    period: "2026 - 2026",
    description:
      "Desenvolvimento de uma plataforma completa para gestão de clínica médica, utilizando Node.js no back-end e React com TypeScript no front-end. Implementação de funcionalidades como agendamento de consultas, gerenciamento de pacientes, controle de usuários e dashboard com dados em tempo real. Responsável pela definição da arquitetura, criação de APIs REST, modelagem de banco de dados e aplicação de regras de negócio.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
    ],
    type: "freelance",
  },
  {
    id: "4",
    company: "Estudos e Certificações",
    role: "Estudante de Desenvolvimento Web",
    period: "2023 - 2025",
    description:
      "Início da jornada na programação com foco em desenvolvimento web. Aprendizado de HTML, CSS, JavaScript e fundamentos de programação. Participação em bootcamps e cursos online para aprimorar habilidades técnicas.",
    technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
    type: "project",
  },
];

export const navLinks = [
  { id: "hero", label: "Início", to: "hero" },
  { id: "about", label: "Sobre", to: "about" },
  { id: "skills", label: "Habilidades", to: "skills" },
  { id: "projects", label: "Projetos", to: "projects" },
  { id: "experience", label: "Experiência", to: "experience" },
  { id: "contact", label: "Contato", to: "contact" },
];
