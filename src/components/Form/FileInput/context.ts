import { createContext, useContext } from 'react'

type FileInputContextType = {
  id: string
  files: File[]

  multiple: boolean

  onFilesSelected: (files: File[], multiple: boolean) => void
}

export const FileInputContext = createContext({} as FileInputContextType)

export const useFileInput = () => {
  return useContext(FileInputContext)
}
