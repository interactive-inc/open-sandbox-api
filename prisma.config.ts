import type { PrismaConfig } from "prisma"

export default {
  experimental: {
    adapter: true,
  },
  schema: "prisma/schema.prisma",
  // async adapter() {
  //   return new PrismaD1({
  //     CLOUDFLARE_D1_TOKEN: "<your-cloudflare-d1-token>",
  //     CLOUDFLARE_ACCOUNT_ID: "<your-cloudflare-account-id>",
  //     CLOUDFLARE_DATABASE_ID: "open-sandbox-database",
  //   })
  // },
} satisfies PrismaConfig
