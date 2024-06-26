import { Avatar } from "@mui/material";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Spinner from "../components/Spinner";
import Sceleton from "../components/Sceleton";
import BLogCard from "../components/BLogCard";
import ProfileEditer from "../components/ProfileEditer";
import { useUserPosts } from "../hooks";
import { useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const { user, loading, posts } = useUserPosts();

  if (loading) {
    return (
      <div className="h-s w-full">
        <Navbar />
        <div className="flex md:flex-row flex-col-reverse justify-between h-full items-center">
          <div className="w-full overflow-hidden  h-full flex justify-center items-center">
            <Sceleton />
          </div>
          <div className="w-full  md:h-full h-[50vh] flex justify-center items-center">
            <Spinner />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen">
      <div
        className={`${
          location.pathname == "/user/profile" ? "block" : "hidden"
        }`}
      >
        <ProfileEditer setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
      <Navbar />
      <div className="flex flex-col-reverse  md:flex-row md:w-[60%] justify-between   items-start ">
        <div className="w-full relative h-full flex flex-col items-center  ">
          <h1 className="text-2xl   font-semibold bg-blue-800 w-full  text-white text-center py-2">
            Posted Blogs by {user.name}
          </h1>
          <div className="md:w-[80%] w-[95%]">
            {Array.isArray(posts)
              ? posts.map((post, index) => (
                  <BLogCard
                    key={index}
                    title={post.title}
                    content={post.content}
                    publishedData={post.postDate}
                    authorName={user.name}
                    id={post.id}
                  />
                ))
              : ""}
          </div>
        </div>
        <div className="md:w-[35%] shadow-lg shadow-black border-2 border-gray-400 w-full right-0 md:fixed flex flex-col  items-center bg-gray-300 md:m-5 rounded-lg h-auto ">
          <div className="m-5">
            <Avatar
              sx={{ width: 150, height: 150 }}
              src="https://i.pinimg.com/564x/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg"
            />
          </div>
          <h1 className="text-3xl font-mono mb-5">{user.name}</h1>
          <div className="flex items-center flex-col">
            <p className="text-2xl font-mono  text-red-800">Bio</p>
            <p className="text-xl font-mono text-blue-900 mb-5">
              {user.userBio}
            </p>
          </div>
          <button
            onClick={() => {
              setIsOpen(true);
            }}
            className={`${
              location.pathname == "/user/profile" ? "block" : "hidden"
            } w-[90%] mb-4 rounded-lg font-semibold hover:bg-gray-950 bg-gray-700 py-2 text-white m-auto`}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
