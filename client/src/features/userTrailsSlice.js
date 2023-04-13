import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: "user_trails",
    initialState: {
        user_trails: []
    },
    reducers: {
        setUserTrails: (state, action) =>{
            state.user_trails = action.payload
        },
        updateUserTrails: (state, action) =>{
            state.user_trails = state.user_trails.map(user_trail => {
                if (user_trail.id === action.payload.id){
                    return action.payload
                } else{
                    return user_trail
                }
            })
        },
        addUserTrail: (state, action) =>{
            state.user_trails = [...(state.user_trails), action.payload]
        },
        removeUserTrail: (state, action) =>{
            state.user_trails = state.user_trails.filter(user_trail => user_trail.id !== action.payload.id)
        }
    }
})

const { setUserTrails, updateUserTrails, addUserTrail, removeUserTrail } = slice.actions

export { setUserTrails, updateUserTrails, addUserTrail, removeUserTrail }

export default slice.reducer