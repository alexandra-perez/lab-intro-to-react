import React from 'react';
import Post from '../Components/Post'

export default function Posts() {
  return (
    <section className="posts__section">
      <h1>Posts</h1>
      <Post />
      <Post />
      <Post />
    </section>
  );
}
