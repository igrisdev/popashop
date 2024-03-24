'use server'

import prisma from '@/lib/prisma'

export const actionCreateBrand = (brand) => {
  const { title, description } = brand

  return new Promise(async (resolve, reject) => {
    const result = await prisma.brand.create({
      data: {
        title,
        description,
      },
    })

    if (!result.id)
      reject({ success: false, message: 'Error al crear la marca' })

    resolve({ success: true, message: 'Marca creada correctamente' })
  })
}

/*
  export const actionCreateBrand = async (brand) => {
  const { title, description } = brand

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
} */
