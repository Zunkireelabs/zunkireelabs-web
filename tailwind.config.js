/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,njk,md,js}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors (Databricks-inspired)
        'navy': {
          DEFAULT: '#1b3139',
          50: '#f4f7f8',
          100: '#e3eaec',
          200: '#c7d5da',
          300: '#a0b7bf',
          400: '#72929d',
          500: '#577782',
          600: '#4a636e',
          700: '#3f525b',
          800: '#38464e',
          900: '#1b3139', // Main navy
          950: '#141f24',
        },
        // Brand Sage — P2 · Stone palette
        'zunkiree': {
          DEFAULT: '#6f9b34',
          50:  '#f4faea',
          100: '#e8f4d5',
          200: '#d2e9ac',
          300: '#b6cf96', // Accent text on dark backgrounds
          400: '#a3c072',
          500: '#90a959', // Logo / decorative sage
          600: '#6f9b34', // Primary CTA, links, text accents
          700: '#5a8029', // Hover state
          800: '#476420',
          900: '#374d18',
          950: '#243310',
        },
        // Neutral Grays - Full Scale
        'warm': {
          'white': '#ffffff',
          'off-white': '#f9fafb',  // Light section backgrounds
          'gray': '#f9f7f4',       // Section backgrounds
          'surface': '#f5f3f0',
          'border': '#e4ecf1',     // Borders, dividers
          'muted': '#5a6f77',      // Secondary text (navy-light)
          'black': '#111827',      // Near black for headings
          'charcoal': '#374151',   // Dark gray for text
          'rich-black': '#1b3139', // Deep navy-black for dark sections
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        'cool': {
          'gray': '#e4ecf1',
          'border': '#d1dce3',
        },
        // Blue accent — second section color (ServiceNow-style section bg)
        'sky': {
          DEFAULT: '#3d8fd4',
          50:  '#eff7ff',
          100: '#dbeffe',
          200: '#bfe1fc',
          300: '#93ccfa',
          400: '#60aef5',
          500: '#3d8fd4',
          600: '#2673b8',
          700: '#1d5c94',
          800: '#1c4e7a',
          900: '#0d2d4a',
          950: '#081a2e',
        },
        // Semantic colors
        'success': {
          DEFAULT: '#10b981',
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#10b981',
          600: '#059669',
        },
        'warning': {
          DEFAULT: '#f59e0b',
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
        },
        'error': {
          DEFAULT: '#ef4444',
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626',
        },
      },
      fontFamily: {
        'sans': ['Outfit', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'display': ['Outfit', 'system-ui', '-apple-system', 'sans-serif'],
        'mono': ['Fira Code', 'Consolas', 'monospace'],
      },
      fontSize: {
        // Typography Scale (Desktop)
        'display-1': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],    // 56px
        'display-2': ['4rem', { lineHeight: '1.1', fontWeight: '700' }],      // 64px
        'h1': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],           // 56px
        'h2': ['2.5rem', { lineHeight: '1.15', fontWeight: '700' }],          // 40px
        'h3': ['1.75rem', { lineHeight: '1.2', fontWeight: '600' }],          // 28px
        'h4': ['1.25rem', { lineHeight: '1.3', fontWeight: '600' }],          // 20px
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],    // 18px
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],           // 16px
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],      // 14px
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }],     // 12px
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        // Section spacing
        'section': '6rem',      // 96px desktop
        'section-md': '4rem',   // 64px tablet
        'section-sm': '3rem',   // 48px mobile
      },
      maxWidth: {
        'content': '96rem',     // 1536px max content width (fills 14" MacBook)
        'narrow': '72rem',      // 1152px for text-heavy content
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 12px 40px rgba(0, 0, 0, 0.12)',
        'btn': '0 4px 14px rgba(235, 22, 0, 0.25)',
        'btn-hover': '0 6px 20px rgba(235, 22, 0, 0.35)',
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'none': '0',           // Sharp edges for buttons (Databricks style)
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
