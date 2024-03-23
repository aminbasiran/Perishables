import React , {useState,useEffect} from 'react'
import {TopButton,Filter,ItemGrid,AddItem,Button} from '../../components/index'
import { useOutletContext } from 'react-router-dom'
import axios from 'axios'
import { auth } from '../../config/firebaseConfig'


const Home = () => {
    const { isAddItem } = useOutletContext();
    const [products, setProducts] = useState([]);

    const handleAddProduct = (product) => {
        setProducts(prevProducts => [...prevProducts, product]);
    };

    const handleDeleteProduct = (id) => {
        setProducts(prevProducts => prevProducts.filter(product => product._id !== id));
    };

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const token = await auth.currentUser.getIdToken();
                if (!token) {
                    throw new Error("No auth token");
                }

                const response = await axios.get("http://localhost:3000/api/v1/products", {
                    headers: { authorization: `Bearer ${token}` }
                });

                setProducts(response.data.data.response);
            } catch (error) {
                console.error('Error fetching products:', error);
                // Handle error as needed
            }
        };

        fetchAllProducts();
    }, []);

    return (
        <div className='flex flex-col gap-4 w-full'>
            <TopButton />
            <Filter />
            <ItemGrid products={products} handleDeleteProduct={handleDeleteProduct} />
            {isAddItem && <AddItem handleAddProduct={handleAddProduct} />}
        </div>
    );
};

export default Home;
