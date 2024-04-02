'use client'

import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'

const navLinks = [
  {
    title: 'Administrador',
    href: '/dashboard',
    admin: true,
  },
  {
    title: 'Usuarios',
    href: '/dashboard/users',
    admin: true,
  },
  {
    title: 'Productos',
    href: '/dashboard/products',
    admin: true,
  },
]

export const Navbar = () => {
  return (
    <header className='flex justify-between items-center h-16 max-w-7xl mx-auto px-2 xl:px-0'>
      <Link href='/'>PopaShop</Link>

      <nav>
        <ul className='flex gap-x-2'>
          {navLinks.map(({ title, href }) => (
            <li key={title + href}>
              <Link
                href={href}
                className={buttonVariants({ variant: 'link' })}
              >
                <p>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className=''>
        {/* <Link href="/">Home</Link> */}
        {/* <Button variant={'ghost'}>hola</Button> */}
        avatar
      </div>
    </header>
  )
}
