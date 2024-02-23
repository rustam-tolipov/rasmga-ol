import React from "react";
import useDeletePost from "./useDeletePost";
import { HiMiniEllipsisHorizontal } from "react-icons/hi2";

const DeletePost = ({ id }) => {
  const { isDeleting, deletePost } = useDeletePost();

  if (isDeleting) return <div>Deleting...</div>;

  return (
    <HiMiniEllipsisHorizontal
      className="ml-auto text-xl"
      onClick={() => deletePost(id)}
    />
  );
};

export default DeletePost;
