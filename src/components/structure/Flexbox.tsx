import { JSX, ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode
}

export default function Flexbox({ children }: ContainerProps): JSX.Element {
    return (
        <div className='flex justify-around'>{ children }</div>
    )
}