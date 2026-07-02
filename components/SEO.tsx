import Head from 'next/head'

export default function SEO() {
  return (
    <Head>
      <title>Joseph Jegede | Software Developer · Lagos, Nigeria</title>
      <meta name="description" content="Portfolio of Joseph Oluwapelumi Jegede — a Software Developer specialising in full-stack web, mobile, AI/ML, and cloud solutions. CTO at MediaErrands News. Based in Lagos, Nigeria." />
      <meta name="keywords" content="Joseph Jegede, Software Developer, Full Stack, React, Next.js, Java, Python, Lagos Nigeria, Web Developer, Portfolio" />
      <meta name="author" content="Joseph Oluwapelumi Jegede" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph */}
      <meta property="og:title" content="Joseph Jegede | Software Developer" />
      <meta property="og:description" content="Full-stack developer, CTO at MediaErrands News, and CS student at Anchor University. Building scalable software from Lagos, Nigeria." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://github.com/JegedeJoseph.png" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@JoJegs" />
      <meta name="twitter:title" content="Joseph Jegede | Software Developer" />
      <meta name="twitter:description" content="Full-stack developer building scalable software from Lagos, Nigeria." />
      <meta name="twitter:image" content="https://github.com/JegedeJoseph.png" />

      {/* Favicon — JJ initials SVG */}
      <link
        rel="icon"
        type="image/svg+xml"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%234F46E5'/><text x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' font-family='Outfit,system-ui,sans-serif' font-size='28' font-weight='800' fill='white'>JJ</text></svg>"
      />
      <link rel="apple-touch-icon" href="https://github.com/JegedeJoseph.png" />

      <meta name="theme-color" content="#4F46E5" />
    </Head>
  )
}
