import React from "react";
import { HiMiniXMark } from "react-icons/hi2";
import usePost from "../hooks/usePost";
import Comments from "../features/posts/Comments";
import TopHeader from "../ui/TopHeader";
import { LoadModalMedia } from "../features/posts/LoadMedia";
import { useNavigate } from "react-router-dom";
import PostComponent from "../features/posts/Post";

const Post = () => {
  const { isLoading, post, error } = usePost();

  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="flex h-screen animate-pulse items-center justify-center bg-[#121212] text-gray-50">
        <h1 className="px-8 text-center text-lg">Post Loading...</h1>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const { image, comments, username, avatar, id } = post;

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="flex flex-col sm:hidden">
        <TopHeader>
          <HiMiniXMark className="mr-auto text-4xl" onClick={handleBack} />
          <h1 className="w-full text-center text-xl">Post</h1>
        </TopHeader>
        <div className="pt-14 sm:hidden">
          {post && <PostComponent post={post} />}
        </div>
      </div>
      <div className="absolute left-0 top-0 z-10 hidden h-full w-[100dvw] sm:flex">
        <HiMiniXMark
          className="absolute left-5 top-5 z-10 text-4xl text-gray-50"
          onClick={handleBack}
        />

        <div className="grid h-full w-full grid-cols-1 bg-gray-800 font-medium text-gray-50 sm:grid-cols-[auto_30%]">
          <TopHeader>
            <HiMiniXMark className="mr-auto text-4xl" />
            <h1 className="w-full text-center text-xl">Comments</h1>
          </TopHeader>

          <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-black">
            <LoadModalMedia media={image?.url} />
          </div>

          <Comments
            avatar={avatar}
            username={username}
            comments={comments}
            postId={id}
          />
        </div>
      </div>
    </>
  );
};

export default Post;
