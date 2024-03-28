import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { FormControl } from '../ui/form'

export const SelectForm = ({ options, field }) => {
  return (
    <Select onValueChange={field.onChange}>
      <FormControl>
        <SelectTrigger>
          <SelectValue placeholder={'Sin Categoría'} />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {options.map((option) => (
          <SelectItem
            key={option?.id}
            value={option?.id}
          >
            {option?.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
