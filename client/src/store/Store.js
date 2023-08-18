import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactSlice";


const store = configureStore({
    reducer:({
        contactDetail:contactReducer
    })
})

export default store
