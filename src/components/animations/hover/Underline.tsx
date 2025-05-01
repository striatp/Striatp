import { JSX, ReactNode } from 'react';

interface ContainerProps {
  children?: ReactNode; // Make children optional
}

export default function HeaderUnderline({ children }: ContainerProps): JSX.Element | null {
  return (
    <>
    {children}<span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#6c8eaf] transition-all duration-300 ease-in-out group-hover:w-full"></span>
    </>
  );
}