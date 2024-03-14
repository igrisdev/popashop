'use client'

import { Plus } from 'lucide-react'
import { DialogCreateProduct } from '@/components/DialogCreateProduct'
import { DialogCreateCategory } from '@/components/DialogCreateCategory'

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
    Component: DialogCreateProduct,
    description: 'Añadir un nuevo color a la tienda online PopaShop',
    Icon: Plus,
  },
]

export default function dashboard() {
  return (
    <div>
      <section className='flex justify-between'>
        <h3>Acciones de creación</h3>

        <ul className='flex gap-x-2'>
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

/* const actions = [
  {
    title: 'Crear Producto',
    href: '/dashboard/product',
    Icon: Plus,
  },
  {
    title: 'Crear Categoría',
    href: '/dashboard/category',
    Icon: Plus,
  },
  {
    title: 'Crear Color',
    href: '/dashboard/color',
    Icon: Plus,
  },
] */

{
  /* {actions.map(({ title, href, Icon }) => (
  <li key={`${title}-${href}`}>
  <Link
  href={href}
  className={buttonVariants({ variant: 'default' })}
  >
  <p>{title}</p>
  {<Icon />}
  </Link>
  </li>
))} */
}
