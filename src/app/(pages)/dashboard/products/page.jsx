// import axios from '@/lib/axios'
import axios from 'axios'

// n3

export default async function page() {
  // const res = await axios.get('/api/category')
  // const res = await axios.get('http://localhost:3000/api/category')

  const res = await fetch('http://localhost:3000/api/category', {
    method: 'GET',
  }).then((res) => res.json())

  console.log(res)

  // const { data } = res
  const data = res

  return (
    <div>
      {data?.map((item) => (
        <div key={item.id}>
          <p>{item.id}</p>
        </div>
      ))}
    </div>
  )
}
