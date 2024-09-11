import axios from "axios";

// add reservation
export const Addreservation = async (userId,value) =>{
    
    const addingreservation = await axios.post(`http://localhost:5000/reservation/${userId}`, {...value})
}

// get all reservation

export const fetchReservation=async()=>{
    const {data} = await axios.get('http://localhost:5000/reservation/getall')
    return data
}

// get by id

export const fetchuniqueReservation = async(id)=>{
    const {data} = await axios.get(`http://localhost:5000/reservation/getunique/${id}`)
    return data
}



// delete reservation

export const removeReservation=async (id)=>{
    const removedReservation = await axios.delete(`http://localhost:5000/reservation/delete/${id}`)
}


