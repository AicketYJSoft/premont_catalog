/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(220 13% 91%)',
        input: 'hsl(220 13% 91%)',
        ring: 'hsl(220 13% 91%)',
        background: '#ffffff',
        foreground: '#0b0b0c',
        muted: { DEFAULT: 'hsl(220 14% 96%)', foreground: 'hsl(220 9% 46%)' },
        primary: { DEFAULT: '#111827', foreground: '#ffffff' },
        secondary: { DEFAULT: 'hsl(220 14% 96%)', foreground: 'hsl(220 9% 26%)' },
        destructive: { DEFAULT: '#ef4444', foreground: '#ffffff' }
      },
      borderRadius: {
        '2xl': '1rem'
      }
    }
  },
  plugins: []
}