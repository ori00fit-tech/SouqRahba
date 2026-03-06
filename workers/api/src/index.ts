import { Hono } from "hono";
const app = new Hono();
app.get("/health", (c) => c.json({ ok: true, service: "api" }));
app.get("/v1/catalog/products", (c) => c.json({ items: [], pagination: { page: 1, pageSize: 20, total: 0 } }));
app.post("/v1/sellers/onboarding/submit", async (c) => {
  const payload = await c.req.json().catch(() => ({}));
  return c.json({ ok: true, nextState: "under_review", payload });
});
export default app;
