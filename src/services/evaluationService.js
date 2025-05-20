import axios from "axios";

const BASE_URL=`${import.meta.env.VITE_BACK_END_SERVER_URL}/evaluation`;

const index=async(offerId)=>{
    try {
        const token=localStorage.getItem("token");
        const res= await axios.get(`${BASE_URL}/${offerId}/evaluations`,{headers:{Authorization:`Bearer ${token}`}})
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

const getEvaluation=async(offerId,evaluationId)=>{
    try {
        const token=localStorage.getItem("token");
        const res= await axios.get(`${BASE_URL}/${offerId}/evaluations/${evaluationId}`,{headers:{Authorization:`Bearer ${token}`}})
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
const createEvaluation=async(offerId,evaluationData)=>{
    try {
        const token=localStorage.getItem("token");
        const res= await axios.post(`${BASE_URL}/${offerId}/evaluations`,evaluationData,{headers:{Authorization:`Bearer ${token}`}})
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
const updateEvaluation=async(offerId,evaluationId,evaluationData)=>{
    try {
        const token=localStorage.getItem("token");
        const res= await axios.put(`${BASE_URL}/${offerId}/evaluations/${evaluationId}`,evaluationData,{headers:{Authorization:`Bearer ${token}`}})
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
const getPersonalEvaluation=async()=>{
    try {
        const token=localStorage.getItem("token");
        const res= await axios.get(`${BASE_URL}/trainee/evaluations`,{headers:{Authorization:`Bearer ${token}`}})
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export {
    index,
    getEvaluation,
    createEvaluation,
    updateEvaluation,
    getPersonalEvaluation
}