import React from 'react'

export default function Button({className, children, ...props}) {
  return (
    <button className={`text-green p-3 rounded-md ${className}`} {...props}>
      {children}
    </button>
  )
}
