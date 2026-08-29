import {
  buildMarkdownForPath,
  buildMarkdownResponseHeaders,
} from "@/lib/markdown-negotiation";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ path?: string[] }> },
) {
  const { path = [] } = await params;
  const pathname = path.length > 0 ? `/${path.join("/")}` : "/";
  const page = buildMarkdownForPath(pathname);

  if (!page) {
    return new Response("Not Found", { status: 404 });
  }

  return new Response(page.markdown, {
    status: page.status,
    headers: buildMarkdownResponseHeaders(page.markdown),
  });
}
