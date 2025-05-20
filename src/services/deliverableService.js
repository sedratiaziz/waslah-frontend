import axios from "axios";

const BASE_URL=`${import.meta.env.VITE_BACKEND_URL}`;

const index=async(userId)=>{
    try {
        const token=localStorage.getItem("token");
        const res= await axios.get(`${BASE_URL}/deliverable/${userId}`,{headers:{Authorization:`Bearer ${token}`}})
        return res.data;
    }
    catch (error) {
        console.log(error);
    }   
}

const createDeliverable=async(deliverableData)=>{
    try {
        const token=localStorage.getItem("token");
        const res= await axios.post(`${BASE_URL}/deliverable`,deliverableData,{headers:{Authorization:`Bearer ${token}`}})
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
const updateDeliverable=async(userId,deliverableId,deliverableData)=>{
    try {
        const token=localStorage.getItem("token");
        const res= await axios.put(`${BASE_URL}/deliverable/${userId}/${deliverableId}`,deliverableData,{headers:{Authorization:`Bearer ${token}`}})
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
const getDeliverable=async(userId,deliverableId)=>{
    try {
        const token=localStorage.getItem("token");
        const res= await axios.get(`${BASE_URL}/deliverable/${userId}/${deliverableId}`,{headers:{Authorization:`Bearer ${token}`}})
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
const taskIndex=async()=>{
    try {
        const token=localStorage.getItem("token");
        const res= await axios.get(`${BASE_URL}/task`,{headers:{Authorization:`Bearer ${token}`}})
        return res.data;
    }   
    catch (error) {
        console.log(error);
    }
}
const createTask=async(taskData,traineeId)=>{
    try {
        const token=localStorage.getItem("token");
        const res= await axios.post(`${BASE_URL}/task/${traineeId}`,taskData,{headers:{Authorization:`Bearer ${token}`}})
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
const putTask=async(taskId,taskData)=>{
    try {
        const token=localStorage.getItem("token");
        const res= await axios.put(`${BASE_URL}/task/${taskId}`,taskData,{headers:{Authorization:`Bearer ${token}`}})
        return res.data;
    }
    catch (error) {
        console.log(error);
    }
}

export {
    index,
    createDeliverable,
    updateDeliverable,
    getDeliverable,
    taskIndex,
    createTask,
    putTask
}