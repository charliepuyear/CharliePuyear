"use client";

const achievements = [
  {
    year: "2025",
    title: "IMSA Endurance Series Champions",
    detail: "Dominated the 24-hour endurance format with a 1-2 team finish.",
    type: "championship",
  },
  {
    year: "2025",
    title: "GT World Challenge Sprint Cup",
    detail: "Secured the sprint championship across a 12-round season.",
    type: "championship",
  },
  {
    year: "2024",
    title: "Rookie of the Year - iRacing Pro Series",
    detail: "Our lead driver earned top rookie honors in the premier iRacing series.",
    type: "award",
  },
  {
    year: "2024",
    title: "24 Hours of Le Mans Virtual - P2",
    detail: "Fought for the overall win in the most prestigious virtual endurance event.",
    type: "podium",
  },
  {
    year: "2024",
    title: "ACC League Championship",
    detail: "Undefeated season in the premier Assetto Corsa Competizione league.",
    type: "championship",
  },
  {
    year: "2024",
    title: "Team of the Year - Community Awards",
    detail: "Voted #1 esports racing team by the sim racing community.",
    type: "award",
  },
];

function TypeBadge({ type }: { type: string }) {
  const colors: Record<string, string> = {
    championship: "bg-neon-lime/10 text-neon-lime border-neon-lime/30",
    award: "bg-neon-yellow/10 text-neon-yellow border-neon-yellow/30",
    podium: "bg-white/10 text-white border-white/20",
  };

  return (
    <span
      className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 border ${
        colors[type] || colors.podium
      }`}
    >
      {type}
    </span>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-lime/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-neon-lime" />
            <span className="text-neon-lime text-sm font-semibold tracking-widest uppercase">
              Track Record
            </span>
            <div className="w-12 h-px bg-neon-lime" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            Our <span className="gradient-text">Achievements</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-lime/40 via-neon-lime/20 to-transparent" />

          <div className="space-y-8">
            {achievements.map((item, i) => (
              <div
                key={i}
                className={`relative flex items-start gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-neon-lime rounded-full z-10" />

                {/* Spacer for desktop */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="ml-16 md:ml-0 md:w-1/2 bg-dark-card border border-dark-border p-6 corner-cut hover:border-neon-lime/30 transition-colors group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono text-neon-lime/60">
                      {item.year}
                    </span>
                    <TypeBadge type={item.type} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-lime transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
