import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'
import Sidebar from '../components/Sidebar'
import Services from '../components/Services'
import Experience from '../components/Experience'
import ProjectsGrid from '../components/ProjectsGrid'

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <Sidebar />

          <div className="lg:col-span-9">
            <Hero />

            <section id="about" className="py-8">
              <h2 className="text-2xl font-semibold mb-4">About</h2>
              <p className="text-gray-700">I'm a full-stack developer learning on the job. This site is built from a Figma template and hardcoded for now. I focus on building beautiful, accessible, and fast interfaces.</p>
            </section>

            <Services />

            <Experience />

            <ProjectsGrid />

            <section id="contact" className="py-12">
              <h2 className="text-2xl font-semibold mb-6">Contact</h2>
              <p className="text-gray-700 mb-6">Prefer email? <a href="mailto:you@example.com" className="text-primary">you@example.com</a></p>
              <ContactForm />
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
