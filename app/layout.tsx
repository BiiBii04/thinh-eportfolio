import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import { TransitionProvider } from "./components/Transition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thinhngo.io.vn"),
  title: {
    default: "Thinh Ngo — Business & Technology",
    template: "%s",
  },
  description:
    "Business and Technology student at RMIT Vietnam. I build small things with AI and write about what I learn.",
  openGraph: {
    title: "Thinh Ngo — Business & Technology",
    description:
      "Final-year RMIT student. Pitch lead at LotusHacks 2026 (Top 20). ADC 2025 Semifinalist. Looking for an internship.",
    type: "website",
    url: "https://thinhngo.io.vn",
    siteName: "Thinh Ngo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thinh Ngo — Business & Technology",
    description:
      "Final-year RMIT student. I build small things with AI and write about what I learn.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TransitionProvider>
          <Nav />
          <main className="flex-1 flex flex-col">{children}</main>
        </TransitionProvider>
      </body>
    </html>
  );
}