import {createSlice} from "@reduxjs/toolkit"

const contactSlice=createSlice({
    name:"contact",
    initialState:[
        {
        name:"pizza",
        email:"aziz@gmail.com",
        message:"message message"
    }
],
    reducers:{
        setContact:(state,action)=>{
            return action.payload
        }
    }
})
export const {setContact} = contactSlice.actions
export default contactSlice.reducer