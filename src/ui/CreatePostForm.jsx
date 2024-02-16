import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { HiCamera, HiChevronLeft } from "react-icons/hi2";
import { createPost } from "../services/apiPosts";
import toast from "react-hot-toast";
import { FileUploader } from "react-drag-drop-files";
import { motion, AnimatePresence } from "framer-motion";

const fileTypes = ["JPG", "PNG", "GIF"];

const CreatePostForm = ({ onClose }) => {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const [isCreating, setIsCreating] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [file, setFile] = useState(null);
  const [content, setContent] = useState("");

  const { isLoading, mutate } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      toast.success("Post created successfully");

      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });

      reset();
      onClose(false);
      setIsCreating(false);
    },
    onError: (error) => {
      toast.error("An error occurred: " + error.message);
    },
  });

  const handleShare = () => {
    mutate({ image: file, content });
  };

  const handleChange = (file) => {
    setFile(file);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleCancel = () => {
    alert("Are you sure you want to cancel?");
    setFile(null);
    onClose(false);
  };

  const handleBack = () => {
    console.log(currentPage);
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
        <div
          className={`flex h-[26rem] flex-col font-medium text-gray-50 ${currentPage === 2 ? "w-[40rem]" : "w-[25rem]"}`}
        >
          <div className="flex w-full items-center justify-between border-b border-gray-700 px-2 py-2">
            {currentPage > 0 ? (
              <HiChevronLeft className="text-xl" onClick={() => handleBack()} />
            ) : null}

            <span className="mx-auto">
              {currentPage === 0 ? "Create Post" : "Crop"}
            </span>

            <button
              className="rounded-sm px-2 text-blue-500"
              onClick={() => (currentPage === 2 ? handleShare() : handleNext())}
            >
              {currentPage === 2 ? "Share" : "Next"}
            </button>
          </div>

          {currentPage === 0 && (
            <motion.div
              className="flex h-full w-full items-center justify-center rounded-b-md"
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
                  onClick={() => setIsCreating(true)}
                >
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
              <img
                src={URL.createObjectURL(file)}
                alt="post"
                className="h-full w-full object-cover"
              />
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
              <img
                src={URL.createObjectURL(file)}
                alt="post"
                className="h-full w-1/2 object-cover"
              />

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
        </div>
      </AnimatePresence>
    </div>
  );
};

export default CreatePostForm;
