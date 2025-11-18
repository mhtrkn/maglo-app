import React from 'react'

function MainContainer({ children }: {
  children: React.ReactNode
}) {
  return (
    <div className='mt-[30px]'>
      {children}
    </div>
  )
}

export default MainContainer
