import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    users: [{
        id: 1, 
        username: 'mikedan'
    },  
    {
        id: 2,
        username: 'baddieb'
    }],
    loggedInUser: null
    // resorts: user.resorts, 
    // user_trails: user.user_trails
} 

const reducer = (state = initialState, action) => {
    switch(action.type) {

        case "SIGNUP":
            return {
                ...state, 
                users : [...state.users, action.payload]
            }

        case "LOGIN":
            return {
                ...state, 
                user: action.payload
            }

        default :
        return state;
    }
}

export default configureStore({reducer});
