import { useState, useRef } from 'react'

type FormState = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('sending')
    const form = e.currentTarget
    const data = {
      name:    (form.elements.namedItem('name')    as HTMLInputElement).value,
      email:   (form.elements.namedItem('email')   as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Server error')
      setState('success')
      formRef.current?.reset()
    } catch {
      setState('error')
    }
  }

  return (
    <section id="contact" className="py-12">
      <h2 className="section-title">Get In Touch</h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Left: info */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="card-flat p-5">
            <p className="text-sm text-muted leading-relaxed mb-5">
              I'm always open to new opportunities, collaborations, and interesting conversations.
              Whether it's a job offer, a project idea, or just a hello — my inbox is open!
            </p>

            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                ),
                label: 'Email',
                value: 'jjegede78@gmail.com',
                href:  'mailto:jjegede78@gmail.com',
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                ),
                label: 'Location',
                value: 'Lagos, Nigeria',
                href:  undefined,
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ),
                label: 'LinkedIn',
                value: 'josephjegede',
                href:  'https://linkedin.com/in/josephjegede',
              },
            ].map(item => (
              <div key={item.label} className="flex items-start gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-primary shrink-0"
                  style={{ background: 'rgba(79,70,229,0.08)' }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wide font-medium">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className="text-sm font-medium text-dark hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-dark">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div className="md:col-span-3">
          <form ref={formRef} onSubmit={handleSubmit} className="card-flat p-6 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold text-dark mb-1.5">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-xs font-semibold text-dark mb-1.5">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="form-input"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-xs font-semibold text-dark mb-1.5">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                className="form-input"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-semibold text-dark mb-1.5">
                Message <span className="text-primary">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project, opportunity, or just say hi..."
                className="form-input resize-none"
              />
            </div>

            <button
              id="contact-submit"
              type="submit"
              disabled={state === 'sending'}
              className="btn-primary justify-center text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {state === 'sending' ? (
                <>
                  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 12a9 9 0 11-6.219-8.56"/>
                  </svg>
                  Sending…
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                  Send Message
                </>
              )}
            </button>

            {state === 'success' && (
              <p className="text-sm text-emerald-600 font-medium flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Message sent! I'll get back to you soon.
              </p>
            )}
            {state === 'error' && (
              <p className="text-sm text-red-500 font-medium flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                Something went wrong. Please email me directly at jjegede78@gmail.com
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
