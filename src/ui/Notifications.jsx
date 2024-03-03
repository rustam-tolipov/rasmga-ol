import React from "react";
import { HiMiniXMark } from "react-icons/hi2";
import TopHeader from "../ui/TopHeader";
import { useParams } from "react-router-dom";
import useFollowings from "../hooks/useFollowings";
import useFollowers from "../hooks/useFollowers";
import useNotifications from "../hooks/useNotifications";
import { createPortal } from "react-dom";

const Notifications = ({ onClose }) => {
  const { notificationsLoading, notifications, notificationsError } =
    useNotifications();

  return createPortal(
    <Overlay onClose={onClose}>
      <div className="absolute left-[16dvw] top-0 h-screen w-fit bg-black">
        <div className="mt-12 flex flex-col gap-6 px-6 py-3 sm:mt-0">
          {notifications?.map((notification, index) => (
            <Notification key={index} notification={notification} />
          ))}
        </div>
      </div>
    </Overlay>,

    document.body,
  );
};

export default Notifications;

const Notification = ({ notification }) => {

  return (
    <div className="flex items-center gap-4">
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
        {notification.thumb.includes(".mp4") ? (
          <video
            src={notification.thumb}
            muted
            className="h-full w-full"
          />
        ) : (
          <img
            src={notification.thumb}
            alt="profile"
            className="h-full w-full"
          />
        )}
      </div>
    </div>
  );
};

const Overlay = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center">
      <div className="h-full w-full" onClick={() => onClose(false)}></div>
      <div className="z-20">{children}</div>
    </div>
  );
};
