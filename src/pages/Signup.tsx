import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Qoute from "../components/Qoute";
import FormHeadings from "../components/FormHeadings";
import InputFields from "../components/InputFields";
import { useState } from "react";
import { BACKEND_URL } from "../config";
import { SignupType } from "@suvamjyoti/common-app";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupType>({
    email: "",
    password: "",
    name: "",
  });
  async function sendRequest() {
    try {
      const responce = await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
        postInputs
      );
      const jwt = responce.data;

      localStorage.setItem("token", jwt.jwt);
      navigate("/blogs");
    } catch (error) {
      alert("Error while login in");
    }
  }
  return (
    <div className="w-full h-screen flex justify-start flex-col items-center">
      <Navbar />
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-full h-full flex justify-center items-center">
          <div className="bg-slate-200 w-full h-full justify-center  gap-5  p-5 rounded-lg flex flex-col items-center  md:w-[300px] md:h-fit">
            <FormHeadings
              to={"/signin"}
              label={"Create Account"}
              subLabel={"Already have an account? "}
              toText={"Login"}
            />
            <div className="flex flex-col gap-5 w-full items-center">
              <InputFields
                type={"text"}
                placeholder={"Jhon Doe"}
                onChange={(e) => {
                  setPostInputs({ ...postInputs, name: e.target.value });
                }}
              />
              <InputFields
                type={"email"}
                placeholder={"jhondoe@example.com"}
                onChange={(e) => {
                  setPostInputs({ ...postInputs, email: e.target.value });
                }}
              />
              <InputFields
                onChange={(e) => {
                  setPostInputs({ ...postInputs, password: e.target.value });
                }}
                type={"password"}
                placeholder={"**********"}
              />
            </div>
            <button
              onClick={sendRequest}
              className="bg-gray-900 w-full rounded-lg text-white py-3 hover:bg-gray-950"
            >
              Sign up
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

export default Signup;
