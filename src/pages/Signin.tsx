import { useState } from "react";
import FormHeadings from "../components/FormHeadings";
import InputFields from "../components/InputFields";
import Navbar from "../components/Navbar";
import Qoute from "../components/Qoute";
import { SigninType } from "@suvamjyoti/common-app";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signin() {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SigninType>({
    email: "",
    password: "",
  });
  async function sendRequest() {
    try {
      const responce = await axios.post(
        `${BACKEND_URL}/api/v1/user/signin`,
        postInputs
      );
      const jwt = responce.data;

      localStorage.setItem("token", jwt.jwt);
      navigate("/blogs");
      // responceData = responce.data.error;
    } catch (error) {
      alert("Invalid credentials");
      console.log(error);
    }
  }
  return (
    <div className="w-full h-screen flex justify-start flex-col items-center">
      <Navbar />
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-full h-full flex justify-center items-center">
          <div className="bg-slate-200 w-full h-full justify-center  gap-5  p-5 rounded-lg flex flex-col items-center  md:w-[300px] md:h-fit">
            <FormHeadings
              to={"/signup"}
              label={"Login"}
              subLabel={"Don't have an account? "}
              toText={"Sign up"}
            />
            <div className="flex flex-col gap-5 w-full items-center">
              <InputFields
                type={"email"}
                placeholder={"jhondoe@example.com"}
                onChange={(e) => {
                  setPostInputs({ ...postInputs, email: e.target.value });
                }}
              />
              <InputFields
                type={"password"}
                placeholder={"**********"}
                onChange={(e) => {
                  setPostInputs({ ...postInputs, password: e.target.value });
                }}
              />
            </div>
            <button
              onClick={sendRequest}
              className="bg-gray-900 w-full rounded-lg text-white py-3 hover:bg-gray-950"
            >
              Login
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <Qoute />
        </div>
      </div>
    </div>
  );
}

export default Signin;
