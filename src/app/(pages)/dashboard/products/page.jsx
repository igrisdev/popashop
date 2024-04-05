'use client'

import { useEffect, useState } from 'react'
import axios from '@/lib/axios'

export default function Products() {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const res = await axios.get('/api/product')

    setProducts(res.data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return <div>a</div>
}
