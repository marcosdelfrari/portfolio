import { getAgentSkillByName } from "@/lib/agent-skills";

const CACHE_CONTROL = "public, max-age=3600, s-maxage=3600";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ skillName: string }> },
) {
  const { skillName } = await params;
  const skill = getAgentSkillByName(skillName);

  if (!skill) {
    return new Response("Not Found", { status: 404 });
  }

  return new Response(skill.content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": CACHE_CONTROL,
    },
  });
}
