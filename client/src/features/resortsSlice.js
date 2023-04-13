import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: "resorts",
    initialState: {
        resorts: []
    },
    reducers: {
        setResorts: (state, action) =>{
            state.resorts = action.payload
        },
        addResort: (state, action) =>{
            state.resorts = [...(state.resorts), action.payload]
        }
    }
})

const { setResorts, addResort } = slice.actions

export { setResorts, addResort }

export default slice.reducer