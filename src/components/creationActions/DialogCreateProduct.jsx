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
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>{title}</Button>
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
