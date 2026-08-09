import Image from "next/image";
import RotatingGreeting from "./components/RotatingGreeting";
import PageFade from "./components/PageFade";
import Marquee from "./components/Marquee";
import LocationPill from "./components/LocationPill";
import AboutSection from "./components/AboutSection";
import RecentWork from "./components/RecentWork";

export default function Home() {
  return (
    <>
      <RotatingGreeting />
      <PageFade>
        <section className="relative md:flex-1 min-h-[62svh] md:min-h-[100svh] overflow-hidden bg-[#b8b8b8] text-white">
          {/* Mobile: single column — labels sit directly above a full-width portrait */}
          <div className="md:hidden flex flex-col px-6 pt-24 pb-12">
            <LocationPill />
            <p className="mt-4 text-[11px] tracking-[0.18em] uppercase text-white/80 leading-relaxed">
              <span className="block">Business &amp; Technology</span>
              <span className="block">Student, RMIT Vietnam</span>
            </p>
            <div className="relative w-full aspect-[5/6] mt-5">
              <Image
                src="/portrait-hero.png"
                alt="Thinh Ngo"
                fill
                priority
                sizes="100vw"
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* Desktop: portrait centered, labels in the side margins */}
          <div className="hidden md:block">
            <div className="absolute inset-0 flex items-end justify-center pt-20">
              <div className="relative w-[min(85vw,640px)] aspect-[5/6] z-0">
                <Image
                  src="/portrait-hero.png"
                  alt="Thinh Ngo"
                  fill
                  priority
                  sizes="640px"
                  className="object-contain object-bottom"
                />
              </div>
            </div>

            <div className="absolute left-10 top-1/2 -translate-y-1/2 z-20">
              <LocationPill />
            </div>

            <div className="absolute right-10 top-1/2 -translate-y-1/2 text-right text-[11px] tracking-[0.18em] uppercase text-white/80 leading-relaxed whitespace-nowrap z-20">
              <span className="block">Business &amp; Technology</span>
              <span className="block">Student, RMIT Vietnam</span>
            </div>
          </div>

          <div className="absolute bottom-0 inset-x-0 pointer-events-none z-10">
            <h1 className="font-medium leading-[0.82] tracking-[-0.04em] text-[clamp(3.25rem,15vw,16rem)] text-white">
              <span className="sr-only">Thinh Ngo — Business and AI Enthusiast</span>
              <Marquee
                text="THINH NGO — BUSINESS AND AI ENTHUSIAST"
                separator="✦"
                durationSec={45}
              />
            </h1>
          </div>
        </section>
        <AboutSection />
        <RecentWork />
      </PageFade>
    </>
  );
}
