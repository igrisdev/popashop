'use client'

import { useEffect, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { CreateImages } from '@/components/createImagesCloudinary/CreateImages'
import { SelectForm } from '@/components/forms/SelectForm'

import axios from '@/lib/axios'

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
  brandId: z.string().min(1, { message: 'Debes elegir una marca' }),
  images: z
    .object({
      url: z.string(),
    })
    .array()
    .min(1, { message: 'Se requiere al menos una imagen' }),
  categories: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: 'Seleccionar una categoría como mínimo',
    }),
  sizes: z.array(z.string()).optional(),
  colors: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'Seleccionar un color como mínimo',
  }),
})

export const FormCreateProducto = () => {
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([])
  const [sizes, setSizes] = useState([])
  const [colors, setColors] = useState([])
  const [brands, setBrands] = useState([])

  const form = useForm({
    resolver: zodResolver(formSchemaProduct),
    defaultValues: {
      name: '',
      description: '',
      price: '',
      quantity: '',
      brandId: '',
      images: [],
      categories: [],
      sizes: [],
      colors: [],
    },
  })

  const getCategories = async () => {
    const res = await axios.get('/api/category')

    setCategories(res.data)
  }

  const getSizes = async () => {
    const res = await axios.get('/api/size')

    setSizes(res.data)
  }

  const getColors = async () => {
    const res = await axios.get('/api/color')

    setColors(res.data)
  }

  const getBrands = async () => {
    const res = await axios.get('/api/brand')

    setBrands(res.data)
  }

  useEffect(() => {
    getCategories()
    getSizes()
    getColors()
    getBrands()
  }, [])

  function onSubmit(values) {
    const promises = axios.post('/api/product', values)

    toast.promise(promises, {
      loading: 'Creando...',
      success: (data) => {
        setLoading(false)
        form.reset()
        return data.data.message
      },
      error: (err) => {
        setLoading(false)
        return err.response.data.error
      },
    })
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
          name='brandId'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Marca</FormLabel>
              <SelectForm
                options={brands}
                field={field}
              />
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
              <FormLabel>Imágenes</FormLabel>
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

        <div className='flex justify-between'>
          <FormField
            control={form.control}
            name='categories'
            render={() => (
              <FormItem>
                <div className='mb-4'>
                  <FormLabel>Categorías</FormLabel>
                </div>
                {categories.map(({ id, title }) => (
                  <FormField
                    key={id}
                    control={form.control}
                    name='categories'
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={id}
                          className='flex flex-row items-start space-x-3 space-y-0'
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== id
                                      )
                                    )
                              }}
                            />
                          </FormControl>
                          <FormLabel className='font-normal'>{title}</FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='colors'
            render={() => (
              <FormItem>
                <div className='mb-4'>
                  <FormLabel>Colores</FormLabel>
                </div>
                {colors.map(({ id, title }) => (
                  <FormField
                    key={id}
                    control={form.control}
                    name='colors'
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={id}
                          className='flex flex-row items-start space-x-3 space-y-0'
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== id
                                      )
                                    )
                              }}
                            />
                          </FormControl>
                          <FormLabel className='font-normal'>{title}</FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='sizes'
            render={() => (
              <FormItem>
                <div className='mb-4'>
                  <FormLabel>
                    Tamaños <span className='text-[10px]'>(opcional)</span>
                  </FormLabel>
                </div>
                {sizes.map(({ id, size }) => (
                  <FormField
                    key={id}
                    control={form.control}
                    name='sizes'
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={id}
                          className='flex flex-row items-start space-x-3 space-y-0'
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== id
                                      )
                                    )
                              }}
                            />
                          </FormControl>
                          <FormLabel className='font-normal'>{size}</FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type='submit'>Crear Producto</Button>
      </form>
    </Form>
  )
}
