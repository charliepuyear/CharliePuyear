"use client";

const drivers = [
  {
    name: "Alex Mercer",
    role: "Team Captain",
    specialty: "Endurance / GT3",
    number: "01",
  },
  {
    name: "Jordan Vex",
    role: "Lead Driver",
    specialty: "Formula / Open Wheel",
    number: "07",
  },
  {
    name: "Riley Storm",
    role: "Driver",
    specialty: "GT3 / Prototype",
    number: "14",
  },
  {
    name: "Casey Blaze",
    role: "Driver",
    specialty: "Oval / Stock Car",
    number: "22",
  },
  {
    name: "Devon Flux",
    role: "Driver",
    specialty: "Rally / Dirt",
    number: "33",
  },
  {
    name: "Sam Drift",
    role: "Driver",
    specialty: "Endurance / Multi-class",
    number: "48",
  },
];

export default function Roster() {
  return (
    <section id="roster" className="relative py-32 bg-dark-surface overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 scan-line pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-lime/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-neon-lime" />
            <span className="text-neon-lime text-sm font-semibold tracking-widest uppercase">
              The Team
            </span>
            <div className="w-12 h-px bg-neon-lime" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            Our <span className="gradient-text">Roster</span>
          </h2>
        </div>

        {/* Driver grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {drivers.map((driver) => (
            <div
              key={driver.number}
              className="group relative bg-dark-card border border-dark-border overflow-hidden hover:border-neon-lime/40 transition-all duration-300"
            >
              {/* Driver number background */}
              <div className="absolute top-4 right-4 text-7xl font-black text-white/[0.03] group-hover:text-neon-lime/[0.08] transition-colors select-none">
                {driver.number}
              </div>

              {/* Avatar placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-dark-card to-black flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-lime/20 to-neon-yellow/10 flex items-center justify-center border border-neon-lime/20">
                  <span className="text-2xl font-black gradient-text">
                    {driver.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                {/* Bottom border glow */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-lime/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-neon-lime transition-colors">
                    {driver.name}
                  </h3>
                  <span className="text-xs font-mono text-neon-lime/60 bg-neon-lime/5 px-2 py-1 border border-neon-lime/10">
                    #{driver.number}
                  </span>
                </div>
                <p className="text-neon-lime/80 text-sm font-semibold tracking-wider uppercase mb-1">
                  {driver.role}
                </p>
                <p className="text-gray-500 text-sm">{driver.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
