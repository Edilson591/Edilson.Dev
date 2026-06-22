# Portfólio Edilson Luciano

Portfólio pessoal desenvolvido com React, TypeScript, Vite e Tailwind CSS. O projeto apresenta informações profissionais, habilidades técnicas, experiências, projetos em destaque e formulário de contato integrado ao EmailJS.

## Demonstração

O projeto possui uma versão estática gerada em `dist/`, pronta para publicação em serviços como GitHub Pages, Vercel, Netlify ou outro provedor de hospedagem estática.

## Funcionalidades

- Layout responsivo para desktop e dispositivos móveis
- Tema claro e escuro com persistência no navegador
- Alternância de idioma entre português e inglês
- Seções de apresentação, sobre, habilidades, projetos, experiência e contato
- Animações com Framer Motion
- Formulário de contato com EmailJS
- Download de currículo em PDF
- Cards de projetos com detalhes, imagens, link de demo e repositório

## Tecnologias Utilizadas

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- EmailJS
- React Toastify

## Estrutura do Projeto

```text
src/
  components/
    layout/       Componentes de estrutura, como Navbar, Footer e Container
    shared/       Componentes reutilizáveis de seções e cards
    ui/           Componentes de interface, botões, badges, toast e toggles
  context/
    Transalation/ Contexto e textos para tradução PT/EN
  data/           Dados de projetos, habilidades e experiências
  hooks/          Hooks de tema, seção ativa e posição de scroll
  sections/       Seções principais da página
  styles/         Estilos globais e variáveis de tema
  types/          Tipagens TypeScript
  utils/          Funções utilitárias
```

## Pré-requisitos

Antes de começar, é necessário ter instalado:

- Node.js
- npm

## Como Executar o Projeto

Clone o repositório:

```bash
git clone https://github.com/edilson591/seu-repositorio.git
```

Acesse a pasta do projeto:

```bash
cd seu-repositorio
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto com as variáveis do EmailJS:

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse no navegador:

```text
http://localhost:5173
```

## Scripts Disponíveis

- `npm run dev`: inicia o ambiente de desenvolvimento com Vite
- `npm run build`: gera a versão de produção em `dist/`
- `npm run lint`: executa o ESLint no projeto
- `npm run preview`: visualiza localmente a versão de produção

## Build para Produção

Para gerar os arquivos finais:

```bash
npm run build
```

Os arquivos serão criados na pasta `dist/`.

## Configuração do EmailJS

O formulário de contato utiliza o EmailJS. Para funcionar corretamente, configure as três variáveis no arquivo `.env`:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

O arquivo `.env` não deve ser enviado para o GitHub.

## Autor

Edilson Luciano

- GitHub: [@edilson591](https://github.com/edilson591)
- LinkedIn: [edilsonluciano](https://www.linkedin.com/in/edilsonluciano/)
