import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/sonner'

export const Container = ({ children, className }) => {
  return (
    <div className={cn('max-w-7xl mx-auto px-2 xl:px-0', className)}>
      {children}

      <Toaster
        position='bottom-right'
        richColors
      />
    </div>
  )
}
