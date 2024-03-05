import React from "react";
import useLogin from "../features/authentication/useLogin";
import { NavLink } from "react-router-dom";
import LoginForm from "../features/authentication/LoginForm";

const Login = () => {
  const { login, isLoading, error } = useLogin();

  const handleGuestCheckout = () => {
    login({ username: "bob", email: "bob@gmail.com", password: "password" });
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-2">
      <div className="flex flex-col-reverse gap-6 p-4 lg:w-1/2 lg:flex-row">
        <div className="flex w-full flex-col gap-6 border-t pt-4 sm:border-none sm:p-0">
          <h1 className="hidden text-2xl font-thin text-gray-50 sm:block">
            GUEST CHECKOUT
          </h1>

          <p className="text-gray-300">
            You can checkout as a guest without creating an account and signing
            in.
          </p>

          <button
            type="button"
            className="mt-4 rounded-sm bg-gray-700 px-2 py-3 text-white hover:bg-gray-500"
            onClick={handleGuestCheckout}
          >
            {isLoading ? "Loading..." : "Continue as Guest"}
          </button>
        </div>
        <span className="hidden h-full w-[1px] bg-gray-500 lg:block"></span>
        <div className="flex w-full flex-col">
          <h1 className="text-2xl font-thin text-gray-50">
            HAVE AN ACCOUNT? LOGIN
          </h1>

          <LoginForm login={login} isLoading={isLoading} error={error} />
          <div className="flex items-center gap-3">
            <span className="text-gray-500">Don&apos;t have an account?</span>
            <NavLink
              to="/signup"
              className="animate-pulse text-gray-50 hover:text-gray-300 hover:underline"
            >
              SIGN UP
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

/* <div className="flex flex-col items-center gap-4 text-gray-50 shadow-lg shadow-[#252627]">
          <img src="/images/logo.svg" alt="RasmgaOl" className="w-40" />
          <CiCamera className="text-6xl" />

          <h1 className="text-2xl font-thin">USER LOGIN</h1>
        </div> */
