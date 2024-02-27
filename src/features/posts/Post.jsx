import React, { useEffect, useRef, useState } from "react";
import {
  HiEllipsisHorizontal,
  HiMiniCog6Tooth,
  HiMiniPlay,
  HiMiniXMark,
  HiOutlineBookmark,
  HiOutlineChatBubbleOvalLeft,
  HiOutlineFaceSmile,
  HiOutlinePaperAirplane,
} from "react-icons/hi2";

import Reveal from "../../ui/Reveal";
import { useInView } from "framer-motion";

import Like from "../../ui/Like";
import DeletePost from "./DeletePost";
import useFollow from "../../hooks/useFollow";
import useUnFollow from "../../hooks/useUnFollow";

import { NavLink, useNavigate } from "react-router-dom";
import Modal from "../../ui/Modal";
import { LoadMedia, LoadModalMedia } from "./LoadMedia";
import TopHeader from "../../ui/TopHeader";

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

const Post = ({ post }) => {
  const {
    image,
    likes,
    comments,
    created_at,
    username,
    avatar,
    content,
    is_followed,
    user_id,
  } = post;

  const { isFollowing, followUser } = useFollow();
  const { isUnFollowing, unFollowUser } = useUnFollow();

  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  console.log(comments);

  return (
    <div className="flex w-full flex-col gap-3 2xl:w-[30rem]">
      <div className="flex items-center gap-2">
        <NavLink
          className="h-[2.4rem] w-[2.5rem] rounded-[50%] border border-gray-50 p-1"
          to={`/profile/${username}`}
        >
          <img
            src={avatar}
            alt="profile"
            className="h-full w-full rounded-[50%] object-cover"
          />
        </NavLink>
        <div className="flex w-full items-center gap-1">
          <NavLink
            className="text-sm font-semibold"
            to={`/profile/${username}`}
          >
            {username}
          </NavLink>
          <span className="text-2xl text-gray-400">·</span>
          <span className="text-sm text-gray-400">{ago(created_at)}</span>
          {!is_followed ? (
            <button
              className="text-sm font-semibold text-blue-500"
              onClick={() => followUser(user_id)}
            >
              Follow
            </button>
          ) : (
            <button
              className="text-sm font-semibold text-blue-500"
              onClick={() => unFollowUser(user_id)}
            >
              Unfollow
            </button>
          )}
          {/* THIS BUTTON DELETES POST */}
          <DeletePost id={post.id} />
        </div>
      </div>
      <div className="h-fit w-full rounded-lg bg-black 2xl:h-fit">
        <LoadMedia media={image.url} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex w-full gap-2">
          <Like likes={likes} id={post.id} />

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
          <p className="text-sm">{content.slice(0, 56)}</p>
          <span className="text-sm text-gray-400">...more</span>
        </div>
        {comments?.length && (
          <div className="text-sm text-gray-400">
            View all {comments.length} comments
          </div>
        )}
        <div className="flex justify-between text-gray-400">
          <input
            type="text"
            placeholder="Add a comment..."
            className="w-full bg-transparent text-sm outline-none"
          />
          <HiOutlineFaceSmile className="text-lg" />
        </div>
      </div>

      {openModal && (
        <Modal openModal={openModal} onClose={handleModal}>
          <div className="absolute left-1/2 top-1/2 z-10 flex h-full w-full -translate-x-1/2 -translate-y-1/2 transform sm:max-h-[80dvh] sm:w-[80dvw]">
            <div className="grid h-full w-full grid-cols-1 bg-gray-800 font-medium text-gray-50 sm:grid-cols-[auto_50%]">
              <TopHeader>
                <HiMiniXMark
                  className="mr-auto text-4xl"
                  onClick={handleModal}
                />
                <h1 className="w-full text-center text-xl">Comments</h1>
              </TopHeader>

              <div className="relative hidden h-full w-full items-center justify-center overflow-hidden bg-black sm:flex">
                <LoadModalMedia media={image.url} />
              </div>

              <Comments
                avatar={avatar}
                username={username}
                comments={comments}
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Post;

const Comments = ({ avatar, username, comments }) => {
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

      <div className="h-fit mt-auto border-t border-gray-600">
        <div className="flex items-center justify-between px-4">
          <input
            type="text"
            placeholder="Add a comment..."
            className="h-12 w-full bg-transparent text-sm outline-none"
          />
          <HiOutlineFaceSmile className="text-2xl" />
        </div>
      </div>
    </div>
  );
};
