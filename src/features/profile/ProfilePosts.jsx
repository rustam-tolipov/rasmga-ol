import React, { useState } from "react";
import useUserPosts from "../posts/useUserPosts";
import { NavLink } from "react-router-dom";
import {
  HiChatBubbleOvalLeft,
  HiHeart,
  HiMiniVideoCamera,
} from "react-icons/hi2";

const ProfilePosts = () => {
  const { isLoading, posts, error } = useUserPosts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <Posts posts={posts} />;
};

export default ProfilePosts;

const Posts = ({ posts }) => {
  return (
    <div className="grid grid-cols-3 gap-1">
      {posts.length > 0 &&
        posts.map((post, index) => (
          <NavLink key={index} to={`/profile/${post.username}/post/${post.id}`}>
            <LoadMedia
              key={index}
              media={post.image.url}
              comments={post.comments.length}
              likes={post.likes.length}
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

  if (media.endsWith("mp4")) {
    return (
      <div className="relative">
        <video
          src={media}
          className="h-32 w-full object-cover md:h-80"
          onMouseOver={handleHover}
        />

        <HiMiniVideoCamera className="absolute right-2 top-2 text-2xl" />

        <PostInfo
          hover={hover}
          handleHover={handleHover}
          comments={comments}
          likes={likes}
        />
      </div>
    );
  }

  return (
    <div className="relative">
      <PostInfo
        hover={hover}
        handleHover={handleHover}
        comments={comments}
        likes={likes}
      />
      <img
        src={media}
        alt="post"
        className="h-32 w-full object-cover md:h-80"
        onMouseOver={handleHover}
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
