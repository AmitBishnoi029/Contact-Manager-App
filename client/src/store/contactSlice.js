import {createSlice} from"@reduxjs/toolkit"

export const contactSlice = createSlice({
    name:"contactDetail",
    initialState:{
        messeges:[]
    },

    reducers:{
        setAddContact:(state,action)=>{
            state.messeges.push(action.payload)
        }
    }
})

export const setAddContact = contactSlice.actions

export default contactSlice.reducer