import axios from "axios";

const BASE_URL=`${import.meta.env.VITE_BACK_END_SERVER_URL}/message`;

const index=async(userId)=>{
    try {
        const token=localStorage.getItem("token");
        const res= await axios.get(`${BASE_URL}/${userId}`,{headers:{Authorization:`Bearer ${token}`}})
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
const createMessage=async(messageData)=>{
    try {
        const token=localStorage.getItem("token");
        const res= await axios.post(`${BASE_URL}/`,messageData,{headers:{Authorization:`Bearer ${token}`}})
        return res.data;
    }
    catch (error) {
        console.log(error);
    }
}

export {
    index,
    createMessage
}