import * as React from 'react'
import { cn } from '../../lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'elevated' | 'outlined' | 'filled'
  padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  colorScheme?: 'mono' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
}

const getCardClasses = (variant: string, padding: string, colorScheme: string): string => {
  const baseClasses = 'kata-card-base rounded-lg transition-all'
  
  // Padding classes
  const paddingClasses = {
    xs: 'p-2',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8',
  }
  
  // Variant classes
  const variantClasses = {
    elevated: {
      mono: 'bg-white border border-kata-mono-200 shadow-kata-md hover:shadow-kata-lg',
      primary: 'bg-kata-primary-50 border border-kata-primary-200 shadow-kata-md hover:shadow-kata-lg',
      secondary: 'bg-kata-secondary-50 border border-kata-secondary-200 shadow-kata-md hover:shadow-kata-lg',
      success: 'bg-kata-success-50 border border-kata-success-200 shadow-kata-md hover:shadow-kata-lg',
      warning: 'bg-kata-warning-50 border border-kata-warning-200 shadow-kata-md hover:shadow-kata-lg',
      error: 'bg-kata-error-50 border border-kata-error-200 shadow-kata-md hover:shadow-kata-lg',
    },
    outlined: {
      mono: 'bg-transparent border border-kata-mono-300 hover:border-kata-mono-400',
      primary: 'bg-transparent border border-kata-primary-300 hover:border-kata-primary-400',
      secondary: 'bg-transparent border border-kata-secondary-300 hover:border-kata-secondary-400',
      success: 'bg-transparent border border-kata-success-300 hover:border-kata-success-400',
      warning: 'bg-transparent border border-kata-warning-300 hover:border-kata-warning-400',
      error: 'bg-transparent border border-kata-error-300 hover:border-kata-error-400',
    },
    filled: {
      mono: 'bg-kata-mono-100 border border-kata-mono-200',
      primary: 'bg-kata-primary-100 border border-kata-primary-200',
      secondary: 'bg-kata-secondary-100 border border-kata-secondary-200',
      success: 'bg-kata-success-100 border border-kata-success-200',
      warning: 'bg-kata-warning-100 border border-kata-warning-200',
      error: 'bg-kata-error-100 border border-kata-error-200',
    },
  }
  
  return cn(
    baseClasses,
    paddingClasses[padding as keyof typeof paddingClasses],
    (variantClasses[variant as keyof typeof variantClasses] as any)[colorScheme]
  )
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className, 
    variant = 'elevated', 
    padding = 'md', 
    colorScheme = 'mono',
    children,
    ...props 
  }, ref) => {
    const cardClasses = getCardClasses(variant, padding, colorScheme)
    
    return (
      <div
        className={cn(cardClasses, className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

// Card Header component
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  divider?: boolean
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, divider = false, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          'kata-card-header',
          divider && 'border-b border-kata-mono-200 pb-3 mb-3',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardHeader.displayName = 'CardHeader'

// Card Body component
export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn('kata-card-body', className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardBody.displayName = 'CardBody'

// Card Footer component
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  divider?: boolean
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, divider = false, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          'kata-card-footer',
          divider && 'border-t border-kata-mono-200 pt-3 mt-3',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardBody, CardFooter }
