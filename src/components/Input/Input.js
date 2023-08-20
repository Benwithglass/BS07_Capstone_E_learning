import { useField } from 'formik'
import React from 'react'

export default function Input({ type = "text", children, className, ...props }) {
    const [field, meta, helpers] = useField(props)
    return (
        <div className='relative rounded-lg'>
            <input
                className={`${className}, w-full border bg-[#eee] p-2 pr-[55px] outline-none focus:border-[#41b294] rounded-md placeholder:font-medium placeholder:text-[##8c8c8c] transition-all`}
                type={type} {...field} {...props} />
            <span className='absolute right-[10px] top-1/2 -translate-y-1/2'>{children}</span>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    )
}
