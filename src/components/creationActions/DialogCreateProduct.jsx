import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { FormCreateProducto } from './FormCreateProducto'

export const DialogCreateProduct = ({ title, description }) => {
  const handlePointerEvents = () => {
    setTimeout(() => {
      document.body.style.pointerEvents = 'auto'
    }, 300)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='outline'
          onClick={handlePointerEvents}
        >
          {title}
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[525px]'>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <FormCreateProducto />
      </DialogContent>
    </Dialog>
  )
}
