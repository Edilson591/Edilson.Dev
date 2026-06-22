import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "7",
    title: "Portfólio Pessoal",
    lastUpdated: "Projeto pessoal",
    description:
      "Portfólio pessoal desenvolvido com React, TypeScript, Vite e Tailwind CSS para apresentar projetos, habilidades, experiências e informações de contato.",
    image: "/Imagens/portfolio-screenshot-1.png",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/edilson591/portifolio-com-react",
    category: "personal",
    details: {
      longDescription:
        "Portfólio pessoal criado para reunir minha apresentação profissional, habilidades técnicas, experiências, projetos em destaque e formulário de contato. A aplicação conta com tema claro e escuro, tradução entre português e inglês, animações com Framer Motion, componentes reutilizáveis e integração com EmailJS para envio de mensagens.",
      images: [
        "/Imagens/portfolio-screenshot-1.png",
        "/Imagens/portfolio-screenshot-2.png",
        "/Imagens/portfolio-screenshot-3.png",
        "/Imagens/portfolio-screenshot-4.png",
      ],
    },
  },
  {
    id: "5",
    title: "ADQPAL - Sistema de Clínica",
    lastUpdated: "Projeto em destaque",
    description:
      "Sistema completo de gestão clínica com cadastro de pacientes, agendamentos, prontuário eletrônico, controle financeiro e relatórios. Atuei no desenvolvimento full-stack com foco em organização de dados, usabilidade e performance.",
    image: "/Imagens/adqpal-foto.png",
    tags: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    githubUrl: "https://github.com/Edilson591/clinicaAdqpal",
    demoUrl: "http://adqpal.com.br/",
    category: "professional",
    featured: true,
    details: {
      longDescription:
        "Sistema completo de gestão clínica desenvolvido para a ADQPAL. A plataforma oferece cadastro e histórico de pacientes, agendamento de consultas, prontuário eletrônico com anamnese e evolução clínica, controle financeiro com emissão de recibos e relatórios gerenciais. Atuei na arquitetura da aplicação, criação das APIs, modelagem do banco de dados e construção da interface com React e TypeScript. O backend em Node.js com PostgreSQL foi estruturado para manter integridade, organização e performance no armazenamento dos dados clínicos.",
      images: [
        "/Imagens/adqpal-foto.png",
        "/Imagens/projeto adqpal.png",
        "/Imagens/projeto adqpal1.png",
        "/Imagens/projeto adqpal3.png",
      ],
    },
  },
  {
    id: "4",
    title: "Plataforma Educacional Digital",
    description:
      "Plataforma educacional com acesso restrito, área do aluno e biblioteca de conteúdos digitais como eBooks, PDFs e MP3.",
    image: "/Imagens/projeto-educacional.png",
    lastUpdated: "Última atualização: 2026",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "PHP",
      "Laravel",
      "jQuery",
    ],
    githubUrl: "",
    category: "professional",
    details: {
      longDescription:
        "Plataforma educacional desenvolvida para um cliente, com sistema de autenticação e controle de acesso por perfil (aluno e administrador). A área do aluno conta com uma biblioteca de conteúdos digitais onde é possível acessar eBooks, PDFs e arquivos de áudio MP3. O painel administrativo permite o gerenciamento de usuários, upload e organização dos materiais e controle de permissões. O sistema foi construído com Laravel no backend, garantindo segurança e escalabilidade, e Bootstrap no frontend para responsividade em dispositivos móveis.",
      images: [
        "/Imagens/projeto-educacional.png",
        "/Imagens/projeto educacional2.png",
        "/Imagens/projeto educacional3.png",
        "/Imagens/projeto educacional4.png",
      ],
    },
  },
  {
    id: "6",
    title: "Sledu - Sistema de Gestão Escolar",
    lastUpdated: "Última atualização: 2026",
    description:
      "Plataforma de gestão escolar com foco na interface e experiência do usuário, permitindo o gerenciamento de alunos, professores, turmas e documentos acadêmicos.",
    image: "/Imagens/sledu-foto.png",
    tags: ["React", "TypeScript"],
    githubUrl: "",
    category: "professional",
    details: {
      longDescription:
        "O Sledu é um sistema de gestão escolar desenvolvido para centralizar processos administrativos e acadêmicos de uma instituição de ensino. Atuei diretamente no desenvolvimento do frontend da aplicação, utilizando React e TypeScript para construir interfaces modernas, responsivas e organizadas, garantindo uma boa experiência para os usuários. A plataforma permite o gerenciamento de alunos, professores, turmas, controle acadêmico e organização de documentos especializados. O sistema conta com um backend responsável pela lógica de negócio e integração de dados, ao qual o frontend se conecta por meio de APIs.",
      images: [
        "/Imagens/sledu-foto.png",
        "/Imagens/projeto-sledu.png",
        "/Imagens/projeto-sledu1.png",
        "/Imagens/projeto-sledu2.png",
      ],
    },
  },
];
