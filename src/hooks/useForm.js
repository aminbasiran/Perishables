import { useState } from "react";


export const  useInput = (initialvalue)=>{

    const [value,setValue] = useState(initialvalue)


    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleReset = () => {
        setValue("")
    }

    return {
        value,
        handleChange,
        handleReset
    }

}