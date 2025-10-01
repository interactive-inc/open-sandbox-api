import { createFactory } from "hono/factory"
import type { HonoEnv } from "@/types"

export const factory = createFactory<HonoEnv>()
