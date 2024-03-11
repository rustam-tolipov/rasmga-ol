import React, { useState } from "react";

import Modal from "../../ui/Modal";
import { LoadMedia, LoadModalMedia } from "./LoadMedia";
import Header from "./Header";
import Info from "./Info";
import Comments from "./Comments";
import { HiMiniXMark, HiXMark } from "react-icons/hi2";

const Post = ({ post }) => {
  const { image, comments, username, avatar, id, is_video, size, user_id } =
    post;

  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="flex w-full flex-col gap-3 border-gray-800 pb-3 sm:border-b lg:max-w-[50dvw] 2xl:w-[30rem]">
      <Header {...post} />
      <div className="h-fit w-full rounded-lg bg-black 2xl:h-fit">
        <LoadMedia
          media={image}
          inModal={openModal}
          is_video={is_video}
          size={size}
        />
      </div>

      <Info {...post} handleModal={handleModal} />

      {openModal && (
        <Modal openModal={openModal} onClose={handleModal}>
          <div className="absolute left-1/2 top-1/2 z-10 flex h-full w-full -translate-x-1/2 -translate-y-1/2 transform sm:max-h-[50dvh] sm:w-fit sm:max-w-[80dvw] lg:max-h-[90dvh]">
            <div className="flex h-full w-full justify-center font-medium text-gray-50 sm:items-center">
              <div className="z-30 fixed flex h-[6dvh] w-full items-center gap-2 border-b border-slate-600 bg-gray-900 px-4 py-2 sm:hidden">
                <HiMiniXMark
                  className="mr-auto text-4xl"
                  onClick={handleModal}
                />

                <h1 className="w-full text-center text-xl">Comments</h1>
              </div>

              <div className="relative hidden h-full min-h-full w-fit min-w-[30dvw] items-center justify-end overflow-hidden bg-black sm:flex">
                <LoadModalMedia media={image.url} />
              </div>

              <Comments
                avatar={avatar}
                username={username}
                comments={comments}
                postId={id}
                user_id={user_id}
              />
            </div>
          </div>

          <HiMiniXMark
            className="absolute right-5 top-5 cursor-pointer text-3xl text-gray-50"
            onClick={handleModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default Post;
