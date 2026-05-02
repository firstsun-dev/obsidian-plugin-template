# Obsidian Plugin Template

A standardized template for creating Obsidian plugins within the `firstsun-dev` organization.

## Features

- **Shared CI/CD**: Uses `firstsun-dev/.github` shared workflows for linting, testing, and automatic releases via semantic-release.
- **TypeScript Support**: Pre-configured TypeScript environment.
- **Build System**: Includes `esbuild` for fast builds.
- **Linting & Testing**: Pre-configured ESLint and Vitest.

## Getting Started

1. Click **"Use this template"** to create a new repository.
2. Update `manifest.json` with your plugin's ID, name, and description.
3. Update `package.json` name and description.
4. In `.github/workflows/ci.yml`, update the `plugin-id` input.
5. Install dependencies: `npm install`
6. Start development: `npm run dev`

## Scripts

- `npm run dev`: Build and watch for changes.
- `npm run build`: Production build.
- `npm run test`: Run tests.
- `npm run lint`: Lint code.
- `npm run version`: Bump version (used by CI).
