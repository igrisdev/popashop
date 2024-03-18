'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { actionCreateCategory } from '@/server/actions/actionsCategory'

const formSchemaCategory = z.object({
  title: z.string().min(1, {
    message: 'El titulo debe tener mínimo 1 carácter',
  }),
  description: z
    .string()
    .min(1, {
      message: 'La descripción debe tener mínimo 1 carácter',
    })
    .optional(),
})

export const FormCreateCategory = () => {
  const form = useForm({
    resolver: zodResolver(formSchemaCategory),
    defaultValues: {
      title: '',
      description: '',
    },
  })

  async function onSubmit(values) {
    const res = await actionCreateCategory(values)

    if (!res.success) {
      return toast.error(res.message)
    }

    toast.success(res.message)
    form.reset()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-4'
      >
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titulo</FormLabel>
              <FormControl>
                <Input
                  placeholder='Celular, Computador ...'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input
                  placeholder='Talla para la ...'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit'>Crear Categoría</Button>
      </form>
    </Form>
  )
}
