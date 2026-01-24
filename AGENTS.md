# AGENTS.md - Development Guidelines for V-Master Project

This document provides comprehensive guidelines for agentic coding assistants working on the V-Master project, a Next.js application for a cell phone and laptop repair service.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Development Commands](#development-commands)
4. [Code Style Guidelines](#code-style-guidelines)
5. [Component Architecture](#component-architecture)
6. [Styling Guidelines](#styling-guidelines)
7. [TypeScript Guidelines](#typescript-guidelines)
8. [Import and File Organization](#import-and-file-organization)
9. [Error Handling](#error-handling)
10. [Testing Guidelines](#testing-guidelines)
11. [Git Workflow](#git-workflow)

## Project Overview

V-Master is a Next.js 16 application built for a cell phone and laptop repair service. The application features a landing page with sections for services, about, contact, and WhatsApp integration.

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with PostCSS
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **State Management**: React hooks (useState, useEffect)
- **Forms**: React Hook Form with Zod validation
- **Theming**: CSS variables with dark mode support
- **Build Tool**: Next.js built-in bundler

## Development Commands

### Core Commands
```bash
# Development server
npm run dev
# or
pnpm dev

# Production build
npm run build
# or
pnpm build

# Start production server
npm run start
# or
pnpm start

# Linting (if ESLint is configured)
npm run lint
# or
pnpm lint
```

### Testing Commands
*Note: No test framework is currently configured. When implementing tests:*

```bash
# Install testing framework (recommended: Jest + React Testing Library)
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom

# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run a single test file
npm test -- path/to/component.test.tsx

# Run tests with coverage
npm test -- --coverage
```

### Type Checking
```bash
# TypeScript compilation check
npx tsc --noEmit

# Next.js type checking
npm run build  # Includes TypeScript checking
```

## Code Style Guidelines

### General Principles
- Use TypeScript for all new code
- Prefer functional components over class components
- Use hooks for state management
- Follow React best practices and performance optimizations
- Write self-documenting code with clear variable names
- Keep functions small and focused on single responsibilities

### Naming Conventions
- **Components**: PascalCase (e.g., `HeroSection`, `ContactForm`)
- **Files**: kebab-case for components (e.g., `hero-section.tsx`)
- **Variables/Functions**: camelCase (e.g., `handleSubmit`, `isLoading`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `WHATSAPP_LINK`)
- **Types/Interfaces**: PascalCase (e.g., `ButtonProps`, `UserData`)
- **Custom Hooks**: camelCase with `use` prefix (e.g., `useMobile`, `useToast`)

### File Structure
```
app/                    # Next.js app directory
  layout.tsx           # Root layout
  page.tsx            # Home page
  globals.css         # Global styles

components/           # React components
  ui/                # Reusable UI components (shadcn/ui)
  hero-section.tsx   # Page sections
  header.tsx
  footer.tsx

lib/                 # Utility functions
  utils.ts           # cn() function for class merging

hooks/               # Custom React hooks
  use-mobile.ts
  use-toast.ts
```

## Component Architecture

### Component Patterns
- Use functional components with arrow functions
- Destructure props at component level
- Use TypeScript interfaces for props
- Export components as named exports
- Use data attributes for component identification (`data-slot`)

### Example Component Structure
```tsx
"use client"  // Add only if client-side features are needed

import { ComponentIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ComponentProps {
  title: string
  description?: string
  onAction?: () => void
}

export function ComponentName({ title, description, onAction }: ComponentProps) {
  return (
    <section className="component-classes">
      <h2 className="heading-classes">{title}</h2>
      {description && <p className="description-classes">{description}</p>}
      <Button onClick={onAction} variant="default">
        <ComponentIcon className="w-4 h-4" />
        Action
      </Button>
    </section>
  )
}
```

### Client vs Server Components
- Use Server Components by default
- Add `"use client"` directive only when needed:
  - Event handlers
  - useState/useEffect hooks
  - Browser APIs
  - Third-party libraries requiring client-side execution

## Styling Guidelines

### Tailwind CSS Patterns
- Use utility-first approach
- Follow mobile-first responsive design (`sm:`, `md:`, `lg:`, `xl:`)
- Use CSS variables for theming (defined in `globals.css`)
- Combine utilities with `cn()` function for conditional classes
- Follow consistent spacing scale (4px increments: `4`, `8`, `12`, `16`, etc.)

### Class Organization
```tsx
// Good: Logical grouping and responsive design
<div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 p-4 md:p-8">

// Good: Conditional classes with cn()
<div className={cn(
  "base-classes",
  variant === "primary" && "primary-classes",
  size === "lg" && "large-classes"
)}>
```

### CSS Variables and Theming
- Use semantic color tokens (`primary`, `secondary`, `muted`, etc.)
- Support both light and dark themes
- Avoid hardcoded colors in components
- Use `focus-visible` for keyboard navigation

## TypeScript Guidelines

### Type Definitions
- Use interfaces for component props
- Use type aliases for complex types
- Prefer `type` over `interface` for unions and primitives
- Use `VariantProps` from class-variance-authority for component variants

### Example Type Patterns
```tsx
// Component props interface
interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

// Utility types
type ComponentVariant = "primary" | "secondary" | "tertiary"

// Generic constraints
interface ApiResponse<T = unknown> {
  data: T
  error?: string
  loading: boolean
}
```

### Type Safety
- Enable strict TypeScript mode
- Avoid `any` type - use `unknown` when type is uncertain
- Use proper type guards for runtime type checking
- Leverage Next.js type definitions for API routes

## Import and File Organization

### Import Order
1. React imports
2. Third-party libraries (alphabetical)
3. Internal imports (absolute paths with `@/`)
4. Type imports (with `type` keyword)

```tsx
import * as React from "react"
import { useState, useEffect } from "react"

import { Component } from "third-party-library"
import { AnotherComponent } from "@radix-ui/react-something"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import type { ComponentProps } from "@/types/component"
```

### Path Aliases
- Use `@/` for root directory imports
- Use `@/components` for component imports
- Use `@/lib` for utility functions
- Use `@/hooks` for custom hooks

### File Extensions
- `.tsx` for React components and files with JSX
- `.ts` for utility functions, types, and configuration
- `.css` for stylesheets
- `.md` for documentation

## Error Handling

### React Error Boundaries
- Implement error boundaries for critical UI sections
- Provide fallback UI for error states
- Log errors appropriately (console in development, monitoring in production)

### API Error Handling
```tsx
// Example error handling pattern
try {
  const response = await fetch("/api/endpoint")
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`)
  }
  const data = await response.json()
  return data
} catch (error) {
  console.error("API request failed:", error)
  // Handle error state in UI
  setError("Failed to load data. Please try again.")
}
```

### Form Validation
- Use React Hook Form with Zod schemas
- Provide clear error messages
- Show validation feedback in real-time
- Handle both client and server validation

## Testing Guidelines

### Testing Framework Setup
When implementing tests, use:
- **Jest** as test runner
- **React Testing Library** for component testing
- **Jest DOM** for DOM assertions
- **User Event** for user interaction testing

### Testing Patterns
```tsx
// Component test example
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "./button"

describe("Button", () => {
  it("renders with correct text", () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument()
  })

  it("calls onClick when clicked", async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()
    render(<Button onClick={handleClick}>Click me</Button>)

    await user.click(screen.getByRole("button", { name: /click me/i }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

### Test Coverage Goals
- Aim for 80%+ code coverage
- Focus on critical user paths and component logic
- Test error states and edge cases
- Use integration tests for complex user flows

## Git Workflow

### Commit Messages
- Use conventional commits format
- Examples:
  - `feat: add contact form component`
  - `fix: resolve mobile layout issue in hero section`
  - `refactor: simplify button component variants`
  - `docs: update component usage examples`

### Branch Naming
- Feature branches: `feature/description-of-feature`
- Bug fixes: `fix/description-of-bug`
- Hotfixes: `hotfix/critical-bug-fix`

### Pull Request Guidelines
- Provide clear description of changes
- Reference related issues
- Include screenshots for UI changes
- Ensure all checks pass (lint, type check, tests)
- Request review from appropriate team members

---

*This document should be updated as the project evolves. Last updated: January 2026*</content>
<parameter name="filePath">/home/rod/projetos/v-master/AGENTS.md