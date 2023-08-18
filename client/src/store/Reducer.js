import { createReducer } from "@reduxjs/toolkit";

const initialState={
   name:"",
   phone:"",
}

const showListData = createReducer(initialState,{
      
  showListData:(state,action)=>{
        state.name = action.payload.name
        state.phone = action.payload.name
      }
})

export default showListData