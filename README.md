<h1 align="center">Hi 👋, I'm Joseph Oluwapelumi Jegede</h1>
<h3 align="center">A passionate frontend developer from Lagos, Nigeria</h3>

<p align="left"> <img src="https://komarev.com/ghpvc/?username=jegedejoseph&label=Profile%20views&color=0e75b6&style=flat" alt="jegedejoseph" /> </p>

<p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="[![trophy](https://github-profile-trophy.vercel.app/?username=jegedejoseph)](https://github.com/ryo-ma/github-profile-trophy)" alt="jegedejoseph" /></a> </p>

- 🔭 I’m open to collaborate on  **AI and Finance**  related projects

- 🌱 I’m currently learning **Angular, Vue, Php,**

- 👯 I’m building and Locked-in to build and deploy **Digital solutions in the FinTech industry**

- 📫 How to reach me **jjegede78@gmail.com**

<h3 align="left">Connect with me:</h3>
<p align="left">
<a href="https://linkedin.com/in/josephjegede" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="josephjegede" height="30" width="40" /></a>
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> </p>

# Next.js Portfolio (scaffold)

This workspace contains a minimal Next.js + TypeScript + Tailwind scaffold for a portfolio based on a Figma template.

Quick start

```bash
# install deps
npm install

# run dev server
npm run dev
```

Notes
- Styling: Tailwind CSS
- Content: currently hardcoded in `pages/index.tsx` and components
- Deploy: recommended to deploy to Vercel (connect the Git repo and push to main)

Next steps
- Replace placeholder text and avatar with your content and exported assets from Figma
- Add animations and responsive tweaks to match the Figma design
- Add contact form (API route) and analytics before deploy

Contact form
- A client contact form and a placeholder API route were added at `components/ContactForm.tsx` and `pages/api/contact.ts`.
- The API currently returns success; wire an email provider (SendGrid, SMTP) or store submissions to a database to capture messages.

Env variables for email and analytics

- `SMTP_HOST` — SMTP server host (e.g., smtp.gmail.com)
- `SMTP_PORT` — SMTP server port (e.g., 465 for SSL or 587)
- `SMTP_USER` — SMTP username (email address)
- `SMTP_PASS` — SMTP password / app password
- `CONTACT_TO` — recipient email for contact form messages
- `NEXT_PUBLIC_GA_ID` — Google Analytics measurement ID (e.g., G-XXXXXXX)

Place these in a `.env.local` file for local development. Example:

```
SMTP_HOST=smtp.example.com
SMTP_PORT=465
SMTP_USER=you@example.com
SMTP_PASS=yourpassword
CONTACT_TO=you@example.com
NEXT_PUBLIC_GA_ID=G-XXXXXXX
```

Deploy to Vercel

1. Create a Git repository and push the project to GitHub, GitLab, or Bitbucket.
2. Sign in to https://vercel.com and import the repository (Vercel auto-detects Next.js).
3. Set any required environment variables on the Vercel dashboard (e.g., API keys for email providers).
4. Deploy; Vercel will run `npm run build` automatically.

Quick commands

```bash
# install deps
npm install

# run dev server
npm run dev
```

<p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=jegedejoseph&show_icons=true&locale=en&layout=compact" alt="jegedejoseph" /></p>

<p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=jegedejoseph&show_icons=true&locale=en" alt="jegedejoseph" /></p>

<p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=jegedejoseph&" alt="jegedejoseph" /></p>
