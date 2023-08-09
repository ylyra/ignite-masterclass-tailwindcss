import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { ElementType } from 'react'

interface NavItemProps {
  title: string
  href: string
  icon: ElementType
  current?: boolean
}

export function NavItem({ href, icon: Icon, title, current }: NavItemProps) {
  return (
    <Link
      key={href}
      href={href}
      className="group flex items-center space-x-3 rounded-md px-3 py-2 transition-colors duration-200 hover:bg-purple-50 data-[state=active]:bg-purple-50"
      data-state={current ? 'active' : 'inactive'}
    >
      <Icon />
      <span className="font-medium text-zinc-700 transition-colors duration-200 group-hover:text-violet-700 group-data-[state=active]:text-violet-700">
        {title}
      </span>
      <ChevronDown className="!ml-auto h-5 w-5 text-zinc-400 transition-all duration-200 group-hover:text-violet-400 group-data-[state=active]:rotate-180 group-data-[state=active]:text-violet-400" />
    </Link>
  )
}
