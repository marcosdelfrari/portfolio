import type { Metadata } from "next";
import { showCase, social } from "@/lib/data";
import {
  getAllProjects,
  getProjectPath,
  slugify,
  type ProjectWithSlug,
} from "@/lib/projects";

export const SITE_NAME = "Marcos Lucas";
export const SITE_TITLE = "Marcos Lucas | Engenheiro de Software Front-End";
export const SITE_DESCRIPTION =
  "Portfólio de Marcos Lucas, engenheiro de software front-end especializado em interfaces modernas com Next.js, React, Angular e TypeScript. Projetos, experiência e contato.";

const DEFAULT_OG_IMAGE = "/maciphone.png";

export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "https://marcoslucas.netlify.app";
}

export function normalizeSiteUrl(url: string): string {
  return url.replace(/\/+$/, "");
}

export function absoluteUrl(path = "/"): string {
  const base = getSiteUrl();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}

export function buildPageMetadata(options: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "profile" | "article";
  ogImagePath?: string;
  skipOgImage?: boolean;
  overrides?: Partial<Metadata>;
}): Metadata {
  const {
    title,
    description,
    path,
    type = "website",
    ogImagePath = DEFAULT_OG_IMAGE,
    skipOgImage = false,
    overrides,
  } = options;

  const canonical = absoluteUrl(path);
  const ogImage = absoluteUrl(ogImagePath);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "pt_BR",
      type,
      ...(skipOgImage
        ? {}
        : {
            images: [
              {
                url: ogImage,
                width: 1200,
                height: 630,
                alt: title,
              },
            ],
          }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(skipOgImage ? {} : { images: [ogImage] }),
    },
    ...overrides,
  };
}

export function buildDefaultMetadata(): Metadata {
  return {
    metadataBase: new URL(getSiteUrl()),
    title: {
      default: SITE_TITLE,
      template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: getSiteUrl() }],
    creator: SITE_NAME,
    keywords: [
      "Marcos Lucas",
      "engenheiro de software",
      "desenvolvedor front-end",
      "portfólio",
      "Next.js",
      "React",
      "TypeScript",
      "Angular",
      "Tailwind CSS",
      "Belo Horizonte",
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "profile",
      locale: "pt_BR",
      url: getSiteUrl(),
      siteName: SITE_NAME,
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      images: [
        {
          url: absoluteUrl(DEFAULT_OG_IMAGE),
          width: 1200,
          height: 630,
          alt: SITE_TITLE,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      images: [absoluteUrl(DEFAULT_OG_IMAGE)],
    },
    alternates: {
      canonical: getSiteUrl(),
    },
  };
}

export function buildHomeMetadata(): Metadata {
  return buildPageMetadata({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    path: "/",
    type: "profile",
    skipOgImage: true,
  });
}

export function buildProjectsMetadata(): Metadata {
  return buildPageMetadata({
    title: "Projetos",
    description:
      "Catálogo completo de projetos de Marcos Lucas: aplicações web com Next.js, Angular, Vue e WordPress — do protótipo ao deploy em produção.",
    path: "/projetos",
    type: "website",
    skipOgImage: true,
  });
}

export function buildProjectMetadata(project: ProjectWithSlug): Metadata {
  const technologies = project.builtWith.filter(Boolean).join(", ");

  return buildPageMetadata({
    title: project.title,
    description: `${project.description} Projeto de ${project.owner} (${project.years}) com ${technologies}.`,
    path: getProjectPath(project.slug),
    type: "article",
    skipOgImage: true,
  });
}

type JsonLd = Record<string, unknown>;

export function buildBreadcrumbJsonLd(
  items: readonly { name: string; path: string }[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildPersonJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    jobTitle: "Engenheiro de Software Front-End",
    description: SITE_DESCRIPTION,
    url: getSiteUrl(),
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    sameAs: social.map((item) => item.hash),
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Angular",
      "Vue.js",
      "Tailwind CSS",
      "UI/UX",
      "Front-end development",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelancer",
    },
  };
}

export function buildWebSiteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: getSiteUrl(),
    inLanguage: "pt-BR",
    publisher: {
      "@type": "Person",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}

export function buildProfilePageJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: getSiteUrl(),
    mainEntity: {
      "@type": "Person",
      name: SITE_NAME,
      jobTitle: "Engenheiro de Software Front-End",
      url: getSiteUrl(),
    },
  };
}

export function buildItemListJsonLd(options: {
  name: string;
  description: string;
  path: string;
  items: readonly { name: string; url: string; description?: string }[];
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: options.name,
    description: options.description,
    url: absoluteUrl(options.path),
    numberOfItems: options.items.length,
    itemListElement: options.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      description: item.description,
      url: item.url,
    })),
  };
}

export function buildCollectionPageJsonLd(options: {
  name: string;
  description: string;
  path: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: options.name,
    description: options.description,
    url: absoluteUrl(options.path),
    inLanguage: "pt-BR",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}

function mapProjectItems(
  projects: readonly {
    name: string;
    description: string;
    slug: string;
    linkLive: string;
  }[],
) {
  return projects.map((project) => ({
    name: project.name,
    description: project.description,
    url: absoluteUrl(getProjectPath(project.slug)),
  }));
}

export function buildProjectJsonLd(project: ProjectWithSlug): JsonLd[] {
  const projectUrl = absoluteUrl(getProjectPath(project.slug));
  const liveUrl = project.linkLive.startsWith("http") ? project.linkLive : undefined;

  return [
    buildBreadcrumbJsonLd([
      { name: "Início", path: "/" },
      { name: "Projetos", path: "/projetos" },
      { name: project.title, path: getProjectPath(project.slug) },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: project.title,
      description: project.description,
      url: liveUrl ?? projectUrl,
      applicationCategory: "WebApplication",
      operatingSystem: "Web",
      inLanguage: "pt-BR",
      author: {
        "@type": "Person",
        name: SITE_NAME,
        url: getSiteUrl(),
      },
      datePublished: `${project.years}-01-01`,
      keywords: project.builtWith.filter(Boolean).join(", "),
      ...(liveUrl ? { sameAs: liveUrl } : {}),
      ...(project.linkCode ? { codeRepository: project.linkCode } : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      url: projectUrl,
      creator: {
        "@type": "Person",
        name: SITE_NAME,
        url: getSiteUrl(),
      },
      dateCreated: project.years,
    },
  ];
}

export function buildHomeJsonLd(): JsonLd[] {
  const allProjects = getAllProjects();
  const featuredProjects = [
    ...showCase.map((project) => {
      const match = allProjects.find((item) => item.title === project.title);
      return {
        name: project.title,
        description: project.description,
        slug: match?.slug ?? slugify(project.title),
        linkLive: project.linkLive,
      };
    }),
    ...allProjects.slice(0, 6).map((project) => ({
      name: project.title,
      description: project.description,
      slug: project.slug,
      linkLive: project.linkLive,
    })),
  ];

  return [
    buildWebSiteJsonLd(),
    buildProfilePageJsonLd(),
    buildPersonJsonLd(),
    buildItemListJsonLd({
      name: "Projetos em destaque",
      description: "Seleção de projetos front-end desenvolvidos por Marcos Lucas.",
      path: "/",
      items: mapProjectItems(featuredProjects),
    }),
  ];
}

export function buildProjectsJsonLd(): JsonLd[] {
  const indexedProjects = getAllProjects();

  return [
    buildBreadcrumbJsonLd([
      { name: "Início", path: "/" },
      { name: "Projetos", path: "/projetos" },
    ]),
    buildCollectionPageJsonLd({
      name: "Projetos de Marcos Lucas",
      description:
        "Lista completa de aplicações web, landing pages e interfaces desenvolvidas por Marcos Lucas.",
      path: "/projetos",
    }),
    buildItemListJsonLd({
      name: "Todos os projetos",
      description: "Catálogo indexável de projetos com páginas dedicadas no portfólio.",
      path: "/projetos",
      items: mapProjectItems(indexedProjects.map((project) => ({
        name: project.title,
        description: project.description,
        slug: project.slug,
        linkLive: project.linkLive,
      }))),
    }),
  ];
}
