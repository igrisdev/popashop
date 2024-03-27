'use client'

import Image from 'next/image'

import { CldUploadWidget } from 'next-cloudinary'
import { Trash, ImagePlus } from 'lucide-react'

import { Button } from '@/components/ui/button'

export const CreateImages = ({ loading, onChange, onRemove, value }) => {
  console.log(value)
  return (
    <div>
      <div className='mb-4 flex items-center gap-4'>
        {value.map((url) => (
          <div
            key={url}
            className='relative size-[200px] rounded-md overflow-hidden'
          >
            <div className='z-10 absolute top-2 ring-2'>
              <Button
                type='button'
                onClick={() => onRemove(url)}
                variant='destructive'
              >
                <Trash className='size-4' />
              </Button>
            </div>

            <Image
              src={url}
              alt='image'
              width={200}
              height={200}
              className='object-cover overflow-hidden w-[200px] h-[200px]'
            />
          </div>
        ))}
      </div>

      <CldUploadWidget
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_PRESET}
        onSuccess={(result, { widget }) => {
          onChange(result?.info.secure_url)
          widget.close()
        }}
      >
        {({ open }) => {
          function handleOnClick() {
            onChange(undefined)
            open()
          }
          return (
            <Button
              type='button'
              variant='secondary'
              disabled={loading}
              onClick={handleOnClick}
            >
              <ImagePlus className='size-4 mr-2' />
            </Button>
          )
        }}
      </CldUploadWidget>
    </div>
  )
}
