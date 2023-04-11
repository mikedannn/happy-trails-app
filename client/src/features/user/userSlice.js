import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setCurrentUser, setLoading, setError } = userSlice.actions;

// Async action to fetch user data from the Rails API
export const fetchUserData = (userId) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await fetch(`/login`);
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const userData = await response.json();
      dispatch(setCurrentUser(userData));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export default userSlice.reducer;
