// http://localhost:3000/api/v1/posts

export async function getPosts() {
  const response = await fetch("http://localhost:3000/api/v1/posts");

  if (!response.ok) {
    console.error(`‼️ ${response.status} ${response.statusText}`);
    throw new Error("Network response was not ok");
  }

  return response.json();
}
