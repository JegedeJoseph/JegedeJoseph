type Props = {
  title: string
  description: string
  link?: string
}

export default function ProjectCard({ title, description, link }: Props) {
  return (
    <article className="p-6 bg-white rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {link ? (
        <a href={link} className="text-sm text-blue-600 hover:underline">View project</a>
      ) : null}
    </article>
  )
}
