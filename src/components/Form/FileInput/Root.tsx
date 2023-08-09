import { ComponentPropsWithoutRef } from 'react'

type RootProps = ComponentPropsWithoutRef<'div'>

export function Root(props: RootProps) {
  return <div {...props} />
}
