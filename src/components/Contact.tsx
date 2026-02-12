"use client";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-dark-surface overflow-hidden">
      <div className="absolute inset-0 scan-line pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-lime/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-neon-lime" />
            <span className="text-neon-lime text-sm font-semibold tracking-widest uppercase">
              Get In Touch
            </span>
            <div className="w-12 h-px bg-neon-lime" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            Join <span className="gradient-text">NEXXUS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Think you have what it takes? We&apos;re always looking for talented,
            dedicated drivers to join our ranks. Reach out and let&apos;s talk.
          </p>
        </div>

        {/* Contact form */}
        <div className="bg-dark-card border border-dark-border p-8 sm:p-12 corner-cut">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold tracking-wider uppercase text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-black border border-dark-border px-4 py-3 text-white placeholder-gray-600 focus:border-neon-lime/50 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold tracking-wider uppercase text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-black border border-dark-border px-4 py-3 text-white placeholder-gray-600 focus:border-neon-lime/50 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold tracking-wider uppercase text-gray-400 mb-2">
                Platform
              </label>
              <select className="w-full bg-black border border-dark-border px-4 py-3 text-white focus:border-neon-lime/50 focus:outline-none transition-colors appearance-none">
                <option value="">Select your primary platform</option>
                <option value="iracing">iRacing</option>
                <option value="acc">Assetto Corsa Competizione</option>
                <option value="rf2">rFactor 2</option>
                <option value="gt7">Gran Turismo 7</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold tracking-wider uppercase text-gray-400 mb-2">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell us about your racing experience and what you're looking for..."
                className="w-full bg-black border border-dark-border px-4 py-3 text-white placeholder-gray-600 focus:border-neon-lime/50 focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-neon-lime text-black font-bold text-sm tracking-widest uppercase corner-cut hover:bg-neon-yellow transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
