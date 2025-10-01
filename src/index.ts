import { cors } from "hono/cors"
import { factory } from "@/factory"
import * as index from "@/routes/index"
import * as posts from "@/routes/posts"
import * as post from "@/routes/posts.$post"
import * as users from "@/routes/users"

const app = factory.createApp()

app.use("*", cors())

app
  .get("/", ...index.GET)
  .get("/posts", ...posts.GET)
  .get("/posts/:post", ...post.GET)
  .get("/users", ...users.GET)
  .post("/users", ...users.POST)

export default app
