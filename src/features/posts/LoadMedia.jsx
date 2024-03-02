import React, { useEffect, useRef, useState } from "react";
import Reveal from "../../ui/Reveal";
import {
  HiMiniPlay,
  HiMiniSpeakerWave,
  HiMiniSpeakerXMark,
} from "react-icons/hi2";
import { useInView } from "framer-motion";

export const LoadMedia = ({ media, inModal, is_video, size }) => {
  const ref = useRef();
  const testRef = useRef();
  const isInView = useInView(testRef);
  const [playVideo, setPlayVideo] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (is_video) {
      if (!isInView || inModal || muted) {
        ref.current.pause();
        setPlayVideo(false);
      } else {
        ref.current.play();
      }
    }
  }, [inModal, isInView, is_video, muted]);

  const handlePlayVideo = () => {
    ref.current.play();
    ref.current.muted = false;
    setMuted(false);
    setPlayVideo(false);
  };

  const handlePauseVideo = () => {
    ref.current.pause();
    setPlayVideo(true);
  };

  const handleMuteVideo = () => {
    ref.current.muted = !muted;
    setMuted(!muted);
  };

  if (is_video) {
    return (
      <Reveal>
        <video
          src={
            size === "standard"
              ? media.standard?.url
              : size === "vertical"
                ? media.vertical?.url
                : size === "horizontal"
                  ? media.horizontal?.url
                  : media.reels?.url
          }
          alt="post"
          className="mx-auto h-fit max-h-[80dvh] w-fit object-cover lg:max-h-[80dvh]"
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

        {muted ? (
          <HiMiniSpeakerXMark
            className="absolute bottom-4 right-4 text-2xl text-white"
            onClick={handleMuteVideo}
          />
        ) : (
          <HiMiniSpeakerWave
            className="absolute bottom-4 right-4 text-2xl text-white"
            onClick={handleMuteVideo}
          />
        )}

        <div
          className="absolute left-1/2 top-1/2 flex h-fit w-fit -translate-x-1/2 -translate-y-1/2 transform items-center justify-center"
          ref={testRef}
        ></div>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <img
        src={
          size === "standard"
            ? media.standard?.url
            : size === "vertical"
              ? media.vertical?.url
              : size === "horizontal"
                ? media.horizontal?.url
                : media.reels?.url
        }
        alt="post"
        className="mx-auto h-fit max-h-[80dvh] w-fit object-cover lg:max-h-[80dvh]"
      />
    </Reveal>
  );
};

export const LoadModalMedia = ({ media }) => {
  const videoRef = useRef();
  const [playVideo, setPlayVideo] = useState(false);

  const handlePlayVideo = () => {
    videoRef.current.play();
    videoRef.current.muted = false;
    setPlayVideo(!playVideo);
  };

  const handlePauseVideo = () => {
    videoRef.current.pause();
    setPlayVideo(!playVideo);
  };

  if (media && media.includes("video")) {
    return (
      <div className="relative">
        <video
          src={media}
          alt="post"
          className="z-0 max-h-[80dvh] w-full"
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
