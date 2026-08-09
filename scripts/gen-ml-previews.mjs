// One-off: generate public/microloan-preview.png and public/ups-preview.png
// using the same next/og renderer as the other project cards.
// Run: node scripts/gen-ml-previews.mjs
import { ImageResponse } from "next/og.js";
import React from "react";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const e = React.createElement;
const PAPER = "#f5f4f1";
const INK = "#1a1a1a";
const ACCENT = "#a4161a";
const MUTED = "#6b6b6b";

function card({ category, title, left, right, titleSize }) {
  return e(
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
      category
    ),
    e(
      "div",
      { style: { display: "flex", flexDirection: "column" } },
      e(
        "div",
        {
          style: {
            display: "flex",
            fontSize: titleSize,
            fontWeight: 600,
            letterSpacing: -3,
            lineHeight: 1,
          },
        },
        title
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
      e("div", { style: { display: "flex" } }, left),
      e("div", { style: { display: "flex", color: INK } }, right)
    )
  );
}

const cards = [
  {
    file: "microloan-preview.png",
    category: "Machine Learning · Credit Risk",
    title: "Microloan Default",
    left: "RMIT · ECON1612",
    right: "Individual",
    titleSize: 118,
  },
  {
    file: "ups-preview.png",
    category: "Machine Learning · Supply Chain",
    title: "UPS Location Model",
    left: "RMIT · ECON1612",
    right: "Team",
    titleSize: 104,
  },
];

for (const c of cards) {
  const resp = new ImageResponse(card(c), { width: 1200, height: 675 });
  const buf = Buffer.from(await resp.arrayBuffer());
  const out = join(process.cwd(), "public", c.file);
  writeFileSync(out, buf);
  console.log(`wrote ${out} (${buf.length} bytes)`);
}
