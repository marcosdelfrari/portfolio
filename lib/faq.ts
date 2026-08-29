export interface FaqItem {
  question: string;
  answer: string;
}

export const homeFaqs: readonly FaqItem[] = [
  {
    question: "Quem é Marcos Lucas?",
    answer:
      "Marcos Lucas é engenheiro de software front-end com experiência em interfaces modernas, prototipação no Figma e entrega de produtos web em produção para empresas e projetos próprios.",
  },
  {
    question: "Quais tecnologias Marcos Lucas utiliza no front-end?",
    answer:
      "Trabalha principalmente com Next.js, React, TypeScript, Angular, Vue.js, Tailwind CSS, Bootstrap e integrações com CMS como Strapi e WordPress.",
  },
  {
    question: "Onde posso ver os projetos de Marcos Lucas?",
    answer:
      "Os principais projetos estão na página inicial deste portfólio e na rota /projetos, com links para demos ao vivo e repositórios quando disponíveis.",
  },
  {
    question: "Marcos Lucas atua em quais tipos de projeto?",
    answer:
      "Desenvolve landing pages, e-commerces, portais institucionais, aplicativos web e protótipos de interface, do design à implementação responsiva.",
  },
  {
    question: "Como entrar em contato com Marcos Lucas?",
    answer:
      "É possível entrar em contato pelos links de LinkedIn, GitHub, Behance, Instagram e WhatsApp disponíveis no topo do portfólio.",
  },
] as const;
