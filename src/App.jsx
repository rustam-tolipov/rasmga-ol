import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import Explore from "./pages/Explore";
import Reels from "./pages/Reels";
import Likes from "./pages/Likes";
import Post from "./pages/Post";
import Search from "./pages/Search";
import Profile from "./pages/Profile";

function App() {
  return (
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
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
