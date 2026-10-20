# Obsidian Plugin Template

A standardized template for creating Obsidian plugins within the `firstsun-dev` organization.

## Features

- **Shared CI/CD**: Uses `firstsun-dev/.github` shared workflows for linting, testing, and automatic releases via semantic-release.
- **TypeScript Support**: Pre-configured TypeScript environment.
- **Build System**: Includes `esbuild` for fast builds (its install script is allowed via `allowBuilds` in `pnpm-workspace.yaml`).
- **Linting & Testing**: Pre-configured ESLint and Vitest.

## Getting Started

1. Click **"Use this template"** to create a new repository.
2. Update `manifest.json` with your plugin's ID, name, and description.
3. Update `package.json` name and description.
4. In `.github/workflows/ci.yml`, update the `plugin-id` input.
5. Use Node.js 24 and pnpm 12.14.0 (pinned via `packageManager`; run `corepack enable` or use `pnpm/action-setup`).
6. Install dependencies: `pnpm install` (commit the generated `pnpm-lock.yaml`; CI uses `--frozen-lockfile`)
7. Start development: `pnpm run dev`

## Scripts

- `pnpm run dev`: Build and watch for changes.
- `pnpm run build`: Production build.
- `pnpm run test`: Run tests.
- `pnpm run lint`: Lint code.
- `pnpm run version`: Bump version (used by CI; the script reads `npm_package_version`, which pnpm also sets).
