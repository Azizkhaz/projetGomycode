import axios from "axios";

// function get all Food

export const fetchFood=async()=>{
    const {data} = await axios.get('http://localhost:5000/food/getall')
    return data
}

// get by id

export const fetchuniqueFood = async(id)=>{
    const {data} = await axios.get(`http://localhost:5000/food/getunique/${id}`)
    return data
}

// add food

export const addFood = (value)=>{
    const addingFood = axios.post('http://localhost:5000/food/addfood',value)
}

// update food

export const updateFood=async (id,values)=>{
    const updatedFood = await  axios.put(`http://localhost:5000/food/update/${id}`,{...values})
}

// delete food

export const removeFood=async (id)=>{
    const removedFood = await axios.delete(`http://localhost:5000/food/delete/${id}`)
}
