import { ImageResponse } from "next/og";

export const alt = "Thinh Ngo — Business & Technology, building with AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#f5f4f1";
const INK = "#1a1a1a";
const ACCENT = "#a4161a";
const MUTED = "#6b6b6b";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          color: INK,
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: MUTED,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: ACCENT,
            }}
          />
          <div>Ho Chi Minh City · RMIT Vietnam</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 150,
              fontWeight: 600,
              letterSpacing: -4,
              lineHeight: 1,
            }}
          >
            Thinh Ngo
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              width: 96,
              height: 8,
              background: ACCENT,
            }}
          />
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 44,
              color: MUTED,
            }}
          >
            Business &amp; Technology · Building with AI
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 28,
          }}
        >
          <div style={{ display: "flex", color: INK, fontWeight: 600 }}>
            thinhngo.io.vn
          </div>
          <div style={{ display: "flex", color: MUTED }}>
            Pitch-first. Shippable answers.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
