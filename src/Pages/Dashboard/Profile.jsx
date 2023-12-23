import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext)
  // console.log(user);
  const [userDetails, setUserDetails] = useState([]);
  useEffect(()=> {
    axios.get(`https://taskify-server-two.vercel.app/users?email=${user.email}`)
    .then(res=> {
      // console.log(res.data);
      setUserDetails(res.data);
    })
  },[user.email])
  // console.log(userDetails[0]);
  return (
    <div className="avatar flex-col items-center justify-center ml-3 md:ml-12 lg:ml-20">
      <div className="w-16 md:w-24 rounded-full">
        <img src={userDetails[0]?.image} />
        
      </div>
      <h1 className="text-center text-white">{userDetails[0]?.name}</h1>
      <ul className="menu text-white bg-gray-700 rounded-2xl">
        <li className="items-start">
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
