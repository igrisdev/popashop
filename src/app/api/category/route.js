import prisma from '@/lib/prisma'

import { NextResponse } from 'next/server'

export async function POST(request) {
  const { title, description } = await request.json()

  try {
    const result = await prisma.category.create({
      data: {
        title,
        description,
      },
    })

    if (!result.id)
      return NextResponse.json(
        { message: 'Error al crear la categoría' },
        { status: 500 }
      )

    return NextResponse.json(
      { message: 'Categoría creada correctamente' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
