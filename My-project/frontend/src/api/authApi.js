import axios from 'axios'

export const postauthUser = async (value)=>{

    const addinguser = await axios.post('http://localhost:5000/auth/register', {...value})
}   

export const fetchAuthUser=async()=>{
  const token = localStorage.getItem('token')
  const {data} = await axios.get('http://localhost:5000/auth/account', {headers:{Authorization:token}})
  return data
}