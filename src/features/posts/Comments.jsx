import React from "react";
import { NavLink } from "react-router-dom";
import useCommentPost from "../../hooks/useCommentPost";
import { HiEllipsisHorizontal, HiOutlineFaceSmile } from "react-icons/hi2";

const currentDate = new Date();

const ago = (created_at) => {
  const diff = currentDate - new Date(created_at);
  const minutes = Math.floor(diff / 1000 / 60);
  if (minutes < 60) {
    return `${minutes}m`;
  }
  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `${hours}h`;
  }
  const days = Math.floor(hours / 24);

  return `${days}d`;
};

const Comments = ({ avatar, username, comments, postId }) => {
  const { isCommenting, postComment } = useCommentPost();

  const handlePostComment = (e) => {
    if (e.key === "Enter") {
      postComment({ post_id: postId, content: e.target.value });
      e.target.value = "";
    }
  };

  return (
    <div className="flex h-full w-full flex-col overflow-y-auto pb-12 pt-12 sm:p-0">
      <div className="hidden h-fit border-b border-gray-600 sm:block">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-2">
            <img
              src={avatar}
              alt="profile"
              className="h-[2.5rem] w-[2.5rem] rounded-[50%] object-cover"
            />
            <NavLink
              to={`/profile/${username}`}
              className="text-sm font-semibold"
            >
              {username}
            </NavLink>
          </div>
          <HiEllipsisHorizontal className="text-2xl" />
        </div>
      </div>

      <div className="flex flex-col gap-2 overflow-y-scroll px-4 py-2">
        {comments?.map((comment, index) => (
          <div className="flex h-fit gap-3" key={index}>
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

                <p className="text-sm font-normal text-gray-50">
                  {comment.content}
                </p>
              </div>
              <div className="text-xs font-normal text-gray-400">
                {ago(comment.created_at)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto h-fit border-t border-gray-600">
        <div className="flex items-center justify-between px-4">
          <input
            type="text"
            placeholder="Add a comment..."
            className="h-12 w-full bg-transparent text-sm outline-none"
            onKeyUp={handlePostComment}
          />
          <HiOutlineFaceSmile className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Comments;
