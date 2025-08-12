import * as React from 'react'
import { cn } from '../../lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'ghost' | 'link'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  colorScheme?: 'mono' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  loading?: boolean
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
}

const getButtonClasses = (variant: string, size: string, colorScheme: string): string => {
  const baseClasses = 'kata-btn-base inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  // Size classes
  const sizeClasses = {
    xs: 'h-6 px-2 text-xs rounded-sm',
    sm: 'h-8 px-3 text-sm rounded-md',
    md: 'h-10 px-4 text-sm rounded-md',
    lg: 'h-12 px-6 text-base rounded-lg',
    xl: 'h-14 px-8 text-lg rounded-lg',
  }
  
  // Variant and color scheme classes
  const variantClasses = {
    solid: {
      mono: 'bg-kata-mono-900 text-kata-mono-50 hover:bg-kata-mono-800 focus:ring-kata-mono-500',
      primary: 'bg-kata-primary-600 text-white hover:bg-kata-primary-700 focus:ring-kata-primary-500',
      secondary: 'bg-kata-secondary-600 text-white hover:bg-kata-secondary-700 focus:ring-kata-secondary-500',
      success: 'bg-kata-success-600 text-white hover:bg-kata-success-700 focus:ring-kata-success-500',
      warning: 'bg-kata-warning-500 text-white hover:bg-kata-warning-600 focus:ring-kata-warning-400',
      error: 'bg-kata-error-600 text-white hover:bg-kata-error-700 focus:ring-kata-error-500',
    },
    outline: {
      mono: 'border border-kata-mono-300 text-kata-mono-900 hover:bg-kata-mono-50 focus:ring-kata-mono-500',
      primary: 'border border-kata-primary-300 text-kata-primary-700 hover:bg-kata-primary-50 focus:ring-kata-primary-500',
      secondary: 'border border-kata-secondary-300 text-kata-secondary-700 hover:bg-kata-secondary-50 focus:ring-kata-secondary-500',
      success: 'border border-kata-success-300 text-kata-success-700 hover:bg-kata-success-50 focus:ring-kata-success-500',
      warning: 'border border-kata-warning-300 text-kata-warning-700 hover:bg-kata-warning-50 focus:ring-kata-warning-400',
      error: 'border border-kata-error-300 text-kata-error-700 hover:bg-kata-error-50 focus:ring-kata-error-500',
    },
    ghost: {
      mono: 'text-kata-mono-900 hover:bg-kata-mono-100 focus:ring-kata-mono-500',
      primary: 'text-kata-primary-700 hover:bg-kata-primary-100 focus:ring-kata-primary-500',
      secondary: 'text-kata-secondary-700 hover:bg-kata-secondary-100 focus:ring-kata-secondary-500',
      success: 'text-kata-success-700 hover:bg-kata-success-100 focus:ring-kata-success-500',
      warning: 'text-kata-warning-700 hover:bg-kata-warning-100 focus:ring-kata-warning-400',
      error: 'text-kata-error-700 hover:bg-kata-error-100 focus:ring-kata-error-500',
    },
    link: {
      mono: 'text-kata-mono-900 underline-offset-4 hover:underline focus:ring-kata-mono-500 px-0',
      primary: 'text-kata-primary-700 underline-offset-4 hover:underline focus:ring-kata-primary-500 px-0',
      secondary: 'text-kata-secondary-700 underline-offset-4 hover:underline focus:ring-kata-secondary-500 px-0',
      success: 'text-kata-success-700 underline-offset-4 hover:underline focus:ring-kata-success-500 px-0',
      warning: 'text-kata-warning-700 underline-offset-4 hover:underline focus:ring-kata-warning-400 px-0',
      error: 'text-kata-error-700 underline-offset-4 hover:underline focus:ring-kata-error-500 px-0',
    },
  }
  
  return cn(
    baseClasses,
    sizeClasses[size as keyof typeof sizeClasses],
    variantClasses[variant as keyof typeof variantClasses][colorScheme as keyof typeof variantClasses.solid]
  )
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'solid', 
    size = 'md', 
    colorScheme = 'primary', 
    loading = false, 
    leftIcon, 
    rightIcon, 
    children, 
    disabled, 
    ...props 
  }, ref) => {
    const buttonClasses = getButtonClasses(variant, size, colorScheme)
    
    return (
      <button
        className={cn(buttonClasses, className)}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && leftIcon && (
          <span className="mr-2 flex items-center">
            {React.cloneElement(leftIcon, { 
              className: cn('h-4 w-4', leftIcon.props?.className)
            })}
          </span>
        )}
        {children}
        {!loading && rightIcon && (
          <span className="ml-2 flex items-center">
            {React.cloneElement(rightIcon, { 
              className: cn('h-4 w-4', rightIcon.props?.className)
            })}
          </span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
