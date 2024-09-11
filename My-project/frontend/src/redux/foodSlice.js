import {createSlice} from "@reduxjs/toolkit"

const foodSlice=createSlice({
    name:"food",
    initialState:[
        {
        imageUrl:"https://riotfest.org/wp-content/uploads/2016/10/Pizza-by-the-Harbour-in-Noblesville-IN_Pepperoni-and-Extra-Cheese-Pizza.jpg",
        name:"pizza",
        description:"pizza bnina",
        price:"20dt"
    }
],
    reducers:{
        setFood:(state,action)=>{
            return action.payload
        }
    }
})
export const {setFood} = foodSlice.actions
export default foodSlice.reducer