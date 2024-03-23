import { useState } from 'react'
import { useOutletContext} from 'react-router-dom'
import { Button } from '../index'
import { useFormInput } from '../../hooks/useFormInput'
import { auth } from '../../config/firebaseConfig'
import axios from 'axios'
import { parseISO, format} from 'date-fns';


export const AddItem = ({handleAddProduct}) => {

    const {openModal} = useOutletContext()

    const item = useFormInput("")
    const description = useFormInput("")
    const expiryDate = useFormInput("")
    // const file = useFormInput(undefined)


    const handleSubmit = async (e) => {
        e.preventDefault()

        const url = "http://localhost:3000/api/v1/products/create";

        const requestBody = {
            item: item.value,
            description: description.value,
            expiryDate:expiryDate.value
        }



        try {
            const token = await auth.currentUser.getIdToken()

            if(!token){
                throw new Error("No auth token")
            }

            const response = await axios.post(url,requestBody,{headers:  
                { authorization: `Bearer ${token}` }})
            
            const newProduct = {
                item : response.data.data.response.item,
                description : response.data.data.response.description,
                expiryDate :  response.data.data.response.expiryDate
                // expiryDate :  format(parseISO(response.data.data.response.expiryDate),'dd-MM-yyyy')
            }
            // }

            handleAddProduct(newProduct)
        } 

        
        catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
        }

        finally{
            item.handleReset()
            description.handleReset()
            expiryDate.handleReset()
            openModal()
        }



    }


    return (
        <div className='w-full h-screen absolute bg-zinc-200/20 backdrop-blur-sm top-0 left-0'>
            <div className='  absolute w-full bottom-0 left-0 bg-white rounded-t-xl py-6 px-8 flex flex-col gap-2 slide-from-bottom '>
                <h1 className='text-black font-semibold'>Add new item</h1>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2 place-items-start'>
                        
                        <div className='flex-col flex place-items-start gap-2 '>
                            <label className="text-xs" htmlFor="item">Item</label>
                            <input className="p-2 text-xs appearance-none bg-transparent border-2 border-gray-200 rounded-md" type="text" id='item' name='item' value={item.value} onChange={item.handleChange}/>
                            
                        </div>
                        <div className='flex-col flex place-items-start gap-2'>

                            <label className="text-xs" htmlFor="description">Description</label>
                            <input className="p-2 text-xs appearance-none bg-transparent border-2 border-gray-200 rounded-md" type="text" id='description' name='description' value={description.value} onChange={description.handleChange}/>

                        </div>
                        <div className='flex-col flex place-items-start gap-2'>
                            <label className="text-xs" htmlFor="expiryDate">Expired on</label>
                            <input className="p-2 text-xs appearance-none bg-transparent border-2 border-gray-200 rounded-md" type="date" id='expiryDate' name='expiryDate' value={expiryDate.value} onChange={expiryDate.handleChange}/>
                            
                        </div>
                        {/* <div className='flex-col flex place-items-start gap-2'>
                            <label className="text-xs" htmlFor="file">File</label>
                            <input className="p-2 text-xs appearance-none bg-transparent border-2 border-gray-200 rounded-md" type="file" id='file' name='file'/>

                        </div> */}
                    </div>
                    <div className='flex gap-4 justify-center'>
                        <Button onclick={openModal} classname="text-black">Cancel</Button>
                        <Button type="submit" variant="primary">Add item</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
