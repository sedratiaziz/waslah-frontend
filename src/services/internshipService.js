import axios from "axios";
const BASE_URL=`${import.meta.env.VITE_BACK_END_SERVER_URL}/job-offer`;

const index=async()=>{
    try {
        const token=localStorage.getItem("token");
        const res= await axiosxios.get(`${BASE_URL}/`,{headers:{Authorization:`Bearer ${token}`}})
    return res.data;
    } catch (error) {
        console.log(error);
    }
}

const getOffer=async(offerId)=>{
    try {
        const token=localStorage.getItem("token");
        const res= await axiosxios.get(`${BASE_URL}/${offerId}`,{headers:{Authorization:`Bearer ${token}`}})
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
const createOffer=async(offerData)=>{
    try {
        const token=localStorage.getItem("token");
        const res= await axios.post(`${BASE_URL}/`,offerData,{headers:{Authorization:`Bearer ${token}`}})
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

const updateOffer=async(offerId,offerData)=>{
    try {
        const token=localStorage.getItem("token");
        const res= await axios.put(`${BASE_URL}/${offerId}`,offerData,{headers:{Authorization:`Bearer ${token}`}})
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

const deleteOffer=async(offerId)=>{
    try {
        const token=localStorage.getItem("token");
        const res= await axios.delete(`${BASE_URL}/${offerId}`,{headers:{Authorization:`Bearer ${token}`}})
        return res.data;
    }
    catch (error) {
        console.log(error);
    }
}
export {
    index,
    getOffer,
    createOffer,
    updateOffer,
    deleteOffer
}