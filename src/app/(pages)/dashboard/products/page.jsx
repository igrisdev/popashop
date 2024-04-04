'use client'

import { useEffect, useState } from 'react'

import axios from '@/lib/axios'

export default function page() {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const res = await axios.get('/api/product')

    setProducts(res.data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  console.log(products)

  return (
    <div>
      {products.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  )
}
