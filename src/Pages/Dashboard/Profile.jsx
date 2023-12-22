import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const [userDetails, setUserDetails] = useState([]);
  useEffect(()=> {
    axios.get("http://localhost:5000/users")
    .then(res=> {
      console.log(res.data);
      setUserDetails(res.data);
    })
  },[])
  // console.log(userDetails[0]);
  return (
    <div className="avatar flex-col items-center justify-center ml-3 md:ml-12 lg:ml-20">
      <div className="w-16 md:w-24 rounded-full">
        <img src={userDetails[0]?.image} />
        
      </div>
      <h1 className="text-black text-center">{userDetails[0]?.name}</h1>
      <ul className="menu">
        <li className="items-start">
          <NavLink>Home</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
