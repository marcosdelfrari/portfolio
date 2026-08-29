import { ImageResponse } from "next/og";

export const ogSize = {
  width: 1200,
  height: 630,
};

export const ogContentType = "image/png";

interface OgImageOptions {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  chips?: string[];
}

export function createOgImage({
  eyebrow = "Marcos Lucas",
  title,
  subtitle,
  chips = [],
}: OgImageOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(135deg, #111827 0%, #1f2937 50%, #312e81 100%)",
          color: "#f9fafb",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -100,
            right: 40,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "#966263",
            opacity: 0.35,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -120,
            left: -40,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "#676394",
            opacity: 0.35,
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 24, opacity: 0.85 }}>{eyebrow}</div>
          <div
            style={{
              fontSize: title.length > 40 ? 52 : 64,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 980,
              letterSpacing: -1,
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div
              style={{
                fontSize: 28,
                lineHeight: 1.35,
                opacity: 0.88,
                maxWidth: 920,
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", maxWidth: 800 }}>
            {chips.slice(0, 4).map((chip) => (
              <div
                key={chip}
                style={{
                  fontSize: 18,
                  padding: "8px 16px",
                  borderRadius: 999,
                  background: "rgba(249, 250, 251, 0.12)",
                  border: "1px solid rgba(249, 250, 251, 0.2)",
                }}
              >
                {chip}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 22, opacity: 0.75 }}>Portfólio Front-End</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
