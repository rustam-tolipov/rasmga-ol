import React from "react";

const Home = () => {
  return (
    <div className="px-3 py-3 pt-10">
      <Highlights />
    </div>
  );
};

export default Home;

const Highlights = () => {
  return (
    <div className="border-1 h-12 w-full border-gray-50">
      <h1>Highlight</h1>
    </div>
  );
};
