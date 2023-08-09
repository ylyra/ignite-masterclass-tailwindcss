import {
  CheckSquare,
  Cog,
  Flag,
  Home,
  Kanban,
  Layers,
  LifeBuoy,
  Search,
  Users,
} from 'lucide-react'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-4 py-8 md:min-h-screen">
      <strong className="flex items-center space-x-2 font-mono text-xl font-semibold text-zinc-900">
        <Logo />
        <span>Untitled UI</span>
      </strong>

      <div className="flex items-center space-x-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:border-purple-300 focus-within:ring focus-within:ring-purple-100">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          placeholder="Search"
          className="flex-1 p-0 text-zinc-900 placeholder-zinc-600 outline-transparent"
        />
      </div>

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
      </div>
    </aside>
  )
}
