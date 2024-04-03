import axios from '@/lib/axios'

export default async function page() {
  const res = await axios.get('/api/category')

  const { data } = res

  return (
    <div>
      {data?.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  )
}
