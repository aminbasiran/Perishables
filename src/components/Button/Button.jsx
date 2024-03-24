import { cva } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import React from 'react'

export const Button = ({children, classname, variant, onclick, type, ...props}) => {
    return (
        <button {...props} type={type} className={cn(buttonVariants({variant}),classname)} onClick={onclick}>
            {children}
        </button>
    )
}

const buttonVariants = cva("px-2 py-1 cursor-pointer text-xs text-white font-semibold cursor-pointer rounded-md",{
    variants: {
        variant : {
            primary : " bg-black",
            secondary : "bg-gray-500 text-black",
            green: "bg-green-400",
            red: "bg-red-500"
        }
    },
    defaultVariants : {
        variant : {
            default : "primary"
        }
    }
})