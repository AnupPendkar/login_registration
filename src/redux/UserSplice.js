import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isUser: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        login : (state)=>{
            state.isUser = true;
        },

        logout : (state)=>{
            state.isUser = false;
        }
    }
})

export const { login, logout }  = userSlice.actions;
export default userSlice.reducer;