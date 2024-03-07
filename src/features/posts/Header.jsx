import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DeletePost from "./DeletePost";
import useTimeAgo from "../../hooks/useTimeAgo";
import Modal from "../../ui/Modal";
import { HiMiniEllipsisHorizontal } from "react-icons/hi2";
import useDeletePost from "./useDeletePost";
import useCurrentUser from "../../hooks/useCurrentUser";
import PostInfo from "./PostInfo";

const Header = ({ username, avatar, created_at, id, user_id }) => {
  const { timeAgo } = useTimeAgo();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex w-full gap-2 px-2 sm:p-0">
      <NavLink to={`/profile/${username}`}>
        <div className="h-8 w-8 overflow-hidden rounded-full border border-gray-50 p-1">
          <img
            src={avatar}
            alt="profile"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </NavLink>
      <div className="flex w-full items-center gap-1">
        <NavLink className="text-sm font-semibold" to={`/profile/${username}`}>
          {username}
        </NavLink>
        <span className="text-2xl text-gray-400">·</span>
        <span className="text-sm text-gray-400">{timeAgo(created_at)}</span>

        <HiMiniEllipsisHorizontal
          className="ml-auto text-xl"
          onClick={() => setOpenModal(!openModal)}
        />

        {openModal && (
          <Modal openModal={openModal} onClose={setOpenModal}>
            <PostInfo
              {...{
                setOpenModal,
                user_id,
                id,
                username,
              }}
            />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Header;
