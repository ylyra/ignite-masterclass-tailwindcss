'use client'

import * as Collapsible from '@radix-ui/react-collapsible'
import {
  CheckSquare,
  Cog,
  Flag,
  Home,
  Kanban,
  Layers,
  LifeBuoy,
  Menu,
  Search,
  Users,
} from 'lucide-react'
import { Button } from '../Button'
import { Input } from '../Form/Input'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { Profile } from './Profile'
import { UsedSpaceWidget } from './UsedSpaceWidget'

export function Sidebar() {
  return (
    <Collapsible.Root className="scrollbar-thin scrollbar-track-zinc-100 scrollbar-thumb-zinc-300 fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 overflow-hidden border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900 lg:bottom-0 lg:right-auto lg:h-auto lg:w-80 lg:overflow-auto lg:border-b-0 lg:border-r lg:px-5 lg:py-8">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6 text-zinc-500" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content asChild forceMount>
        <div className="flex flex-1 flex-col gap-6">
          <Input.Root>
            <Input.Prefix>
              <Search className="h-5 w-5 text-zinc-500" />
            </Input.Prefix>
            <Input.Control placeholder="Search" />
          </Input.Root>

          <nav className="space-y-1">
            <NavItem title="Home" href="/" icon={Home} current />
            <NavItem title="Dashboard" href="/dashboard" icon={Kanban} />
            <NavItem title="Projects" href="/projects" icon={Layers} />
            <NavItem title="Tasks" href="/tasks" icon={CheckSquare} />
            <NavItem title="Reporting" href="/reporting" icon={Flag} />
            <NavItem title="Users" href="/users" icon={Users} />
          </nav>

          <div className="mt-auto flex flex-col gap-6">
            <nav className="space-y-1">
              <NavItem title="Support" href="/support" icon={LifeBuoy} />
              <NavItem title="Settings" href="/settings" icon={Cog} />
            </nav>

            <UsedSpaceWidget />

            <div className="h-px bg-zinc-200" />

            <Profile />
          </div>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
