import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  HiCamera,
  HiChevronLeft,
  HiChevronRight,
  HiMiniXMark,
} from "react-icons/hi2";
import { createPost } from "../services/apiPosts";
import toast from "react-hot-toast";
import { FileUploader } from "react-drag-drop-files";
import { motion, AnimatePresence } from "framer-motion";
import TopHeader from "../ui/TopHeader";
import { useNavigate } from "react-router-dom";

const fileTypes = ["JPG", "PNG", "GIF", "MP4"];

const CreatePost = () => {
  const [open, setOpen] = useState(false);

  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const [isCreating, setIsCreating] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const { isLoading, mutate } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      toast.success("Post created successfully");

      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });

      reset();
      setOpen(false);
      navigate("/");
    },
    onError: (error) => {
      toast.error("An error occurred: " + error.message);
    },
  });

  const handleShare = () => {
    setIsCreating(true);
    mutate({ image: file, content });
  };

  const handleChange = (file) => {
    setFile(file);
    setFileType(file.type);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleCancel = () => {
    alert("Are you sure you want to cancel?");
    setFile(null);
    setCurrentPage(0);
    setIsCreating(false);
    setOpen(false);
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
            {isCreating ? "Creating..." : "Share"}
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
