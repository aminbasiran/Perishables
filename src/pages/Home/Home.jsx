import React , {useState,useEffect} from 'react'
import {TopButton,Filter,ItemGrid,AddItem,Button} from '../../components/index'
import { useOutletContext } from 'react-router-dom'
import axios from 'axios'
import { auth } from '../../config/firebaseConfig'


const Home = () => {

    useEffect(()=>{
        const fetchAllProducts = async() => {

            const response = await axios.get("http://localhost:3000/api/v1/products")
            handleGetProduct(response.data.data.result)
        }
        fetchAllProducts()

    })

    const [products,setProducts] = useState([])

    const handleDeleteProduct = async (id) => {
        const response = await axios.delete(`http://localhost:3000/api/v1/products/delete/${id}`)
        const deletedProduct = response.data.data.result
        const newProductsAfterDeletion = products.filter(product => product._id !== deletedProduct._id )
        setProducts(newProductsAfterDeletion)
    }


    const handleCreateProduct = async(item,description,expiryDate) => {

        const requestBody = {
            item : item,
            description : description,
            expiryDate : expiryDate 
        }


        const response = await axios.post(`http://localhost:3000/api/v1/products/create`,requestBody)
        const createdProduct = response.data.data.result
        setProducts(prev => [...prev,createdProduct])
    }


    const handleEditProduct = () => {

    }

    const handleGetProduct = (all) => {
        setProducts(all)
    }





    return (
        <div className='flex flex-col gap-4 w-full'>
            <TopButton/>
            <Filter/>
            <ItemGrid products={products} handleDeleteProduct={handleDeleteProduct} handleCreateProduct={handleCreateProduct}/>
            
        </div>
    );
};

export default Home;
