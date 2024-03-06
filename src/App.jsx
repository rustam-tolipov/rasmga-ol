import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import Explore from "./pages/Explore";
import Reels from "./pages/Reels";
import Post from "./pages/Post";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import EditProfile from "./pages/EditProfile";
import Followers from "./pages/Followers";
import Followings from "./pages/Followings";
import CreatePost from "./pages/CreatePost";
import Notifications from "./pages/Notifications";
import ProtectedRoute from "./ui/ProtectedRoute";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="explore" element={<Explore />} />
            <Route path="search" element={<Search />} />
            <Route path="reels" element={<Reels />} />
            <Route path="followers" element={<Followers />} />
            <Route path="followings" element={<Followings />} />
            <Route path="create" element={<CreatePost />} />
            <Route path="notifications" element={<Notifications />} />

            <Route path="account/">
              <Route path="settings" element={<Settings />} />
              <Route path="edit" element={<EditProfile />} />
              {/* <Route path="password" element={<Password />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="activity" element={<Activity />} /> */}
            </Route>

            <Route path="profile/">
              <Route path=":username" element={<Profile />} />
              <Route path=":username/followers" element={<Followers />} />
              <Route path=":username/followings" element={<Followings />} />
              <Route path=":username/post/:id" element={<Post />} />
            </Route>
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            mawWidth: "900px",
            padding: "16px 24px",
            color: "#fff",
            background: "#333",
            borderRadius: "8px",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
