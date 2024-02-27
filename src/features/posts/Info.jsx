import React from "react";
import Like from "../../ui/Like";
import {
  HiOutlineBookmark,
  HiOutlineChatBubbleOvalLeft,
  HiOutlineFaceSmile,
  HiOutlinePaperAirplane,
} from "react-icons/hi2";
import useCommentPost from "../../hooks/useCommentPost";

const Info = ({ likes, comments, handleModal, id, username, content }) => {
  const { isCommenting, postComment } = useCommentPost();

  const handlePostComment = (e) => {
    if (e.key === "Enter") {
      postComment({ post_id: id, content: e.target.value });
      e.target.value = "";
    }
  };

  return (
    <div className="flex flex-col gap-2 px-2">
      <div className="flex w-full gap-2">
        <Like likes={likes} id={id} />

        <HiOutlineChatBubbleOvalLeft
          className="text-2xl hover:text-gray-500"
          onClick={handleModal}
        />
        <HiOutlinePaperAirplane className="text-2xl hover:text-gray-500" />
        <HiOutlineBookmark className="ml-auto text-2xl hover:text-gray-500" />
      </div>
      <div className="text-sm font-semibold">{likes?.length} likes</div>
      <div className="flex gap-1">
        <span className="text-sm font-semibold">{username}</span>
        <p className="text-sm">{content?.slice(0, 56)}</p>
        <span className="text-sm text-gray-400">...more</span>
      </div>
      {comments?.length > 0 && (
        <div
          className="cursor-pointer text-sm text-gray-400"
          onClick={handleModal}
        >
          View all {comments.length} comments
        </div>
      )}
      <div className="flex justify-between text-gray-400">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full bg-transparent text-sm outline-none"
          onKeyPress={handlePostComment}
        />
        <HiOutlineFaceSmile className="text-lg" />
      </div>
    </div>
  );
};

export default Info;
