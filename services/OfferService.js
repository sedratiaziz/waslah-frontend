import axios from "axios";

const Base_URL = `${import.meta.env.VITE_BACKEND_URL}/job-offer`;

const index=async()=>{
    try {
        const token=localStorage.getItem("token");
        const response = await axios.get(`${Base_URL}/`, {headers: { Authorization: `Bearer ${token}` }});
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const getOffer=async(jobOfferId)=>{
    try {
        const token=localStorage.getItem("token");
        const response = await axios.get(`${Base_URL}/${jobOfferId}`, {headers: { Authorization: `Bearer ${token}` }});
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const createOffer=async(data)=>{
    try {
        const token=localStorage.getItem("token");
        const response = await axios.post(`${Base_URL}/`, data, {headers: { Authorization: `Bearer ${token}` }});
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const updateOffer=async(data,jobOfferId)=>{
    try {
        const token=localStorage.getItem("token");
        const response = await axios.put(`${Base_URL}/${jobOfferId}`, data, {headers: { Authorization: `Bearer ${token}` }});
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const deleteOffer=async(jobOfferId)=>{
    try {
        const token=localStorage.getItem("token");
        const response = await axios.delete(`${Base_URL}/${jobOfferId}`, {headers: { Authorization: `Bearer ${token}` }});
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export{
    index,
    getOffer,
    createOffer,
    updateOffer,
    deleteOffer
}