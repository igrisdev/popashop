import prisma from '@/lib/prisma'

import { NextResponse } from 'next/server'

export async function POST(request) {
  const {
    name,
    description,
    price,
    quantity,
    brandId,
    images,
    categories,
    sizes,
    colors,
  } = await request.json()

  try {
    const result = await prisma.product.create({
      data: {
        name,
        price,
        quantity,
        description,
        brandId,
        category: {
          connect: categories.map((id) => ({ id })),
        },
        images: {
          createMany: {
            data: images,
          },
        },
        size: {
          connect: sizes.map((id) => ({ id })),
        },
        color: {
          connect: colors.map((id) => ({ id })),
        },
      },
    })

    if (!result.id)
      return NextResponse.json(
        { error: 'Error al crear el producto' },
        { status: 400 }
      )

    return NextResponse.json(
      { message: 'Producto creada correctamente' },
      { status: 201 }
    )
  } catch (error) {
    console.log(error)
    return NextResponse.json.json({ error: 'Error Interno' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const result = await prisma.product.findMany()

    if (!result)
      return NextResponse.json(
        { error: 'No se encontraron marcas' },
        { status: 400 }
      )

    return NextResponse.json(result, { status: 200 })
  } catch (error) {
    return NextResponse.json.json({ error: 'Error Interno' }, { status: 500 })
  }
}
