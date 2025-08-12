# KATA UI Library

A modern React component library with mono and colorful design system, built with Next.js 15 and Tailwind CSS 4.

## 🚀 Features

- **Modern Design System**: Mono and colorful palettes with carefully crafted color schemes
- **TypeScript Support**: Fully typed components for better development experience  
- **Tailwind CSS 4**: Built with the latest Tailwind CSS for maximum customization
- **Next.js 15 Ready**: Optimized for the latest Next.js features
- **Accessible**: ARIA compliant components out of the box
- **Tree Shakeable**: Import only what you need
- **Customizable**: Easy to theme and customize for your brand

## 📦 Installation

```bash
npm install @kata/ui-library
# or
yarn add @kata/ui-library
# or  
pnpm add @kata/ui-library
```

## 🎨 Design System

KATA UI features a comprehensive design system with:

### Color Palettes

- **Mono**: Sophisticated grayscale from 50 to 950
- **Primary**: Electric blue variations
- **Secondary**: Vibrant purple tones  
- **Success**: Fresh green shades
- **Warning**: Warm orange/amber colors
- **Error**: Clear red variations

### Typography

- **Font Family**: Inter with fallbacks to system fonts
- **Scale**: From xs (12px) to 6xl (60px)
- **Weights**: Light to Bold (300-700)
- **Mono Support**: JetBrains Mono for code/technical content

## 🛠️ Usage

### Setup

First, import the CSS in your app:

```tsx
// In your _app.tsx or layout.tsx
import '@kata/ui-library/dist/styles.css'
```

### Basic Components

```tsx
import { Button, Card, Input, Typography } from '@kata/ui-library'

function MyApp() {
  return (
    <Card padding="lg">
      <Typography variant="h2" color="primary">
        Welcome to KATA UI
      </Typography>
      
      <Input 
        label="Email"
        placeholder="Enter your email..."
        colorScheme="primary"
      />
      
      <Button 
        colorScheme="primary" 
        size="lg"
        onClick={() => console.log('Clicked!')}
      >
        Get Started
      </Button>
    </Card>
  )
}
```

## 📚 Components

### Button

Versatile button component with multiple variants and colors.

```tsx
<Button variant="solid" colorScheme="primary" size="md">
  Primary Button
</Button>

<Button variant="outline" colorScheme="secondary" loading>
  Loading...
</Button>

<Button variant="ghost" colorScheme="success" leftIcon={<CheckIcon />}>
  Success Action
</Button>
```

**Props:**
- `variant`: `'solid' | 'outline' | 'ghost' | 'link'`
- `colorScheme`: `'mono' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'`
- `size`: `'xs' | 'sm' | 'md' | 'lg' | 'xl'`
- `loading`: boolean
- `leftIcon`, `rightIcon`: React elements

### Input

Form input with validation states and icons.

```tsx
<Input 
  label="Username"
  placeholder="Enter username..."
  variant="outline"
  colorScheme="primary"
  helperText="Must be unique"
/>

<Input 
  label="Password"
  type="password"
  error
  helperText="Password is required"
/>
```

**Props:**
- `variant`: `'outline' | 'filled' | 'flushed'`
- `colorScheme`: `'mono' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'`
- `size`: `'xs' | 'sm' | 'md' | 'lg' | 'xl'`
- `error`: boolean
- `label`, `helperText`: string
- `leftIcon`, `rightIcon`: React elements

### Card

Container component for grouping related content.

```tsx
<Card variant="elevated" padding="lg" colorScheme="primary">
  <CardHeader divider>
    <Typography variant="h3">Card Title</Typography>
  </CardHeader>
  <CardBody>
    <Typography variant="body1">Card content goes here...</Typography>
  </CardBody>
  <CardFooter divider>
    <Button size="sm">Action</Button>
  </CardFooter>
</Card>
```

**Props:**
- `variant`: `'elevated' | 'outlined' | 'filled'`
- `padding`: `'xs' | 'sm' | 'md' | 'lg' | 'xl'`
- `colorScheme`: `'mono' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'`

### Typography

Text components with semantic meaning.

```tsx
<Typography variant="h1" color="primary" align="center">
  Main Heading
</Typography>

<Typography variant="body1" color="mono">
  Body text with good readability.
</Typography>

{/* Convenience components */}
<Heading1>Large Title</Heading1>
<Body1>Paragraph text</Body1>
<Caption>Small text</Caption>
```

**Props:**
- `variant`: `'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'overline'`
- `color`: `'mono' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'`
- `align`: `'left' | 'center' | 'right' | 'justify'`
- `weight`: `'light' | 'normal' | 'medium' | 'semibold' | 'bold'`
- `mono`: boolean (use monospace font)

### Avatar

User profile pictures and placeholders.

```tsx
<Avatar 
  src="/user.jpg"
  alt="User Name"
  size="lg"
  colorScheme="primary"
/>

<Avatar 
  name="John Doe"
  size="md"
  colorScheme="secondary"
/>

<AvatarGroup max={3}>
  <Avatar name="User 1" />
  <Avatar name="User 2" />
  <Avatar name="User 3" />
  <Avatar name="User 4" />
</AvatarGroup>
```

**Props:**
- `size`: `'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'`
- `colorScheme`: `'mono' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'`
- `shape`: `'circle' | 'square' | 'rounded'`
- `src`, `alt`, `name`: string

### Badge

Labels and status indicators.

```tsx
<Badge variant="solid" colorScheme="primary">
  New
</Badge>

<Badge variant="outline" colorScheme="warning" rounded>
  Beta
</Badge>

<NotificationBadge count={5} />
<NotificationBadge dot />
```

**Props:**
- `variant`: `'solid' | 'outline' | 'subtle'`
- `colorScheme`: `'mono' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'`
- `size`: `'xs' | 'sm' | 'md' | 'lg'`
- `rounded`: boolean
- `leftIcon`, `rightIcon`: React elements

## 🎨 Customization

### Tailwind CSS Integration

KATA UI is built on Tailwind CSS 4. You can extend the theme in your `tailwind.config.ts`:

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    // ... your content paths
    './node_modules/@kata/ui-library/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        kata: {
          // Override KATA colors
          primary: {
            500: '#your-custom-color',
          },
        },
      },
    },
  },
}

export default config
```

### CSS Custom Properties

You can also override CSS variables:

```css
:root {
  --kata-primary: your-custom-color;
  --kata-radius-md: 8px;
  --kata-space-md: 1.5rem;
}
```

## 🚀 Development

### Local Development

```bash
# Clone the repository
git clone https://github.com/KataChannel/katalibrary.git
cd katalibrary

# Install dependencies
npm install

# Start development server
npm run dev

# Build the library
npm run build

# Run Storybook
npm run storybook
```

### Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

- 📧 Email: support@kata-ui.com
- 💬 Discord: [KATA Community](https://discord.gg/kata-ui)
- 📚 Documentation: [kata-ui.com/docs](https://kata-ui.com/docs)
- 🐛 Issues: [GitHub Issues](https://github.com/KataChannel/katalibrary/issues)

---

Made with ❤️ by the KATA Team