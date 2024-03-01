import React, { useState } from "react";
import {
  HiMiniCog6Tooth,
  HiOutlineUserPlus,
  HiOutlineHeart,
  HiHeart,
  HiChatBubbleOvalLeft,
  HiOutlineSquares2X2,
} from "react-icons/hi2";
import TopHeader from "../ui/TopHeader";
import { NavLink } from "react-router-dom";
import usePosts from "../hooks/usePosts";
import useProfile from "../hooks/useProfile";

import Header from "../features/profile/Header";
import useUserPosts from "../hooks/useUserPosts";
import LoadingMedia from "../features/loading/LoadingMedia";
import LoadingProfile from "../features/loading/LoadingProfile";

const Profile = () => {
  const [currentPage, setCurrentPage] = useState("posts");

  const { isLoading, posts, error } = useUserPosts();
  const { userLoading, user, userError } = useProfile();

  if (isLoading || userLoading) {
    return <LoadingProfile />;
  }

  if (error || userError) {
    return <div>Error: {error?.message || userError?.message}</div>;
  }

  const { username, id } = user;

  let reels = [];
  if (posts.length > 0) {
    reels = posts.filter((post) => post.image?.url.includes("mp4"));
  }

  return (
    <div className="flex flex-col xl:items-center xl:justify-center">
      <TopHeader>
        <NavLink to="/account/settings">
          <HiMiniCog6Tooth className="mr-auto text-2xl" />
        </NavLink>
        <h1 className="w-full text-center text-xl">{username}</h1>
        <HiOutlineUserPlus className="text-2xl" />
      </TopHeader>

      <Header />

      <div className="flex flex-col xl:w-[70dvw]">
        <div className="flex flex-row items-center justify-center gap-12 p-2 px-4 text-gray-400">
          <div
            className={`flex flex-row items-center gap-1 py-1 text-gray-400 ${currentPage === "posts" ? "border-t border-gray-200 text-gray-200" : ""}`}
            onClick={() => setCurrentPage("posts")}
          >
            <HiOutlineSquares2X2 className="text-xl" />
            Posts
          </div>

          <div
            className={`flex flex-row items-center gap-1 py-1 text-gray-400 ${currentPage === "reels" ? "border-t border-gray-200 text-gray-200" : ""}`}
            onClick={() => setCurrentPage("reels")}
          >
            <HiOutlineHeart className="text-xl" />
            Reels
          </div>
        </div>

        {currentPage === "posts" ? (
          <Posts posts={posts} />
        ) : (
          <Reels reels={reels} />
        )}
      </div>
    </div>
  );
};

export default Profile;

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

const Reels = ({ reels }) => {
  return (
    <div className="grid grid-cols-3 gap-1">
      {reels?.map((reel, index) => (
        <LoadMedia
          key={index}
          media={reel.image.url}
          comments={reel.comments.length}
          likes={reel.likes.length}
        />
      ))}
    </div>
  );
};

const LoadMedia = ({ media, comments, likes }) => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  if (media.includes("mp4")) {
    return (
      <div className="relative">
        <video
          src={media}
          className="h-32 w-full object-cover md:h-80"
          controls
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
