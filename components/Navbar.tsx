import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="py-4 bg-white/60 backdrop-blur-sm sticky top-0 z-20">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-semibold">Your Name</a>
        </Link>

        <nav className="hidden md:flex space-x-6 text-sm text-gray-700 items-center">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>

        <button
          className="md:hidden p-2 rounded hover:bg-gray-100"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle navigation"
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18" />
              <path d="M3 6h18" />
              <path d="M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white/95 border-t">
          <div className="container flex flex-col py-4 text-lg">
            <a href="#about" onClick={() => setOpen(false)} className="py-3">About</a>
            <a href="#projects" onClick={() => setOpen(false)} className="py-3">Projects</a>
            <a href="#contact" onClick={() => setOpen(false)} className="py-3">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
