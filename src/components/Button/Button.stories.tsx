import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'link'],
    },
    colorScheme: {
      control: 'select',
      options: ['mono', 'primary', 'secondary', 'success', 'warning', 'error'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'solid',
    colorScheme: 'primary',
    size: 'md',
  },
}

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

export const ColorSchemes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-4">
        <Button colorScheme="mono">Mono</Button>
        <Button colorScheme="primary">Primary</Button>
        <Button colorScheme="secondary">Secondary</Button>
      </div>
      <div className="flex gap-4">
        <Button colorScheme="success">Success</Button>
        <Button colorScheme="warning">Warning</Button>
        <Button colorScheme="error">Error</Button>
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="xs">XS</Button>
      <Button size="sm">SM</Button>
      <Button size="md">MD</Button>
      <Button size="lg">LG</Button>
      <Button size="xl">XL</Button>
    </div>
  ),
}

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    loading: true,
    colorScheme: 'primary',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
    colorScheme: 'primary',
  },
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button 
        leftIcon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        }
      >
        Add Item
      </Button>
      <Button 
        rightIcon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        }
        variant="outline"
      >
        Next
      </Button>
    </div>
  ),
}
