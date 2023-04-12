import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

// Async action to fetch user data from the Rails API
// export const fetchUserData = (userId) => {
//   return async (dispatch) => {
//     dispatch(setLoading(true));
//     try {
//       const response = await fetch(`/login`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch user data');
//       }
//       const userData = await response.json();
//       dispatch(setCurrentUser(userData));
//     } catch (error) {
//       dispatch(setError(error.message));
//     } finally {
//       dispatch(setLoading(false));
//     }
//   };
// };

export default userSlice.reducer;
