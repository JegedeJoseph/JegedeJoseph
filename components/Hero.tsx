export default function Hero() {
  return (
    <section className="py-20">
      <div className="container text-center">
        <img src="/avatar.svg" alt="avatar" className="w-32 h-32 mx-auto rounded-full mb-6" />
        <h1 className="text-4xl font-bold mb-2">Hi, I'm Your Name</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">I build web apps — frontend, backend, and everything in between. This portfolio follows a Figma template and is built with Next.js + Tailwind.</p>
        <div className="mt-6">
          <a href="#projects" className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md">See my work</a>
        </div>
      </div>
    </section>
  )
}
