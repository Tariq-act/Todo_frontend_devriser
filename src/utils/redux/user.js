'use client';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getTokenFromLocalStorage,
  getEmailFromLocalStorage,
  getRolelFromLocalStorage,
} from '../utils';

const initialState = {
  users: [],
  loading: false,
  error: null,
};
// Step 2: Define async functions for each API operation
// console.log(userEmail);
const fetchData = async () => {
  const email = getEmailFromLocalStorage();
  const role = getRolelFromLocalStorage();
  console.log(email);
  try {
    const response = await fetch('http://localhost:8090/user/alluser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        email,
      },
    });
    const data = await response.json();
    // if (data.error) {
    //   toas(data.error);
    // }
    if (data.error) {
      return;
    }
    console.log(data);
    return data;
  } catch (error) {
    alert(error.error);
    return error;
  }
};

const addData = async (payload) => {
  const token = getTokenFromLocalStorage();
  const email = getEmailFromLocalStorage();
  const role = getRolelFromLocalStorage();
  console.log(payload);
  try {
    const response = await fetch('http://localhost:8090/user/adduser', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
        email,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const updateData = async (payload) => {
  const token = getTokenFromLocalStorage();
  const email = getEmailFromLocalStorage();
  const role = getRolelFromLocalStorage();

  const response = await fetch(
    `http://localhost:8090/updateuser/${payload.id}`,
    {
      method: 'PATCH',
      body: JSON.stringify(payload.data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
        email: email,
      },
    }
  );

  const data = await response.json();
  console.log(data);
  return data;
};

const deleteData = async (id) => {
  const token = getTokenFromLocalStorage();
  const email = getEmailFromLocalStorage();
  const role = getRolelFromLocalStorage();
  console.log(id);
  try {
    const response = await fetch(`http://localhost:8090/deleteuser/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: token,
        email,
      },
    });
    const data = await response.json();
    console.log(data);
    // return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

// Step 3: Create an async thunk for each API operation
export const fetchUsers = createAsyncThunk('posts/fetchPosts', async () => {
  return await fetchData();
});

export const addUsers = createAsyncThunk(
  'posts/createPost',
  async (payload) => {
    return await addData(payload);
  }
);

export const updateUsers = createAsyncThunk(
  'posts/updatePost',
  async (payload) => {
    return await updateData(payload);
  }
);

export const deleteUsers = createAsyncThunk('posts/deletePost', async (id) => {
  return await deleteData(id);
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addUsers.fulfilled, (state, action) => {
        console.log(state.users);
        state.users.push(action.users);
      })
      .addCase(updateUsers.fulfilled, (state, action) => {
        const index = state.users.findIndex(
          (post) => post.id === action.payload.id
        );
        if (index !== -1) {
          state.users[index] = action.payload.data;
        }
      })
      .addCase(deleteUsers.fulfilled, (state, action) => {
        // console.log(state);
        // console.log(action);
        // return state.todos.filter((post) => post.id !== action.payload.id);
      });
  },
});

export default userSlice.reducer;
