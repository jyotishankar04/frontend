import axios from "axios";
import { ChangeEvent, useState } from "react";
import { ImCross } from "react-icons/im";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

type InputChangeEvent =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLTextAreaElement>;

interface Post {
  title: string;
  content: string;
}

interface InputsProps {
  type: string;
  placeholder: string;
  title: string;
  onChange: (e: InputChangeEvent) => void;
}

function Editer({
  isEditerOpen,
  setIsEditerOpen,
}: {
  isEditerOpen: boolean;
  setIsEditerOpen: (e: boolean) => void;
}) {
  const navigate = useNavigate();
  const [post, setPost] = useState<Post>({
    title: "",
    content: "",
  });

  async function sendRequest() {
    const res = await axios.post(
      `${BACKEND_URL}/api/v1/blog`,
      {
        title: post.title,
        content: post.content,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    setIsEditerOpen(false);
    navigate(`/blog/${res.data.id}`);
  }

  return (
    <div
      className={`${
        isEditerOpen ? "block" : "hidden"
      } fixed  left-[50%] -translate-x-[50%] p-6 w-full h-screen bg-gray-500 z-20`}
    >
      <div className="fixed md:block hidden top-10 left-10 ">
        <ImCross
          onClick={() => setIsEditerOpen(false)}
          className="text-3xl cursor-pointer text-gray-800 hover:scale-125 duration-200"
        />
      </div>
      <div className="md:w-6/12   bg-gray-100 rounded-lg p-5 relative md:left-[50%] md:-translate-x-[50%] top-2">
        <div className="flex justify-between font-semibold items-center">
          <h1 className="text-3xl">Create Post</h1>
          <button
            onClick={sendRequest}
            className="bg-blue-800 hidden md:block text-white px-10 py-2 rounded-lg hover:bg-blue-950"
          >
            Post
          </button>
          <button
            onClick={() => setIsEditerOpen(false)}
            className="bg-gray-800 md:hidden text-white px-10 py-2 rounded-lg hover:bg-blue-950"
          >
            Cancel
          </button>
        </div>
        <Inputs
          type="text"
          placeholder="Impact of AI......."
          title="Enter Title"
          onChange={(e: InputChangeEvent) => {
            setPost({ ...post, title: e.target.value });
          }}
        />
        <Inputs
          type="textarea"
          placeholder="Write something.........."
          title="Content"
          onChange={(e: InputChangeEvent) => {
            setPost({ ...post, content: e.target.value });
          }}
        />
        <button
          onClick={sendRequest}
          className="w-full md:hidden rounded-lg hover:bg-blue-950 py-3 bg-blue-800 text-white font-semibold"
        >
          Post
        </button>
      </div>
    </div>
  );
}

const Inputs: React.FC<InputsProps> = ({
  type,
  placeholder,
  title,
  onChange,
}) => {
  return (
    <div>
      <div>
        <h1 className="text-xl font-semibold mt-5">{title}</h1>
      </div>
      {type == "textarea" ? (
        <textarea
          onChange={onChange}
          placeholder={placeholder}
          className="w-full max-h-96 min-h-96  outline-none px-5 py-2 focus:outline-blue-950 rounded-lg mt-3 bg-white"
        />
      ) : (
        <input
          className="w-full outline-none px-5 py-2 focus:outline-blue-950 rounded-lg mt-3 bg-white"
          onChange={onChange}
          type={type}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};
export default Editer;
