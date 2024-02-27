import React, { useEffect, useRef, useState } from "react";
import Reveal from "../../ui/Reveal";
import { HiMiniPlay } from "react-icons/hi2";
import { useInView } from "framer-motion";

export const LoadMedia = ({ media }) => {
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

export const LoadModalMedia = ({ media }) => {
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
