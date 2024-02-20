const Suggestion = ({ suggestedUser }) => {
  console.log(suggestedUser);

  return (
    <div className="flex items-center gap-4">
      <div className="h-12 w-12 rounded-[50%]">
        <img
          src={suggestedUser.avatar}
          alt="profile"
          className="h-full w-full rounded-[50%] object-cover"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-sm font-semibold">{suggestedUser.username}</h3>
        <span className="text-xs text-gray-400">Follows you</span>
      </div>
      <button className="ml-auto text-sm font-semibold text-blue-500">
        Follow
      </button>
    </div>
  );
};

export default Suggestion;
