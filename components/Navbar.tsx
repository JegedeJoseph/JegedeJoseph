import Link from 'next/link'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#about',      label: 'About'      },
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects'   },
  { href: '#contact',    label: 'Contact'    },
]

export default function Navbar() {
  const [open, setOpen]           = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const [active, setActive]       = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight active nav link on scroll
  useEffect(() => {
    const sections = navLinks.map(l => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { threshold: 0.4 }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-navbar shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold font-outfit"
            style={{ background: 'linear-gradient(135deg,#4F46E5,#6366F1)' }}
          >
            JJ
          </span>
          <span className="font-outfit font-700 text-dark text-base hidden sm:block group-hover:text-primary transition-colors">
            Joseph Jegede
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`px-4 py-2 rounded-lg text-sm font-medium font-outfit transition-all duration-150 ${
                active === href.replace('#', '')
                  ? 'text-primary bg-indigo-50'
                  : 'text-muted hover:text-dark hover:bg-gray-100'
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-primary ml-3 text-sm"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Resume
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setOpen(s => !s)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18"/><path d="M6 6l12 12"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18"/><path d="M3 6h18"/><path d="M3 18h18"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-navbar border-t border-gray-200">
          <div className="container flex flex-col py-3 gap-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="py-3 px-4 rounded-lg text-sm font-medium font-outfit text-dark hover:bg-indigo-50 hover:text-primary transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-2 justify-center text-sm"
              onClick={() => setOpen(false)}
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
