'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useState } from 'react'

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

import { axios } from '@/lib/axios'

const formSchemaBrand = z.object({
  title: z.string().min(1, {
    message: 'El titulo debe tener mínimo 1 carácter',
  }),
  color: z.string().min(1, {
    message: 'Debes elegir un color',
  }),
  description: z.string().optional(),
})

export const FormCreateColor = () => {
  const [loading, setLoading] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchemaBrand),
    defaultValues: {
      title: '',
      description: '',
      color: '#f1f1f1',
    },
  })

  function onSubmit(values) {
    setLoading(true)

    const promises = axios.post('/api/color', values)

    toast.promise(promises, {
      loading: 'Creando...',
      success: (data) => {
        form.reset()
        setLoading(false)
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
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titulo</FormLabel>
              <FormControl>
                <Input
                  placeholder='Rojo Oscuro, Verde ...'
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
                  type='color'
                  {...field}
                />
              </FormControl>
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
                  placeholder='Este color es ...'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={loading}
          type='submit'
        >
          Crear Marca
        </Button>
      </form>
    </Form>
  )
}
