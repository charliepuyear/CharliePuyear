"use client";

const sponsors = [
  { name: "SpeedTech Racing", tier: "Title" },
  { name: "VelocityGG", tier: "Premium" },
  { name: "Apex Sim Gear", tier: "Premium" },
  { name: "GridLine Energy", tier: "Partner" },
  { name: "NitroWare", tier: "Partner" },
  { name: "RaceVision Media", tier: "Partner" },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-lime/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-neon-lime" />
            <span className="text-neon-lime text-sm font-semibold tracking-widest uppercase">
              Partners
            </span>
            <div className="w-12 h-px bg-neon-lime" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            Our <span className="gradient-text">Sponsors</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We&apos;re proud to partner with industry-leading brands who share our passion for excellence in competitive sim racing.
          </p>
        </div>

        {/* Sponsor grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="group bg-dark-card border border-dark-border p-8 flex flex-col items-center justify-center text-center hover:border-neon-lime/30 transition-all duration-300 corner-cut"
            >
              {/* Placeholder logo */}
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-neon-lime/10 to-neon-yellow/5 border border-neon-lime/10 flex items-center justify-center mb-4 group-hover:border-neon-lime/30 transition-colors">
                <span className="text-xl font-black gradient-text">
                  {sponsor.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </span>
              </div>
              <h3 className="text-white font-bold text-sm mb-1 group-hover:text-neon-lime transition-colors">
                {sponsor.name}
              </h3>
              <span className="text-[10px] font-semibold tracking-widest uppercase text-gray-500">
                {sponsor.tier} Sponsor
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Interested in partnering with NEXXUS eSports?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-neon-lime/30 text-neon-lime font-bold text-sm tracking-widest uppercase corner-cut hover:bg-neon-lime/10 transition-colors"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
}
