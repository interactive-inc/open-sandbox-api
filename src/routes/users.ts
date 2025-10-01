import { PrismaD1 } from "@prisma/adapter-d1"
import { factory } from "@/factory"
import { PrismaClient } from "@/generated/prisma"

export const GET = factory.createHandlers(async (c) => {
  const adapter = new PrismaD1(c.env.MY_DB)

  const prisma = new PrismaClient({ adapter })

  const users = await prisma.user.findMany()

  return c.json(users)
})

export const POST = factory.createHandlers(async (c) => {
  const adapter = new PrismaD1(c.env.MY_DB)

  const prisma = new PrismaClient({ adapter })

  const userId = crypto.randomUUID()

  const user = await prisma.user.create({
    data: {
      id: userId,
      name: "takata",
      email: "takata@inta.co.jp",
    },
  })

  return c.json(user)
})
