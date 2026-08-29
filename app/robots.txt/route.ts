import { absoluteUrl } from "@/lib/seo";

export function GET() {
  const sitemapUrl = absoluteUrl("/sitemap.xml");

  const body = `User-agent: *
Allow: /
Allow: /llms.txt
Disallow: /api/

User-agent: GPTBot
Allow: /
Allow: /llms.txt
Allow: /projetos

User-agent: ChatGPT-User
Allow: /
Allow: /llms.txt
Allow: /projetos

User-agent: ClaudeBot
Allow: /
Allow: /llms.txt
Allow: /projetos

User-agent: PerplexityBot
Allow: /
Allow: /llms.txt
Allow: /projetos

Sitemap: ${sitemapUrl}

Content-Signal: ai-train=no, search=yes, ai-input=yes
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
