export default function Services() {
  const services = [
    { title: 'UI/UX Design', desc: 'Designing interfaces with accessibility and aesthetics.' },
    { title: 'Web Development', desc: 'Building performant React & Next.js applications.' },
    { title: 'Consulting', desc: 'Product and technical strategy for web products.' }
  ]

  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold mb-4 text-center">My Services</h2>
      <p className="text-sm text-muted text-center max-w-2xl mx-auto mb-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-white rounded-lg p-6 card-shadow">
            <div className="text-lg font-semibold mb-2">{s.title}</div>
            <div className="text-sm text-muted">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
