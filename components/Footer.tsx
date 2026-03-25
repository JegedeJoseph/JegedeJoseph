export default function Footer() {
  return (
    <footer className="py-12">
      <div className="container text-center text-sm text-gray-600">
        <p className="mb-2">© {new Date().getFullYear()} Your Name.</p>
        <p className="text-xs text-gray-500">Built with Next.js and Tailwind • Designed to be responsive</p>
      </div>
    </footer>
  )
}
