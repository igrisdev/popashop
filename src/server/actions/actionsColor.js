'use server'

import prisma from '@/lib/prisma'

export const actionCreateColor = async (values) => {
  try {
    const result = await prisma.color.create({
      data: {
        
      }
    })
  } catch (error) {}
}
