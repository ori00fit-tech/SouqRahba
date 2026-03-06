import { Hono } from "hono";
const app = new Hono();
app.post("/providers/payment", async (c) => {
  const raw = await c.req.text();
  return c.json({ ok: true, received: raw.length, service: "webhooks" });
});
export default app;
