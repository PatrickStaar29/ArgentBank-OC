import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: false,
    firstName: null,
    lastName: null,
    token: null,
    id: null,
    userName: null,
    rememberMe: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userSetRememberMe: (state) => {
            state.rememberMe = true;
        },
        userResetRememberMe: (state) => {
            state.rememberMe = false;
        },
        setUserToken: (state, action) => {
            state.token = action.payload; 
        }
    }
})

export const {
    userResetRememberMe,
    userSetRememberMe,
    setUserToken,
} = userSlice.actions
export default userSlice.reducer