import React from 'react'

const  Button = ({
    type,
    label,
    disabled,
    className,
    onClick
}) => {
  return (
    <button onClick={onClick} type={type} className={` text-white bg-[#19173E] px-5 py-2.5 text-center w-full sm:w-auto rounded-lg  font-medium ${className}`} disabled={disabled}>{label}</button>
  )
}

export default Button