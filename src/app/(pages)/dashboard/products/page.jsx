import axios from '@/lib/axios'

export default async function page() {
  const products = await axios.get('/api/product')

  return <div>page</div>
}
