'use client'

import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'

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
import { SelectForm } from '@/components/forms/SelectForm'
import { CreateImages } from '@/components/createImagesCloudinary/CreateImages'

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
  images: z
    .object({
      url: z.string(),
    })
    .array(),

  /* brand: z
    .string()
    .min(1, { message: 'La marca debe ser mayor a 1.' })
    .optional(),
  category: z.string().min(3, { message: 'Elegir una categoría' }).optional(),
  size: z.array(
    z.string().min(1, { message: 'La talla debe ser mayor a 1.' }).optional()
  ),
  color: z.array(
    z.string().min(1, { message: 'El color debe ser mayor a 1.' }).optional()
  ), */
})

export const FormCreateProducto = () => {
  const [loading, setLoading] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchemaProduct),
    defaultValues: {
      name: '',
      description: '',
      price: '',
      quantity: '',
      images: [],
      /* brand: '',
      category: '',
      size: [],
      color: [], */
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
          name='images'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Agregar Imágenes</FormLabel>
              <FormControl>
                <CreateImages
                  value={field.value.map((image) => image.url)}
                  disabled={loading}
                  onChange={(url) => field.onChange([...field.value, { url }])}
                  onRemove={(url) =>
                    field.onChange([
                      ...field.value.filter((current) => current.url !== url),
                    ])
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type='submit'>Crear Producto</Button>
      </form>
    </Form>
  )
}
