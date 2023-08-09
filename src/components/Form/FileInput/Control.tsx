import { ComponentPropsWithoutRef } from 'react'

export function Control(props: ComponentPropsWithoutRef<'input'>) {
  return <input type="file" className="sr-only" id="photo" {...props} />
}
