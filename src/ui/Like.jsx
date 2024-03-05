import React from "react";
import useLikePost from "../features/posts/useLikePost";
import useUnlikePost from "../hooks/useUnlikePost";
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";
import useCurrentUser from "../hooks/useCurrentUser";

const Like = ({ likes, id }) => {
  const { currentUser } = useCurrentUser();

  const isLiked = likes?.some((like) => like.user_id === currentUser?.id);

  return isLiked ? <UnlikeButton id={id} /> : <LikeButton id={id} />;
};

export default Like;

const LikeButton = ({ id }) => {
  const { isLiking, likePost } = useLikePost();

  return (
    <button type="button" disabled={isLiking}>
      {isLiking ? (
        <HiHeart className="animate-pulse text-2xl text-red-500" />
      ) : (
        <HiOutlineHeart className="text-2xl" onClick={() => likePost(id)} />
      )}
    </button>
  );
};

const UnlikeButton = ({ id }) => {
  const { isUnLiking, unlikePost } = useUnlikePost();

  return (
    <button type="button" disabled={isUnLiking}>
      {isUnLiking ? (
        <HiHeart className="animate-pulse text-2xl text-red-500" />
      ) : (
        <HiHeart
          className="text-2xl text-red-500"
          onClick={() => unlikePost(id)}
        />
      )}
    </button>
  );
};
