import React from 'react';
import Post from './Post';

const App = () => {
  return (
    <>
      <h1>JStack's Blog</h1>
      <h2>Category</h2>
      <hr />

      <Post title="Post 1" subtitle="Sub 1" />
      <Post title="Post 2" subtitle="Sub 2" />
      <Post title="Post 3" subtitle="Sub " />
    </>
  );
};

export default App;
