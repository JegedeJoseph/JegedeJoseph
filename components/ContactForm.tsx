import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })

      if (res.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input required value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Message</label>
        <textarea required value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"></textarea>
      </div>

      <div className="flex items-center space-x-4">
        <button disabled={status === 'sending'} className="bg-primary text-white px-4 py-2 rounded-md shadow">
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>
        {status === 'success' && <span className="text-green-600">Message sent. Thank you!</span>}
        {status === 'error' && <span className="text-red-600">There was an error. Try again.</span>}
      </div>
    </form>
  )
}
