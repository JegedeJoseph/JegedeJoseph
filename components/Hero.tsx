import { useEffect, useRef } from 'react'

const stats = [
  { value: '20+',  label: 'Repositories' },
  { value: '4.39', label: 'CGPA / 5.00'  },
  { value: 'Open', label: 'To Opportunities' },
]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const children = el.querySelectorAll<HTMLElement>('.fade-up')
    children.forEach((child, i) => {
      child.style.animationDelay = `${80 + i * 80}ms`
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-10 lg:py-14" id="home">
      <div className="flex flex-col lg:flex-row gap-10 items-center">

        {/* ── Left: Text ── */}
        <div className="flex-1 min-w-0">
          <p className="fade-up text-sm font-semibold font-outfit text-primary mb-3 flex items-center gap-2">
            <span className="inline-block w-6 h-0.5 bg-primary rounded-full" />
            Software Developer · Lagos, Nigeria 🇳🇬
          </p>

          <h1 className="fade-up font-outfit text-4xl md:text-5xl font-extrabold text-dark leading-tight mb-4">
            Hi, I'm{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #4F46E5 0%, #3B82F6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Joseph Jegede
            </span>
            <br />
            <span className="text-3xl md:text-4xl text-dark/80 font-bold">
              Building scalable software
            </span>
          </h1>

          <p className="fade-up text-base text-muted max-w-lg mb-8 leading-relaxed">
            Final-year Computer Science student at Anchor University with hands-on experience
            as a CTO, full-stack developer intern, and open-source contributor. I craft
            end-to-end solutions — from ML-powered backends to production-ready frontends.
          </p>

          <div className="fade-up flex flex-wrap gap-3 items-center mb-8">
            <a href="#projects" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/>
              </svg>
              See My Work
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </a>
          </div>

          {/* Stats row */}
          <div className="fade-up grid grid-cols-3 gap-3 max-w-sm">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="card-flat p-3 text-center rounded-2xl"
                style={{ background: 'rgba(79,70,229,0.04)' }}
              >
                <div className="font-outfit font-bold text-xl text-primary">{value}</div>
                <div className="text-xs text-muted mt-0.5 leading-tight">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Profile card ── */}
        <div className="w-full lg:w-80 xl:w-96 shrink-0">
          <div className="glass p-6 rounded-3xl text-center scale-in">
            <img
              src="https://github.com/JegedeJoseph.png"
              alt="Joseph Jegede"
              className="w-32 h-32 rounded-2xl object-cover mx-auto mb-4"
              style={{ boxShadow: '0 12px 32px rgba(79,70,229,0.25)' }}
            />
            <h2 className="font-outfit font-bold text-xl text-dark">Joseph O. Jegede</h2>
            <p className="text-sm text-muted mt-1 mb-4">Full-Stack Developer & CTO @ MediaErrands</p>

            <div className="flex flex-col gap-2 text-sm">
              {[
                { icon: '🎓', text: 'BSc Computer Science — Anchor University' },
                { icon: '💼', text: 'Available for full-time & freelance roles' },
                { icon: '📍', text: 'Lagos, Nigeria — Remote friendly' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-start gap-2 text-left px-1">
                  <span className="text-base shrink-0">{icon}</span>
                  <span className="text-muted text-xs leading-snug">{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex gap-2 justify-center">
              <a href="mailto:jjegede78@gmail.com" className="btn-primary text-sm flex-1 justify-center">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Affiliation pill */}
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
            Member, Nigeria Computer Society (NCS)
          </div>
        </div>
      </div>
    </section>
  )
}
