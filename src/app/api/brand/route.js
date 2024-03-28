import prisma from '@/lib/prisma'

import { NextResponse } from 'next/server'

export async function POST(request) {
  const { title, description } = await request.json()

  try {
    const result = await prisma.brand.create({
      data: {
        title,
        description,
      },
    })

    if (!result.id)
      return NextResponse.json(
        { error: 'Error al crear la marca' },
        { status: 500 }
      )

    return NextResponse.json(
      { message: 'Marca creada correctamente' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json({ error: 'Error Interno' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const result = await prisma.brand.findMany({
      select: {
        id: true,
        title: true,
        description: true,
      },
    })

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
