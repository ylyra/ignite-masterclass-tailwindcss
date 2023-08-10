import { createContext, useContext } from 'react'

type FileInputContextType = {
  id: string
  files: File[]

  onFilesSelected: (files: File[]) => void
}

export const FileInputContext = createContext({} as FileInputContextType)

export const useFileInput = () => {
  return useContext(FileInputContext)
}
