// import { cva } from "class-variance-authority"

// const containerVariant = cva("max-w-7xl mx-auto")

export const Container = ({ children, ...props }) => {
  return (
    <div
      className='max-w-7xl mx-auto px-2 xl:px-0'
      // {...props}
    >
      {children}
    </div>
  )
}
