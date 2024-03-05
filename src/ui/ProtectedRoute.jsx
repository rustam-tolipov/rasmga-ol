import React, { useEffect, useState } from "react";
import useCurrentUser from "../hooks/useCurrentUser";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const authToken = JSON.parse(localStorage.getItem("auth-token"));
  const token = Cookies.get("token");

  // 1. Load the authenticated user
  const { currentUserLoading: isLoading, currentUser: user } = useCurrentUser();

  // 2. If the user is not authenticated, redirect to the login page
  useEffect(() => {
    if (!token && !user && !isLoading) {
      navigate("/login");
    }
  }, [user, navigate, isLoading, token]);

  const [loadingText, setLoadingText] = useState("Loading...");

  setTimeout(() => {
    setLoadingText("Still loading...");
  }, 1000);

  setTimeout(() => {
    setLoadingText(
      "The Render server takes a bit to wake up, thanks for your patience...",
    );
  }, 2000);

  setTimeout(() => {
    setLoadingText("Thanks for your patience...");
  }, 4000);

  // 3. While loading, show a loading spinner
  if (isLoading) {
    return (
      <div className="flex h-screen animate-pulse items-center justify-center bg-[#121212] text-gray-50">
        <h1>{loadingText}</h1>
      </div>
    );
  }

  if (!token) {
    navigate("/login");
  }

  // 4. If the user is authenticated, show the children
  if (token && user) {
    return children;
  }
};

export default ProtectedRoute;
