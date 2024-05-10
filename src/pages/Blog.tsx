import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { FaUserCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import Spinner from "../components/Spinner";
interface Blog {
  title: string;
  content: string;
  author: {
    name: string;
  };
}

function FullBlog() {
  const [blogs, setBlog] = useState<Blog>({
    title: "",
    content: "",
    author: {
      name: "",
    },
  });
  const [loading, setLoding] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const idArray = location.pathname.split("/");
  const id = idArray[idArray.length - 1];
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blogs/blog/${id}`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((responce) => {
        setBlog(responce.data);
        setLoding(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="h-screen">
        <Navbar />
        <div className="w-full h-full flex justify-center items-center">
          <Spinner />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-start ">
      <Navbar />
      <button
        onClick={() => {
          navigate("/blogs");
        }}
        className="  rounded-lg hover:bg-blue-950 py-1 px-10 mt-2 bg-blue-800 text-white font-semibold"
      >
        Go Back
      </button>
      <div className="flex w-10/12 h-full flex-col justify-end px-10 mt-8 gap-5    md:flex-row-reverse md:justify-between md:px-10">
        <div className="">
          <h1 className="hidden md:block">Author</h1>
          <AuthorProfile name={blogs.author.name || ""} />
        </div>
        <div className=" flex h-full gap-3 flex-col ">
          <h1 className="text-4xl font-semibold  capitalize">{blogs.title}</h1>
          <p className="text-gray-600">Posted on august 24 2004</p>
          <p className="  text-xl leading-6 text-gray-700 font-mono">
            {blogs.content}
          </p>
        </div>
      </div>
    </div>
  );
}

function AuthorProfile({ name }: { name: string }) {
  return (
    <div className="w-full text-2xl font-semibold gap-3 flex justify-start items-center">
      <FaUserCircle className="text-3xl" />
      <h1 className="w-full">{name}</h1>
    </div>
  );
}

export default FullBlog;
