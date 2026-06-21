/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)'],
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      borderRadius: {
        none: '0',
        sm: '6px',
        DEFAULT: '12px',
        md: '14px',
        lg: '18px',
        xl: '20px',
        '2xl': '26px',
        full: '9999px',
        panel: '12px',
        card: '18px',
        stage: '26px',
        pill: '9999px',
      },
      backgroundImage: {
        spectral: 'linear-gradient(90deg,#6EE7B7,#2DD4BF,#22D3EE,#38BDF8,#3B82F6)',
        'spectral-v': 'linear-gradient(180deg,#6EE7B7,#2DD4BF,#22D3EE,#38BDF8,#3B82F6)',
      },
      colors: {
        // Dark-first base
        dark: '#050608',
        graphite: '#0C0F14',
        ink: '#050608',
        base: '#050608',
        soft: '#0C0F14',
        surface: '#111519',
        'surface-alt': '#181C22',
        // Text on dark
        white: '#FFFFFF',
        body: 'rgba(255,255,255,0.6)',
        muted: 'rgba(255,255,255,0.4)',
        'text-primary': 'rgba(255,255,255,0.9)',
        'text-secondary': 'rgba(255,255,255,0.6)',
        'text-tertiary': 'rgba(255,255,255,0.4)',
        // Aurora stops
        mint: '#6EE7B7',
        teal: '#2DD4BF',
        cyan: '#22D3EE',
        sky: '#38BDF8',
        blue: '#3B82F6',
        // Signal system
        signal: '#7DD3FC',
        signal2: '#38BDF8',
        'signal-soft': '#E0F7FF',
        'deep-signal': '#0369A1',
        // Borders on dark
        border: 'rgba(255,255,255,0.08)',
        'border-strong': 'rgba(255,255,255,0.14)',
        line: 'rgba(255,255,255,0.08)',
        'line-strong': 'rgba(255,255,255,0.14)',
        // Dark panel system
        'dark-text': '#F8FAFC',
        'dark-muted': '#CBD5E1',
        'dark-panel': '#11151b',
        'dark-deeper': '#0c1620',
        'dark-line': '#232b35',
        'dark-line-accent': '#2e3a47',
        'dark-label': '#9aa3ad',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'none' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'swarm-spin': {
          to: { transform: 'rotate(360deg)' },
        },
        'core-pulse': {
          '0%,100%': { opacity: '0.65' },
          '50%': { opacity: '1' },
        },
        'cell-pulse': {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'float': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up .75s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fade-in .6s ease both',
        'logo-spin': 'swarm-spin 22s linear infinite',
        'eval-spin': 'swarm-spin 16s linear infinite',
        'core-pulse': 'core-pulse 3.2s ease-in-out infinite',
        'cell-pulse': 'cell-pulse 1.8s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'float': 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
