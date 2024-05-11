import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useLocation, useParams } from "react-router-dom";

export interface Blog {
  content: string;
  title: string;
  id: string;
  postDate: string;
  author: {
    name: string;
  };
}
// export const useBlog = ({ id }: { id: string }) => {
//   const [loading, setLoding] = useState(true);
//   const [blog, setBlog] = useState<Blog>({});
//   useEffect(() => {
//     axios
//       .get(`${BACKEND_URL}/api/v1/blogs/blog/${id}`, {
//         headers: { Authorization: "Bearer " + localStorage.getItem("token") },
//       })
//       .then((responce) => {
//         setBlog(responce.data);
//         setLoding(false);
//       });
//   }, []);
//   return {
//     loading,
//     blog,
//   };
// };
export const useBlogs = () => {
  const [loading, setLoding] = useState(true);
  const [blogs, setBlogs] = useState<Blog>();
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((responce) => {
        setBlogs(responce.data);
        setLoding(false);
      });
  }, []);
  return {
    loading,
    blogs,
  };
};
export const useUserPosts = () => {
  const location = useLocation();
  const [user, setUser] = useState({ name: "", userBio: "" });
  const [posts, setPosts] = useState({});
  const [loading, setLoding] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (location.pathname == "/user/profile") {
      axios
        .get(`${BACKEND_URL}/api/v1/user/profile`, {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        })

        .then((res) => {
          setUser(res.data.user);
          setPosts(res.data.posts);
          setLoding(false);
        });
    } else {
      axios
        .get(`${BACKEND_URL}/api/v1/user/${id}`, {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        })

        .then((res) => {
          setUser(res.data.user);
          setPosts(res.data.posts);
          setLoding(false);
        });
    }
  }, []);

  return { posts, loading, user };
};

export interface UserData {
  name: string;
  id: string;
}

export interface AllUsersData {
  loading2: boolean;
  users: UserData[];
}

// export const useAllusers = async (): Promise<AllUsersData> => {
//   return { loading2, users };
// };
