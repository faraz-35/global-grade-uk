# GlobalGrad Project Conventions

## Code Style & Architecture

### General Principles
- **Clean Code**: Write readable, self-documenting code
- **DRY**: Don't Repeat Yourself - abstract common functionality
- **SOLID**: Follow SOLID principles for maintainable code
- **TypeScript**: Use TypeScript for type safety and better developer experience

### Component Structure
- **Functional Components**: Use functional components with hooks
- **File Naming**: Use PascalCase for component files (e.g., `HeroSection.tsx`)
- **Folder Structure**: Organize components by feature/domain
- **Props Interface**: Define clear TypeScript interfaces for component props

### Styling Conventions
- BG should be white(sober design, navy blue primary color),
- **CSS Modules**: Use CSS Modules for component-scoped styles
- **Tailwind CSS**: Use Tailwind for utility-first styling
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Consistent Spacing**: Use consistent spacing scale (4px base)

### Package Management
- **PNPM**: Use PNPM for package management instead of npm
- **Lock File**: Commit `pnpm-lock.yaml` to ensure consistent dependencies
- **Installation**: Run `pnpm install` to install dependencies
- **Scripts**: Use PNPM scripts defined in package.json

### Dependencies & Libraries
- **Next.js 15**: React framework for production
- **React 19**: UI library with modern features
- **TypeScript**: Type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent UI elements

### Performance Best Practices
- **Image Optimization**: Use Next.js Image component for optimized images
- **Code Splitting**: Implement dynamic imports for large components
- **Bundle Analysis**: Monitor bundle size regularly
- **Lazy Loading**: Implement lazy loading for non-critical components

### Accessibility
- **Semantic HTML**: Use appropriate HTML5 semantic elements
- **ARIA Labels**: Include proper ARIA labels for screen readers
- **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible
- **Color Contrast**: Maintain WCAG AA color contrast ratios

### State Management
- **Local State**: Use useState for component-level state
- **Context API**: Use React Context for global state
- **Server State**: Consider React Query/TanStack Query for server state
- **Form Management**: Use React Hook Form for form handling

### Testing Strategy
- **Unit Tests**: Write unit tests for utility functions and complex logic
- **Component Tests**: Test components with React Testing Library
- **E2E Tests**: Implement end-to-end tests for critical user flows
- **Coverage**: Aim for 80%+ test coverage

### Git Workflow
- **Feature Branches**: Create feature branches from main
- **Commit Messages**: Use conventional commit format
- **Pull Requests**: Use PR templates for code reviews
- **Code Reviews**: Require at least one approval before merging

### Development Environment
- **ESLint**: Use ESLint for code linting
- **Prettier**: Use Prettier for code formatting
- **Husky**: Use Git hooks for pre-commit checks
- **VS Code**: Recommended extensions for TypeScript and React

### Deployment
- **Vercel**: Deploy on Vercel for Next.js applications
- **Environment Variables**: Use .env files for environment configuration
- **CI/CD**: Automate testing and deployment
- **Monitoring**: Set up error monitoring and analytics

### Documentation
- **README**: Keep project README updated with setup instructions
- **Code Comments**: Add meaningful comments for complex logic
- **API Docs**: Document API endpoints and data structures
- **Component Docs**: Document component props and usage
