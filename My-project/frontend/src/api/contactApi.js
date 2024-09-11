import axios from "axios";

// function get all contact

export const fetchContact=async()=>{
    const {data} = await axios.get('http://localhost:5000/contact/getall')
    return data
}

// get by id

export const fetchuniqueContact = async(id)=>{
    const {data} = await axios.get(`http://localhost:5000/contact/getunique/${id}`)
    return data
}

// add contact

export const addContact = (value)=>{
    const addingContact = axios.post('http://localhost:5000/contact/addcontact',value)
}

// update contact

export const updateContact=async (id,values)=>{
    const updatedContact= await  axios.put(`http://localhost:5000/contact/update/${id}`,{...values})
}

// delete contact

export const removeContact=async (id)=>{
    const removedContact = await axios.delete(`http://localhost:5000/contact/delete/${id}`)
}

