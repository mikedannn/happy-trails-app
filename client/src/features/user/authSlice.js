import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: true,
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.loading = false;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    clearError(state) {
      state.error = null;
    },
    logout(state) {
      state.user = null;
      state.loading = false;
      state.error = null;
    }
  }
});

export const { setUser, setLoading, setError, clearError, logout } = authSlice.actions;

export const fetchUser = () => async (dispatch) => {
  try {
    const response = await fetch('/me', {
      credentials: 'include',
    });
    const data = await response.json();
    dispatch(setUser(data));
  } catch (error) {
    console.error(error);
  }
};

export const signup = (userData) => async (dispatch) => {
  try {
    const response = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData),
      credentials: 'include',
    });
    const data = await response.json();
    dispatch(setUser(data));
  } catch (error) {
    console.error(error);
    dispatch(setError('Unable to sign up'));
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData),
      credentials: 'include',
    });
    const data = await response.json();
    dispatch(setUser(data));
  } catch (error) {
    console.error(error);
    dispatch(setError('Unable to log in'));
  }
};

export default authSlice.reducer;
