import { Hono } from "hono";
const app = new Hono();
app.post("/sign-upload", async (c) => {
  const body = await c.req.json().catch(() => ({}));
  return c.json({ ok: true, uploadKey: `uploads/${Date.now()}`, body });
});
export default app;
