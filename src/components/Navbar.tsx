import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuListComposition from "./MenuListComposition";
import Editer from "./Editer";
import { IoIosArrowBack } from "react-icons/io";

function Navbar() {
  const navigate = useNavigate();
  const [isEditerOpen, setIsEditerOpen] = useState(false);
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState<string>();
  useEffect(() => {
    setCurrentPath(location.pathname);
  });

  return (
    <div className="flex z-20  w-full top-0 sticky">
      <div className="  w-full p-4 bg-zinc-100 flex justify-between items-center ">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="  rounded-lg hover:bg-blue-950 mr-3 p-3 md:px-10 md:mt-2 bg-blue-800 text-white font-semibold"
        >
          <IoIosArrowBack />
        </button>

        <Link
          className="text-4xl font-semibold text-blue-900"
          to={localStorage.getItem("token") ? "/blogs" : "/signup"}
        >
          Bloogy App
        </Link>
        <div className="flex justify-center items-center mr-8">
          <div>
            {currentPath == "/signup" ||
            currentPath == "/signin" ||
            currentPath == "/" ? (
              ""
            ) : (
              <MenuListComposition setIsEditerOpen={setIsEditerOpen} />
            )}
          </div>
        </div>
      </div>
      <Editer isEditerOpen={isEditerOpen} setIsEditerOpen={setIsEditerOpen} />
    </div>
  );
}

export default Navbar;
