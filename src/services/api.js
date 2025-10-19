import axios from "axios";
import { BASE_URL } from "./baseUrl";


export const getProductApi= async()=>{
    try{
const response = await axios.get(`${BASE_URL}user-products`,{

})
return response.data;
    }catch(error){
        console.error("failed to get products");
        throw error;
    }
}

export const getProductByIdApi= async(id)=>{
    try{
const response = await axios.get(`${BASE_URL}user-products/${id}`,{

})
return response.data;
    }catch(error){
        console.error("failed to get products");
        throw error;
    }
}

export const getCategoryApiById= async(id)=>{
    try{
const response = await axios.get(`${BASE_URL}user-products/category/${id}`,{

})
return response.data;
    }catch(error){
        console.error("failed to get products");
        throw error;
    }
}

export const getCategoryApi= async()=>{
    try{
const response = await axios.get(`${BASE_URL}category/view`,{

})
return response.data;
    }catch(error){
        console.error("failed to get products");
        throw error;
    }
}

export const getFilters= async(id)=>{
    try{
const response = await axios.get(`${BASE_URL}user-products/category/${id}`,{

})
return response.data;
    }catch(error){
        console.error("failed to get products");
        throw error;
    }
}



