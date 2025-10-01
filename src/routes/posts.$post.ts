import { zValidator } from "@hono/zod-validator"
import { z } from "zod"
import { factory } from "@/factory"

export const GET = factory.createHandlers(
  zValidator(
    "param",
    z.object({
      post: z.string().min(1),
    }),
  ),
  (c) => {
    const params = c.req.valid("param")

    return c.json({ id: params.post })
  },
)
