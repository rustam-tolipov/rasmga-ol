import React, { useState } from "react";
import useUserPosts from "../posts/useUserPosts";
import { HiChatBubbleOvalLeft, HiHeart } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { LoadingProfilePosts } from "../loading/LoadingProfile";

const ProfileReels = () => {
  const { isLoading, posts, error } = useUserPosts();

  if (isLoading) {
    return <LoadingProfilePosts />;
  }

  const reels = posts?.filter((post) => post.image?.reels?.url.endsWith("mp4"));

  return <Reels reels={reels} />;
};

export default ProfileReels;

const Reels = ({ reels }) => {
  return (
    <div className="grid grid-cols-3 gap-1 md:grid-cols-4">
      {reels?.map((reel, index) => (
        <NavLink key={index} to={`/profile/${reel.username}/post/${reel.id}`}>
          <LoadMedia
            key={index}
            media={reel.image.reels.url}
            comments={reel.comments.length}
            likes={reel.likes.length}
          />
        </NavLink>
      ))}
    </div>
  );
};

const LoadMedia = ({ media, comments, likes }) => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <div className="relative">
      <video
        src={media}
        className="h-fit w-full object-cover"
        muted
        onMouseOver={handleHover}
      />

      <PostInfo
        hover={hover}
        handleHover={handleHover}
        comments={comments}
        likes={likes}
      />
    </div>
  );
};

const PostInfo = ({ hover, handleHover, comments, likes }) => {
  return (
    hover && (
      <div
        className="absolute top-0 flex h-full w-full items-center justify-center gap-8 bg-black bg-opacity-50"
        onMouseLeave={handleHover}
      >
        <div className="flex items-center gap-2">
          <HiHeart className="text-2xl text-gray-50" />
          <p className="text-gray-50">{likes}</p>
        </div>
        <div className="flex items-center gap-2">
          <HiChatBubbleOvalLeft className="text-2xl text-gray-50" />
          <p className="text-gray-50">{comments}</p>
        </div>
      </div>
    )
  );
};
