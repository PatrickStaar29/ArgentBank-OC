import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    error: null,
    success: false,
    firstName: null,
    lastName: null,
    token: null,
    userName: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
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
        },
    }
})

export const {
    setUserToken,
    setUserFirstName,
    setUserLastName,
    setUserName,
} = userSlice.actions
export default userSlice.reducer