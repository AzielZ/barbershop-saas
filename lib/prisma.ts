import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { withOptimize } from '@prisma/extension-optimize'

declare global {
  var prisma: PrismaClient | undefined
}

const prisma = global.prisma || new PrismaClient().$extends(withAccelerate()).$extends(
  withOptimize({ apiKey: process.env.OPTIMIZE_API_KEY })
)

if (process.env.NODE_ENV !== 'production') global.prisma = prisma

export default prisma