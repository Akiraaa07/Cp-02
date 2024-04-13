import React, { useEffect, useState } from 'react';

const TeladePosts: React.FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id} className="mb-4 p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeladePosts;
