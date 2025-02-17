import axios from "axios";
import React, { useEffect, useState } from "react";

export const Postlist = () => {
  const [newPost, setNewPost] = useState(null);

  useEffect(() => {
    async function createPost() {
      try {
        const response = await axios.post(
          "https://fakestoreapi.com/products");
        setNewPost(response.data);
        console.log(response);
      } catch (error) {
        console.log(error.message || "Something went wrong!");
      }
    }
    createPost();
  }, []);

  return (
    <div>
      <h2>Newly Created Post</h2>
      {newPost ? (
        <div>
          <h3>{newPost.title}</h3>
          <p>{newPost.body}</p>
          <p><strong>Post ID:</strong> {newPost.id}</p>
        </div>
      ) : (
        <p>Creating Post...</p>
      )}
    </div>
  );
};
