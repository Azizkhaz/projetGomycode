import { configureStore} from "@reduxjs/toolkit"

import authSlice from "./authSlice"
import foodSlice from "./foodSlice"
import contactSlice from "./contactSlice"
import reservationSlice from "./reservationSlice"
export default configureStore({
    reducer:{
    auth:authSlice,
    food:foodSlice,
    contact:contactSlice,
    reservation:reservationSlice,
    }
})