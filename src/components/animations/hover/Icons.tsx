import { JSX, ReactNode} from 'react';

interface ContainerProps {
  children: ReactNode
}

export default function HoverIcons({ children }: ContainerProps): JSX.Element {
  return (
    <>
      <span className='hover:text-white transition duration-150'>{ children }</span>
    </>
  )
}