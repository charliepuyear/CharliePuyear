"use client";

const stats = [
  { value: "2024", label: "Founded" },
  { value: "15+", label: "Active Drivers" },
  { value: "50+", label: "Races Won" },
  { value: "6", label: "Championships" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-lime/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-neon-lime" />
              <span className="text-neon-lime text-sm font-semibold tracking-widest uppercase">
                About Us
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
              Born to{" "}
              <span className="gradient-text">Compete</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              NEXXUS eSports was forged from a shared obsession with speed, precision, and the pursuit of perfection.
              We are a collective of elite sim racers competing at the highest levels across multiple platforms and series.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              From endurance battles to sprint showdowns, our drivers bring relentless dedication,
              strategic depth, and raw talent to every race. We don&apos;t just compete &mdash; we dominate.
            </p>

            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-gradient-to-b from-neon-lime to-neon-yellow" />
              <p className="text-white text-lg font-medium italic">
                &quot;The next level of competitive racing.&quot;
              </p>
            </div>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="relative bg-dark-card border border-dark-border p-8 corner-cut hover:border-neon-lime/30 transition-colors group"
              >
                <div className="text-4xl sm:text-5xl font-black gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 tracking-widest uppercase font-semibold">
                  {stat.label}
                </div>
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-lime/20 group-hover:border-neon-lime/50 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
