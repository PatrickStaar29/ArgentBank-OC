import { createSlice } from "@reduxjs/toolkit"

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
        },
        setUserFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setUserLastName: (state, action) => {
            state.lastName = action.payload
        },
        setUserName: (state, action) => {
            state.userName = action.payload
        }
    }
})

export const {
    userResetRememberMe,
    userSetRememberMe,
    setUserToken,
    setUserFirstName,
    setUserLastName,
    setUserName,
} = userSlice.actions
export default userSlice.reducer