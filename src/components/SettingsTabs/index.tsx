'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'

export function SettingsTabs() {
  return (
    <Tabs.Root defaultValue="tab1">
      <Tabs.List className="mt-6 flex w-full items-center space-x-4 border-b border-zinc-200">
        <TabItem value="tab1" title="My details" />
        <TabItem value="tab2" title="Profile" />
        <TabItem value="tab3" title="Password" />
        <TabItem value="tab4" title="Team" />
        <TabItem value="tab5" title="Plan" />
        <TabItem value="tab6" title="Billing" />
        <TabItem value="tab7" title="Email" />
        <TabItem value="tab8" title="Notifications" />
        <TabItem value="tab9" title="Integrations" />
        <TabItem value="tab10" title="Api" />
      </Tabs.List>
    </Tabs.Root>
  )
}
