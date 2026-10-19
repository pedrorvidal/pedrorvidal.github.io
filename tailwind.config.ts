import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      screens: {
        // Phones and tablets: no hover, finger-sized pointer.
        touch: { raw: '(hover: none) and (pointer: coarse)' },
      },
      fontFamily: {
        sans: ['"Chakra Petch"', 'system-ui', 'sans-serif'],
        arcade: ['"Press Start 2P"', 'ui-monospace', 'monospace'],
      },
      colors: {
        neon: {
          cyan: 'hsl(var(--neon-cyan))',
          magenta: 'hsl(var(--neon-magenta))',
          yellow: 'hsl(var(--neon-yellow))',
          green: 'hsl(var(--neon-green))',
        },
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
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)', filter: 'none' },
          '20%': { transform: 'translate(-3px, 2px)', filter: 'hue-rotate(40deg)' },
          '40%': { transform: 'translate(3px, -2px)', filter: 'hue-rotate(-40deg)' },
          '60%': { transform: 'translate(-2px, -1px)' },
          '80%': { transform: 'translate(2px, 1px)', filter: 'saturate(2)' },
        },
        'pixel-in': {
          '0%': { opacity: '0', transform: 'translateY(24px) scale(0.96)', filter: 'blur(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)', filter: 'blur(0)' },
        },
        'coin-fall': {
          '0%': { transform: 'translateY(-10vh) rotateY(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotateY(720deg)', opacity: '0.8' },
        },
        'pop-up': {
          '0%': { transform: 'translateY(0) scale(0.6)', opacity: '0' },
          '20%': { transform: 'translateY(-8px) scale(1.1)', opacity: '1' },
          '100%': { transform: 'translateY(-48px) scale(1)', opacity: '0' },
        },
        'border-sweep': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        float: 'float 4s ease-in-out infinite',
        blink: 'blink 1s steps(1) infinite',
        glitch: 'glitch 0.4s steps(2) 1',
        'pixel-in': 'pixel-in 0.6s steps(6) forwards',
        'coin-fall': 'coin-fall linear forwards',
        'pop-up': 'pop-up 1.2s ease-out forwards',
        'border-sweep': 'border-sweep 3s linear infinite',
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
