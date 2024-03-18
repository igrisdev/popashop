import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { FormControl } from '../ui/form'

export const SelectForm = ({ field, options }) => {
  return (
    <Select
      onValueChange={field.onChange}
      defaultValue={' '}
    >
      <FormControl>
        <SelectTrigger>
          <SelectValue placeholder={`${options[0].label} ...`} />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        <SelectItem value=' '>Sin Categoría</SelectItem>
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
