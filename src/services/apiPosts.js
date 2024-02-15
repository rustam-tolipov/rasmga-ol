// http://localhost:3000/api/v1/posts

import axios from "axios";

export async function getPosts() {
  const response = await axios.get("http://localhost:3000/api/v1/posts");
  return response.data;
}

export async function createPost(post) {
  const formData = new FormData();
  formData.append("image", post.image);
  formData.append("content", post.content);

  const response = await axios.post(
    "http://localhost:3000/api/v1/posts",
    formData,
  );
  return response.data;
}

export async function deletePost(postId) {
  const response = await axios.delete(
    `http://localhost:3000/api/v1/posts/${postId}`,
  );
  return response.data;
}
