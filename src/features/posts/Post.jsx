import React, { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";

import Modal from "../../ui/Modal";
import { LoadMedia, LoadModalMedia } from "./LoadMedia";
import TopHeader from "../../ui/TopHeader";
import Header from "./Header";
import Info from "./Info";
import Comments from "./Comments";

const Post = ({ post }) => {
  const { image, comments, username, avatar, id, is_video, size } = post;

  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="flex w-full flex-col gap-3 border-gray-800 pb-3 sm:border-b 2xl:w-[30rem]">
      <Header {...post} />
      <div className="h-fit w-full rounded-lg bg-black 2xl:h-fit">
        <LoadMedia media={image} inModal={openModal}  is_video={is_video} size={size} />
      </div>

      <Info {...post} handleModal={handleModal} />

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
                postId={id}
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Post;
