import { Hono } from "hono";

const app = new Hono();

app.get("/api", async (c) => {
  return c.json({ message: "Hello, API" }, 200);
});

export default app;
