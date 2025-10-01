import { factory } from "@/factory"

export const GET = factory.createHandlers(async (c) => {
  return c.json({ msg: "ok" })
})
