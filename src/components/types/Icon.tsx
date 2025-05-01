import { JSX, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode
}

export default function Icon({ children }: ContainerProps): JSX.Element {
    return (<>{ children }</>);
}