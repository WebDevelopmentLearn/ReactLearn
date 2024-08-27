import axios from 'axios';


//https://66aa68ca613eced4eba8b3ab.mockapi.io/api/posts



export const fetchPosts = async (page) => {
    const limit = 3;
    try {
        const response = await axios.get(`https://66aa68ca613eced4eba8b3ab.mockapi.io/api/posts2?page=${page}&limit=${limit}`);
        const isLastPage = response.data.length < limit;
        return {data: response.data, isLastPage: isLastPage};
    } catch (e) {
        console.error(e);
        return { data: false, isLastPage: false };
    }
}

export const fetchPost = async (id) => {
    try {
        const response = await axios.get(`https://66aa68ca613eced4eba8b3ab.mockapi.io/api/posts2/${id}`);
        return response.data;
    } catch (e) {
        console.error(e);
        return false;
    }
}


export const deletePost = async (id) => {
    try {
        await axios.delete(`https://66aa68ca613eced4eba8b3ab.mockapi.io/api/posts2/${id}`);
    } catch (e) {
        console.error(e);
    }
}