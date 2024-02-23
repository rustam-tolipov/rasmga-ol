import React from "react";
import TopHeader from "../ui/TopHeader";
import { useNavigate } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi2";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { editProfile, getMe } from "../services/apiUsers";
import toast from "react-hot-toast";

const EditProfile = () => {
  const {
    isLoading: meLoading,
    data: me,
    error: meError,
  } = useQuery({
    queryKey: ["me"],
    queryFn: getMe,
  });

  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: me?.id,
      username: me?.username,
      bio: me?.bio,
      firstName: me?.first_name,
      lastName: me?.last_name,
    },
  });

  console.log(me);

  const { mutate, isLoading } = useMutation({
    mutationFn: editProfile,
    onSuccess: () => {
      toast.success("Profile updated successfully");
    },
    onError: (error) => {
      toast.error("An error occurred: " + error.message);
    },
  });

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <div className="flex">
      <div className="hidden h-screen border-r border-[#1f1e1e] px-12 pt-12 sm:block">
        <h2 className="text-2xl font-semibold ">Settings</h2>

        <ul className="mt-8 flex flex-col gap-4">
          <li className="text-lg">Edit Profile</li>
          <li className="text-lg">Change Password</li>
          <li className="text-lg">Your Activity</li>
        </ul>
      </div>
      <div className="flex flex-col xl:w-1/2 xl:pl-12 xl:pt-12">
        <TopHeader>
          <HiChevronLeft className="mr-auto text-2xl" onClick={handleBack} />

          <h1 className="text-md w-full text-center font-semibold">
            Edit profile
          </h1>
        </TopHeader>

        <form
          className="mt-12 flex h-full flex-col gap-4 px-4 py-4 sm:mt-0"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-2xl tracking-wide">Edit Profile</h1>

          <div className="mt-10 flex flex-row items-center gap-4">
            <div className="h-10 w-10 rounded-[50%]">
              <img
                src={`https://randomuser.me/api/portraits/men/${Math.floor(
                  Math.random() * 100,
                )}.jpg`}
                alt="profile"
                className="h-full w-full rounded-[50%]"
              />
            </div>
            <div className="flex flex-col font-medium">
              <h3 className="text-md">username</h3>
              <button className="rounded-lg text-sm text-blue-500">
                Change profile photo
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="firstName" className="text-md font-medium">
                First Name
              </label>

              <input
                type="text"
                id="firstName"
                className="mt-2 w-full rounded-sm bg-gray-700 px-4 py-2 outline-none"
                placeholder="First Name"
                {...register("firstName")}
              />
            </div>

            <div>
              <label htmlFor="lastName" className="text-md font-medium">
                Last Name
              </label>

              <input
                type="text"
                id="lastName"
                className="mt-2 w-full rounded-sm bg-gray-700 px-4 py-2 outline-none"
                placeholder="Last Name"
                {...register("lastName")}
              />
            </div>

            <div>
              <label htmlFor="name" className="text-md font-medium">
                Username
              </label>

              <input
                type="text"
                id="name"
                className="mt-2 w-full rounded-sm bg-gray-700 px-4 py-2 outline-none"
                placeholder="Username"
                {...register("username")}
              />

              <p className="mt-1 text-xs text-gray-400">Change your username</p>
            </div>
            <div>
              <label htmlFor="name" className="text-md font-medium">
                Bio
              </label>

              <textarea
                id="name"
                className="mt-2 w-full rounded-sm bg-gray-700 px-4 py-2 outline-none"
                placeholder="Bio"
                {...register("bio")}
              />

              <p className="mt-1 text-xs text-gray-400">
                Add a bio to your profile
              </p>
            </div>
            {/* <div>
              <label htmlFor="name" className="text-md font-medium">
                Gender
              </label>

              <select
                id="name"
                className="mt-2 w-full rounded-sm bg-gray-700 px-4 py-2 outline-none"
                {...register("gender")}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <p className="mt-1 text-xs text-gray-400">
                This won’t be part of your public profile.
              </p>
            </div> */}
          </div>

          <button className="mt-10 w-fit rounded-lg bg-blue-500 px-4 py-2 text-gray-50">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
