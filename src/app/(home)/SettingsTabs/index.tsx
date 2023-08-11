'use client'

import { TabItem } from '@/components/TabItem'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState<string>('tab1')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="hover">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-800">
            <TabItem value="tab1" title="My details" />
            <TabItem value="tab2" title="Profile" />
            <TabItem value="tab3" title="Password" />
            <TabItem value="tab4" title="Team" />
            <TabItem value="tab5" title="Plan" />
            <TabItem value="tab6" title="Billing" />
            <TabItem value="tab7" title="Email" />
            <TabItem value="tab8" title="Notifications" />
            <TabItem value="tab9" title="Integrations" />
            <TabItem value="tab10" title="API" />
          </Tabs.List>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="flex h-2.5 touch-none select-none flex-col bg-zinc-100 p-0.5"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}
