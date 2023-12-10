import React from "react";
import TopHeader from "../ui/TopHeader";
import { useNavigate } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi2";

const EditProfile = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col">
      <TopHeader>
        <HiChevronLeft className="mr-auto text-2xl" onClick={handleBack} />

        <h1 className="w-full text-center text-md font-semibold">Edit profile</h1>
      </TopHeader>
    </div>
  );
};

export default EditProfile;
