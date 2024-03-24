import React,{useState} from 'react'
import {Item} from "../index"
import { Button } from '../index'
import { useInput } from '../../hooks/useForm'
import { CgUnavailable } from "react-icons/cg";



export const ItemList = ({products,handleDeleteProduct,handleCreateProduct}) => {

    const item = useInput("")
    const description = useInput("")
    const expiryDate = useInput("")

    const file = useInput(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            handleCreateProduct(item.value,description.value,expiryDate.value,file.value)
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
        <div className='flex flex-col gap-3'>
            <h1 className='text-left text-2xl font-bold'>All products ({products.length})</h1>
            <button className="btn bg-black text-white" onClick={()=>document.getElementById('my_modal_2').showModal()}>+ Add</button>
            <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <input className="p-2 bg-transparent border-2  text-white border-zinc-600 rounded-md" type="text" value={item.value} onChange={item.handleChange}/>
                    <input className="p-2 bg-transparent border-2  text-white border-zinc-600 rounded-md" type="text" value={description.value} onChange={description.handleChange}/>
                    <input className="p-2 bg-transparent border-2 text-white border-zinc-600 rounded-md" type="date" value={expiryDate.value} onChange={expiryDate.handleChange}/>
                    <input className="p-2 bg-transparent border-2 text-white border-zinc-600 rounded-md" type="file" name="file" onChange={file.handleFile}/>
                    <Button type="submit" classname="text-sm p-4" variant="primary">Confirm</Button>
                </form>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button></button>
            </form>
            </dialog>
            <div className='flex flex-col gap-3'>
                {products.length === 0 && <div className='text-xl text-zinc-400 font-semibold border-2 border-zinc-300 rounded-md py-4 flex gap-4 justify-center items-center' >
                                                <CgUnavailable size={28}/>
                                                <h1>Empty list</h1>
                                            </div>}
                {products.map((product,index)=>{
                    return <Item key={index} product={product} handleDeleteProduct={handleDeleteProduct} />
                })}
            </div>
        </div>
    )
}
