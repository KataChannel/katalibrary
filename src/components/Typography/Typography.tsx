import * as React from 'react'
import { cn } from '../../lib/utils'

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'overline'
  color?: 'mono' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  align?: 'left' | 'center' | 'right' | 'justify'
  component?: keyof JSX.IntrinsicElements
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
  mono?: boolean
}

const getTypographyClasses = (
  variant: string, 
  color: string, 
  align: string, 
  weight: string,
  mono: boolean
): string => {
  const baseClasses = 'kata-typography-base'
  
  // Variant classes
  const variantClasses = {
    h1: 'text-4xl lg:text-5xl font-bold leading-tight',
    h2: 'text-3xl lg:text-4xl font-bold leading-tight',
    h3: 'text-2xl lg:text-3xl font-semibold leading-tight',
    h4: 'text-xl lg:text-2xl font-semibold leading-snug',
    h5: 'text-lg lg:text-xl font-medium leading-snug',
    h6: 'text-base lg:text-lg font-medium leading-normal',
    body1: 'text-base leading-relaxed',
    body2: 'text-sm leading-relaxed',
    caption: 'text-xs leading-normal',
    overline: 'text-xs uppercase tracking-wide leading-normal',
  }
  
  // Color classes
  const colorClasses = {
    mono: 'text-kata-mono-900',
    primary: 'text-kata-primary-700',
    secondary: 'text-kata-secondary-700',
    success: 'text-kata-success-700',
    warning: 'text-kata-warning-700',
    error: 'text-kata-error-700',
  }
  
  // Alignment classes
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  }
  
  // Weight classes
  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  }
  
  // Font family classes
  const fontClasses = mono ? 'font-kata-mono' : 'font-kata'
  
  return cn(
    baseClasses,
    variantClasses[variant as keyof typeof variantClasses],
    colorClasses[color as keyof typeof colorClasses],
    alignClasses[align as keyof typeof alignClasses],
    weightClasses[weight as keyof typeof weightClasses],
    fontClasses
  )
}

const getDefaultComponent = (variant: string): keyof JSX.IntrinsicElements => {
  const componentMap = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body1: 'p',
    body2: 'p',
    caption: 'span',
    overline: 'span',
  } as const
  
  return componentMap[variant as keyof typeof componentMap] || 'p'
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ 
    className, 
    variant = 'body1', 
    color = 'mono', 
    align = 'left',
    weight = 'normal',
    mono = false,
    component,
    children,
    ...props 
  }, ref) => {
    const Component = component || getDefaultComponent(variant)
    const typographyClasses = getTypographyClasses(variant, color, align, weight, mono)
    
    return React.createElement(
      Component,
      {
        className: cn(typographyClasses, className),
        ref,
        ...props,
      },
      children
    )
  }
)

Typography.displayName = 'Typography'

// Convenience components
export const Heading1 = React.forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant'>>(
  (props, ref) => <Typography {...props} variant="h1" ref={ref as any} />
)

export const Heading2 = React.forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant'>>(
  (props, ref) => <Typography {...props} variant="h2" ref={ref as any} />
)

export const Heading3 = React.forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant'>>(
  (props, ref) => <Typography {...props} variant="h3" ref={ref as any} />
)

export const Heading4 = React.forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant'>>(
  (props, ref) => <Typography {...props} variant="h4" ref={ref as any} />
)

export const Heading5 = React.forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant'>>(
  (props, ref) => <Typography {...props} variant="h5" ref={ref as any} />
)

export const Heading6 = React.forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant'>>(
  (props, ref) => <Typography {...props} variant="h6" ref={ref as any} />
)

export const Body1 = React.forwardRef<HTMLParagraphElement, Omit<TypographyProps, 'variant'>>(
  (props, ref) => <Typography {...props} variant="body1" ref={ref as any} />
)

export const Body2 = React.forwardRef<HTMLParagraphElement, Omit<TypographyProps, 'variant'>>(
  (props, ref) => <Typography {...props} variant="body2" ref={ref as any} />
)

export const Caption = React.forwardRef<HTMLSpanElement, Omit<TypographyProps, 'variant'>>(
  (props, ref) => <Typography {...props} variant="caption" ref={ref as any} />
)

export const Overline = React.forwardRef<HTMLSpanElement, Omit<TypographyProps, 'variant'>>(
  (props, ref) => <Typography {...props} variant="overline" ref={ref as any} />
)

Heading1.displayName = 'Heading1'
Heading2.displayName = 'Heading2'
Heading3.displayName = 'Heading3'
Heading4.displayName = 'Heading4'
Heading5.displayName = 'Heading5'
Heading6.displayName = 'Heading6'
Body1.displayName = 'Body1'
Body2.displayName = 'Body2'
Caption.displayName = 'Caption'
Overline.displayName = 'Overline'

export { Typography }
