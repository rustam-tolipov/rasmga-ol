import useUserPosts from "../posts/useUserPosts";
import { NavLink } from "react-router-dom";
import { LoadingProfilePosts } from "../loading/LoadingProfile";
import LoadPreviewMedia from "../../pages/LoadPreviewMedia";

const ProfilePosts = () => {
  const { isLoading, posts, error } = useUserPosts();

  if (isLoading) {
    return <LoadingProfilePosts />;
  }

  return <Posts posts={posts} />;
};

export default ProfilePosts;

const Posts = ({ posts }) => {
  return (
    <div className="grid grid-cols-3 gap-1">
      {posts.length > 0 &&
        posts.map((post, index) => (
          <NavLink
            key={index}
            to={`/profile/${post.username}/post/${post.id}`}
            className="h-full w-full overflow-hidden md:h-80"
          >
            <LoadPreviewMedia
              key={index}
              media={post.image.url}
              comments={post.comments.length}
              likes={post.likes.length}
            />
          </NavLink>
        ))}
    </div>
  );
};
