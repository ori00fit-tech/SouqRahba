# Souq MaZellige Marketplace Blueprint

Production-oriented marketplace monorepo for Cloudflare + GitHub.

## Stack
- React + Vite apps
- Cloudflare Workers API
- D1, R2, KV, Queues
- Hono + Zod
- pnpm workspaces + Turbo

## Apps
- `apps/storefront` customer-facing app
- `apps/seller-portal` seller dashboard
- `apps/admin` admin console

## Workers
- `workers/api` API gateway
- `workers/webhooks` provider webhooks
- `workers/media` signed upload endpoints
- `workers/cron` scheduled jobs

## Packages
- `packages/contracts` shared API schemas
- `packages/domain` domain services and types
- `packages/sdk` typed client
- `packages/ui` shared UI pieces
- `packages/utils` common helpers
- `packages/config` shared tsconfig / eslint presets

## Infra
- `infra/d1/migrations` SQL migrations
- `infra/docs` architecture notes

## First commands
```bash
pnpm install
pnpm build
pnpm dev:storefront
```

## Cloudflare deployment notes
Create the following before production deployment:
- D1 databases
- R2 buckets
- KV namespaces
- Queue bindings
- Secrets for payment, email, and webhook providers

## Important
This blueprint is intentionally clean and extensible. It is not wired to real providers yet.
