// KATA UI Library - Main exports

// Components
export * from './components/Button/Button'
export * from './components/Input/Input'
export * from './components/Card/Card'
export * from './components/Typography/Typography'
export * from './components/Avatar/Avatar'
export * from './components/Badge/Badge'

// Utilities
export { cn, kataColors } from './lib/utils'

// Types (re-export specific types to avoid conflicts)
export type { 
  KataColorScheme, 
  KataSize, 
  KataVariant 
} from './lib/utils'

export type {
  KataBaseProps,
  KataButtonProps,
  KataInputProps,
  KataCardProps,
  KataTypographyProps,
  KataAvatarProps,
  KataBadgeProps,
  KataCheckboxProps,
  KataSwitchProps
} from './types'

// Note: Import styles in your app with:
// import '@kata/ui-library/dist/styles.css'
