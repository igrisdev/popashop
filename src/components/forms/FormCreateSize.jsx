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

const formSchemaSize = z.object({
  size: z.string().min(1, {
    message: 'El tamaño debe tener mínimo 1 carácter',
  }),
  description: z.string().optional(),
})

export const FormCreateSize = () => {
  const [loading, setLoading] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchemaSize),
    defaultValues: {
      size: '',
      description: '',
    },
  })

  function onSubmit(values) {
    setLoading(true)

    const promises = axios.post('/api/size', values)

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
          name='size'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tamaño</FormLabel>
              <FormControl>
                <Input
                  placeholder='S, M, L, XL ...'
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

        <Button
          disabled={loading}
          type='submit'
        >
          Crear Tamaño
        </Button>
      </form>
    </Form>
  )
}
