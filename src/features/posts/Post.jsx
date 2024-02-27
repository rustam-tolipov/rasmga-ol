import React, { useEffect, useRef, useState } from "react";
import {
  HiEllipsisHorizontal,
  HiMiniPlay,
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

import { NavLink } from "react-router-dom";
import Modal from "../../ui/Modal";

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
          <div className="absolute left-1/2 top-1/2 flex max-h-[80dvh] w-[80dvw] -translate-x-1/2 -translate-y-1/2 transform items-center justify-center bg-gray-800">
            <div className="grid h-full w-full grid-cols-[auto_50%] font-medium text-gray-50">
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-black">
                <LoadModalMedia media={image.url} />
              </div>

              <div className="flex h-full max-h-[80dvh] w-full flex-col overflow-y-auto">
                <div className="h-fit border-b border-gray-600">
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

                <div className="flex flex-col items-center justify-between gap-2 overflow-y-scroll px-4 py-2">
                  {Array.from({ length: 50 }).map((_, index) => (
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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, quos. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Quisquam, quos.
                          </p>
                        </div>
                        <div className="text-xs font-normal text-gray-400">
                          3hs
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="h-fit border-t border-gray-600">
                  <div className="flex items-center justify-between px-4 py-2">
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      className="w-full bg-transparent text-sm outline-none"
                    />
                    <HiOutlineFaceSmile className="text-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Post;

const LoadMedia = ({ media }) => {
  const ref = useRef();
  const isInView = useInView(ref);
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    if (media.includes("video")) {
      if (!isInView) {
        ref.current.pause();
        setPlayVideo(false);
      } else {
        ref.current.play();
      }
    }
  }, [isInView, media]);

  const handlePlayVideo = () => {
    ref.current.play();
    setPlayVideo(false);
  };

  const handlePauseVideo = () => {
    ref.current.pause();
    setPlayVideo(true);
  };

  if (media.includes("video")) {
    return (
      <Reveal>
        <video
          src={media}
          alt="post"
          className="h-full w-full rounded-lg object-cover lg:max-h-[80dvh]"
          ref={ref}
          onClick={handlePauseVideo}
          loop
          muted
        />

        {playVideo && (
          <div className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 transform items-center justify-center">
            <HiMiniPlay
              className="text-8xl text-white"
              onClick={handlePlayVideo}
            />
          </div>
        )}
      </Reveal>
    );
  }

  return (
    <Reveal>
      <img
        src={media}
        alt="post"
        className="h-full w-full rounded-lg object-cover"
      />
    </Reveal>
  );
};

const LoadModalMedia = ({ media }) => {
  const videoRef = useRef();
  const [playVideo, setPlayVideo] = useState(false);

  const handlePlayVideo = () => {
    videoRef.current.play();
    setPlayVideo(!playVideo);
  };

  const handlePauseVideo = () => {
    videoRef.current.pause();
    setPlayVideo(!playVideo);
  };

  if (media.includes("video")) {
    return (
      <div className="relative">
        <video
          src={media}
          alt="post"
          className="z-10 max-h-[80dvh] w-full"
          loop
          muted
          autoPlay
          ref={videoRef}
          onClick={handlePauseVideo}
        />

        {playVideo && (
          <div className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 transform items-center justify-center">
            <HiMiniPlay
              className="text-8xl text-white"
              onClick={handlePlayVideo}
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <img src={media} alt="post" className="z-10 h-fit max-h-[80dvh] w-fit" />
  );
};
