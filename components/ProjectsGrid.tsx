import { useEffect, useRef } from 'react'

type Project = {
  title:       string
  description: string
  tech:        string[]
  github:      string
  demo?:       string
  lang:        string
  langColor:   string
}

const projects: Project[] = [
  {
    title:       'PipPulse-AI',
    description: 'Real-Time AI Sentiment Analysis Engine for Forex News Trading. Processes live financial news feeds using NLP and ML models to generate trading signals with high accuracy.',
    tech:        ['Python', 'NLP', 'scikit-learn', 'Sentiment Analysis', 'ML'],
    github:      'https://github.com/JegedeJoseph/PipPulse-AI',
    lang:        'Python',
    langColor:   '#3572A5',
  },
  {
    title:       'Financeapp',
    description: 'Production-grade backend for a personal finance management platform. Combines Open Banking data ingestion, ML-powered transaction categorisation, smart budgeting, and savings goal tracking.',
    tech:        ['Java', 'Spring Boot', 'PostgreSQL', 'ML', 'Open Banking API'],
    github:      'https://github.com/JegedeJoseph/Financeapp',
    lang:        'Java',
    langColor:   '#B07219',
  },
  {
    title:       'workers-accountable',
    description: 'A TypeScript application focused on worker accountability and task management. Built with modern tooling to streamline team productivity tracking and reporting workflows.',
    tech:        ['TypeScript', 'Node.js', 'Firebase', 'REST API'],
    github:      'https://github.com/JegedeJoseph/workers-accountable',
    lang:        'TypeScript',
    langColor:   '#2B7489',
  },
  {
    title:       'NACOS Anchor Platform',
    description: 'Frontend platform for the Nigeria Association of Computer Science Students (NACOS) at Anchor University. A community hub for students, events, and resources.',
    tech:        ['JavaScript', 'React', 'CSS3', 'Firebase'],
    github:      'https://github.com/NACOS-ANCHOR-UNIVERSITY/Nacos-Anchor-Platform-frontend',
    lang:        'JavaScript',
    langColor:   '#F1E05A',
  },
]

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

export default function ProjectsGrid() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    const items = sectionRef.current?.querySelectorAll('.reveal') ?? []
    items.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="py-12">
      <h2 className="section-title">Featured Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <div
            key={p.title}
            className="project-card reveal flex flex-col"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {/* Top accent bar */}
            <div className="project-card-accent" />

            <div className="p-5 flex flex-col flex-1">
              {/* Language pill */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5 text-xs text-muted">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: p.langColor }}
                  />
                  {p.lang}
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View on GitHub"
                  className="text-muted hover:text-primary transition-colors"
                >
                  <GitHubIcon />
                </a>
              </div>

              <h3 className="font-outfit font-bold text-dark text-lg mb-2 leading-tight">{p.title}</h3>
              <p className="text-sm text-muted leading-relaxed flex-1 mb-4">{p.description}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tech.map(t => (
                  <span key={t} className="badge-tech text-xs">{t}</span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-auto">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary text-xs flex-1 justify-center py-2"
                >
                  <GitHubIcon />
                  GitHub
                </a>
                {p.demo ? (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-xs flex-1 justify-center py-2"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Live Demo
                  </a>
                ) : (
                  <span className="text-xs text-muted flex-1 flex items-center justify-center gap-1 opacity-60">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                    Private
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <a
          href="https://github.com/JegedeJoseph?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary text-sm"
        >
          <GitHubIcon />
          View All 20+ Repositories
        </a>
      </div>
    </section>
  )
}
