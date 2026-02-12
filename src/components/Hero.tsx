"use client";

import NXLogo from "./NXLogo";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(195, 255, 32, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(195, 255, 32, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial fade from center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
      </div>

      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, transparent 40%, rgba(195, 255, 32, 0.1) 50%, transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="animate-fade-in-up mb-8 flex justify-center">
          <div className="animate-pulse-glow rounded-full p-6">
            <NXLogo size={140} />
          </div>
        </div>

        {/* Team name */}
        <h1 className="animate-fade-in-up-delay-1 text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-4">
          <span className="gradient-text">NEXXUS</span>
          <br />
          <span className="text-white text-3xl sm:text-4xl md:text-5xl tracking-[0.3em] font-light">
            eSPORTS
          </span>
        </h1>

        {/* Tagline */}
        <p className="animate-fade-in-up-delay-2 text-gray-400 text-lg sm:text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto mb-10">
          Pushing the limits of virtual motorsport.
          <br />
          <span className="text-neon-lime/80">Precision. Speed. Victory.</span>
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="px-8 py-4 bg-neon-lime text-black font-bold text-sm tracking-widest uppercase corner-cut hover:bg-neon-yellow transition-colors"
          >
            Discover More
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-neon-lime/30 text-neon-lime font-bold text-sm tracking-widest uppercase corner-cut hover:bg-neon-lime/10 transition-colors"
          >
            Join the Team
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 4L10 16M10 16L4 10M10 16L16 10"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </section>
  );
}
