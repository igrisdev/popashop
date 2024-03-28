'use client'

import Image from 'next/image'

import { CldUploadWidget } from 'next-cloudinary'
import { ImagePlus, Trash } from 'lucide-react'

import { Button } from '@/components/ui/button'

export const CreateImages = ({ loading, onChange, onRemove, value }) => {
  const onUpload = (result) => {
    onChange(result.info.secure_url)
  }

  return (
    <div>
      <div className='mb-4 flex items-center flex-wrap gap-4 max-h-[200px] overflow-auto'>
        {value.map((url) => (
          <div
            key={url}
            className='relative w-[200px] h-[200px] rounded-md overflow-hidden'
          >
            <div className='z-10 absolute top-2 right-2'>
              <Button
                type='button'
                onClick={() => onRemove(url)}
                variant='destructive'
                size='sm'
              >
                <Trash className='h-4 w-4' />
              </Button>
            </div>
            <Image
              fill
              className='object-cover'
              alt='Image'
              src={url}
            />
          </div>
        ))}
      </div>

      <CldUploadWidget
        onUpload={onUpload}
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_PRESET}
      >
        {({ open }) => {
          const onClick = () => {
            open()
          }

          return (
            <Button
              type='button'
              loading={loading}
              variant='secondary'
              onClick={onClick}
            >
              <ImagePlus className='h-4 w-4 mr-2' />
              Agregar Imagen
            </Button>
          )
        }}
      </CldUploadWidget>
    </div>
  )
}
