import prisma from '@/lib/prisma'

import { NextResponse } from 'next/server'

export async function POST(request) {
  const { size, description } = await request.json()

  try {
    const result = await prisma.size.create({
      data: {
        size,
        description,
      },
    })

    if (!result.id)
      return NextResponse.json(
        { message: 'Error al crear el tamaño' },
        { status: 400 }
      )

    return NextResponse.json(
      { message: 'Tamaño creado correctamente' },
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
    const result = await prisma.size.findMany({
      select: {
        id: true,
        size: true,
        description: true,
      },
    })

    if (!result)
      return NextResponse.json(
        { message: 'No se encontraron tamaños' },
        { status: 400 }
      )

    return NextResponse.json(result, { status: 200 })
  } catch (error) {
    return NextResponse.json.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
