import { Formik, Form } from 'formik'
import React from 'react'
export default function AuthenLayout({ Component }) {
    return (
        <div className='relative w-screen h-screen bg-no-repeat bg-cover' style={{ backgroundImage: `url("./images/bg-outside.png")` }}>
            <div className='absolute inset-0 backdrop-blur-2xl'></div>
            <div
                className='h-full flex items-center justify-center'>
                <Component/>
            </div>
        </div>
    )
}


