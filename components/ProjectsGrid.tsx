type Project = { title: string; description: string }

export default function ProjectsGrid() {
  const projects: Project[] = [
    { title: 'Project One', description: 'A short case study' },
    { title: 'Project Two', description: 'A short case study' },
    { title: 'Project Three', description: 'A short case study' },
  ]

  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="bg-white rounded-lg overflow-hidden card-shadow">
            <div className="h-40 bg-gray-100 flex items-center justify-center">Image</div>
            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-muted mt-2">{p.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
