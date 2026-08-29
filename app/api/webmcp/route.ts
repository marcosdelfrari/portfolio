import { NextResponse } from "next/server";
import {
  getContactLinks,
  getDiscoveryResources,
  getFaq,
  getProfile,
  getProject,
  listProjects,
  searchProjects,
} from "@/lib/webmcp-handlers";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get("action");

  switch (action) {
    case "list_projects": {
      const limit = Number(searchParams.get("limit") ?? "0");
      return NextResponse.json({
        projects: listProjects(Number.isFinite(limit) && limit > 0 ? limit : undefined),
      });
    }
    case "search_projects": {
      const query = searchParams.get("query") ?? "";
      const limit = Number(searchParams.get("limit") ?? "10");
      return NextResponse.json({
        query,
        projects: searchProjects(query, Number.isFinite(limit) ? limit : 10),
      });
    }
    case "get_project": {
      const slug = searchParams.get("slug");
      if (!slug) {
        return NextResponse.json({ error: "slug is required" }, { status: 400 });
      }

      const project = getProject(slug);
      if (!project) {
        return NextResponse.json({ error: "project not found" }, { status: 404 });
      }

      return NextResponse.json({ project });
    }
    case "get_profile":
      return NextResponse.json(getProfile());
    case "get_faq":
      return NextResponse.json({ faqs: getFaq() });
    case "get_contact_links":
      return NextResponse.json({ links: getContactLinks() });
    case "get_discovery":
      return NextResponse.json(getDiscoveryResources());
    default:
      return NextResponse.json({ error: "unknown action" }, { status: 400 });
  }
}
