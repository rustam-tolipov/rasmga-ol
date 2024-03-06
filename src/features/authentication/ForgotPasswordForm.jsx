import React from "react";
import { useForm } from "react-hook-form";
import { CiLock, CiMail, CiUser } from "react-icons/ci";

const ForgotPasswordForm = ({ forgotPassword, isLoading, error }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    forgotPassword(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-4 rounded-md border-gray-700 py-8 text-gray-50"
    >
      {/* EMAIL */}
      <div className="flex flex-col gap-1">
        <div className="flex flex-row items-center gap-1 border border-gray-600 px-2">
          <CiMail className="text-2xl" />
          <input
            type="text"
            className="w-full rounded-md bg-transparent p-2 text-xl font-light placeholder-gray-300 shadow-md outline-none"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
            placeholder="Email"
          />
        </div>
        {errors.email && (
          <p className="italic text-red-600">{errors.email.message}</p>
        )}
      </div>

      <button
        type="submit"
        className={`mt-6 rounded-sm bg-gray-700 px-2 py-3 text-white hover:bg-gray-500 ${isLoading ? "animate-pulse cursor-not-allowed" : ""}`}
      >
        {isLoading ? "Sending email..." : "Send Reset Email"}
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
