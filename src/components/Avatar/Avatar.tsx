import * as React from 'react'
import { cn } from '../../lib/utils'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  name?: string
  colorScheme?: 'mono' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  shape?: 'circle' | 'square' | 'rounded'
}

const getAvatarClasses = (size: string, colorScheme: string, shape: string): string => {
  const baseClasses = 'kata-avatar inline-flex items-center justify-center font-medium text-white overflow-hidden'
  
  // Size classes
  const sizeClasses = {
    xs: 'h-6 w-6 text-xs',
    sm: 'h-8 w-8 text-sm',
    md: 'h-10 w-10 text-sm',
    lg: 'h-12 w-12 text-base',
    xl: 'h-16 w-16 text-lg',
    '2xl': 'h-20 w-20 text-xl',
  }
  
  // Shape classes
  const shapeClasses = {
    circle: 'rounded-full',
    square: 'rounded-none',
    rounded: 'rounded-lg',
  }
  
  // Color scheme classes
  const colorSchemeClasses = {
    mono: 'bg-kata-mono-600',
    primary: 'bg-kata-primary-600',
    secondary: 'bg-kata-secondary-600',
    success: 'bg-kata-success-600',
    warning: 'bg-kata-warning-500',
    error: 'bg-kata-error-600',
  }
  
  return cn(
    baseClasses,
    sizeClasses[size as keyof typeof sizeClasses],
    shapeClasses[shape as keyof typeof shapeClasses],
    colorSchemeClasses[colorScheme as keyof typeof colorSchemeClasses]
  )
}

const getInitials = (name: string): string => {
  const names = name.trim().split(' ')
  if (names.length === 1) {
    return names[0].charAt(0).toUpperCase()
  }
  return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase()
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ 
    className, 
    src,
    alt,
    size = 'md', 
    name = '',
    colorScheme = 'primary',
    shape = 'circle',
    ...props 
  }, ref) => {
    const [imageError, setImageError] = React.useState(false)
    const avatarClasses = getAvatarClasses(size, colorScheme, shape)
    
    const handleImageError = () => {
      setImageError(true)
    }
    
    const showImage = src && !imageError
    const showInitials = name && !showImage
    const initials = showInitials ? getInitials(name) : ''
    
    return (
      <div
        className={cn(avatarClasses, className)}
        ref={ref}
        {...props}
      >
        {showImage ? (
          <img
            src={src}
            alt={alt || name}
            className="h-full w-full object-cover"
            onError={handleImageError}
          />
        ) : showInitials ? (
          <span className="font-medium select-none">
            {initials}
          </span>
        ) : (
          <svg
            className="h-full w-full text-kata-mono-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
      </div>
    )
  }
)

Avatar.displayName = 'Avatar'

// Avatar Group component for showing multiple avatars
export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number
  spacing?: 'tight' | 'normal' | 'loose'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ 
    className,
    children,
    max = 5,
    spacing = 'normal',
    size = 'md',
    ...props 
  }, ref) => {
    const spacingClasses = {
      tight: '-space-x-1',
      normal: '-space-x-2',
      loose: '-space-x-3',
    }
    
    const childrenArray = React.Children.toArray(children)
    const visibleChildren = childrenArray.slice(0, max)
    const remainingCount = childrenArray.length - max
    
    return (
      <div
        className={cn(
          'kata-avatar-group flex items-center',
          spacingClasses[spacing],
          className
        )}
        ref={ref}
        {...props}
      >
        {visibleChildren.map((child, index) => (
          <div key={index} className="relative ring-2 ring-white">
            {React.isValidElement(child) 
              ? React.cloneElement(child, { size } as any)
              : child
            }
          </div>
        ))}
        {remainingCount > 0 && (
          <div className="relative ring-2 ring-white">
            <Avatar
              size={size}
              name={`+${remainingCount}`}
              colorScheme="mono"
            />
          </div>
        )}
      </div>
    )
  }
)

AvatarGroup.displayName = 'AvatarGroup'

export { Avatar, AvatarGroup }
