import React from 'react'

const Input = ({
    label,
    placeholder,
    name,
    type,
    className,
    defaultValue,
    Icon

}) => {
    return (
        <div className=' relative'>
            <label for="first_name" className=' block mb-2 text-sm font-medium  text-gray-900'>{label}</label>
            <input defaultValue={defaultValue} placeholder={placeholder} name={name} id={name} type={type} className={`  outline-none bg-lightGray  p-2.5 text-primary placeholder:text-primary rounded-md  ${className}`} />
            <div className=' absolute right-3 top-4'>
                <i>{Icon}</i>
            </div>
        </div>
    )
}

export default Input