import BLogCard from "../components/BLogCard";
import Navbar from "../components/Navbar";
import Sceleton from "../components/Sceleton";
import { useBlogs } from "../hooks";
import Footer from "../components/Footer";

function Blogs() {
  const { loading, blogs } = useBlogs();
  // console.log(localStorage.getItem("token"));

  if (loading) {
    return (
      <div>
        <Navbar />
        <Sceleton />
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <div className="flex flex-col justify-start items-center gap-2">
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
      <Footer />
    </div>
  );
}

export default Blogs;
