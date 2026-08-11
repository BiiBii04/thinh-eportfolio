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
  metadataBase: new URL("https://thinh-eportfolio.vercel.app"),
  title: {
    default: "Thinh Ngo · Business Analyst toward Product Owner",
    template: "%s",
  },
  description:
    "ePortfolio of Thinh Ngo. Business Analyst moving toward Product Owner in enterprise software and emerging technology. Nine projects, assessed coursework and leadership evidence, each captioned with what it is and why it matters.",
  openGraph: {
    title: "Thinh Ngo · Business Analyst toward Product Owner",
    description:
      "RMIT University Vietnam, dual major in Business and Technology plus Blockchain-enabled Business. Six industries diagnosed with one method, and a capstone pitched to an industry panel.",
    type: "website",
    url: "https://thinh-eportfolio.vercel.app",
    siteName: "Thinh Ngo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thinh Ngo · Business Analyst toward Product Owner",
    description:
      "RMIT University Vietnam. Nine projects, assessed coursework and leadership evidence, each captioned with what it is and why it matters.",
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