import React , {useState,useEffect} from 'react'
import {TopButton,Filter,ItemList,AddItem,Button} from '../../components/index'
import axios from 'axios'
import { auth } from '../../config/firebaseConfig'
import { isWithinInterval, subDays } from "date-fns"


const Home = () => {
    const [products,setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isFilter,setIsFilter] = useState(false)

    useEffect(()=>{
        const fetchAllProducts = async() => {
            const token = await auth.currentUser.getIdToken();
            const response = await axios.get("http://localhost:3000/api/v1/products",{headers : {
                authorization : `Bearer ${token}`
            }})
            setProducts(response.data.data.result)
            setFilteredProducts(response.data.data.result)
        }
        fetchAllProducts()
    },[])

    const filterProducts = () => {
        if (isFilter) {
            const currentDate = new Date();
            const filtered = products.filter(product => {
                const expiryDate = new Date(product.expiryDate); // Assuming product.expiryDate is in ISO format
                const startDate = subDays(expiryDate, 5);
                const within5Days = isWithinInterval(currentDate, { start: startDate, end: expiryDate });
                return within5Days // Items due in next 5 days
            });
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products); // Show all products if filter is not applied
        }
    };


    useEffect(() => {
        filterProducts();
    }, [isFilter, products]);


    const handleDeleteProduct = async (id) => {
        const token = await auth.currentUser.getIdToken();
        const response = await axios.delete(`http://localhost:3000/api/v1/products/delete/${id}`,{headers : {
            authorization : `Bearer ${token}`
        }})
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

        const token = await auth.currentUser.getIdToken();

        const response = await axios.post(`http://localhost:3000/api/v1/products/create`,requestBody,{headers : {
            authorization : `Bearer ${token}`
        }})
        const createdProduct = response.data.data.result
        setProducts(prev => [...prev,createdProduct])
    }


    const handleEditProduct = () => {

    }

    return (
        <div className='flex flex-col gap-4 w-full'>
            <TopButton/>
            <Filter setIsFilter={setIsFilter}/>
            <ItemList products={filteredProducts} handleDeleteProduct={handleDeleteProduct} handleCreateProduct={handleCreateProduct}/>
        </div>
    );
};

export default Home;
