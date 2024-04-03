// import axios from '@/lib/axios'
import axios from 'axios'

export default async function page() {
  const res = await axios.get('http://localhost:3000/api/product')

  console.log(res)

  // const { data } = res
  const data = []

  return (
    <div>
      {data.results?.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  )
}
