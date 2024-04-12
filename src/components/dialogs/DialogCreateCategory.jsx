import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { FormCreateCategory } from '@/components/forms/FormCreateCategory'

export const DialogCreateCategory = ({ title, description }) => {
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

        <FormCreateCategory />
      </DialogContent>
    </Dialog>
  )
}
