import React from "react";
import { NavLink } from "react-router-dom";
import useCommentPost from "../../hooks/useCommentPost";
import {
  HiEllipsisHorizontal,
  HiHeart,
  HiOutlineFaceSmile,
  HiOutlineHeart,
} from "react-icons/hi2";
import useTimeAgo from "../../hooks/useTimeAgo";
import useLikeComment from "../../hooks/useLikeComment";
import useUnLikeComment from "../../hooks/useUnLikeComment";

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
          <Comment
            key={index}
            {...comment}
            postId={postId}
            avatar={avatar}
            username={username}
          />
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
        <div className="flex items-center gap-2 text-xs font-normal text-gray-400">
          <span className="">{timeAgo(created_at)}</span>
          {likes.length > 0 && (
            <span className="text-xs font-semibold">{likes.length} likes</span>
          )}
        </div>
      </div>

      <LikeButton isLiked={isLiked} comment={{ id, post_id: postId }} />
    </div>
  );
};

const LikeButton = ({ isLiked, comment }) => {
  const { likeComment } = useLikeComment();
  const { unLikeComment } = useUnLikeComment();

  return isLiked ? (
    <HiHeart
      className="ml-auto cursor-pointer text-sm text-red-500"
      onClick={() =>
        unLikeComment({ commentId: comment.id, postId: comment.post_id })
      }
    />
  ) : (
    <HiOutlineHeart
      className="ml-auto cursor-pointer text-sm"
      onClick={() =>
        likeComment({ commentId: comment.id, postId: comment.post_id })
      }
    />
  );
};
