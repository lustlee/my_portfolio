import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        cat: {
          rosewater: '#f5e0dc',
          flamingo: '#f2cdcd',
          mauve: '#cba6f7',
          blue: '#89b4fa',
          sapphire: '#74c7ec',
          green: '#a6e3a1',
          peach: '#fab387',
          base: '#1e1e2e',
          mantle: '#181825',
          crust: '#11111b',
        },
        ayu: {
          orange: '#ffb454',
          yellow: '#ffd173',
          cyan: '#95e6cb',
          blue: '#59c2ff',
          purple: '#d2a6ff',
          bg: '#0f1419',
        },
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        pixel: ['"Press Start 2P"', 'monospace'],
        display: ['"VT323"', 'monospace'],
        anime: ['"DotGothic16"', 'sans-serif'],
        console: ['"Silkscreen"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, hsl(var(--border) / 0.25) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border) / 0.25) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        blink: 'blink 1s steps(2, start) infinite',
      },
    },
  },
  plugins: [animate],
};

export default config;
