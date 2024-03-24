import { useState } from "react";


export const  useInput = (initialvalue)=>{

    const [value,setValue] = useState(initialvalue)

    const handleFile = (e) => {
        setValue(e.target.files[0])
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleReset = () => {
        setValue("")
    }

    return {
        value,
        handleChange,
        handleReset,
        handleFile
    }

}