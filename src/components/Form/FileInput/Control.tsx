'use client'

import type { ChangeEvent, ComponentPropsWithoutRef } from 'react'
import { useFileInput } from './context'

export function Control({
  multiple = false,
  ...props
}: ComponentPropsWithoutRef<'input'>) {
  const { id, onFilesSelected } = useFileInput()

  const handleFilesSelected = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return

    onFilesSelected(Array.from(event.target.files), multiple)
  }

  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      onChange={handleFilesSelected}
      multiple={multiple}
      {...props}
    />
  )
}
