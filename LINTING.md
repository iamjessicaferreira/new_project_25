# Code Quality & Linting Setup

This project uses a comprehensive set of tools to ensure code quality, consistency, and maintainability.

## 🛠️ Tools Used

### 1. **ESLint** - JavaScript/TypeScript Linting

- **Configuration**: `.eslintrc.json`
- **Purpose**: Catches bugs, enforces coding standards, and ensures code quality
- **Features**:
  - TypeScript support with strict rules
  - React-specific rules and hooks validation
  - Accessibility (a11y) rules
  - Import organization and validation
  - Code style enforcement

### 2. **Biome** - Fast Linter & Formatter

- **Configuration**: `biome.json`
- **Purpose**: Ultra-fast linting and formatting
- **Features**:
  - Organizes imports automatically
  - Formats code consistently
  - Catches common mistakes
  - Works with TypeScript, JavaScript, JSON, and CSS

### 3. **Prettier** - Code Formatter

- **Configuration**: `.prettierrc`
- **Purpose**: Ensures consistent code formatting
- **Features**:
  - Automatic code formatting
  - Consistent quotes, semicolons, and spacing
  - Works with multiple file types

### 4. **TypeScript** - Type Checking

- **Configuration**: `tsconfig.json`
- **Purpose**: Static type checking and IntelliSense
- **Features**:
  - Strict type checking enabled
  - Modern ES2022 target
  - Comprehensive type safety rules

### 5. **Husky** - Git Hooks

- **Configuration**: `.husky/pre-commit`
- **Purpose**: Runs checks before commits
- **Features**:
  - Pre-commit linting and formatting
  - Type checking on commit
  - Ensures code quality before pushing

### 6. **lint-staged** - Staged File Processing

- **Configuration**: `package.json` (lint-staged section)
- **Purpose**: Only processes staged files
- **Features**:
  - Faster than processing all files
  - Runs ESLint, Prettier, and Biome
  - Automatic fixes where possible

## 📋 Available Scripts

```bash
# Linting
npm run lint              # Run ESLint
npm run lint:fix          # Run ESLint with auto-fix

# Formatting
npm run format            # Format all files with Prettier
npm run format:check      # Check formatting without changing files

# Type Checking
npm run type-check        # Run TypeScript type checking

# Biome
npm run biome:check       # Run Biome checks
npm run biome:format      # Format with Biome
npm run biome:lint        # Lint with Biome

# Build & Development
npm run dev               # Start development server
npm run build             # Build for production
```

## 🔧 Configuration Details

### ESLint Rules

- **TypeScript**: Strict type checking, no unused variables, no explicit any
- **React**: Hooks rules, JSX best practices, accessibility
- **Import**: Organized imports with alphabetical sorting
- **General**: Code style, best practices, error prevention

### Biome Rules

- **Correctness**: Catches bugs and logical errors
- **Suspicious**: Warns about potentially problematic code
- **Style**: Enforces consistent code style
- **Complexity**: Simplifies complex expressions

### TypeScript Configuration

- **Strict Mode**: All strict checks enabled
- **Modern Target**: ES2022 for modern features
- **Path Mapping**: `@/*` maps to `./src/*`
- **Type Safety**: Comprehensive type checking

## 🚀 Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Set up Git hooks** (automatic with `npm install`):

   ```bash
   npm run prepare
   ```

3. **Run initial checks**:
   ```bash
   npm run lint
   npm run format
   npm run type-check
   ```

## 🔄 Workflow

### Development

1. Write code
2. Save file (auto-formatting in editor)
3. Commit changes (pre-commit hooks run automatically)

### Pre-commit Process

1. **lint-staged** runs on staged files:
   - ESLint with auto-fix
   - Prettier formatting
   - Biome checks and formatting
2. **TypeScript** type checking
3. If all checks pass, commit proceeds

### Manual Checks

```bash
# Check everything before pushing
npm run lint
npm run format:check
npm run type-check
npm run biome:check
```

## 🎯 Best Practices

### Code Style

- Use double quotes for strings
- Always use semicolons
- 2-space indentation
- 100 character line limit
- Trailing commas in multiline structures

### TypeScript

- Avoid `any` type (use `unknown` or proper types)
- Use strict null checks
- Prefer const over let
- Use optional chaining (`?.`) and nullish coalescing (`??`)

### React

- Use functional components with hooks
- Follow hooks rules (only call at top level)
- Use proper prop types
- Implement accessibility features

### Imports

- Group imports: built-in → external → internal → relative
- Alphabetical order within groups
- Use absolute imports with `@/` prefix

## 🔍 Troubleshooting

### Common Issues

1. **ESLint errors**:

   ```bash
   npm run lint:fix
   ```

2. **Formatting issues**:

   ```bash
   npm run format
   ```

3. **Type errors**:

   ```bash
   npm run type-check
   ```

4. **Pre-commit hook fails**:
   - Fix the issues mentioned in the error
   - Re-stage files: `git add .`
   - Try committing again

### Editor Setup

#### VS Code

Install these extensions:

- ESLint
- Prettier
- TypeScript and JavaScript Language Features

Add to `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  }
}
```

#### Other Editors

- Configure your editor to use Prettier for formatting
- Enable ESLint integration
- Set up TypeScript support

## 📚 Additional Resources

- [ESLint Documentation](https://eslint.org/)
- [Biome Documentation](https://biomejs.dev/)
- [Prettier Documentation](https://prettier.io/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Best Practices](https://react.dev/learn)
