import React, { useState } from "react";
import {
  HiChatBubbleOvalLeft,
  HiHeart,
  HiMiniVideoCamera,
} from "react-icons/hi2";

const LoadPreviewMedia = ({ media, comments, likes }) => {
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
        className="absolute top-0 flex h-full w-full items-center justify-center gap-2 bg-black bg-opacity-50 sm:gap-8"
        onMouseLeave={handleHover}
      >
        <div className="flex items-center gap-1 sm:gap-2">
          <HiHeart className="text-xl text-gray-50 sm:text-2xl" />
          <p className="text-gray-50">{likes}</p>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <HiChatBubbleOvalLeft className="text-xl text-gray-50 sm:text-2xl" />
          <p className="text-gray-50">{comments}</p>
        </div>
      </div>
    )
  );
};

export default LoadPreviewMedia;
