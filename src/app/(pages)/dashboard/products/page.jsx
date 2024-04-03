// import axios from '@/lib/axios'
import axios from 'axios'

// n7

export default async function page() {
  // const res = await axios.get('/api/product')
  // const res = await axios.get('http://localhost:3000/api/product')

  const res = await fetch('http://localhost:3000/api/product', {
    method: 'GET',
  }).then((res) => res.json())

  // console.log(data)
  // const { data } = res
  // const { results: data } = res.data

  // const data = res.results
  const data = res

  console.log(res);

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
