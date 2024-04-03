export default async function page() {
  const res = await fetch('https://rickandmortyapi.com/api/character', {
    method: 'GET',
  }).then((res) => res.json())

  return <div>item</div>
}

/* import axios from '@/lib/axios'

export default async function page() {
  const products = await axios.get('/api/product')

  return <div>page3</div>
}
 */
