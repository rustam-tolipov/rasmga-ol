import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useTimeAgo from "../hooks/useTimeAgo";
import LikeButton from "./LikeButton";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import Modal from "./Modal";
import CommentInfo from "../features/posts/CommentInfo";

const Comment = ({
  avatar,
  username,
  content,
  created_at,
  id,
  postId,
  likes,
  user_id,
}) => {
  const { timeAgo } = useTimeAgo();

  const isLiked = likes.find((like) => like.user_id === user_id);

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex h-fit gap-3">
      <img
        src={avatar}
        alt="profile"
        className="h-[2.5rem] w-[2.5rem] rounded-[50%] object-cover"
      />

      <div className="flex flex-col">
        <div className="flex gap-2">
          <NavLink
            to={`/profile/${username}`}
            className="text-sm font-semibold"
          >
            {username}
          </NavLink>

          <p className="text-sm font-normal text-gray-50">{content}</p>
        </div>
        <div className="flex items-center gap-2 font-normal text-gray-400">
          <span className="text-xs">{timeAgo(created_at)}</span>
          {likes.length > 0 && (
            <span className="text-xs font-semibold">{likes.length} likes</span>
          )}

          <HiEllipsisHorizontal className="cursor-pointer text-xl" onClick={() => setOpenModal(!openModal)} />

          {openModal && (
            <Modal openModal={openModal} onClose={setOpenModal}>
              <CommentInfo
                {...{ setOpenModal, user_id, post_id: postId, id, username }}
              />
            </Modal>
          )}
        </div>
      </div>

      <LikeButton isLiked={isLiked} comment={{ id, post_id: postId }} />
    </div>
  );
};

export default Comment;
