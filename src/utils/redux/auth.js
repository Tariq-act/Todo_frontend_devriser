import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useRouter } from 'next/router';
// const router = useRouter();

// Define async thunks for registering and logging in users
export const register = createAsyncThunk('auth/register', async (userData) => {
  try {
    const response = await fetch(`http://localhost:8090/client/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (data.error) {
      alert(data.error);
    }

    return await response.data;
  } catch (error) {
    alert(error.error);
    return error;
  }
});

export const login = createAsyncThunk('auth/login', async (userData) => {
  const user = localStorage.getItem('token');
  console.log(user);
  try {
    const response = await fetch(
      `http://localhost:8090/${userData.value}/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData.user),
      }
    );

    const data = await response.json();
    console.log(data);
    localStorage.setItem('token', JSON.stringify(data.token));
    localStorage.setItem('user', JSON.stringify(data.email));
    localStorage.setItem('role', JSON.stringify(data.role));
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
});

// Define the auth slice of the Redux store
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
    value: 'client',
  },
  reducers: {
    setInputValue: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle register pending state
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Handle register fulfilled state
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload;
        // localStorage.setItem('token', JSON.stringify(state.user.token));
        // localStorage.setItem('user', JSON.stringify(state.user.email));
        // localStorage.setItem('role', JSON.stringify(state.user.role));
      })
      // Handle register rejected state
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handle login pending state
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Handle login fulfilled state
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload;

        // router.push('/');
      })
      // Handle login rejected state
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// export const selectCounter = (state) => state.auth.value;

// Define a selector to retrieve the user state from the auth slice of the Redux store
export const selectUser = (state) => state.auth.user;

export const { setInputValue } = authSlice.actions;

// Export the auth reducer as the default export
export default authSlice.reducer;
