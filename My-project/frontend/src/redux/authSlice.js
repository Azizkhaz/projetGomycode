import {createSlice} from "@reduxjs/toolkit"

const authSlice=createSlice({
    name:"auth",
    initialState:{
        name:"user redux",
        email:"khalfaoui@gmail.com",
        password:"userredux",
        role:"user"
    },
    reducers:{
        setAuth:(state,action)=>{
            return action.payload
        }
    }
})
export const {setAuth} = authSlice.actions
export default authSlice.reducer