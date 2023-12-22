import React from 'react'


export const Spinner = () => {
  return (
    <div className='w-[300px] h-[300px] flex flex-col gap-10 items-center justify-center'>
    <div className="custom-loader w-1/2 h-1/2"></div>
    <h1 className=''>loading...</h1>
    </div>
  )
}
