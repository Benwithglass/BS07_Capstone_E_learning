import React from 'react'

export default function CategoryBtn({ title }) {
    return (
        <button className='flex items-center m-[50px] mb-0 p-2 border border-gray-400 rounded-full'>
            <i className="las la-laptop text-3xl text-yellow mr-2"></i>
           <span className='font-semibold uppercase'>{title}</span>
        </button>
    )
}
