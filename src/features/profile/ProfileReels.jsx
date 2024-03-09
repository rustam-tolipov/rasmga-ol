import useUserPosts from "../posts/useUserPosts";
import { NavLink } from "react-router-dom";
import { LoadingProfilePosts } from "../loading/LoadingProfile";
import LoadPreviewMedia from "../../pages/LoadPreviewMedia";

const ProfileReels = () => {
  const { isLoading, posts, error } = useUserPosts();

  if (isLoading) {
    return <LoadingProfilePosts />;
  }

  const reels = posts?.filter((post) => post.image?.reels?.url.endsWith("mp4"));

  return <Reels reels={reels} />;
};

export default ProfileReels;

const Reels = ({ reels }) => {
  return (
    <div className="grid grid-cols-3 gap-1 md:grid-cols-4">
      {reels?.map((reel, index) => (
        <NavLink key={index} to={`/profile/${reel.username}/post/${reel.id}`}>
          <LoadPreviewMedia
            key={index}
            media={reel.image.thumbnail.url}
            comments={reel.comments.length}
            likes={reel.likes.length}
          />
        </NavLink>
      ))}
    </div>
  );
};
