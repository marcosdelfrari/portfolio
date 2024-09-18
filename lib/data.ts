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
    hash: "https://github.com/marcosdelfrari",
  },
  {
    name: "LinkedIn",
    icon: createElement(FaLinkedin),
    hash: "https://www.linkedin.com/in/marcosdelfrari/",
  },
  {
    name: "Behance",
    icon: createElement(IoLogoBehance),
    hash: "http://www.behance.net/marcosdelfrari",
  },
  {
    name: "Instagram",
    icon: createElement(RiInstagramFill),
    hash: "http://www.instagram.com/marcosdelfrari",
  },
  {
    name: "Whatsapp",
    icon: createElement(IoLogoWhatsapp),
    hash: "https://wa.me/5531994369932",
  },
];

export const links = [
  {
    name: "Projetos",
    hash: "/projetos",
  },
  {
    name: "Experiência",
    hash: "/#Experience",
  },
] as const;

export const experiencesData = [
  {
    title: "Dev Front-End",
    enterprise: "Santri Web ",
    linkedin:
      "https://www.linkedin.com/company/santri-solu-es/?originalSubdomain=br",
    description:
      "Ajustei o frontend de um projeto MVC em TWIG, colaborei no desenvolvimento do protótipo da nova versão e desenvolvi do zero o frontend do e-commerce em Vue 3 com Bootstrap, seguindo o protótipo do Figma e criando componentes reutilizáveis.",
    date: "2023-2024",
    tags: ["TWIG", "Vue 3", "Bootstrap", "MVC", "FIGMA"],
  },
  {
    title: "Dev Front-End",
    enterprise: "Somos ",
    linkedin:
      "https://www.linkedin.com/company/somosclaims/posts/?feedView=all",
    description:
      "Criei landing pages com Elementor no WordPress, desenvolvi um site institucional em Angular e integrei-o com Strapi. Também participei da construção de um portal para clientes usando Angular e Ionic.",
    date: "2021-2023",
    tags: ["Angular", "Wordpress", "Strapi", "Ionic"],
  },
  {
    title: "Web Designer",
    enterprise: "PJUS ",
    linkedin:
      "https://www.linkedin.com/company/santri-solu-es/?originalSubdomain=br",
    description:
      "Gerenciei a comunicação visual e criei landing pages. Desenvolvi um aplicativo de treinamento para funcionários, analisei dados e otimizei o fluxo de captação de leads.",
    date: "2019-2021",
    tags: ["Elementor", "Wordpress", "Leads", "Adobe"],
  },
] as const;

export const projectsData = [
  {
    title: "Santri Ecommerce",
    description: "Landing page construida no wordpress",
    owner: "SANTRI WEB",
    builtWith: ["FIGMA", "Vue3", "JAVASCRIPT", "CSS"],
    linkLive:
      "https://www.figma.com/design/03IPXM3EdIrXELYI4JXQU9/Santri-%5Bnov.23%5D-(Copy)?node-id=0-1&t=Z5Gp1SGHkMoBxpio-1",
    linkCode: "",
    years: "2024",
  },
  {
    title: "Landing Page Dolla",
    description: "projeto angular",
    owner: "CODE",
    builtWith: ["TYPESCRIPT", "ANGULAR", "SASS"],
    linkLive: "https://dolla-solutions.netlify.app/",
    linkCode: "https://github.com/marcosdelfrari/Dolla/tree/main",
    years: "2023",
  },
  {
    title: "Dolla Site",
    description: "projeto angular",
    owner: "CODE",
    builtWith: ["TYPESCRIPT", "HTML Semântico", "ANGULAR", "SASS"],
    linkLive: "https://dolla-solutions-v1.netlify.app/",
    linkCode: "https://github.com/marcosdelfrari/Dolla/tree/dev",
    years: "2023",
  },
  {
    title: "Aluclass",
    description: "Landing page construida no wordpress",
    owner: "CODE",
    builtWith: ["FIGMA", "ELEMENTOR", "Wordpress"],
    linkLive: "https://aluclass.com.br",
    linkCode: "",
    years: "2023",
  },
  {
    title: "Lista de Tarefas",
    description: "projeto angular",
    owner: "CODE",
    builtWith: ["TYPESCRIPT", "ANGULAR", "SASS"],
    linkLive: "https://playful-sherbet-d1b2d1.netlify.app",
    linkCode: "https://github.com/marcosdelfrari/TaskSync",
    years: "2023",
  },
  {
    title: "Previsão do Tempo",
    description: "projeto angular",
    owner: "CODE",
    builtWith: ["TYPESCRIPT", "ANGULAR", "SASS"],
    linkLive: "https://creative-frangipane-b5922a.netlify.app",
    linkCode: "https://github.com/marcosdelfrari/ClimaTempo",
    years: "2023",
  },
  {
    title: "Portfolio V1",
    description: "Primeiro portfolio profissional",
    owner: "MARCOS",
    builtWith: ["TYPESCRIPT", "FIGMA", "ANGULAR", "CSS"],
    linkLive: "https://marcoslucas.netlify.app",
    linkCode: "https://github.com/marcosdelfrari/Marcos",
    years: "2023",
  },
  {
    title: "Ecommerce Santri",
    description: "Ajustes de front em todo o ecommerce",
    owner: "SANTRI WEB",
    builtWith: ["HTML", "TWIG", "CSS", "JAVASCRIPT"],
    linkLive: "https://dentalglobo.net",
    linkCode: "",
    years: "2023",
  },
  {
    title: "Teste Santri",
    description: "Ajustes de front em todo o ecommerce",
    owner: "SANTRI WEB",
    builtWith: ["FIGMA", "Vue3", "JAVASCRIPT", "CSS"],
    linkLive: "https://dentalglobo.net",
    linkCode: "https://github.com/marcosdelfrari/Santri-Disjuntor",
    years: "2023",
  },
  {
    title: "Atacadão dos Pisos",
    description: "Landing page construida no wordpress",
    owner: "CODE",
    builtWith: ["FIGMA", "ELEMENTOR", "Wordpress"],
    linkLive:
      "https://www.figma.com/design/8ukOdWyyYfByFKOogGUpm9/MARMORE?node-id=0-1&t=yOLxodSvdWryFA9T-1",
    linkCode: "",
    years: "2022",
  },
  {
    title: "Client Portal",
    description: "Site feito em angular e algumas paginas strapi",
    owner: "Somos",
    builtWith: ["TYPESCRIPT", "IONIC", "ANGULAR", "SaSS"],
    linkLive: "https://test-cp.somos.us/auth/login",
    linkCode: "",
    years: "2022",
  },

  {
    title: "Somos Site",
    description: "Site feito em angular e algumas paginas strapi",
    owner: "Somos",
    builtWith: ["TYPESCRIPT", "FIGMA", "ANGULAR", "STRAPI", "CSS"],
    linkLive: "https://somos.us/en-US",
    linkCode: "",
    years: "2022",
  },
  {
    title: "Caso Mariana",
    description: "Landing page construida no wordpress",
    owner: "PGMBM",
    builtWith: ["JAVASCRIPT", "ELEMENTOR", "Wordpress"],
    linkLive: "https://casoinglesmariana.com.br",
    linkCode: "",
    years: "2022",
  },
  {
    title: "My Diesel Claim",
    description: "Landing page construida no wordpress",
    owner: "PGMBM",
    builtWith: ["JAVASCRIPT", "ELEMENTOR", "Wordpress"],
    linkLive: "https://mydieselclaim.com",
    linkCode: "",
    years: "2021",
  },
  {
    title: "PGMBM Site",
    description: "Site construido no wordpress",
    owner: "PGMBM",
    builtWith: ["FIGMA", "JAVASCRIPT", "ELEMENTOR", "Wordpress"],
    linkLive:
      "https://www.figma.com/proto/fmz6dmJGEub8BoW4vZl47s/PGMBM.com%2F2022?node-id=160-368&t=87xPQ9lnRHT72SHu-1",
    linkCode: "",
    years: "2021",
  },
  {
    title: "Mazda Diesel",
    description: "Landing page construida no wordpress",
    owner: "PGMBM",
    builtWith: ["JAVASCRIPT", "ELEMENTOR", "Wordpress"],
    linkLive:
      "https://www.figma.com/proto/crGfp509mP1Lt8FbpwVsK6/01_MAZDA?node-id=4-2&t=JyLvJFUJ5svudQxt-1",
    linkCode: "",
    years: "2021",
  },
  {
    title: "GM Motor",
    description: "Landing page construida no wordpress",
    owner: "PGMBM",
    builtWith: ["JAVASCRIPT", "ELEMENTOR", "Wordpress"],
    linkLive:
      "https://www.figma.com/proto/Pk9JBJjERiNpleJcA1MnA2/01_MG-Motor-Group?node-id=5-12&t=KrBqUCy9Qe5LWmu5-1",
    linkCode: "",
    years: "2021",
  },
  {
    title: "PJUS Academy",
    description: "Aplicativo criado para a empresa treinar seus funcionarios",
    owner: "PJUS",
    builtWith: ["JAVASCRIPT", "Thunkable", "Illustrator"],
    linkLive: "https://x.thunkable.com/copy/3ba2304b782946fdafc8d0ff382d7e49",
    linkCode: "",
    years: "2020",
  },
  {
    title: "PJUS site",
    description: "Sites institucional criado para fins lucrativos",
    owner: "PJUS",
    builtWith: ["JAVASCRIPT", "BETHEME", "CSS", "WORDPRESS", "PHOTOSHOP"],
    linkLive: "https://pjus.com.br",
    linkCode: "",
    years: "2019",
  },
  {
    title: "Animes Dreams",
    description: "Sites criados quando criança",
    owner: "CRIANÇA",
    builtWith: ["JAVASCRIPT", "HTML", "CSS", "BLOGGER", "PHOTOSHOP"],
    linkLive: "https://an-dreams.blogspot.com",
    linkCode: "",
    years: "2013",
  },
  {
    title: "Design Fox Brasil",
    description: "Sites criados quando criança",
    owner: "CRIANÇA",
    builtWith: [, "HTML", "CSS", "BLOGGER", "PHOTOSHOP"],
    linkLive: "https://designfoxbrasil.blogspot.com",
    linkCode: "",
    years: "2013",
  },
  {
    title: "UP Tutoriais",
    description: "Sites criados quando criança",
    owner: "CRIANÇA",
    builtWith: ["JAVASCRIPT", "HTML", "CSS", "BLOGGER", "PHOTOSHOP"],
    linkLive: "/up.png",
    linkCode: "",
    years: "2013",
  },
  {
    title: "Arte Flex Sport",
    description: "Sites criados quando criança",
    owner: "CRIANÇA",
    builtWith: ["HTML", "CSS", "BLOGGER", "PHOTOSHOP"],
    linkLive: "/arteflex.png",
    linkCode: "",
    years: "2013",
  },
  {
    title: "House Hentai",
    description: "Sites criados quando criança",
    owner: "CRIANÇA",
    builtWith: ["HTML", "CSS", "PHOTOSHOP"],
    linkLive: "/hentai.png",
    linkCode: "",
    years: "2013",
  },
  {
    title: "The Walking Dead",
    description: "Sites criados quando criança",
    owner: "CRIANÇA",
    builtWith: ["HTML", "CSS", "PHOTOSHOP"],
    linkLive: "/walking.png",
    linkCode: "",
    years: "2013",
  },
  {
    title: "Design Teen",
    description: "Sites criados quando criança",
    owner: "CRIANÇA",
    builtWith: ["HTML", "CSS", "BLOGGER", "PHOTOSHOP"],
    linkLive: "/designteen.png",
    linkCode: "",
    years: "2012",
  },
  {
    title: "One Piece Advance",
    description: "Sites criados quando criança",
    owner: "CRIANÇA",
    builtWith: ["HTML", "CSS", "PHOTOSHOP"],
    linkLive: "/onepiece.png",
    linkCode: "",
    years: "2012",
  },
  {
    title: "PSY Mangás",
    description: "Sites criados quando criança",
    owner: "CRIANÇA",
    builtWith: ["HTML", "CSS", "BLOGGER", "PHOTOSHOP"],
    linkLive: "https://sahsasasa.blogspot.com",
    linkCode: "",
    years: "2012",
  },
  {
    title: "Rules Katatau",
    description: "Sites criados quando criança",
    owner: "CRIANÇA",
    builtWith: ["HTML", "CSS", "BLOGGER", "PHOTOSHOP"],
    linkLive: "https://katataurulles.blogspot.com",
    linkCode: "",
    years: "2012",
  },
  {
    title: "Inazuma Fox",
    description: "Sites criados quando criança",
    owner: "CRIANÇA",
    builtWith: ["HTML", "CSS", "BLOGGER", "PHOTOSHOP"],
    linkLive: "https://super--onze--brasil.blogspot.com",
    linkCode: "",
    years: "2012",
  },
  {
    title: "Minima Blogger",
    description: "Sites criados quando criança",
    owner: "CRIANÇA",
    builtWith: ["HTML", "CSS", "BLOGGER", "PHOTOSHOP"],
    linkLive: "https://testedonear.blogspot.com",
    linkCode: "",
    years: "2012",
  },
  {
    title: "Extreme Mania",
    description: "Sites criados quando criança",
    owner: "CRIANÇA",
    builtWith: ["HTML", "CSS", "BLOGGER", "PHOTOSHOP"],
    linkLive: "/extrememania.png",
    linkCode: "",
    years: "2011",
  },
  {
    title: "Inazuma Extreme",
    description: "Primeiro site criado",
    owner: "CRIANÇA",
    builtWith: ["HTML", "CSS", "PHOTOSHOP"],
    linkLive: "/primeiroprojeto.png",
    linkCode: "",
    years: "2011",
  },
] as const;

export const showCase = [
  {
    title: "Landing Page Dolla",
    description:
      "Desenvolvi uma landing page para a startup Dolla, com o objetivo de informar os usuários. Usei Figma para prototipação e Angular para codificação, reforçando a reutilização de componentes.",
    builtWith: ["Angular", "SaSS", "Figma"],
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
