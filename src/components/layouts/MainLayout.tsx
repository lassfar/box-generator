import React, { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="appLayout / container mx-auto px-8">
      <div className="py-5 flex">
        <div className="h1 text-2xl font-bold mx-auto">Box Generator</div>
      </div>
      {children}
    </div>
  )
}

export default MainLayout