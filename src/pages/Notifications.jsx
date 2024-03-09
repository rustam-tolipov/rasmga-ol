import React from "react";
import { HiMiniXMark } from "react-icons/hi2";
import TopHeader from "../ui/TopHeader";
import { NavLink, useNavigate } from "react-router-dom";
import useNotifications from "../hooks/useNotifications";
import LoadingNotifications from "../features/loading/LoadingNotifications";

const Notifications = ({ onClose }) => {
  const { notificationsLoading, notifications } = useNotifications();

  if (notificationsLoading) {
    return <LoadingNotifications />;
  }

  return (
    <div className="flex flex-col gap-3 xl:px-4">
      <TopHeader title="Notifications" />

      <div className="mt-12 flex flex-col gap-6 px-4 py-3 sm:mt-0">
        {notifications?.length === 0 && (
          <div className="text-center text-gray-200">No notifications yet</div>
        )}
        {notifications?.map((notification, index) => (
          <Notification key={index} notification={notification} />
        ))}
      </div>
    </div>
  );
};

export default Notifications;

const Notification = ({ notification }) => {
  return (
    <NavLink
      className="flex items-center gap-4"
      to={`/profile/${notification.username}/post/${notification.post_id}`}
    >
      <div className="h-[2.8rem] w-[2.8rem] rounded-[50%]">
        <img
          src={notification.avatar}
          alt="profile"
          className="h-full w-full rounded-[50%]"
        />
      </div>
      <div className="flex max-h-[10rem] max-w-[20rem] flex-col gap-1 overflow-hidden overflow-ellipsis text-gray-200">
        <h3 className="text-sm">{notification.username}</h3>
        <p className="text-xs">{notification.message}</p>
      </div>
      <div className="ml-auto h-[2.8rem] w-[2.8rem]">
        {notification.thumbnail.endsWith(".mp4") ? (
          <video src={notification.thumb} muted className="h-full w-full" />
        ) : (
          <img
            src={notification.thumb}
            alt="profile"
            className="h-full w-full"
          />
        )}
      </div>
    </NavLink>
  );
};
