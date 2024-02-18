import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import { Query, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

/* import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import Explore from "./pages/Explore";
import Reels from "./pages/Reels";
import Likes from "./pages/Likes";
import Post from "./pages/Post";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import EditProfile from "./pages/EditProfile"; */

const Home = React.lazy(() => import("./pages/Home"));
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));
const AppLayout = React.lazy(() => import("./ui/AppLayout"));
const Login = React.lazy(() => import("./pages/Login"));
const Explore = React.lazy(() => import("./pages/Explore"));
const Reels = React.lazy(() => import("./pages/Reels"));
const Likes = React.lazy(() => import("./pages/Likes"));
const Post = React.lazy(() => import("./pages/Post"));
const Search = React.lazy(() => import("./pages/Search"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Settings = React.lazy(() => import("./pages/Settings"));
const EditProfile = React.lazy(() => import("./pages/EditProfile"));

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
      <ReactQueryDevtools initialIsOpen={true} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="explore" element={<Explore />} />
            <Route path="search" element={<Search />} />
            <Route path="reels" element={<Reels />} />
            <Route path="notifications" element={<Likes />} />
            <Route path="create" element={<Post />} />
            <Route path="profile" element={<Profile />} />
            <Route path="account/">
              <Route path="settings" element={<Settings />} />
              <Route path="edit" element={<EditProfile />} />
              {/* <Route path="password" element={<Password />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="activity" element={<Activity />} /> */}
            </Route>
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
