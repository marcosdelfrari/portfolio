import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoBehance } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { ReactNode, createElement } from "react";
import showcaseone from "/public/maciphone.png";
import showcasetwo from "/public/iphones.png";

export interface Social {
  name: string;
  icon: ReactNode;
  hash: string;
}

export const social: Social[] = [
  {
    name: "GitHub",
    icon: createElement(FaGithub),
    hash: "#github",
  },
  {
    name: "LinkedIn",
    icon: createElement(FaLinkedin),
    hash: "#linkedin",
  },
  {
    name: "Behance",
    icon: createElement(IoLogoBehance),
    hash: "#Behance",
  },
  {
    name: "Instagram",
    icon: createElement(RiInstagramFill),
    hash: "#Instagram",
  },
  {
    name: "Whatsapp",
    icon: createElement(IoLogoWhatsapp),
    hash: "#Instagram",
  },
];

export const links = [
  {
    name: "Projetos",
    hash: "/projetos",
  },
  {
    name: "Experiência",
    hash: "#Experience",
  },
] as const;

export const experiencesData = [
  {
    title: "Dev Front-End",
    enterprise: "Santri Web ",
    linkedin:
      "https://www.linkedin.com/company/santri-solu-es/?originalSubdomain=br",
    description:
      "Desenvolveu e manteve a interface do e-commerce usando Vue3, resolvendo bugs em múltiplos dispositivos, colaborando com o backend e implementando componentes reutilizáveis e escaláveis.",
    date: "2023-2024",
    tags: ["Angular", "TypeScript"],
  },
  {
    title: "Dev Front-End",
    enterprise: "Somos ",
    linkedin:
      "https://www.linkedin.com/company/somosclaims/posts/?feedView=all",
    description:
      "Desenvolveu SPAs com Angular e IONIC, criou landing pages em WordPress, aplicou Scrum, gerenciou sprints, realizou code reviews e otimizou aplicações, resolvendo bugs e problemas de desempenho.",
    date: "2021-2023",
    tags: ["Angular", "TypeScript"],
  },
  {
    title: "Web Designer",
    enterprise: "PJUS ",
    linkedin:
      "https://www.linkedin.com/company/santri-solu-es/?originalSubdomain=br",
    description:
      "Customizou temas e plugins no WordPress, criou landing pages, gerenciou tráfego e implementou segurança, backup e otimização de desempenho para sites de clientes.",
    date: "2019-2021",
    tags: ["Angular", "TypeScript"],
  },
  {
    title: "Engenheiro de Software",
    enterprise: "Code ",
    linkedin: "https://www.instagram.com/voudecode",
    description: "lorem ipsum",
    date: "2019-2024",
    tags: ["Angular", "TypeScript"],
  },
] as const;

export const projectsData = [
  {
    title: "Inazuma Extreme",
    description: "Primeiro site criado",
    owner: "CODE",
    builtWith: ["HTML", "CSS", "JAVASCRIPT", "BLOGGER", "PHOTOSHOP"],
    linkLive: "ss",
    linkCode: "",
    years: "2023",
  },
] as const;

export const showCase = [
  {
    title: "Landing Page Dolla",
    description:
      "Desenvolvi uma landing page para a startup Dolla, com o objetivo de informar os usuários. Usei Figma para prototipação e Angular para codificação, reforçando a reutilização de componentes.",
    builtWith: ["Angular", "Sass", "Figma"],
    preview: showcaseone,
    linkLive: "https://dolla-solutions.netlify.app",
    linkCode: "https://github.com/marcosdelfrari/Dolla/tree/main",
  },
  {
    title: "Site Institucional Dolla",
    description:
      "Para expor projetos e cases de sucesso, criei um site institucional, utilizando Figma para o UI kit e Angular para codificação com componentes reutilizáveis e rotas.",
    builtWith: ["Angular", "Figma", "TypeScript"],
    preview: showcasetwo,
    linkLive: "https://dolla-solutions-v1.netlify.app",
    linkCode: "https://github.com/marcosdelfrari/Dolla/tree/dev",
  },
] as const;
