import { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <>
      <div className="justify-items-center max-w-[1200px] mt-0 mr-auto ml-auto pt-0 pr-[24px] pl-[24px]">{children}</div>
    </>
  )
}