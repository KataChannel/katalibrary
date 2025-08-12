import * as React from 'react'
import { cn } from '../../lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'solid' | 'outline' | 'subtle'
  colorScheme?: 'mono' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  rounded?: boolean
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
}

const getBadgeClasses = (variant: string, colorScheme: string, size: string, rounded: boolean): string => {
  const baseClasses = 'kata-badge inline-flex items-center font-medium transition-colors'
  
  // Size classes
  const sizeClasses = {
    xs: 'px-1.5 py-0.5 text-xs',
    sm: 'px-2 py-1 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-sm',
  }
  
  // Border radius classes
  const roundedClasses = rounded ? 'rounded-full' : 'rounded-md'
  
  // Variant and color scheme classes
  const variantClasses = {
    solid: {
      mono: 'bg-kata-mono-900 text-kata-mono-50',
      primary: 'bg-kata-primary-600 text-white',
      secondary: 'bg-kata-secondary-600 text-white',
      success: 'bg-kata-success-600 text-white',
      warning: 'bg-kata-warning-500 text-white',
      error: 'bg-kata-error-600 text-white',
    },
    outline: {
      mono: 'border border-kata-mono-300 text-kata-mono-700 bg-transparent',
      primary: 'border border-kata-primary-300 text-kata-primary-700 bg-transparent',
      secondary: 'border border-kata-secondary-300 text-kata-secondary-700 bg-transparent',
      success: 'border border-kata-success-300 text-kata-success-700 bg-transparent',
      warning: 'border border-kata-warning-300 text-kata-warning-700 bg-transparent',
      error: 'border border-kata-error-300 text-kata-error-700 bg-transparent',
    },
    subtle: {
      mono: 'bg-kata-mono-100 text-kata-mono-800',
      primary: 'bg-kata-primary-100 text-kata-primary-800',
      secondary: 'bg-kata-secondary-100 text-kata-secondary-800',
      success: 'bg-kata-success-100 text-kata-success-800',
      warning: 'bg-kata-warning-100 text-kata-warning-800',
      error: 'bg-kata-error-100 text-kata-error-800',
    },
  }
  
  return cn(
    baseClasses,
    sizeClasses[size as keyof typeof sizeClasses],
    roundedClasses,
    (variantClasses[variant as keyof typeof variantClasses] as any)[colorScheme]
  )
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ 
    className, 
    variant = 'solid', 
    colorScheme = 'primary', 
    size = 'md',
    rounded = false,
    leftIcon,
    rightIcon,
    children,
    ...props 
  }, ref) => {
    const badgeClasses = getBadgeClasses(variant, colorScheme, size, rounded)
    
    return (
      <span
        className={cn(badgeClasses, className)}
        ref={ref}
        {...props}
      >
        {leftIcon && (
          <span className="mr-1 flex items-center">
            {React.cloneElement(leftIcon, { 
              className: cn('h-3 w-3', leftIcon.props?.className)
            })}
          </span>
        )}
        {children}
        {rightIcon && (
          <span className="ml-1 flex items-center">
            {React.cloneElement(rightIcon, { 
              className: cn('h-3 w-3', rightIcon.props?.className)
            })}
          </span>
        )}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

// Notification Badge component for showing counts
export interface NotificationBadgeProps extends Omit<BadgeProps, 'children'> {
  count?: number
  max?: number
  showZero?: boolean
  dot?: boolean
}

const NotificationBadge = React.forwardRef<HTMLSpanElement, NotificationBadgeProps>(
  ({ 
    count = 0,
    max = 99,
    showZero = false,
    dot = false,
    colorScheme = 'error',
    size = 'xs',
    ...props 
  }, ref) => {
    if (!showZero && count === 0) {
      return null
    }
    
    if (dot) {
      return (
        <Badge
          {...props}
          colorScheme={colorScheme}
          size={size}
          rounded
          className={cn('h-2 w-2 p-0 min-w-0', props.className)}
          ref={ref}
        />
      )
    }
    
    const displayCount = count > max ? `${max}+` : count.toString()
    
    return (
      <Badge
        {...props}
        colorScheme={colorScheme}
        size={size}
        rounded
        ref={ref}
      >
        {displayCount}
      </Badge>
    )
  }
)

NotificationBadge.displayName = 'NotificationBadge'

export { Badge, NotificationBadge }
