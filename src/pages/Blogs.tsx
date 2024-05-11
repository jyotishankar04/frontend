import BLogCard from "../components/BLogCard";
import Navbar from "../components/Navbar";
import Sceleton from "../components/Sceleton";
import { UserData, useBlogs } from "../hooks";
import Footer from "../components/Footer";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

function Blogs() {
  const { loading, blogs } = useBlogs();
  // console.log(localStorage.getItem("token"));
  const [loading2, setLoding] = useState(true);
  const [users, setUsers] = useState<UserData[]>([{ name: "", id: "" }]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/api/v1/user/allusers`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setUsers(response.data.users);
        setLoding(false);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  // console.log(users);
  console.log(users);

  if (loading || loading2) {
    return (
      <div>
        <Navbar />
        <Sceleton />
      </div>
    );
  }

  return (
    <div>
      <div className="w-full flex flex-col  items-center">
        <Navbar />

        <div className="flex justify-center gap-5">
          <div className="flex flex-col md:w-10/12 justify-start items-center gap-2">
            {Array.isArray(blogs)
              ? blogs.map(
                  (
                    blog: {
                      id: string;
                      content: string;
                      author: {
                        name: string;
                      };
                      title: string;
                      postDate: string;
                    },
                    index: number
                  ) => (
                    <BLogCard
                      key={index}
                      id={blog.id}
                      content={blog.content}
                      authorName={blog.author.name || "Annynomous "}
                      title={blog.title}
                      publishedData={blog.postDate}
                    />
                  )
                )
              : ""}
          </div>
          <div className="  border-4 shadow-md shadow-black w-[30%] m-3 h-fit rounded-lg overflow-x-hidden">
            <h1 className="w-full text-2xl font-semibold text-center bg-blue-800 text-white py-1">
              Other Users
            </h1>
            {Array.isArray(users)
              ? users.map(({ name, id }, index) => (
                  <UserCard name={name} key={index} id={id} />
                ))
              : ""}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function UserCard({ name, id }: { name: string; id: string }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => {
          navigate(`/user/${id}`);
        }}
        className="cursor-pointer flex w-full items-center p-3 gap-3"
      >
        <Avatar />
        <h1 className="text-blue-800 text-2xl">{name}</h1>
      </div>
    </>
  );
}
export default Blogs;
