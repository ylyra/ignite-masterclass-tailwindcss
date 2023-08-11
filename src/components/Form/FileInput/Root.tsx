'use client'

import { ComponentPropsWithoutRef, useId, useState } from 'react'
import { FileInputContext } from './context'

type RootProps = ComponentPropsWithoutRef<'div'> & {
  multiple?: boolean
}

export function Root({ multiple = false, ...props }: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  const onFilesSelected = (files: File[], multiple: boolean) => {
    if (multiple) {
      setFiles((prevFiles) => [...prevFiles, ...files])
    } else {
      setFiles(files)
    }
  }

  return (
    <FileInputContext.Provider
      value={{
        id,
        files,
        multiple,

        onFilesSelected,
      }}
    >
      <div {...props} />
    </FileInputContext.Provider>
  )
}
