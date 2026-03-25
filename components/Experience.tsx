type Item = { role: string; company: string; period: string; desc: string }

export default function Experience() {
  const items: Item[] = [
    { role: 'Senior Developer', company: 'Acme Co', period: '2022 - Present', desc: 'Working on frontend and product.' },
    { role: 'Frontend Developer', company: 'Beta Ltd', period: '2020 - 2022', desc: 'Built UI components and integration.' }
  ]

  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold mb-6">Experience</h2>
      <div className="space-y-6">
        {items.map((it) => (
          <div key={it.role} className="bg-white rounded-lg p-6 card-shadow">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{it.role}</div>
                <div className="text-sm text-muted">{it.company}</div>
              </div>
              <div className="text-sm text-muted">{it.period}</div>
            </div>
            <p className="mt-3 text-sm text-muted">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
