import axios from 'axios'

export default async function page() {
  const res = await axios.get('https://rickandmortyapi.com/api/character')

  const { data } = res

  return (
    <div>
      {data.results.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  )
}

/* import axios from '@/lib/axios'

export default async function page() {
  const products = await axios.get('/api/product')

  return <div>page3</div>
}
 */
