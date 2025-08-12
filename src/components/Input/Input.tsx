import * as React from 'react'
import { cn } from '../../lib/utils'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'outline' | 'filled' | 'flushed'
  colorScheme?: 'mono' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  error?: boolean
  helperText?: string
  label?: string
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
}

const getInputClasses = (size: string, variant: string, colorScheme: string, error: boolean): string => {
  const baseClasses = 'kata-input-base w-full transition-all focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed'
  
  // Size classes
  const sizeClasses = {
    xs: 'h-6 px-2 text-xs',
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-4 text-base',
    xl: 'h-14 px-6 text-lg',
  }
  
  // Variant classes
  const variantClasses = {
    outline: 'border bg-transparent',
    filled: 'border-0 bg-kata-mono-100',
    flushed: 'border-0 border-b-2 bg-transparent rounded-none px-0',
  }
  
  // Color scheme classes
  const colorClasses = error ? {
    outline: 'border-kata-error-300 focus:border-kata-error-500 focus:ring-2 focus:ring-kata-error-200',
    filled: 'bg-kata-error-50 focus:bg-kata-error-100',
    flushed: 'border-kata-error-300 focus:border-kata-error-500',
  } : {
    outline: {
      mono: 'border-kata-mono-300 focus:border-kata-mono-500 focus:ring-2 focus:ring-kata-mono-200',
      primary: 'border-kata-mono-300 focus:border-kata-primary-500 focus:ring-2 focus:ring-kata-primary-200',
      secondary: 'border-kata-mono-300 focus:border-kata-secondary-500 focus:ring-2 focus:ring-kata-secondary-200',
      success: 'border-kata-mono-300 focus:border-kata-success-500 focus:ring-2 focus:ring-kata-success-200',
      warning: 'border-kata-mono-300 focus:border-kata-warning-400 focus:ring-2 focus:ring-kata-warning-200',
      error: 'border-kata-mono-300 focus:border-kata-error-500 focus:ring-2 focus:ring-kata-error-200',
    },
    filled: {
      mono: 'bg-kata-mono-100 focus:bg-kata-mono-200',
      primary: 'bg-kata-primary-50 focus:bg-kata-primary-100',
      secondary: 'bg-kata-secondary-50 focus:bg-kata-secondary-100',
      success: 'bg-kata-success-50 focus:bg-kata-success-100',
      warning: 'bg-kata-warning-50 focus:bg-kata-warning-100',
      error: 'bg-kata-error-50 focus:bg-kata-error-100',
    },
    flushed: {
      mono: 'border-kata-mono-300 focus:border-kata-mono-500',
      primary: 'border-kata-mono-300 focus:border-kata-primary-500',
      secondary: 'border-kata-mono-300 focus:border-kata-secondary-500',
      success: 'border-kata-mono-300 focus:border-kata-success-500',
      warning: 'border-kata-mono-300 focus:border-kata-warning-400',
      error: 'border-kata-mono-300 focus:border-kata-error-500',
    },
  }
  
  const selectedColorClass = error 
    ? colorClasses[variant as keyof typeof colorClasses] as string
    : (colorClasses[variant as keyof typeof colorClasses] as any)[colorScheme] as string
  
  return cn(
    baseClasses,
    sizeClasses[size as keyof typeof sizeClasses],
    variantClasses[variant as keyof typeof variantClasses],
    selectedColorClass
  )
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type = 'text',
    size = 'md', 
    variant = 'outline', 
    colorScheme = 'primary', 
    error = false,
    helperText,
    label,
    leftIcon,
    rightIcon,
    ...props 
  }, ref) => {
    const inputClasses = getInputClasses(size, variant, colorScheme, error)
    const inputId = React.useId()
    
    return (
      <div className="kata-input-wrapper">
        {label && (
          <label 
            htmlFor={inputId}
            className={cn(
              'block text-sm font-medium mb-1',
              error ? 'text-kata-error-700' : 'text-kata-mono-700'
            )}
          >
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {React.cloneElement(leftIcon, { 
                className: cn('h-4 w-4 text-kata-mono-400', leftIcon.props?.className)
              })}
            </div>
          )}
          <input
            id={inputId}
            type={type}
            className={cn(
              inputClasses,
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              className
            )}
            ref={ref}
            {...props}
          />
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              {React.cloneElement(rightIcon, { 
                className: cn('h-4 w-4 text-kata-mono-400', rightIcon.props?.className)
              })}
            </div>
          )}
        </div>
        {helperText && (
          <p className={cn(
            'mt-1 text-xs',
            error ? 'text-kata-error-600' : 'text-kata-mono-600'
          )}>
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }
