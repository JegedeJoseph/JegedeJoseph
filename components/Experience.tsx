import { useEffect, useRef } from 'react'

type ExperienceItem = {
  role:     string
  company:  string
  period:   string
  location: string
  type:     string
  bullets:  string[]
}

const experiences: ExperienceItem[] = [
  {
    role:     'Chief Technology Officer',
    company:  'MediaErrands News',
    period:   'May 2025 – Present',
    location: 'Remote (Lagos, Nigeria)',
    type:     'Full-time',
    bullets: [
      'Directs complete technical strategy and digital operations for the news platform as sole technical authority.',
      'Manages end-to-end website infrastructure including server-side configs, backend performance, and cPanel administration.',
      'Engineers the digital advertising framework, strategically integrating ad components to maximise monetisation.',
      'Leads technical-SEO strategy, optimising site backend and theme structure for speed, mobile responsiveness, and search visibility.',
      'Advises organisational leadership on emerging technologies and digital trends for future platform development.',
    ],
  },
  {
    role:     'Software Developer Intern',
    company:  'ASL Business Solutions',
    period:   'May 2025 – Sept 2025',
    location: 'Hybrid (Lagos, Nigeria)',
    type:     'Internship',
    bullets: [
      'Developed responsive, interactive web pages using Remix.js and TailwindCSS for a Bill of Quantity Management System.',
      'Engineered client-side logic for form validation, dynamic component rendering, and state management.',
      'Integrated RESTful APIs to fetch, display, and update data, ensuring seamless client-server synchronisation.',
      'Led end-to-end development of an employee clock-in application, from design through Firebase backend integration.',
    ],
  },
  {
    role:     'Technical Intern',
    company:  'Opex Consulting Limited',
    period:   'April 2025 – Sept 2025',
    location: 'Hybrid (Lagos, Nigeria)',
    type:     'Internship',
    bullets: [
      'Developed data analysis skills mastering advanced Excel functions and core SQL syntax for effective data querying.',
      'Gained practical SDLC knowledge through QA onboarding, learning testing methodologies for real-world applications.',
      'Built a full-stack intern task tracking & reporting app using HTML5, CSS3, JavaScript, and Firebase Firestore.',
      'Assisted development of a regulatory news email alert system, contributing to feature testing and bug identification.',
    ],
  },
  {
    role:     'Student Ambassador',
    company:  'Cowrywise Financial Technology Ltd',
    period:   'Dec 2023 – Present',
    location: 'Anchor University, Lagos',
    type:     'Volunteer',
    bullets: [
      'Acted as key brand representative promoting financial literacy and digital savings tools among university peers.',
      'Provided peer-to-peer guidance on personal finance and Cowrywise platform navigation to fellow students.',
      'Amplified Cowrywise\'s digital campaigns to increase brand visibility within the university community.',
    ],
  },
]

export default function Experience() {
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

  const typeColors: Record<string, string> = {
    'Full-time':   'bg-indigo-50 text-indigo-700 border-indigo-200',
    'Internship':  'bg-blue-50 text-blue-700 border-blue-200',
    'Volunteer':   'bg-emerald-50 text-emerald-700 border-emerald-200',
  }

  return (
    <section ref={sectionRef} id="experience" className="py-12">
      <h2 className="section-title">Work Experience</h2>

      <div className="relative pl-8">
        {/* Vertical line */}
        <div className="timeline-line" />

        <div className="flex flex-col gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="reveal relative flex gap-4"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {/* Dot */}
              <div className="timeline-dot absolute -left-8 mt-1.5" />

              {/* Card */}
              <div className="card p-5 w-full">
                <div className="flex flex-wrap items-start gap-3 justify-between mb-3">
                  <div>
                    <h3 className="font-outfit font-bold text-dark text-base leading-tight">{exp.role}</h3>
                    <p className="text-primary font-semibold text-sm mt-0.5">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${typeColors[exp.type]}`}>
                      {exp.type}
                    </span>
                    <span className="text-xs text-muted">{exp.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-muted mb-3">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {exp.location}
                </div>

                <ul className="space-y-1.5">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-2 text-sm text-muted leading-relaxed">
                      <span className="text-primary shrink-0 mt-1">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
