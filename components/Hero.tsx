export default function Hero() {
  return (
    <section className="py-12">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1 flex justify-center md:justify-start">
          <img src="/avatar.svg" alt="avatar" className="w-40 h-40 rounded-full shadow-lg" />
        </div>

        <div className="md:col-span-2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 opacity-0 fade-up" style={{ animationDelay: '100ms' }}>Hi, I'm Your Name</h1>
          <p className="text-lg text-gray-600 max-w-3xl opacity-0 fade-up" style={{ animationDelay: '200ms' }}>I build web apps — frontend, backend, and everything in between. This portfolio follows a Figma template and is built with Next.js + Tailwind.</p>
          <div className="mt-6">
            <a href="#projects" className="inline-block bg-primary text-white px-5 py-2 rounded-md shadow opacity-0 fade-up" style={{ animationDelay: '300ms' }}>See my work</a>
          </div>
        </div>
      </div>
    </section>
  )
}
