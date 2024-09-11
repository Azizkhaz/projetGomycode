import {createSlice} from "@reduxjs/toolkit"

const reservationSlice=createSlice({
    name:"reservation",
    initialState:[
        {
        name:"rami  redux ",
        email:"khalfaoui@gmail.com",
        number:45654785,
        date:"2024-09-19",
        time:"18:00",
        guests:4
        
    }
],
    reducers:{
        setReservation:(state,action)=>{
            return action.payload
        }
    }
})
export const {setReservation} = reservationSlice.actions
export default reservationSlice.reducer