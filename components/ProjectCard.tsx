import React from 'react'

type Props = {
  title: string
  description: string
  link?: string
  delay?: number
}

export default function ProjectCard({ title, description, link, delay = 0 }: Props) {
  return (
    <article
      className="p-6 bg-white rounded-lg card-shadow transform transition hover:-translate-y-1 opacity-0 fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {link ? (
        <a href={link} className="text-sm text-primary hover:underline">View project</a>
      ) : null}
    </article>
  )
}
