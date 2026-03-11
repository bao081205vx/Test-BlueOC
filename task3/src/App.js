import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './features/postsSlice';
import PostForm from './components/PostForm';

export default function App() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.items);
  const status = useSelector(state => state.posts.status);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchPosts());
  }, [status, dispatch]);

  return (
    <div style={{padding:20,fontFamily:'Arial'}}>
      <h1>Posts</h1>
      <PostForm />
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Failed to load posts.</p>}
      <ul>
        {posts.map(p => (
          <li key={p.id}><strong>{p.title}</strong><br/>{p.body}</li>
        ))}
      </ul>
    </div>
  );
}
