import axios from 'axios';

export const fetchCatImage = async () => {
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
            headers: { "Access-Control-Allow-Origin": "*"}
        });
        console.log('Cat image fetched', response.data[0]);
        return response.data[0];
    } catch (error) {
        console.error('Failed to fetch cat image', error);
        return false;
    }
}