import React, { InputHTMLAttributes } from 'react'
import "../../../src/styles.css"

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export default function TextField({
    label,
    error,
    className,
   ...props
}: TextFieldProps) {
  return (
    <div className={`mb-4 ${className}`}>
        { label && (
            <label className=' block text-gray-700 text-sm font-bold mb-2' htmlFor={label}>{label}</label>
        )} 
        <input 
        className={` appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error ? " border-red-500": ""}`}
        {...props}
        name={label}
         />
         {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  )
}