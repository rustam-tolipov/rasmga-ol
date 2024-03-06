import React from "react";
import useForgotPassword from "../features/authentication/useForgotPassword";
import ForgotPasswordForm from "../features/authentication/ForgotPasswordForm";

const ForgotPassword = () => {
  const { forgotPassword, isLoading, error } = useForgotPassword();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-2">
      <div className="flex flex-col-reverse gap-6 p-4 lg:w-1/4 lg:flex-row">
        <div className="flex w-full flex-col">
          <h1 className="text-2xl font-thin text-gray-50">FORGOT PASSWORD</h1>

          <ForgotPasswordForm
            forgotPassword={forgotPassword}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
