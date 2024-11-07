import axios from 'axios';

const API_URL = 'http://16.170.252.4:8081/api';

export const fetchCities = async () => {
    try {
        const response = await axios.get(`${API_URL}/cities`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cities:', error);
        throw error;
    }
};

export const fetchStates = async () => {
    try {
        const response = await axios.get(`${API_URL}/states`);
        return response.data;
    } catch (error) {
        console.error('Error fetching states:', error);
        throw error;
    }
};
