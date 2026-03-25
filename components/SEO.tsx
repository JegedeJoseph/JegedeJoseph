import Head from 'next/head'

type Props = {
  title?: string
  description?: string
}

export default function SEO({ title = "Your Name — Portfolio", description = "Portfolio built with Next.js and Tailwind CSS." }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary" />
    </Head>
  )
}
