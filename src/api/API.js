import axios from "axios";


export const fetchProducts = async (type) => {
    try {
        const response = await axios.get(`https://66aa68ca613eced4eba8b3ab.mockapi.io/api/${type}`);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}


export const addToCard = async (product) => {
    try {
        const response = await axios.post("https://66aa68ca613eced4eba8b3ab.mockapi.io/api/cart", product);
        console.log(response.data);
    } catch (error) {
        throw new Error(error);
    }
}

export const removeFromCart = async (id) => {
    try {
        const response = await axios.delete(`https://66aa68ca613eced4eba8b3ab.mockapi.io/api/cart/${id}`);
        console.log(response.data);
    } catch (error) {
        throw new Error(error);
    }
}