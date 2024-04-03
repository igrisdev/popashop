// import axios from '@/lib/axios'
import axios from 'axios'

export default async function page() {
  // const res = await axios.get('/api/category')
  const res = await axios.get('http://localhost:3000/api/category')

  console.log(res)

  const { data } = res
  // const data = res

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
