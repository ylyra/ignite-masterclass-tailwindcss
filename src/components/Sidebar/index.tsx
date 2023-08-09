import Image from 'next/image'

export function Sidebar() {
  return (
    <aside className="border-r border-zinc-200 px-4 py-8">
      <Image src="/logo.svg" width={142} height={32} alt="" />
    </aside>
  )
}
