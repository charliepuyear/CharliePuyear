"use client";

const articles = [
  {
    date: "Feb 10, 2026",
    category: "Race Report",
    title: "NEXXUS Dominates Daytona 24H Virtual",
    excerpt:
      "A commanding performance saw our #01 and #07 entries lock out the top two positions in this year's virtual Daytona 24 Hours.",
  },
  {
    date: "Jan 28, 2026",
    category: "Announcement",
    title: "2026 Season Roster Confirmed",
    excerpt:
      "We're excited to announce our full driver lineup for the 2026 competitive season across iRacing, ACC, and rFactor 2.",
  },
  {
    date: "Jan 15, 2026",
    category: "Partnership",
    title: "New Sim Hardware Partner Announced",
    excerpt:
      "NEXXUS eSports is proud to partner with a leading sim racing hardware manufacturer for the upcoming season.",
  },
  {
    date: "Dec 20, 2025",
    category: "Recap",
    title: "2025 Season Review: A Year of Records",
    excerpt:
      "Looking back at an incredible year of podiums, championships, and community growth for the NEXXUS organization.",
  },
];

export default function News() {
  return (
    <section id="news" className="relative py-32 bg-dark-surface overflow-hidden">
      <div className="absolute inset-0 scan-line pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-lime/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-neon-lime" />
            <span className="text-neon-lime text-sm font-semibold tracking-widest uppercase">
              Latest
            </span>
            <div className="w-12 h-px bg-neon-lime" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            Team <span className="gradient-text">News</span>
          </h2>
        </div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article, i) => (
            <article
              key={i}
              className="group bg-dark-card border border-dark-border p-6 sm:p-8 corner-cut hover:border-neon-lime/30 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-gray-500">
                  {article.date}
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-neon-lime/10 text-neon-lime border border-neon-lime/20">
                  {article.category}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-neon-lime transition-colors">
                {article.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {article.excerpt}
              </p>

              <span className="inline-flex items-center gap-2 text-neon-lime/70 text-sm font-semibold tracking-wider uppercase group-hover:text-neon-lime transition-colors">
                Read More
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
