import { useState,useEffect } from "react";
import axios from "axios";
import { auth } from "../config/firebaseConfig";


// export const useHttpPostRequestRegisterUser = async (url,requestBody) => {
//     const [user,setUser] = useState(null)
//     const [error,setError] = useState(null)

//     try {
//         const response = await axios.post(url,requestBody)
//         if(!response){
//             throw new Error('Failed to register user');
//         }

//         setUser(response.data.data.response)
//     } 
    
//     catch (error) {
//         setError(error.message)
//     }


//     return {user,error}

// }

// export const useHttpPostRequestRegisterUser = (url, requestBody) => {
//     const [user, setUser] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.post(url, requestBody);
//                 if (!response) {
//                     throw new Error('Failed to register user');
//                 }
//                 setUser(response.data.data.response);
//             } catch (error) {
//                 setError(error.message);
//             }
//         };

//         fetchData();

//     }, [url, requestBody]);

//     return { user, error };
// };


export const useHttpGetRequest = (url,token) => {

    const [itemlist,setItemlist] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // State to track loading status

    useEffect(()=>{
        const getData = async () =>{
            setLoading(true)
            setError(null)
            try {
                const response = await axios.get(url,{headers:  
                    { authorization: `Bearer ${token}` }})
                if(!response){
                    throw new Error('No data available');
                }
                setItemlist([...response.data.data.response])
            } 
            
            catch (error) {
                setError(error.message);
            }

            finally{
                setLoading(false)
            }
        }

        getData()
        
    },[])

    return {itemlist,setItemlist, error, loading}
}