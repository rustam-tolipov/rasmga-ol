import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { HiCamera } from "react-icons/hi2";
import { createPost } from "../services/apiPosts";
import toast from "react-hot-toast";

const CreatePostForm = ({ onClose }) => {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  console.log(errors);

  const { isLoading: isCreating, mutate } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      toast.success("Post created successfully");

      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });

      reset();
      onClose(false);
    },
    onError: (error) => {
      toast.error("An error occurred: " + error.message);
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-gray-800">
      <form
        className="flex flex-col items-center gap-4 p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex items-center gap-4">
          <label htmlFor="file" className="flex items-center gap-2">
            <HiCamera className="text-3xl" />
            <span className="text-lg">Upload</span>
          </label>
          <input
            type="file"
            id="file"
            className="hidden"
            disabled={isCreating}
            {...register("image", { required: "Please upload a file" })}
          />
          {errors?.file?.message && (
            <span className="text-xs text-red-500">{errors.file.message}</span>
          )}
        </div>
        <input
          type="text"
          placeholder="Write a caption..."
          className="w-full rounded-lg bg-gray-700 px-4 py-2 text-sm text-gray-50"
          disabled={isCreating}
          {...register("content", { required: "Please write a caption" })}
        />
        {errors?.caption?.message && (
          <span className="text-xs text-red-500">{errors.caption.message}</span>
        )}
        <button
          className="w-full rounded-lg bg-gray-500 px-6 py-1 text-sm text-gray-50"
          disabled={isCreating}
        >
          {isCreating ? "Creating..." : "Create Post"}
        </button>
      </form>
    </div>
  );
};

export default CreatePostForm;
