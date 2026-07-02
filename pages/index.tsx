import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Experience from '../components/Experience'
import ProjectsGrid from '../components/ProjectsGrid'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <SEO />
      <Navbar />

      <main className="container py-6">
        <div className="portfolio-layout">
          {/* ── Left Sidebar (desktop only) ── */}
          <div className="hidden lg:block">
            <Sidebar />
          </div>

          {/* ── Main Content ── */}
          <div className="min-w-0">
            <Hero />

            <div id="about" className="py-8">
              <h2 className="section-title">About Me</h2>
              <div className="card-flat p-6">
                <p className="text-sm text-muted leading-relaxed mb-4">
                  I'm <strong className="text-dark">Joseph Oluwapelumi Jegede</strong>, a final-year Computer Science
                  student at <strong className="text-dark">Anchor University, Lagos</strong> and a
                  software developer driven by the challenge of building complete technical solutions from the ground up.
                </p>
                <p className="text-sm text-muted leading-relaxed mb-4">I'm currently working on an ecommerce web app that would give room to showcase the products and an admin dashboard to control payments, available stocks and customers.</p>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  As <strong className="text-dark">Chief Technology Officer at MediaErrands News</strong>, I direct
                  the company's entire digital strategy — from server infrastructure and backend performance to SEO
                  and digital ad frameworks. I complement this with internship experience at Opex Consulting and ASL
                  Business Solutions, where I built full-stack apps, data pipelines, and REST APIs.
                </p>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  My passion extends beyond the web — I work with <strong className="text-dark">AI/ML tools</strong> (Python,
                  scikit-learn, NLP), cloud services (AWS, Firebase), and mobile development (React Native). I'm a
                  member of the <strong className="text-dark">Nigeria Computer Society</strong> and always looking to
                  integrate AI into the next generation of software.
                </p>

                {/* Tech stack pills */}
                <div>
                  <p className="text-xs text-muted uppercase tracking-wide font-semibold mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'JavaScript', 'TypeScript', 'Python', 'Java', 'React', 'Next.js',
                      'Remix.js', 'Node.js', 'Spring Boot', 'Firebase', 'PostgreSQL',
                      'MongoDB', 'AWS', 'TailwindCSS', 'REST API', 'Git',
                    ].map(tech => (
                      <span key={tech} className="badge-tech">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Services />
            <Experience />
            <ProjectsGrid />
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
