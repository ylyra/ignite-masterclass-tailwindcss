'use client'

import * as Tabs from '@radix-ui/react-tabs'

type TabItemProps = {
  value: string
  title: string
}

export function TabItem({ title, value }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="group relative px-1 pb-4 text-sm font-medium text-zinc-500 transition-colors duration-200 hover:text-violet-700 data-[state=active]:text-violet-700"
    >
      <span>{title}</span>

      <div className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700 transition-opacity duration-200 group-data-[state=inactive]:opacity-0" />
    </Tabs.Trigger>
  )
}
