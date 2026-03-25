import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

export default function Home() {
  const projects = [
    {
      title: 'Project One',
      description: 'A short description of project one.',
      link: '#'
    },
    {
      title: 'Project Two',
      description: 'A short description of project two.',
      link: '#'
    }
  ]

  return (
    <div>
      <SEO />
      <Navbar />
      <main className="container py-10">
        <Hero />

        <section id="about" className="py-12">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p className="text-gray-700">I'm a full-stack developer learning on the job. This site is built from a Figma template and hardcoded for now.</p>
        </section>

        <section id="projects" className="py-12">
          <h2 className="text-2xl font-semibold mb-6">Selected Projects</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} title={p.title} description={p.description} link={p.link} delay={120 * i + 100} />
            ))}
          </div>
        </section>

        <section id="contact" className="py-12">
          <h2 className="text-2xl font-semibold mb-6">Contact</h2>
          <p className="text-gray-700 mb-6">Prefer email? <a href="mailto:you@example.com" className="text-primary">you@example.com</a></p>
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  )
}
