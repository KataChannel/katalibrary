import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // KATA Brand Colors - Mono & Colorful Design System
        kata: {
          // Mono Palette - Sophisticated grayscale
          mono: {
            50: '#fcfcfc',
            100: '#f9f9f9',
            200: '#f0f0f0',
            300: '#e4e4e4',
            400: '#d1d1d1',
            500: '#b4b4b4',
            600: '#8e8e8e',
            700: '#6b6b6b',
            800: '#484848',
            900: '#2a2a2a',
            950: '#171717',
          },
          
          // Primary Brand Color - Electric Blue
          primary: {
            50: '#eff8ff',
            100: '#dbeefe',
            200: '#bfe3fe',
            300: '#93d5fd',
            400: '#60bffa',
            500: '#3ba5f6',
            600: '#2590eb',
            700: '#1e7dd8',
            800: '#1e65af',
            900: '#1e5489',
            950: '#163554',
          },
          
          // Secondary Brand Color - Vibrant Purple
          secondary: {
            50: '#faf5ff',
            100: '#f3e8ff',
            200: '#e9d5ff',
            300: '#d8b4fe',
            400: '#c084fc',
            500: '#a855f7',
            600: '#9333ea',
            700: '#7c3aed',
            800: '#6b21c8',
            900: '#581c87',
            950: '#3b0764',
          },
          
          // Accent Color - Emerald Green
          accent: {
            50: '#ecfdf5',
            100: '#d1fae5',
            200: '#a7f3d0',
            300: '#6ee7b7',
            400: '#34d399',
            500: '#10b981',
            600: '#059669',
            700: '#047857',
            800: '#065f46',
            900: '#064e3b',
            950: '#022c22',
          },
          
          // Success State
          success: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
            950: '#052e16',
          },
          
          // Warning State  
          warning: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
            950: '#451a03',
          },
          
          // Error State
          error: {
            50: '#fef2f2',
            100: '#fee2e2',
            200: '#fecaca',
            300: '#fca5a5',
            400: '#f87171',
            500: '#ef4444',
            600: '#dc2626',
            700: '#b91c1c',
            800: '#991b1b',
            900: '#7f1d1d',
            950: '#450a0a',
          },
          
          // Info State
          info: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
            950: '#082f49',
          },
        },
      },
      
      fontFamily: {
        kata: [
          'Inter', 
          '-apple-system', 
          'BlinkMacSystemFont', 
          'Segoe UI', 
          'Roboto', 
          'sans-serif'
        ],
        'kata-mono': [
          'JetBrains Mono',
          'Fira Code', 
          'Monaco', 
          'Cascadia Code', 
          'monospace'
        ],
      },
      
      fontSize: {
        'kata-xs': ['0.75rem', { lineHeight: '1rem' }],
        'kata-sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'kata-base': ['1rem', { lineHeight: '1.5rem' }],
        'kata-lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'kata-xl': ['1.25rem', { lineHeight: '1.75rem' }],
        'kata-2xl': ['1.5rem', { lineHeight: '2rem' }],
        'kata-3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        'kata-4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        'kata-5xl': ['3rem', { lineHeight: '1' }],
        'kata-6xl': ['3.75rem', { lineHeight: '1' }],
      },
      
      spacing: {
        'kata-xs': '0.25rem',    // 4px
        'kata-sm': '0.5rem',     // 8px
        'kata-md': '1rem',       // 16px
        'kata-lg': '1.5rem',     // 24px
        'kata-xl': '2rem',       // 32px
        'kata-2xl': '3rem',      // 48px
        'kata-3xl': '4rem',      // 64px
        'kata-4xl': '6rem',      // 96px
      },
      
      borderRadius: {
        'kata-none': '0',
        'kata-sm': '0.25rem',
        'kata-md': '0.375rem',
        'kata-lg': '0.5rem',
        'kata-xl': '0.75rem',
        'kata-2xl': '1rem',
        'kata-3xl': '1.5rem',
        'kata-full': '9999px',
      },
      
      boxShadow: {
        'kata-xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'kata-sm': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'kata-md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'kata-lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'kata-xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        'kata-2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'kata-inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        'kata-glow': '0 0 20px rgb(59 130 246 / 0.5)',
        'kata-glow-lg': '0 0 40px rgb(59 130 246 / 0.3)',
      },
      
      animation: {
        'kata-fade-in': 'kataFadeIn 0.2s ease-out',
        'kata-fade-out': 'kataFadeOut 0.2s ease-in',
        'kata-slide-up': 'kataSlideUp 0.3s ease-out',
        'kata-slide-down': 'kataSlideDown 0.3s ease-out',
        'kata-slide-left': 'kataSlideLeft 0.3s ease-out',
        'kata-slide-right': 'kataSlideRight 0.3s ease-out',
        'kata-scale-in': 'kataScaleIn 0.2s ease-out',
        'kata-scale-out': 'kataScaleOut 0.2s ease-in',
        'kata-bounce': 'kataBounce 0.6s ease-in-out',
        'kata-pulse': 'kataPulse 2s infinite',
        'kata-spin': 'kataSpin 1s linear infinite',
        'kata-ping': 'kataPing 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      
      keyframes: {
        kataFadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        kataFadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        kataSlideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        kataSlideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        kataSlideLeft: {
          '0%': { transform: 'translateX(10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        kataSlideRight: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        kataScaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        kataScaleOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.95)', opacity: '0' },
        },
        kataBounce: {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0,0,0)' },
          '40%, 43%': { transform: 'translate3d(0, -30px, 0)' },
          '70%': { transform: 'translate3d(0, -15px, 0)' },
          '90%': { transform: 'translate3d(0, -4px, 0)' },
        },
        kataPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        kataSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        kataPing: {
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
      
      transitionDuration: {
        'kata-fast': '150ms',
        'kata-normal': '250ms',
        'kata-slow': '350ms',
      },
      
      transitionTimingFunction: {
        'kata-ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'kata-ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'kata-ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'kata-ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

export default config
