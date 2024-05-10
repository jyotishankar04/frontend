import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
function BLogCard({
  id,
  authorName,
  title,
  content,
  publishedData,
}: {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedData: string;
}) {
  return (
    <Link
      to={`/blog/${id}`}
      className="cursor-pointer p-5 border-b-2 md:w-8/12 w-full  flex flex-col gap-4"
    >
      <BlogAvtar published={publishedData} authorName={authorName} />
      <div>
        <h1 className="line-clamp-2 text-3xl font-semibold ">{title}</h1>
        <p className="line-clamp-2 text-gray-600 leading-5 mt-2">{content}</p>
        <p className="text-sm text-gray-400 my-3">2 munite(s) read</p>
      </div>
    </Link>
  );
}

function BlogAvtar({
  published,
  authorName,
}: {
  published: string;
  authorName: string;
}) {
  return (
    <div className="flex justify-start items-center gap-3 text-xl">
      <Avatar sx={{ width: 30, height: 30 }} />
      <h1 className="font-semibold capitalize">{authorName}</h1>
      <p className="text-sm text-gray-600">{published}</p>
    </div>
  );
}

export default BLogCard;
