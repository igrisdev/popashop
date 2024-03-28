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
        { status: 400 }
      )

    return NextResponse.json(
      { message: 'Categoría creada correctamente' },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const result = await prisma.category.findMany({
      select: {
        id: true,
        title: true,
        description: true,
      },
    })

    if (!result)
      return NextResponse.json(
        { error: 'No se encontraron categorías' },
        { status: 400 }
      )

    return NextResponse.json(result, { status: 200 })
  } catch (error) {
    return NextResponse.json.json({ error: 'Error Interno' }, { status: 500 })
  }
}
