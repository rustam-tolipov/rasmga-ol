import React from "react";
import { NavLink } from "react-router-dom";
import useDeletePost from "./useDeletePost";
import useCurrentUser from "../../hooks/useCurrentUser";

const PostInfo = ({ setOpenModal, user_id, id, username }) => {
  const { isDeleting, deletePost } = useDeletePost();
  const { currentUser } = useCurrentUser();

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-md bg-gray-800">
      <div className="flex w-[20rem] flex-col font-medium text-gray-50">
        {currentUser?.id === user_id && (
          <ModalItem onClick={() => deletePost(id)} color="text-red-500">
            <span className="text-red-500">
              {isDeleting ? "Deleting..." : "Delete"}
            </span>
          </ModalItem>
        )}

        <ModalItem onClick={() => setOpenModal(false)}>
          <NavLink to={`profile/${username}/post/${id}`}>Go to post</NavLink>
        </ModalItem>

        <ModalItem onClick={() => setOpenModal(false)}>Cancel</ModalItem>
      </div>
    </div>
  );
};

export default PostInfo;

const ModalItem = ({ children, onClick }) => {
  return (
    <div
      className="flex w-full cursor-pointer items-center justify-center border-b border-gray-700 px-2 py-2"
      onClick={onClick}
    >
      {children}
    </div>
  );
};
