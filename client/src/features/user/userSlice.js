import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        setCurrentUser: (state, action) => {
            state.user = action.payload
        },
        removeUser: (state) => {
            state.user = null;
    },
    }
})

const {setCurrentUser, removeUser } = slice.actions

export { setCurrentUser, removeUser }

export default slice.reducer;


