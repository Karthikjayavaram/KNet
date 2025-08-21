import React from "react";
import { dummyUserData } from "../assets/assets";
import { MapPin, UserPlus, Plus, MessageCircle } from "lucide-react";

const UserCard = ({ user }) => {
  const currentUser = dummyUserData;

  const handleFollow = async () => {};
  const handleConnectionRequest = async () => {};

  return (
    <div
      key={user._id}
      className="p-6 flex flex-col justify-between w-72 
      shadow-lg border border-gray-100 rounded-2xl 
      bg-white hover:shadow-2xl transition duration-300"
    >
      {/* Profile Info */}
      <div className="text-center">
        <img
          src={user.profile_picture}
          alt={user.full_name}
          className="rounded-full w-20 h-20 shadow-md mx-auto object-cover"
        />
        <p className="mt-4 font-semibold text-lg">{user.full_name}</p>
        {user.username && (
          <p className="text-gray-500 text-sm">@{user.username}</p>
        )}
        {user.bio && (
          <p className="text-gray-600 mt-2 text-sm px-2 italic">{user.bio}</p>
        )}
      </div>

      {/* Location + Followers */}
      <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-600">
        <div className="flex items-center gap-1 border border-gray-200 
        rounded-full px-3 py-1 shadow-sm">
          <MapPin className="w-4 h-4 text-indigo-500" />
          {user.location}
        </div>
        <div className="flex items-center gap-1 border border-gray-200 
        rounded-full px-3 py-1 shadow-sm">
          <span className="font-medium">{user.followers.length}</span> Followers
        </div>
      </div>

      {/* Buttons */}
      <div className="flex mt-6 gap-3">
        {/* Follow Button */}
        <button
          onClick={handleFollow}
          disabled={currentUser?.following.includes(user._id)}
          className={`w-full py-2 rounded-lg flex justify-center items-center gap-2 
          bg-gradient-to-r from-indigo-500 to-purple-600 
          hover:from-indigo-600 hover:to-purple-700 
          active:scale-95 transition text-white font-medium 
          ${
            currentUser?.following.includes(user._id)
              ? "opacity-70 cursor-not-allowed"
              : "cursor-pointer"
          }`}
        >
          <UserPlus className="w-4 h-4" />{" "}
          {currentUser?.following.includes(user._id) ? "Following" : "Follow"}
        </button>

        {/* Connection Button */}
        <button
          onClick={handleConnectionRequest}
          className="flex items-center justify-center w-16 h-10 
          border border-gray-300 text-slate-500 
          rounded-lg cursor-pointer active:scale-95 
          hover:bg-gray-100 transition group"
        >
          {currentUser?.connections.includes(user._id) ? (
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition" />
          ) : (
            <Plus className="w-5 h-5 group-hover:scale-110 transition" />
          )}
        </button>
      </div>
    </div>
  );
};

export default UserCard;
