export default async function page() {
  const res = await fetch('https://rickandmortyapi.com/api/character', {
    method: 'GET',
  }).then((res) => res.json())

  const { results } = res

  return (
    <div>
      {results.map((item) => (
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
