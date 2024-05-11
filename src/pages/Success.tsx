import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SuccessGif from "../assets/SuccessAnimation.gif";
import Spinner from "../components/Spinner";

function Success() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  setTimeout(() => {
    setVisible(true);
  }, 4000);
  if (!visible) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="text-xl  w-full flex-col h-screen flex justify-center items-center">
      <div className=" text-white p-10 rounded-full ">
        <img src={SuccessGif} alt="Success" className="w-[200px]" />
      </div>
      <div
        onClick={() => navigate("/user/profile")}
        className={`${
          visible ? "block" : "hidden"
        } bg-green-700  px-10 py-3 text-white rounded-lg cursor-pointer `}
      >
        Go to Profile
      </div>
    </div>
  );
}

export default Success;
