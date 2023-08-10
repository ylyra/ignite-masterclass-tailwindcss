'use client'

import * as Select from '@radix-ui/react-select'
import type { ReactNode } from 'react'

export interface RootProps extends Select.SelectProps {
  children: ReactNode
}

export function Root(props: RootProps) {
  return <Select.Root {...props} />
}
