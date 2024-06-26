'use client'

import { Plus } from 'lucide-react'
import { DialogCreateProduct } from '@/components/dialogs/DialogCreateProduct'
import { DialogCreateCategory } from '@/components/dialogs/DialogCreateCategory'
import { DialogCreateBrand } from '@/components/dialogs/DialogCreateBrand'
import { DialogCreateColor } from '@/components/dialogs/DialogCreateColor'
import { DialogCreateSize } from '@/components/dialogs/DialogCreateSize'

const actions = [
  {
    id: 1,
    title: 'Crear Producto',
    Component: DialogCreateProduct,
    description: 'Añadir un producto nuevo a la tienda online PopaShop',
    Icon: Plus,
  },
  {
    id: 2,
    title: 'Crear Categoría',
    Component: DialogCreateCategory,
    description: 'Añadir una nueva categoría a la tienda online PopaShop',
    Icon: Plus,
  },
  {
    id: 3,
    title: 'Crear Color',
    Component: DialogCreateColor,
    description: 'Añadir un nuevo color a la tienda online PopaShop',
    Icon: Plus,
  },
  {
    id: 4,
    title: 'Crear Marca',
    Component: DialogCreateBrand,
    description: 'Añadir una nueva marca a la tienda online PopaShop',
    Icon: Plus,
  },
  {
    id: 5,
    title: 'Crear Tamaño',
    Component: DialogCreateSize,
    description: 'Añadir un nuevo tamaño a la tienda online PopaShop',
    Icon: Plus,
  },
]

export default function dashboard() {
  return (
    <div>
      <section className='flex flex-col sm:flex-row justify-between gap-2'>
        <h3>Acciones de creación</h3>

        <ul className='flex gap-2 flex-wrap'>
          {actions.map((action) => (
            <li key={action.id}>
              <action.Component {...action} />
            </li>
          ))}
        </ul>
      </section>
      <section>data</section>
    </div>
  )
}
