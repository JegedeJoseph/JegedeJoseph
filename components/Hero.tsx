export default function Hero() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-sm text-primary font-medium mb-3 opacity-0 fade-up" style={{ animationDelay: '80ms' }}>Portfolio — Designer & Developer</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 opacity-0 fade-up" style={{ animationDelay: '140ms' }}>
              Hi, I'm <span className="text-primary">Your Name</span>
              <br />I design and build modern web experiences
            </h1>

            <p className="text-lg text-muted max-w-2xl mb-6 opacity-0 fade-up" style={{ animationDelay: '200ms' }}>
              I help teams design and ship production-ready web applications. Currently focused on building fast, accessible, and delightful UI with modern React and TypeScript.
            </p>

            <div className="flex flex-wrap gap-3 items-center">
              <a href="#projects" className="inline-flex items-center bg-primary text-white px-5 py-2 rounded-lg shadow card-shadow opacity-0 fade-up" style={{ animationDelay: '260ms' }}>See my work</a>
              <a href="/resume.pdf" className="inline-flex items-center border border-gray-200 text-gray-700 px-4 py-2 rounded-lg opacity-0 fade-up" style={{ animationDelay: '320ms' }}>Download CV</a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              <div className="py-3 px-4 bg-surface rounded-lg text-center">
                <div className="text-xl font-semibold">5+</div>
                <div className="text-sm text-muted">Years experience</div>
              </div>
              <div className="py-3 px-4 bg-surface rounded-lg text-center">
                <div className="text-xl font-semibold">20+</div>
                <div className="text-sm text-muted">Projects</div>
              </div>
              <div className="py-3 px-4 bg-surface rounded-lg text-center">
                <div className="text-xl font-semibold">Open</div>
                <div className="text-sm text-muted">For opportunities</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-surface rounded-2xl p-6 card-shadow flex items-center gap-4">
              <img src="/avatar.svg" alt="avatar" className="w-28 h-28 rounded-full" />
              <div>
                <div className="text-lg font-semibold">Your Name</div>
                <div className="text-sm text-muted">Full-stack Developer</div>
                <div className="mt-3 flex gap-3">
                  <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-muted hover:text-primary">GitHub</a>
                  <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-muted hover:text-primary">LinkedIn</a>
                </div>
              </div>
            </div>
            <div className="mt-6 text-sm text-muted">
              Available for freelance and full-time roles. Reach me at <a href="mailto:you@example.com" className="text-primary">you@example.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
