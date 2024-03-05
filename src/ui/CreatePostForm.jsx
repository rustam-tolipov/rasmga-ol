import React, { useState } from "react";
import { HiCamera, HiChevronLeft } from "react-icons/hi2";
import { FileUploader } from "react-drag-drop-files";
import { motion, AnimatePresence } from "framer-motion";
import useCreatePost from "../features/posts/useCreatePost";

const fileTypes = ["JPG", "PNG", "GIF", "MP4"];

const imageSizes = ["standard", "horizontal", "vertical"];
const videoSizes = ["reels", "standard", "horizontal"];

const CreatePostForm = ({ onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState("");
  const [content, setContent] = useState("");
  const [size, setSize] = useState("standard");

  const { isLoading, createPost } = useCreatePost();

  const handleShare = () => {
    const is_video = fileType === "video/mp4" ? true : false;
    createPost({ image: file, content, size, is_video });

    setTimeout(() => {
      onClose(false);
      setFile(null);
      setCurrentPage(0);
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

  const handleCancel = () => {
    alert("Are you sure you want to cancel?");
    setFile(null);
    setCurrentPage(0);
    onClose(false);
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
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-gray-800">
      <AnimatePresence>
        <motion.div
          className={`flex h-[26rem] w-[25rem] flex-col font-medium text-gray-50`}
          initial={{ width: "25rem" }}
          animate={currentPage === 2 ? { width: "40rem" } : { width: "25rem" }}
          exit={{ width: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex w-full items-center justify-between border-b border-gray-700 px-2 py-2">
            {currentPage > 0 ? (
              <HiChevronLeft
                className="text-xl"
                onClick={() =>
                  currentPage > 1 ? handleBack() : handleCancel()
                }
              />
            ) : null}

            <span className="mx-auto">
              {currentPage === 0 ? "Create Post" : "Crop"}
            </span>

            {file && (
              <button
                className="rounded-sm px-2 text-blue-500"
                onClick={() =>
                  currentPage === 2 ? handleShare() : handleNext()
                }
                disabled={isLoading}
              >
                {currentPage === 2
                  ? isLoading
                    ? "Creating..."
                    : "Share"
                  : "Next"}
              </button>
            )}
          </div>

          {currentPage === 0 && (
            <motion.div
              className="relative flex h-full w-full items-center justify-center rounded-b-md"
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

                <button className="mt-4 w-full rounded-lg bg-blue-500 px-6 py-1 text-sm text-gray-50">
                  Select from computer
                </button>
              </FileUploader>
            </motion.div>
          )}
          {currentPage === 1 && (
            <motion.div
              className="flex h-full w-full items-center justify-center overflow-hidden rounded-b-md bg-slate-400"
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
              className="flex h-full w-full justify-center overflow-hidden rounded-b-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex h-full w-1/2">
                <LoadMedia media={URL.createObjectURL(file)} type={fileType} />
              </div>

              <div className="flex w-1/2 p-4">
                <textarea
                  type="text"
                  placeholder="Write a caption..."
                  maxLength="2200"
                  className="h-fit w-full rounded-lg bg-gray-700 px-4 py-2 text-sm text-gray-50"
                  disabled={isLoading}
                  onChange={handleContent}
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CreatePostForm;

const LoadMedia = ({ media, type }) => {
  return type === "video/mp4" ? (
    <video
      src={media}
      alt="post"
      className="h-full w-full object-cover"
      controls
    />
  ) : (
    <img src={media} alt="post" className="h-full w-full object-cover" />
  );
};
