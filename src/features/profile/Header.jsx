import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import useCurrentUser from "../../hooks/useCurrentUser";
import useProfile from "../../hooks/useProfile";
import useUnFollow from "../../hooks/useUnFollow";
import useFollow from "../../hooks/useFollow";
import Modal from "../../ui/Modal";
import Followers from "./Followers";
import Followings from "./Followings";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const { username: profileName } = useParams();

  const { currentUserLoading, currentUser, currentUserError } =
    useCurrentUser();

  const { userLoading, user, userError } = useProfile();
  const { isUnFollowing, unFollowUser } = useUnFollow();
  const { isFollowing, followUser } = useFollow();

  if (userLoading || currentUserLoading) {
    return <div>Loading...</div>;
  }

  if (userError) {
    return <div>Error: {userError?.message}</div>;
  }

  const {
    avatar,
    username,
    bio,
    posts_count,
    followees_count,
    followers_count,
    is_followed,
    id,
  } = user;

  return (
    <>
      {openModal && (
        <Modal openModal={openModal} onClose={setOpenModal}>
          {openModal === "followers" ? (
            <Followers id={id} />
          ) : (
            <Followings id={id} />
          )}
        </Modal>
      )}

      <div className="mt-12 flex w-full items-center justify-between px-4 py-4 md:mt-0 md:h-[40dvh] md:justify-start xl:w-[70dvw]">
        <div className="flex items-center justify-center">
          <img
            src={avatar}
            alt="profile"
            className="aspect-h-1 w-24 rounded-full md:m-24 md:h-48 md:w-48"
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="mr-auto flex items-center gap-4 md:mr-0">
              <h3 className="text-xl font-light tracking-wide">{username}</h3>
            </div>
            <div className="flex items-center gap-2">
              {currentUser?.id !== id ? (
                <FollowButton is_followed={is_followed} id={id} />
              ) : (
                <EditButton />
              )}
            </div>
          </div>

          <div className="hidden gap-6 md:flex">
            <p className="text-md font-medium">
              {posts_count} {posts_count > 1 ? "posts" : "post"}
            </p>
            <p
              className="text-md cursor-pointer font-medium"
              onClick={() => setOpenModal("followers")}
            >
              {followers_count} followers
            </p>
            <p
              className="text-md font-medium"
              onClick={() => setOpenModal("followings")}
            >
              {followees_count} following
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-md font-medium">{username}</p>
            <p className="hidden text-sm md:block">
              {bio || "Lorem ipsum dolor sit amet, consectetur"}
            </p>

            <p className="text-xs text-gray-400">
              5000 accounts reached in the last 30 <br /> days.
              <strong>View insights</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 py-4 sm:hidden">
        <p className="text-md font-medium">{username}</p>
        <p className="text-sm">
          {bio || "Lorem ipsum dolor sit amet, consectetur"}
        </p>
      </div>
      <div className="flex flex-row items-center justify-around border-y border-slate-600 p-2 px-4 sm:hidden">
        <div className="flex flex-col items-center">
          <h3 className="text-md font-semibold">{posts_count}</h3>
          <p className="text-xs text-gray-400">Posts</p>
        </div>
        <NavLink
          className="flex flex-col items-center"
          to={`/profile/${username}/followers`}
        >
          <h3 className="text-md font-semibold">{followers_count}</h3>
          <p className="cursor-pointer text-xs text-gray-400">Followers</p>
        </NavLink>
        <NavLink
          className="flex flex-col items-center"
          to={`/profile/${username}/followings`}
        >
          <h3 className="text-md font-semibold">{followees_count}</h3>
          <p className="cursor-pointer text-xs text-gray-400">Following</p>
        </NavLink>
      </div>
    </>
  );
};

export default Header;

const FollowButton = ({ is_followed, id }) => {
  const { isUnFollowing, unFollowUser } = useUnFollow();
  const { isFollowing, followUser } = useFollow();

  return (
    <button
      onClick={() => {
        if (is_followed) {
          unFollowUser(id);
        } else {
          followUser(id);
        }
      }}
      className={`rounded-lg bg-gray-500 px-6 py-1 text-sm text-gray-50 ${
        is_followed ? "bg-red-500" : ""
      }`}
    >
      {is_followed ? "Unfollow" : "Follow"}
    </button>
  );
};

const EditButton = () => {
  return (
    <NavLink
      to="/account/edit"
      className="rounded-lg bg-gray-500 px-6 py-1 text-sm text-gray-50"
    >
      Edit Profile
    </NavLink>
  );
};
