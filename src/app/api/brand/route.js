import { NextResponse } from 'next/server'

import prisma from '@/lib/prisma'

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
        { message: 'Error al crear la marca' },
        { status: 500 }
      )

    return NextResponse.json(
      { message: 'Marca creada correctamente' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function GET(request) {
  /* const { searchParams } = new URL(request.url)
  const title = searchParams.get('title')

  const result = await prisma.brand.findMany({
    where: {
      title: {
        contains: title,
      },
    },
  }) */

  return NextResponse.json('ff', { status: 200 })
  /* try {
    const result = await prisma.brand.findMany({
      where: {
        title: {
          contains: title,
        },
      },
    })

    return NextResponse.json(result, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  } */
}
