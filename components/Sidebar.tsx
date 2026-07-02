import { useEffect, useRef } from 'react'

const skills = [
  { name: 'JavaScript / TypeScript', pct: 88 },
  { name: 'React / Next.js', pct: 85 },
  { name: 'Node.js / Firebase', pct: 80 },
  { name: 'Java / Spring Boot', pct: 72 },
  { name: 'Python (ML / Data)', pct: 75 },
  { name: 'SQL / PostgreSQL', pct: 78 },
]

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/JegedeJoseph',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/josephjegede',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: 'https://x.com/JoJegs',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.629 5.905-5.629zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/2348150981098?text=Hi%20Joseph%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!',
    hoverColor: '#25D366',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
]

export default function Sidebar() {
  const barRefs = useRef<(HTMLDivElement | null)[]>([])

  // Animate skill bars on mount
  useEffect(() => {
    const timeout = setTimeout(() => {
      barRefs.current.forEach((el, i) => {
        if (el) el.style.width = `${skills[i].pct}%`
      })
    }, 400)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <aside className="sidebar-sticky">
      <div className="flex flex-col gap-4">

        {/* ── Profile card ── */}
        <div className="glass p-6 text-center">
          <div className="relative inline-block mb-4">
            <img
              src="https://github.com/JegedeJoseph.png"
              alt="Joseph Jegede"
              className="w-24 h-24 rounded-2xl object-cover mx-auto"
              style={{ boxShadow: '0 8px 24px rgba(79,70,229,0.25)' }}
            />
            {/* Online indicator */}
            <span
              className="absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-white"
              style={{ background: '#10B981' }}
            />
          </div>

          <h2 className="font-outfit font-bold text-lg text-dark leading-tight">
            Joseph Oluwapelumi Jegede
          </h2>
          <p className="text-sm text-muted mt-1">Software Developer, AI & ML Engineer</p>

          <div className="mt-3 flex justify-center">
            <span className="badge-open">Open to Work</span>
          </div>

          {/* Location */}
          <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Lagos, Nigeria 🇳🇬
          </div>

          {/* Social links */}
          <div className="mt-4 flex justify-center gap-2">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-muted transition-all duration-200 border border-gray-200"
                style={{ '--hover-color': (s as any).hoverColor ?? '#4F46E5' } as React.CSSProperties}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.color = (s as any).hoverColor ?? '#4F46E5'
                  el.style.background = `${(s as any).hoverColor ?? '#4F46E5'}18`
                  el.style.borderColor = `${(s as any).hoverColor ?? '#4F46E5'}40`
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.color = ''
                  el.style.background = ''
                  el.style.borderColor = ''
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── Info card ── */}
        <div className="card-flat p-5">
          <h3 className="font-outfit font-semibold text-sm text-dark mb-3 uppercase tracking-wide">Profile</h3>
          <ul className="space-y-2.5 text-sm">
            {[
              { label: 'Status', value: 'Final-year CS Student' },
              { label: 'Country', value: 'Nigeria' },
              { label: 'City', value: 'Lagos' },
              { label: 'Email', value: 'jjegede78@gmail.com', isLink: true },
            ].map(({ label, value, isLink }) => (
              <li key={label} className="flex flex-col gap-0.5">
                <span className="text-xs text-muted uppercase tracking-wider font-medium">{label}</span>
                {isLink ? (
                  <a href={`mailto:${value}`} className="text-primary font-medium hover:underline truncate">{value}</a>
                ) : (
                  <span className="text-dark font-medium">{value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Skills card ── */}
        <div className="card-flat p-5">
          <h3 className="font-outfit font-semibold text-sm text-dark mb-4 uppercase tracking-wide">Skills</h3>
          <div className="space-y-3">
            {skills.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-medium text-dark">{skill.name}</span>
                  <span className="text-xs text-muted">{skill.pct}%</span>
                </div>
                <div className="skill-bar-track">
                  <div
                    ref={el => { barRefs.current[i] = el }}
                    className="skill-bar-fill"
                    style={{ width: '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Download CV ── */}
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-primary justify-center text-sm">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Resume
        </a>

      </div>
    </aside>
  )
}
