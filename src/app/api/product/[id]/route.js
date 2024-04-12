import prisma from '@/lib/prisma'

import { NextResponse } from 'next/server'

export async function DELETE(req, { params }) {
  const { id } = params

  try {
    const deleteProduct = await prisma.product.delete({
      where: { id },
    })

    return NextResponse.json(
      { message: 'Producto eliminado', product: deleteProduct.id },
      { status: 200 }
    )
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Error Interno' }, { status: 500 })
  }
}
