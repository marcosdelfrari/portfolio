import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { HOME_LINK_HEADER } from "@/lib/agent-discovery";
import {
  prefersMarkdown,
  shouldNegotiateMarkdown,
} from "@/lib/markdown-negotiation";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    prefersMarkdown(request.headers.get("accept")) &&
    shouldNegotiateMarkdown(pathname)
  ) {
    const url = request.nextUrl.clone();
    url.pathname =
      pathname === "/" ? "/api/markdown" : `/api/markdown${pathname}`;
    return NextResponse.rewrite(url);
  }

  const response = NextResponse.next();
  response.headers.set("Vary", "Accept");

  if (pathname === "/") {
    response.headers.set("Link", HOME_LINK_HEADER);
  }

  return response;
}

export const config = {
  matcher: ["/", "/projetos", "/projetos/:slug*"],
};
