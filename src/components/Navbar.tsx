import { Link, useLocation } from "react-router-dom";
import { MdNightlight } from "react-icons/md";
import { useEffect, useState } from "react";
import MenuListComposition from "./MenuListComposition";
import Editer from "./Editer";

function Navbar() {
  const [isEditerOpen, setIsEditerOpen] = useState(false);
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState<string>();
  useEffect(() => {
    setCurrentPath(location.pathname);
  });

  return (
    <div className="flex w-full">
      <div className=" z-10 top-0 sticky w-full p-4 bg-zinc-100 flex justify-between items-center ">
        <Link
          className="text-4xl font-semibold text-blue-900"
          to={localStorage.getItem("token") ? "/blogs" : "/signup"}
        >
          Bloogy App
        </Link>
        <div className="flex justify-center items-center mr-8">
          <div className=" mr-9 border-2 border-blue-950 rounded-lg p-1 cursor-pointer">
            <MdNightlight className="text-2xl text-blue-950" />
          </div>
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
