import React from 'react'
import clsx from 'clsx'

interface ContainerProps {
    children: React.ReactNode
    className?: string
    
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={clsx("common-container", className)}>
        {children}
    </div>
  )
}

export default Container