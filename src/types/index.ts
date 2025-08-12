import * as React from "react"

// Base component props that all KATA components should extend
export interface KataBaseProps {
  className?: string
  children?: React.ReactNode
}

// Common component sizes
export type KataSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

// Common component variants
export type KataVariant = 'solid' | 'outline' | 'ghost' | 'link'

// Color schemes
export type KataColorScheme = 'mono' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'

// Button specific props
export interface KataButtonProps extends KataBaseProps {
  variant?: KataVariant
  size?: KataSize
  colorScheme?: KataColorScheme
  disabled?: boolean
  loading?: boolean
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit' | 'reset'
}

// Input specific props
export interface KataInputProps extends KataBaseProps {
  type?: string
  placeholder?: string
  value?: string
  defaultValue?: string
  disabled?: boolean
  error?: boolean
  helperText?: string
  label?: string
  size?: KataSize
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
}

// Card specific props
export interface KataCardProps extends KataBaseProps {
  variant?: 'elevated' | 'outlined' | 'filled'
  padding?: KataSize
}

// Typography props
export interface KataTypographyProps extends KataBaseProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'overline'
  color?: KataColorScheme
  align?: 'left' | 'center' | 'right'
  component?: keyof JSX.IntrinsicElements
}

// Avatar props
export interface KataAvatarProps extends KataBaseProps {
  src?: string
  alt?: string
  size?: KataSize
  name?: string
  colorScheme?: KataColorScheme
}

// Badge props
export interface KataBadgeProps extends KataBaseProps {
  variant?: KataVariant
  colorScheme?: KataColorScheme
  size?: KataSize
}

// Checkbox props
export interface KataCheckboxProps extends KataBaseProps {
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  colorScheme?: KataColorScheme
  size?: KataSize
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

// Switch props
export interface KataSwitchProps extends KataBaseProps {
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  colorScheme?: KataColorScheme
  size?: KataSize
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
