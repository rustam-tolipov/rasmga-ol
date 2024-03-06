import React from "react";
import ResetPasswordForm from "../features/authentication/ResetPasswordForm";
import useResetPassword from "../features/authentication/useResetPassword";

const ResetPassword = () => {
  const { resetPassword, isLoading, error } = useResetPassword();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-2">
      <div className="flex flex-col-reverse gap-6 p-4 lg:w-1/4 lg:flex-row">
        <div className="flex w-full flex-col">
          <h1 className="text-2xl font-thin text-gray-50">RESET PASSWORD</h1>

          <ResetPasswordForm
            resetPassword={resetPassword}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
