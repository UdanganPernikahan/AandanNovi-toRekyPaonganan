module.exports = {
  content: ['./index.html', './**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
        script: ['var(--font-script)'],
      },
      colors: {
        sage: {
          100: 'var(--color-sage-100)',
          500: 'var(--color-sage-500)',
          800: 'var(--color-sage-800)'
        },
        ivory: 'var(--color-ivory)',
        gold: 'var(--color-gold)',
        tan: 'var(--color-tan)',
        gray: 'var(--color-gray)'
      }
    }
  },
  plugins: []
};
