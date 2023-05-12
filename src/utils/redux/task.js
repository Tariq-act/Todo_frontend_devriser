'use client';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getTokenFromLocalStorage,
  getEmailFromLocalStorage,
  getRolelFromLocalStorage,
} from '../utils';

const initialState = {
  todos: [],
  loading: false,
  error: null,
};
// Step 2: Define async functions for each API operation
// console.log(userEmail);
const fetchData = async () => {
  const email = getEmailFromLocalStorage();
  console.log(email);
  try {
    const response = await fetch('http://localhost:8090/todo/alltodo', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        email,
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};

const createData = async (payload) => {
  const token = getTokenFromLocalStorage();
  const email = getEmailFromLocalStorage();
  console.log(payload);
  try {
    const response = await fetch('http://localhost:8090/todo/addtodo', {
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
  console.log(payload.data);

  const response = await fetch(
    `http://localhost:8090/todo/update/${payload.id}`,
    {
      method: 'PATCH',
      body: JSON.stringify(payload.data),
      headers: {
        Authorization: token,
        email,
      },
    }
  );
  console.log(payload.data);
  const data = await response.json();
  console.log(data);
  return data;
};

const deleteData = async (id) => {
  const token = getTokenFromLocalStorage();
  const email = getEmailFromLocalStorage();
  console.log(id);
  try {
    const response = await fetch(`http://localhost:8090/todo/delete/${id}`, {
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
export const fetchTodos = createAsyncThunk('posts/fetchPosts', async () => {
  return await fetchData();
});

export const createTodos = createAsyncThunk(
  'posts/createPost',
  async (payload) => {
    return await createData(payload);
  }
);

export const updateTodos = createAsyncThunk(
  'posts/updatePost',
  async (payload) => {
    return await updateData(payload);
  }
);

export const deleteTodos = createAsyncThunk('posts/deletePost', async (id) => {
  return await deleteData(id);
});

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createTodos.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(updateTodos.fulfilled, (state, action) => {
        // const index = state.todos.findIndex(
        //   (post) => post.id === action.payload.id
        // );
        // if (index !== -1) {
        //   state.todos[index] = action.payload;
        // }
      })
      .addCase(deleteTodos.fulfilled, (state, action) => {
        // console.log(state);
        // console.log(action);
        // return state.todos.filter((post) => post.id !== action.payload.id);
      });
  },
});

// export const { getTasks, addTask, removeTask, completedTask } =
//   taskSlice.actions;

export default todoSlice.reducer;
