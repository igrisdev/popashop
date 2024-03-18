'use server'

import prisma from '@/lib/prisma'

export const actionCreateBrand = async (category) => {
  const { title, description } = category

  try {
    const result = await prisma.brand.create({
      data: {
        title,
        description,
      },
    })

    if (!result.id)
      return { success: false, message: 'Error al crear la marca' }

    return {
      success: true,
      message: 'Marca creada correctamente',
    }
  } catch (error) {
    return { success: false, message: error.message }
  }
}
