import prisma from '@/lib/prisma'

import { NextResponse } from 'next/server'

export async function POST(request) {
  const { title, color, description } = await request.json()

  try {
    const result = await prisma.color.create({
      data: {
        title,
        color,
        description,
      },
    })

    if (!result.id)
      return NextResponse.json(
        { message: 'Error al crear el color' },
        { status: 500 }
      )

    return NextResponse.json(
      { message: 'Color creado correctamente' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const result = await prisma.color.findMany({
      select: {
        id: true,
        title: true,
        color: true,
        description: true,
      },
    })

    if (!result)
      return NextResponse.json(
        { message: 'No se encontraron colores' },
        { status: 400 }
      )

    return NextResponse.json(result, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
