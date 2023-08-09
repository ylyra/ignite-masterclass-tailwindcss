import { Search } from 'lucide-react'
import { Logo } from './Logo'
import { MainNavigation } from './MainNavigation'

export function Sidebar() {
  return (
    <aside className="space-y-6 border-r border-zinc-200 px-4 py-8">
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

      <MainNavigation />
    </aside>
  )
}
