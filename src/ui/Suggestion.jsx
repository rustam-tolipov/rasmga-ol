import { NavLink } from "react-router-dom";
import useFollow from "../hooks/useFollow";

const Suggestion = ({ suggestedUser }) => {
  const { followUser } = useFollow();

  return (
    <div className="flex items-center gap-4">
      <NavLink
        className="h-12 w-12 cursor-pointer rounded-[50%]"
        to={`/profile/${suggestedUser.username}`}
      >
        <img
          src={suggestedUser.avatar}
          alt="profile"
          className="h-full w-full rounded-[50%] object-cover"
        />
      </NavLink>
      <NavLink
        className="flex cursor-pointer flex-col"
        to={`/profile/${suggestedUser.username}`}
      >
        <h3 className="text-sm font-semibold">{suggestedUser.username}</h3>
        <span className="text-xs text-gray-400">Follows you</span>
      </NavLink>
      <button
        className="ml-auto text-sm font-semibold text-blue-500"
        onClick={() => followUser(suggestedUser.id)}
      >
        Follow
      </button>
    </div>
  );
};

export default Suggestion;
