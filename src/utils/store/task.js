import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  loading: false,
  error: null,
};
// Step 2: Define async functions for each API operation
const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

const createData = async (payload) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  return data;
};

const updateData = async (payload) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${payload.id}`,
    {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
  );
  const data = await response.json();
  return data;
};

const deleteData = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: 'DELETE',
    }
  );
  const data = await response.json();
  return data;
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
        const index = state.todos.findIndex(
          (post) => post.id === action.payload.id
        );
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      })
      .addCase(deleteTodos.fulfilled, (state, action) => {
        return state.todos.filter((post) => post.id !== action.payload.id);
      });
  },
});

// export const { getTasks, addTask, removeTask, completedTask } =
//   taskSlice.actions;

export default todoSlice.reducer;
