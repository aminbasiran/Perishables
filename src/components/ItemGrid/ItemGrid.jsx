import React,{useState} from 'react'
import {Item} from "../index"
import { Button } from '../index'
import { useInput } from '../../hooks/useForm'


export const ItemGrid = ({products,handleDeleteProduct,handleCreateProduct}) => {

    const item = useInput("")
    const description = useInput("")
    const expiryDate = useInput("")

    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            handleCreateProduct(item.value,description.value,expiryDate.value)
        } 
        
        catch (error) {
            console.log(error)
        }

        finally{
            item.handleReset()
            description.handleReset()
            expiryDate.handleReset()
        }

    }

    return (
        <div className='flex flex-col gap-3 '>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <Button type="submit" variant="primary">+ Add</Button>
                <input className="p-2 bg-transparent border-2 border-zinc-600 rounded-md" type="text" value={item.value} onChange={item.handleChange}/>
                <input className="p-2 bg-transparent border-2 border-zinc-600 rounded-md" type="text" value={description.value} onChange={description.handleChange}/>
                <input className="p-2 bg-transparent border-2 border-zinc-600 rounded-md" type="text" value={expiryDate.value} onChange={expiryDate.handleChange}/>
            </form>
            <div className='grid grid-cols-2 gap-3'>
                {products.map((product,index)=>{
                    return <Item key={index} product={product} handleDeleteProduct={handleDeleteProduct} />
                })}
            </div>
        </div>
    )
}
