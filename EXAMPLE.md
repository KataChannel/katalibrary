# KATA UI Library Example

This example demonstrates how to use the KATA UI Library in a Next.js project.

## Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **View the demo:**
Open [http://localhost:3000](http://localhost:3000) to see the component showcase.

## Features Showcased

- ✅ All KATA UI components (Button, Input, Card, Typography, Avatar, Badge)
- ✅ Color system demonstration (mono and colorful palettes)
- ✅ Responsive design with Tailwind CSS 4
- ✅ TypeScript integration
- ✅ Proper component composition
- ✅ Best practices for accessibility

## Usage Examples

### Basic Components
```tsx
import { Button, Card, Input } from '@kata/ui-library'

export default function MyComponent() {
  return (
    <Card padding="lg">
      <Input label="Email" placeholder="Enter your email..." />
      <Button colorScheme="primary">Submit</Button>
    </Card>
  )
}
```

### Advanced Patterns
```tsx
import { 
  Card, CardHeader, CardBody, CardFooter,
  Typography, Button, Avatar, Badge 
} from '@kata/ui-library'

export default function UserProfile() {
  return (
    <Card variant="elevated" padding="lg">
      <CardHeader divider>
        <div className="flex items-center gap-4">
          <Avatar src="/user.jpg" size="lg" />
          <div>
            <Typography variant="h3">John Doe</Typography>
            <Badge colorScheme="success" size="sm">Active</Badge>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <Typography variant="body1">
          Software developer passionate about creating beautiful user interfaces.
        </Typography>
      </CardBody>
      <CardFooter>
        <Button variant="outline" size="sm">
          Edit Profile
        </Button>
      </CardFooter>
    </Card>
  )
}
```

## Customization

### Tailwind CSS Configuration
```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@kata/ui-library/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        kata: {
          // Override default KATA colors
          primary: {
            500: '#your-brand-color',
          },
        },
      },
    },
  },
}

export default config
```

### CSS Variables Override
```css
/* globals.css */
@import '@kata/ui-library/dist/styles.css';

:root {
  --kata-primary: 59 130 246; /* RGB values */
  --kata-radius-md: 8px;
  --kata-space-md: 1.5rem;
}
```

## Build for Production

```bash
npm run build
npm start
```

## Learn More

- [KATA UI Documentation](https://kata-ui.com/docs)
- [Component API Reference](https://kata-ui.com/docs/api)
- [Design System Guide](https://kata-ui.com/docs/design-system)
- [Migration Guide](https://kata-ui.com/docs/migration)
