import { Link } from "react-router-dom";
import { RiMenu4Fill } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";

import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleOut = () => {
    logOut().then().then();
    
  };

  return (
    <div className="shadow-md w-full fixed z-30 top-0 left-0">
      <div className="">
        <div className="md:flex items-center justify-between bg-gray-900 text-white py-4 px-4">
          <Link to="/">
            <p className="text-xl font-bold">
              Taski<span className="text-green-800">fy</span>
            </p>
          </Link>
          <div
            onClick={() => setOpen(!open)}
            className="text-xl absolute right-5 top-5 cursor-pointer md:hidden"
          >
            {open ? <FaTimes /> : <RiMenu4Fill />}
          </div>
          <ul
            className={`md:flex items-center text-gray-300 gap-5 md:pb-0 pb-5 absolute md:static bg-gray-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-5 transition-all duration-500 ease-in ${
              open ? "top-14" : "top-[-490px]"
            }`}
          >
            <Link to="/">
              <li className="hover:text-gray-600 duration-500 md:my-0 my-5">
                Home
              </li>
            </Link>
            {user ? (
              <Link onClick={handleOut}>
                <li className="hover:text-gray-600 duration-500 md:my-0 my-5">
                  Log Out
                </li>
              </Link>
            ) : (
              <Link to="/login">
                <li className="hover:text-gray-600 duration-500 md:my-0 my-5">
                  Login
                </li>
              </Link>
            )}

            <Link to="/dashboard">
              <li className="hover:text-gray-600 duration-500 md:my-0 my-5">
                Dashboard
              </li>
            </Link>
            <Link to="/contact">
              <li className="hover:text-gray-600 duration-500 md:my-0 my-5">
                Contact
              </li>
            </Link>
            <Link>
              <button className="border border-white px-3 lg:px-5 py-1 rounded-lg hover:text-gray-600 duration-500 ">
                Get Start
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
