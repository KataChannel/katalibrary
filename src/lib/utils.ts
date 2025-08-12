// Simple utility functions for KATA UI Library
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

// KATA Theme utilities
export const kataColors = {
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
} as const

export type KataColorScheme = keyof typeof kataColors
export type KataColorShade = keyof typeof kataColors.mono

// Component size utilities
export const kataSizes = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
} as const

export type KataSize = keyof typeof kataSizes

// Component variant utilities
export const kataVariants = {
  solid: 'solid',
  outline: 'outline',
  ghost: 'ghost',
  link: 'link',
} as const

export type KataVariant = keyof typeof kataVariants
