/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        sora:   ['Sora', 'sans-serif'],
      },
      colors: {
        primary:  '#4F46E5',
        'primary-light': '#818CF8',
        accent:   '#3B82F6',
        page:     '#F0F4FF',
        surface:  '#FFFFFF',
        muted:    '#6B7280',
        dark:     '#111827',
      },
      borderRadius: {
        card: '18px',
      },
      boxShadow: {
        card:  '0 4px 24px rgba(79,70,229,0.08), 0 1px 4px rgba(0,0,0,0.06)',
        hover: '0 12px 40px rgba(79,70,229,0.16), 0 2px 8px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
