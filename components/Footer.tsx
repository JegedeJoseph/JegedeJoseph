export default function Footer() {
  return (
    <footer className="py-12">
      <div className="container text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Your Name. Built with Next.js and Tailwind.
      </div>
    </footer>
  )
}
