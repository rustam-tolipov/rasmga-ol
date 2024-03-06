import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CiLock, CiMail, CiUser } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const LoginForm = ({
  forgotPassword,
  login,
  signup,
  isLoading,
  error,
  isLogin = true,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    if (isLogin) {
      login(data);
    } else {
      signup(data);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4 rounded-md border-gray-700 py-8 text-gray-50"
      >
        {/* USERNAME */}
        {!isLogin ? (
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center gap-1 border border-gray-600 px-2">
              <CiUser className="text-2xl" />

              <input
                type="text"
                className="w-full rounded-md bg-transparent p-2 text-xl font-light placeholder-gray-300 shadow-md outline-none"
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 3,
                    message: "Username must be at least 3 characters",
                  },
                })}
                placeholder="Username"
              />
            </div>
            {errors.username && (
              <p className="italic text-red-600">{errors.username.message}</p>
            )}
          </div>
        ) : null}

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

        {/* PASSWORD */}
        <div className="flex flex-col gap-1">
          <div className="flex flex-row items-center gap-1 border border-gray-600 px-2">
            <CiLock className="text-2xl" />
            <input
              type="password"
              className="w-full rounded-md bg-transparent p-2 text-xl font-light placeholder-gray-300 shadow-md outline-none"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Password"
            />
          </div>
          {errors.password && (
            <p className="italic text-red-600">{errors.password.message}</p>
          )}
        </div>

        {/* PASSWORD CONFIRMATION */}
        {isLogin ? null : (
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center gap-1 border border-gray-600 px-2">
              <CiLock className="text-2xl" />
              <input
                type="password"
                className="w-full rounded-md bg-transparent p-2 text-xl font-light placeholder-gray-300 shadow-md outline-none"
                {...register("passwordConfirmation", {
                  required: "Password confirmation is required",
                  minLength: {
                    value: 6,
                    message:
                      "Password confirmation must be at least 6 characters",
                  },
                  validate: (value) =>
                    value === getValues("password") || "Passwords do not match",
                })}
                placeholder="Password Confirmation"
              />
            </div>
            {errors.passwordConfirmation && (
              <p className="italic text-red-600">
                {errors.passwordConfirmation.message}
              </p>
            )}
          </div>
        )}

        <button
          type="submit"
          className={`mt-6 rounded-sm bg-gray-700 px-2 py-3 text-white hover:bg-gray-500 ${isLoading ? "animate-pulse cursor-not-allowed" : ""}`}
          disabled={isLoading}
        >
          {isLoading ? "..." : isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
    </>
  );
};

export default LoginForm;
