'use client'

import {
  CheckSquare,
  ChevronDown,
  Flag,
  Home,
  Kanban,
  Layers,
  Users,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menus = [
  {
    label: 'Home',
    icon: <Home className="h-5 w-5 text-zinc-500" />,
    href: '/',
  },
  {
    label: 'Dashboard',
    icon: <Kanban className="h-5 w-5 rotate-180 text-zinc-500" />,
    href: '/dashboard',
  },
  {
    label: 'Projects',
    icon: <Layers className="h-5 w-5 text-zinc-500" />,
    href: '/projects',
  },
  {
    label: 'Tasks',
    icon: <CheckSquare className="h-5 w-5 text-zinc-500" />,
    href: '/tasks',
  },
  {
    label: 'Reporting',
    icon: <Flag className="h-5 w-5 text-zinc-500" />,
    href: '/reporting',
  },
  {
    label: 'Users',
    icon: <Users className="h-5 w-5 text-zinc-500" />,
    href: '/users',
  },
]

export function MainNavigation() {
  const pathname = usePathname()

  return (
    <nav className="space-y-1">
      {menus.map((menu) => (
        <Link
          key={menu.href}
          href={menu.href}
          className="group flex items-center space-x-3 rounded-md px-3 py-2 transition-colors duration-200 hover:bg-purple-50 data-[state=active]:bg-purple-50"
          data-state={pathname === menu.href ? 'active' : 'inactive'}
        >
          {menu.icon}
          <span className="font-medium text-zinc-700 transition-colors duration-200 group-hover:text-violet-700 group-data-[state=active]:text-violet-700">
            {menu.label}
          </span>
          <ChevronDown className="!ml-auto h-5 w-5 text-zinc-400 transition-all duration-200 group-hover:text-violet-400 group-data-[state=active]:rotate-180 group-data-[state=active]:text-violet-400" />
        </Link>
      ))}
    </nav>
  )
}
