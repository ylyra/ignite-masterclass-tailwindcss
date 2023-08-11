import { LogOut } from 'lucide-react'
import { Button } from '../Button'

/* eslint-disable @next/next/no-img-element */
export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/ylyra.png"
        alt=""
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="block text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Yan Lyra
        </span>
        <small className="block truncate text-sm text-zinc-500 dark:text-zinc-400">
          yan.lyra@growth.sale
        </small>
      </div>
      <Button variant="ghost" type="button">
        <LogOut className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
      </Button>
    </div>
  )
}
