'use client'

import { Button } from '../src/components/Button/Button'
import { Input } from '../src/components/Input/Input'
import { Card, CardHeader, CardBody, CardFooter } from '../src/components/Card/Card'
import { Typography, Heading1, Heading2, Heading3, Body1, Body2 } from '../src/components/Typography/Typography'
import { Avatar, AvatarGroup } from '../src/components/Avatar/Avatar'
import { Badge, NotificationBadge } from '../src/components/Badge/Badge'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-kata-mono-50 to-kata-primary-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <Heading1 className="bg-gradient-to-r from-kata-primary-600 to-kata-secondary-600 bg-clip-text text-transparent">
            KATA UI Library
          </Heading1>
          <Body1 color="mono" className="max-w-2xl mx-auto">
            A modern React component library with mono and colorful design system, 
            built with Next.js 15 and Tailwind CSS 4. Create beautiful, accessible interfaces with ease.
          </Body1>
        </div>

        {/* Color Palette Demo */}
        <Card className="p-6">
          <CardHeader>
            <Heading2 color="mono">Color Palette</Heading2>
            <Body2 color="mono">Mono and colorful design system</Body2>
          </CardHeader>
          <CardBody className="space-y-6">
            {/* Mono Colors */}
            <div>
              <Heading3 className="mb-3">Mono Palette</Heading3>
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 10 }, (_, i) => {
                  const shade = i === 9 ? '950' : `${(i + 1) * 100}`
                  return (
                    <div key={shade} className="text-center">
                      <div 
                        className={`w-12 h-12 rounded-lg shadow-kata-sm bg-kata-mono-${shade}`}
                      />
                      <Body2 className="mt-1 text-xs">{shade}</Body2>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Colorful Palettes */}
            {['primary', 'secondary', 'success', 'warning', 'error'].map((color) => (
              <div key={color}>
                <Heading3 className="mb-3 capitalize">{color} Palette</Heading3>
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 10 }, (_, i) => {
                    const shade = i === 9 ? '950' : `${(i + 1) * 100}`
                    return (
                      <div key={shade} className="text-center">
                        <div 
                          className={`w-12 h-12 rounded-lg shadow-kata-sm bg-kata-${color}-${shade}`}
                        />
                        <Body2 className="mt-1 text-xs">{shade}</Body2>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </CardBody>
        </Card>

        {/* Buttons Demo */}
        <Card className="p-6">
          <CardHeader>
            <Heading2 color="mono">Buttons</Heading2>
            <Body2 color="mono">Various button styles and colors</Body2>
          </CardHeader>
          <CardBody className="space-y-6">
            {/* Variants */}
            {['solid', 'outline', 'ghost', 'link'].map((variant) => (
              <div key={variant} className="space-y-3">
                <Heading3 className="capitalize">{variant} Buttons</Heading3>
                <div className="flex flex-wrap gap-4">
                  {['mono', 'primary', 'secondary', 'success', 'warning', 'error'].map((colorScheme) => (
                    <Button 
                      key={colorScheme}
                      variant={variant as any}
                      colorScheme={colorScheme as any}
                    >
                      {colorScheme}
                    </Button>
                  ))}
                </div>
              </div>
            ))}

            {/* Sizes */}
            <div className="space-y-3">
              <Heading3>Button Sizes</Heading3>
              <div className="flex items-center gap-4">
                {['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
                  <Button 
                    key={size}
                    size={size as any}
                    colorScheme="primary"
                  >
                    {size.toUpperCase()}
                  </Button>
                ))}
              </div>
            </div>

            {/* Loading States */}
            <div className="space-y-3">
              <Heading3>Loading States</Heading3>
              <div className="flex gap-4">
                <Button loading>Loading</Button>
                <Button loading colorScheme="secondary">Processing</Button>
                <Button loading variant="outline">Saving</Button>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Inputs Demo */}
        <Card className="p-6">
          <CardHeader>
            <Heading2 color="mono">Inputs</Heading2>
            <Body2 color="mono">Form inputs with different styles</Body2>
          </CardHeader>
          <CardBody className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input 
                label="Default Input"
                placeholder="Enter some text..."
                helperText="This is a help text"
              />
              <Input 
                label="Error State"
                placeholder="Enter some text..."
                error
                helperText="This field is required"
              />
              <Input 
                label="Filled Variant"
                variant="filled"
                placeholder="Enter some text..."
              />
              <Input 
                label="Flushed Variant"
                variant="flushed"
                placeholder="Enter some text..."
              />
            </div>
          </CardBody>
        </Card>

        {/* Typography Demo */}
        <Card className="p-6">
          <CardHeader>
            <Heading2 color="mono">Typography</Heading2>
            <Body2 color="mono">Text elements with consistent styling</Body2>
          </CardHeader>
          <CardBody className="space-y-4">
            <Heading1>Heading 1 - Main Title</Heading1>
            <Heading2>Heading 2 - Section Title</Heading2>
            <Heading3>Heading 3 - Subsection</Heading3>
            <Body1>
              Body 1 - This is the main body text that is used for most content. 
              It has good readability and appropriate line height for comfortable reading.
            </Body1>
            <Body2>
              Body 2 - This is smaller body text, often used for secondary information,
              captions, or when you need slightly smaller text while maintaining readability.
            </Body2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <Typography variant="h4" color="primary">Primary Color</Typography>
              <Typography variant="h4" color="secondary">Secondary Color</Typography>
              <Typography variant="h4" color="success">Success Color</Typography>
            </div>
          </CardBody>
        </Card>

        {/* Avatars Demo */}
        <Card className="p-6">
          <CardHeader>
            <Heading2 color="mono">Avatars</Heading2>
            <Body2 color="mono">User profile pictures and placeholders</Body2>
          </CardHeader>
          <CardBody className="space-y-6">
            <div className="space-y-3">
              <Heading3>Sizes</Heading3>
              <div className="flex items-center gap-4">
                {['xs', 'sm', 'md', 'lg', 'xl', '2xl'].map((size) => (
                  <Avatar 
                    key={size}
                    size={size as any}
                    name={`User ${size}`}
                    colorScheme="primary"
                  />
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Heading3>Color Schemes</Heading3>
              <div className="flex gap-4">
                {['mono', 'primary', 'secondary', 'success', 'warning', 'error'].map((colorScheme) => (
                  <Avatar 
                    key={colorScheme}
                    name={`User ${colorScheme}`}
                    colorScheme={colorScheme as any}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Heading3>Avatar Group</Heading3>
              <AvatarGroup max={4}>
                <Avatar name="John Doe" colorScheme="primary" />
                <Avatar name="Jane Smith" colorScheme="secondary" />
                <Avatar name="Bob Johnson" colorScheme="success" />
                <Avatar name="Alice Brown" colorScheme="warning" />
                <Avatar name="Charlie Wilson" colorScheme="error" />
                <Avatar name="Diana Davis" colorScheme="mono" />
              </AvatarGroup>
            </div>
          </CardBody>
        </Card>

        {/* Badges Demo */}
        <Card className="p-6">
          <CardHeader>
            <Heading2 color="mono">Badges</Heading2>
            <Body2 color="mono">Labels and status indicators</Body2>
          </CardHeader>
          <CardBody className="space-y-6">
            <div className="space-y-3">
              <Heading3>Variants</Heading3>
              <div className="flex flex-wrap gap-4">
                {['solid', 'outline', 'subtle'].map((variant) => (
                  <div key={variant} className="flex gap-2">
                    {['mono', 'primary', 'secondary', 'success', 'warning', 'error'].map((colorScheme) => (
                      <Badge 
                        key={`${variant}-${colorScheme}`}
                        variant={variant as any}
                        colorScheme={colorScheme as any}
                      >
                        {colorScheme}
                      </Badge>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Heading3>Sizes</Heading3>
              <div className="flex items-center gap-4">
                {['xs', 'sm', 'md', 'lg'].map((size) => (
                  <Badge 
                    key={size}
                    size={size as any}
                    colorScheme="primary"
                  >
                    {size.toUpperCase()}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Heading3>Notification Badges</Heading3>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Button>Messages</Button>
                  <NotificationBadge count={5} className="absolute -top-2 -right-2" />
                </div>
                <div className="relative">
                  <Button>Notifications</Button>
                  <NotificationBadge count={99} className="absolute -top-2 -right-2" />
                </div>
                <div className="relative">
                  <Button>Updates</Button>
                  <NotificationBadge dot className="absolute -top-1 -right-1" />
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Cards Demo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="elevated" padding="lg">
            <CardHeader divider>
              <Heading3>Elevated Card</Heading3>
            </CardHeader>
            <CardBody>
              <Body2>
                This card has an elevated appearance with a subtle shadow effect.
                Perfect for highlighting important content.
              </Body2>
            </CardBody>
            <CardFooter divider>
              <Button size="sm">Learn More</Button>
            </CardFooter>
          </Card>

          <Card variant="outlined" colorScheme="primary" padding="lg">
            <CardHeader divider>
              <Heading3>Outlined Card</Heading3>
            </CardHeader>
            <CardBody>
              <Body2>
                This card uses a border style with primary color scheme.
                Great for organizing content sections.
              </Body2>
            </CardBody>
            <CardFooter divider>
              <Button variant="outline" size="sm">Explore</Button>
            </CardFooter>
          </Card>

          <Card variant="filled" colorScheme="success" padding="lg">
            <CardHeader divider>
              <Heading3>Filled Card</Heading3>
            </CardHeader>
            <CardBody>
              <Body2>
                This card has a filled background with success color scheme.
                Ideal for status or achievement displays.
              </Body2>
            </CardBody>
            <CardFooter divider>
              <Button colorScheme="success" size="sm">Continue</Button>
            </CardFooter>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center py-8">
          <Body2 color="mono">
            KATA UI Library - Built with ❤️ using Next.js 15 & Tailwind CSS 4
          </Body2>
        </div>
      </div>
    </main>
  )
}
