import { LogOut } from 'lucide-react'

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
        <span className="text-sm font-semibold text-zinc-700">Yan Lyra</span>
        <small className="truncate text-sm text-zinc-500">
          yan.lyra@growth.sale
        </small>
      </div>
      <button
        type="button"
        className="group ml-auto rounded-md p-2 transition-colors duration-200 hover:bg-violet-50"
      >
        <LogOut className="h-4 w-4 text-zinc-500 transition-colors duration-200 group-hover:text-zinc-800" />
      </button>
    </div>
  )
}
