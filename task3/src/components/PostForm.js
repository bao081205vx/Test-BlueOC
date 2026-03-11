import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../features/postsSlice';

export default function PostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();

  function submit(e) {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    dispatch(addPost({ title, body }));
    setTitle('');
    setBody('');
  }

  return (
    <form onSubmit={submit} style={{marginBottom:20}}>
      <div>
        <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} style={{width:'100%',padding:8,marginBottom:8}} />
      </div>
      <div>
        <textarea placeholder="Body" value={body} onChange={e=>setBody(e.target.value)} style={{width:'100%',padding:8,marginBottom:8}} />
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
}
