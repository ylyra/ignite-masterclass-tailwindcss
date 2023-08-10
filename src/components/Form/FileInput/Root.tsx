'use client'

import { ComponentPropsWithoutRef, useId, useState } from 'react'
import { FileInputContext } from './context'

type RootProps = ComponentPropsWithoutRef<'div'>

export function Root(props: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  return (
    <FileInputContext.Provider
      value={{
        id,
        files,

        onFilesSelected: setFiles,
      }}
    >
      <div {...props} />
    </FileInputContext.Provider>
  )
}
