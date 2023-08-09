import { ComponentProps } from 'react'

export type InputRootProps = ComponentProps<'div'>

function Root(props: InputRootProps) {
  return (
    <div
      className="flex items-center space-x-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:border-purple-300 focus-within:ring focus-within:ring-purple-100"
      {...props}
    />
  )
}

const Prefix = (props: ComponentProps<'div'>) => <div {...props} />

const Control = (props: ComponentProps<'input'>) => (
  <input
    className="flex-1 p-0 text-zinc-900 placeholder-zinc-600 outline-transparent"
    {...props}
  />
)

export const Input = Object.assign(Root, { Prefix, Control, Root })
