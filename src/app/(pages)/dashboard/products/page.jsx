'use client'

import axios from '@/lib/axios'

import { useEffect, useState } from 'react'

export default function page() {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const res = await axios.get('/api/product')

    setProducts(res.data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      {products?.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  )
}
