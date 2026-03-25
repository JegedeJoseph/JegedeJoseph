import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="py-6 bg-white/60 backdrop-blur-sm">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <span className="text-xl font-semibold">Your Name</span>
        </Link>
        <nav className="space-x-6 text-sm text-gray-700">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  )
}
