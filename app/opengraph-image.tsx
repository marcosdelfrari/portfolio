import { createOgImage, ogContentType, ogSize } from "@/lib/og";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/seo";

export const alt = SITE_TITLE;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage({
    title: "Marcos Lucas",
    subtitle: SITE_DESCRIPTION,
    chips: ["Next.js", "React", "TypeScript", "Angular"],
  });
}
