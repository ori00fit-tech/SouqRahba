# Architecture Summary

## Main principles
- Monorepo
- API-first
- Domain-oriented boundaries
- Event-driven for notifications, indexing, and webhooks
- Multi-vendor from day one

## Core domains
- identity
- sellers
- catalog
- inventory
- pricing
- cart
- checkout
- orders
- payments
- shipping
- reviews
- notifications
- support
- analytics

## Next implementation steps
1. Add auth provider and session model.
2. Wire D1 queries in `workers/api`.
3. Add signed upload flow using R2.
4. Implement seller onboarding state machine.
5. Build catalog moderation in admin.
6. Add checkout pipeline and payment webhooks.
