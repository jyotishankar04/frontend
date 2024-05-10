import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export interface Blog {
  content: string;
  title: string;
  id: string;
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
