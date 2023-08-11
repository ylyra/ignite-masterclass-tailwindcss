'use client'

import { FileItem } from './FileItem'
import { useFileInput } from './context'

const stages = {
  1: 'progress',
  2: 'error',
  3: 'complete',
} as const

export function FileList() {
  const { files } = useFileInput()

  if (files.length === 0) {
    return null
  }

  return (
    <div className="mt-4 flex flex-col gap-3">
      {files.map((file, idx) => {
        return (
          <FileItem
            key={file.name}
            name={file.name}
            size={file.size}
            type={file.type}
            state={stages[((idx % 3) + 1) as 1 | 2 | 3]}
          />
        )
      })}
    </div>
  )
}
