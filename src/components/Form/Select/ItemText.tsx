'use client'

import * as Select from '@radix-ui/react-select'
import type { ReactNode } from 'react'

export interface ItemTextProps extends Select.SelectItemTextProps {
  children: ReactNode
}

export function ItemText({ children }: ItemTextProps) {
  return (
    <Select.ItemText asChild>
      <span
        className="flex items-center gap-2 text-left leading-5 text-black "
        // dark:text-zinc-100
      >
        {children}
      </span>
    </Select.ItemText>
  )
}
