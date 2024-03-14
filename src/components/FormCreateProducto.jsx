'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

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

const formSchemaProduct = z.object({
  name: z.string().min(2, {
    message: 'El nombre debe tener mas de 2 caracteres',
  }),
  description: z
    .string()
    .min(5, {
      message: 'La descripción debe tener mas de 5 caracteres',
    })
    .optional(),
  price: z.string().min(1, { message: 'El precio debe ser mayor a 1.' }),
  quantity: z.string().min(1, { message: 'La cantidad debe ser mayor a 1.' }),
  brand: z
    .string()
    .min(1, { message: 'La marca debe ser mayor a 1.' })
    .optional(),
  category: z
    .string()
    .min(1, { message: 'La categoría debe ser mayor a 1.' })
    .optional(),
  image: z.array(
    z.string().url({ message: 'La imagen debe ser una URL válida.' })
  ),
  size: z.array(
    z.string().min(1, { message: 'La talla debe ser mayor a 1.' }).optional()
  ),
  color: z.array(
    z.string().min(1, { message: 'El color debe ser mayor a 1.' }).optional()
  ),
})

export const FormCreateProducto = () => {
  const form = useForm({
    resolver: zodResolver(formSchemaProduct),
    defaultValues: {
      name: '',
      description: '',
      price: '',
      quantity: '',
      brand: '',
      category: '',
      image: [],
      size: [],
      color: [],
    },
  })

  function onSubmit(values) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-4'
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input
                  placeholder='Audífonos, Marcador ....'
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
              <FormLabel>Descripción</FormLabel>
              <FormControl>
                <Input
                  placeholder='Descripción del producto'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex gap-x-2'>
          <FormField
            control={form.control}
            name='price'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Precio</FormLabel>
                <FormControl>
                  <Input
                    type='number'
                    placeholder='Precio del producto'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='quantity'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cantidad</FormLabel>
                <FormControl>
                  <Input
                    type='number'
                    placeholder='Cantidad del producto'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name='brand'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Marca</FormLabel>
              <FormControl>
                <Input
                  placeholder='Marca del producto'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='category'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categoría</FormLabel>
              <FormControl>
                <Input
                  placeholder='Categoría del producto'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='size'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Talla</FormLabel>
              <FormControl>
                <Input
                  placeholder='Talla del producto'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='color'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Color</FormLabel>
              <FormControl>
                <Input
                  placeholder='Color del producto'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='image'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imágenes</FormLabel>
              <FormControl>
                <Input
                  type='file'
                  placeholder='URL de la imagen'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Añadir</Button>
      </form>
    </Form>
  )
}
