import {createSlice} from "@reduxjs/toolkit";



const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser:null,
        isFetching:false,
        error:false
    },
    reducers:{
       loginStart:(state)=>{
        state.isFetching= true
       },
       loginFailure:(state)=>{
        state.isFetching = false;
        state.error = true;
       },
       loginSuccess:(state, action)=>{
        state.isFetching = false;
        state.currentUser = action.payload;
       },

    }
});

export const {loginStart, loginFailure, loginSuccess} = userSlice.actions;
export default  userSlice.reducer;