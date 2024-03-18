'use server'

import prisma from '@/lib/prisma'

export const actionCreateCategory = async (category) => {
  const { title, description } = category

  try {
    const result = await prisma.category.create({
      data: {
        title,
        description,
      },
    })

    if (!result.id)
      return { success: false, message: 'Error al crear la categoría' }

    return {
      success: true,
      message: 'Categoría creada correctamente',
    }
  } catch (error) {
    return { success: false, message: error.message }
  }
}
