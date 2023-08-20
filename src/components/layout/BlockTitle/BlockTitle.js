import React from 'react'

export default function BlockTitle({title, desc}) {
  return (
    <div className='p-[30px] md:p-[50px] bg-[#ffd60a] text-white'>
      <h1 className='font-bold text-2xl'>{title}</h1>
      <h4 className='text-sm'>{desc}</h4>
    </div>
  )
}
