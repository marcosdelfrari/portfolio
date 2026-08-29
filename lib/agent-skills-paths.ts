import { absoluteUrl } from "@/lib/seo";

export const AGENT_SKILLS_INDEX_PATH = "/.well-known/agent-skills/index.json";
export const AGENT_SKILLS_SCHEMA =
  "https://schemas.agentskills.io/discovery/0.2.0/schema.json";

export function getAgentSkillsIndexUrl(): string {
  return absoluteUrl(AGENT_SKILLS_INDEX_PATH);
}

export function getAgentSkillUrl(name: string): string {
  return absoluteUrl(`/.well-known/agent-skills/${name}/SKILL.md`);
}
