// One-off: generate public/apec-preview.png using the same next/og renderer
// as the social card. Run: node scripts/gen-apec-preview.mjs
import { ImageResponse } from "next/og.js";
import React from "react";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const e = React.createElement;
const PAPER = "#f5f4f1";
const INK = "#1a1a1a";
const ACCENT = "#a4161a";
const MUTED = "#6b6b6b";

const tree = e(
  "div",
  {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      background: PAPER,
      color: INK,
      padding: "64px 72px",
      fontFamily: "sans-serif",
    },
  },
  e(
    "div",
    {
      style: {
        display: "flex",
        fontSize: 24,
        letterSpacing: 4,
        textTransform: "uppercase",
        color: MUTED,
      },
    },
    "Operations · Systems Design"
  ),
  e(
    "div",
    { style: { display: "flex", flexDirection: "column" } },
    e(
      "div",
      {
        style: {
          display: "flex",
          fontSize: 132,
          fontWeight: 600,
          letterSpacing: -3,
          lineHeight: 1,
        },
      },
      "APEC Water"
    ),
    e("div", {
      style: {
        display: "flex",
        marginTop: 24,
        width: 88,
        height: 8,
        background: ACCENT,
      },
    })
  ),
  e(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: 26,
        color: MUTED,
      },
    },
    e("div", { style: { display: "flex" } }, "RMIT · ISYS2128"),
    e("div", { style: { display: "flex", color: INK } }, "Distinction")
  )
);

const resp = new ImageResponse(tree, { width: 1200, height: 675 });
const buf = Buffer.from(await resp.arrayBuffer());
const out = join(process.cwd(), "public", "apec-preview.png");
writeFileSync(out, buf);
console.log(`wrote ${out} (${buf.length} bytes)`);
