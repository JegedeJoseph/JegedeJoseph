import { useEffect, useRef } from 'react'

const services = [
  {
    emoji: '📱',
    title: 'Mobile & Frontend',
    desc:  'Building high-performance, accessible UIs with React Native, Next.js, and Remix.js. From pixel-perfect designs to production-ready code.',
    tags:  ['React', 'Next.js', 'Remix', 'TailwindCSS'],
  },
  {
    emoji: '⚙️',
    title: 'Backend & API Engineering',
    desc:  'Designing and shipping robust RESTful APIs, microservices, and server-side systems using Node.js, Express, Java/Spring Boot, and Firebase.',
    tags:  ['Node.js', 'Java', 'Firebase', 'REST'],
  },
  {
    emoji: '🤖',
    title: 'AI & Data Integration',
    desc:  'Integrating ML models and data pipelines into applications. Sentiment analysis, NLP, and AWS Rekognition services for intelligent features.',
    tags:  ['Python', 'scikit-learn', 'AWS', 'NLP'],
  },
  {
    emoji: '☁️',
    title: 'Cloud & DevOps',
    desc:  'Managing cloud infrastructure, CI/CD pipelines, and deployment on AWS, Firebase, and cPanel. Ensuring high availability and performance.',
    tags:  ['AWS S3', 'CI/CD', 'Sentry', 'PostgreSQL'],
  },
]

export default function Services() {
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
    <section ref={sectionRef} id="services" className="py-12">
      <h2 className="section-title">What I Do</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="card reveal p-6 group cursor-default"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110"
              style={{ background: 'linear-gradient(135deg, rgba(79,70,229,0.1), rgba(59,130,246,0.1))' }}
            >
              {s.emoji}
            </div>
            <h3 className="font-outfit font-bold text-dark text-base mb-2">{s.title}</h3>
            <p className="text-sm text-muted leading-relaxed mb-4">{s.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {s.tags.map(tag => (
                <span key={tag} className="badge-tech">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
