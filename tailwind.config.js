module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        accent: '#06B6D4',
        muted: '#64748B',
        surface: '#FFFFFF',
        page: '#F8FAFC'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial']
      },
      transitionProperty: {
        'height': 'height'
      }
    }
  },
  plugins: []
}
