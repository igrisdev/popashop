// import axios from '@/lib/axios'
import axios from 'axios'

// n5

export default async function page() {
  // const res = await axios.get('/api/category')
  const res = await axios.get('https://rickandmortyapi.com/api/character')

  /* const res = await fetch('https://rickandmortyapi.com/api/character', {
    method: 'GET',
  }).then((res) => res.json()) */

  // const { data } = res
  const { results: data } = res.data

  console.log(data)
  // const data = res.results

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  )
}
