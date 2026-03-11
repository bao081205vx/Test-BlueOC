import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return resp.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {
    addPost(state, action) {
      const nextId = state.items.length ? Math.max(...state.items.map(p=>p.id)) + 1 : 1;
      state.items.unshift({ id: nextId, ...action.payload });
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => { state.status = 'loading'; })
      .addCase(fetchPosts.fulfilled, (state, action) => { state.status = 'succeeded'; state.items = action.payload; })
      .addCase(fetchPosts.rejected, (state, action) => { state.status = 'failed'; state.error = action.error.message; });
  }
});

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
