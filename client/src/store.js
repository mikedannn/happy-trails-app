import { createStore } from "redux";

const initialState = {
    users: [],
    loggedInUser: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {

        case "register":
            return {
                ...state, 
                users : [...state.users, action.payload]
            }


        default:
        return state;
    }
}

export default createStore(reducer)





// import { configureStore } from "@reduxjs/toolkit"

// const store = configureStore({
//     reducer: 
// })

// export default store




