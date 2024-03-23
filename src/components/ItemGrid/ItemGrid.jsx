import React from 'react'
import {Item} from "../index"


export const ItemGrid = ({products,handleDeleteProduct}) => {
    return (
        <div className='grid grid-cols-2 gap-3'>
            {products.map((product,index)=>{
                return <Item key={index} product={product} handleDeleteProduct={handleDeleteProduct}/>
            })}
        </div>
    )
}
