import React, { useState } from "react";
import { HiCamera, HiChevronRight, HiMiniXMark } from "react-icons/hi2";
import { FileUploader } from "react-drag-drop-files";
import { motion, AnimatePresence } from "framer-motion";
import TopHeader from "../ui/TopHeader";
import { useNavigate } from "react-router-dom";
import useCreatePost from "../features/posts/useCreatePost";

const fileTypes = ["JPG", "PNG", "GIF", "MP4"];

const imageSizes = ["standard", "horizontal", "vertical"];
const videoSizes = ["reels", "standard", "horizontal"];

const CreatePost = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState("");
  const [content, setContent] = useState("");
  const [size, setSize] = useState(
    file ? (fileType === "video/mp4" ? "reels" : "standard") : "",
  );

  const navigate = useNavigate();

  const { isLoading, createPost } = useCreatePost();

  const handleShare = () => {
    const is_video = fileType === "video/mp4" ? true : false;
    createPost({ image: file, content, size, is_video });

    setTimeout(() => {
      setFile(null);
      setCurrentPage(0);
      navigate("/");
    }, 1000);
  };

  const handleChange = (file) => {
    setFile(file);
    setFileType(file.type);
  };

  const handleSize = (e) => {
    setSize(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleBack = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage === 2) return;
    setCurrentPage((prev) => prev + 1);
  };

  if (file && currentPage === 0) return setCurrentPage((prev) => prev + 1);

  return (
    <div className="flex h-[92dvh] flex-col gap-3 xl:px-4">
      <TopHeader>
        <HiMiniXMark className="mr-auto text-4xl" onClick={handleBack} />
        <h1 className="w-full text-center text-xl">Create Post</h1>

        {currentPage === 2 ? (
          <button
            className="text-md ml-auto rounded-lg py-1 font-semibold text-blue-500 xl:ml-20"
            onClick={handleShare}
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Share"}
          </button>
        ) : (
          <HiChevronRight
            className="text-3xl"
            onClick={handleNext}
            disabled={isLoading}
          />
        )}
      </TopHeader>
      <AnimatePresence>
        <div className="flex h-full w-full flex-col items-center py-12 font-medium text-gray-50">
          {currentPage === 0 && (
            <motion.div
              className="flex h-full w-full items-center  justify-center rounded-b-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
              >
                <div className="flex flex-col items-center gap-2 text-gray-100">
                  <HiCamera className="text-7xl" />
                  <span className="text-lg">Drag photos and videos here</span>
                </div>

                <button
                  className="mt-4 w-full rounded-lg bg-blue-500 px-6 py-1 text-sm text-gray-50"
                  disabled={isLoading}
                >
                  Select from computer
                </button>
              </FileUploader>
            </motion.div>
          )}
          {currentPage === 1 && (
            <motion.div
              className="flex h-full w-full items-center justify-center overflow-hidden rounded-b-md bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <LoadMedia media={URL.createObjectURL(file)} type={fileType} />

              <select
                className="absolute right-2 top-12 w-fit rounded-lg bg-gray-700 px-4 py-2 text-sm text-gray-50 outline-none"
                disabled={isLoading}
                onChange={handleSize}
              >
                {fileType === "video/mp4"
                  ? videoSizes.map((size, index) => (
                      <option key={index} value={size}>
                        {size}
                      </option>
                    ))
                  : imageSizes.map((size, index) => (
                      <option key={index} value={size}>
                        {size}
                      </option>
                    ))}
              </select>
            </motion.div>
          )}
          {currentPage === 2 && (
            <motion.div
              className="flex h-fit w-full items-center justify-center overflow-hidden rounded-b-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex h-fit w-32">
                <LoadMedia media={URL.createObjectURL(file)} type={fileType} />
              </div>

              <div className="flex h-full w-full">
                <textarea
                  type="text"
                  placeholder="Write a caption..."
                  maxLength="2200"
                  className="h-full w-full bg-gray-700 px-4 py-2 text-sm text-gray-50"
                  disabled={isLoading}
                  onChange={handleContent}
                />
              </div>
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default CreatePost;

const LoadMedia = ({ media, type }) => {
  return type === "video/mp4" ? (
    <video
      src={media}
      alt="post"
      className="h-fit max-h-[80vh] w-full object-cover"
      controls
    />
  ) : (
    <img
      src={media}
      alt="post"
      className="h-fit max-h-[80vh] w-full object-cover"
    />
  );
};
