import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type InputRootProps = ComponentProps<'div'>

function Root(props: InputRootProps) {
  return (
    <div
      {...props}
      className={twMerge(
        'flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none dark:border-zinc-700 dark:bg-zinc-800',
        'focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/10',
        props.className,
      )}
    />
  )
}

const Prefix = (props: ComponentProps<'div'>) => <div {...props} />

const Control = (props: ComponentProps<'input'>) => (
  <input
    {...props}
    className={twMerge(
      'flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none focus:ring-0 dark:text-zinc-100 dark:placeholder-zinc-400',
      props.className,
    )}
  />
)

export const Input = Object.assign(Root, { Prefix, Control, Root })
