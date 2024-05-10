import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/blogs");
    }
  }, []);

  return (
    <div className="h-screen overflow-hidden w-full">
      <div className="flex items-center justify-between bg-[#FFC017] p-5 font-bold border-b-2 border-gray-900 text-4xl">
        <h1>Bloogy App</h1>
        <div className="text-2xl flex justify-center items-center md:gap-4 gap-1 mr-8">
          <a href="https://github.com/jyotishankar04" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jyotishankar-patra/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/JYOTISHANKARP20" target="_blank">
            <FaSquareXTwitter />
          </a>
          <a href="mailto:patrajyotishankar@gmail.com" target="_blank">
            <SiGmail />
          </a>
        </div>
      </div>
      <div className="body w-full h-full bg-[#FFC017] flex justify-center items-start flex-col pb-32 md:pl-24 pl-5 gap-5">
        <h1 className="md:text-9xl text-5xl font-semibold">Stay curious.</h1>
        <p className="text-2xl font-semibold text-gray-900">
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
        <button
          onClick={() => {
            navigate("/signup");
          }}
          className="mt-12 text-xl bg-gray-900 font-mono text-white py-2 px-10 rounded-3xl"
        >
          Get Started
        </button>
      </div>
      <div className="w-full  text-xl text-gray-700 font-semibold text-center fixed bottom-0 bg-white py-3">
        <h1>By Jyotishankar Patra</h1>
      </div>
    </div>
  );
}

export default Home;
