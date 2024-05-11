import { ChangeEvent, useState } from "react";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";

type InputChangeEvent =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLTextAreaElement>;

interface InputsProps {
  type: string;
  placeholder: string;
  title: string;
  onChange: (e: InputChangeEvent) => void;
}

interface Post {
  name?: string;
  bio?: string;
  password?: string;
}

function ProfileEditer({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: (e: boolean) => void;
  isOpen: boolean;
}) {
  const navigate = useNavigate();
  const [post, setPost] = useState<Post>({
    password: "",
    name: "",
    bio: "",
  });
  async function sendRequest() {
    await axios.put(
      `${BACKEND_URL}/api/v1/user/profile/update`,
      {
        name: post.name,
        bio: post.bio,
        password: post.password,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    setIsOpen(false);
    navigate(`/user/profile/success`);
  }

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed  left-[50%]  -translate-x-[50%] p-6 w-full h-screen bg-gray-500 z-40`}
    >
      <div className="fixed md:block hidden top-10 left-10 ">
        <ImCross
          onClick={() => setIsOpen(false)}
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
            onClick={() => setIsOpen(false)}
            className="bg-gray-800 md:hidden text-white px-10 py-2 rounded-lg hover:bg-blue-950"
          >
            Cancel
          </button>
        </div>
        <Inputs
          type="text"
          placeholder="Jhon doe"
          title="Your name"
          onChange={(e: InputChangeEvent) => {
            setPost({ ...post, name: e.target.value });
          }}
        />
        <Inputs
          type="text"
          placeholder="Write something.........."
          title="New password"
          onChange={(e: InputChangeEvent) => {
            setPost({ ...post, password: e.target.value });
          }}
        />
        <Inputs
          type="textarea"
          placeholder="Hey i am using Boogy app"
          title="Bio"
          onChange={(e: InputChangeEvent) => {
            setPost({ ...post, bio: e.target.value });
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
          className="w-full max-h-40 min-h-40  outline-none px-5 py-2 focus:outline-blue-950 rounded-lg mt-3 bg-white"
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

export default ProfileEditer;
