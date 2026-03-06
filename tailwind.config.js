export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          green: '#00ff41',
          dark: '#0a0a0a',
          lighter: '#1a1a1a',
          gray: '#2d2d2d',
          accent: '#39ff14'
        }
      },
      fontFamily: {
        mono: ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
        hack: ['Hack', 'monospace']
      }
    },
  },
  plugins: [],
}
