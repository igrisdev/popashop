'use client'

import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'

import { Plus } from 'lucide-react'

const actions = [
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
]

export default function dashboard() {
  return (
    <div>
      <section className='flex justify-between'>
        <h3>Acciones de creación</h3>

        <ul className='flex gap-x-2'>
          {actions.map(({ title, href, Icon }) => (
            <li key={`${title}-${href}`}>
              <Link
                href={href}
                className={buttonVariants({ variant: 'default' })}
              >
                <p>{title}</p>
                {<Icon />}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section>data</section>
    </div>
  )
}
