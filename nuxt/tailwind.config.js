/** @type {import('tailwindcss').Config} */
export default {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [],
  theme: {

    fontSize: {
      xxxs: ['0.5rem', {
        lineHeight: '1.16',
        letterSpacing: '0.03em'
      }],

      xxs: ['0.75rem', {
        lineHeight: '1.16',
        letterSpacing: '0.03em'
      }],
      //arial base
      xs: ['1rem', {
        lineHeight: '1.16',
        letterSpacing: '0.03em'
      }],
      s: ['1.3rem', {
        lineHeight: '1.125',
        letterSpacing: '0.03em'
      }],
      md: ['2.375rem', {
        lineHeight: '1',
        letterSpacing: '-0.03em',
      }],
      lg: ['4.375rem', {
        lineHeight: '1',
        letterSpacing: '-0.03em'
      }],

      // custom typefaces
      
    },
    borderRadius: {
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'xl': '1rem'
    },

    fontFamily: {
      'sans': 'var(--sans)',
      'serif': 'var(--serif)',
    },

    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%);'
         },
          '100%': { transform: 'translateX(-100%)' },
        },
        bounceUp: {
          '0%, 100%': { transform: 'translateY(-15%)'
         },
          '50%': { transform: 'translateY(0%);' },
        }
      },
      animation: {
        slide: 'slide 25s linear infinite',
        bounceUp: 'bounceUp 1s 2.5'
      },
      colors: {
        'bg': 'var(--bg)',
        'fg': 'var(--fg)',
        'accent1': 'var(--accent1)',
        'accent2': 'var(--accent2)',
        'accent3': 'var(--accent3)'
      },
      backgroundImage: {
        'dirt': "url('/assets/13738812-dirt_xl.jpg')"
      },
      backgroundSize: {
        '4': '4rem',
      },
      spacing: {
        '12minus': 'var(--12minus)',
        'adjustedDocWidth': 'var(--adjustedDocWidth)',
      }
    },
  },
  plugins: [],
}

