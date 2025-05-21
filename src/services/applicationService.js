import axios from "axios";

const BASE_URL=`${import.meta.env.VITE_BACK_END_SERVER_URL}/application`;

const index=async(offerId)=>{
    try {
        const token=localStorage.getItem("token");
        const res= await axios.get(`${BASE_URL}/${offerId}`,{headers:{Authorization:`Bearer ${token}`}})
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

const getApplication=async(offerId,applicationId)=>{
    try {
        const token=localStorage.getItem("token");
        const res= await axios.get(`${BASE_URL}/${offerId}/${applicationId}`,{headers:{Authorization:`Bearer ${token}`}})
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

const createApplication=async(offerId,applicationData)=>{
    try {
        const token=localStorage.getItem("token");
        const res= await axios.post(`${BASE_URL}/${offerId}`,applicationData,{headers:{Authorization:`Bearer ${token}`}})
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
const updateApplication=async(offerId,applicationId,applicationData)=>{
    try {
        const token=localStorage.getItem("token");
        const res= await axios.put(`${BASE_URL}/${offerId}/${applicationId}`,applicationData,{headers:{Authorization:`Bearer ${token}`}})
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
const retrieveApplications=async()=>{
    try {
        const token=localStorage.getItem("token");
        const res= await axios.get(`${BASE_URL}`,{headers:{authorization:`Bearer ${token}`}})
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export {
    index,
    getApplication,
    createApplication,
    updateApplication,
    retrieveApplications
}