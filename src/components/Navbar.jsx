import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between space-y-2 items-center">
      <div>{user && user.email}</div>
      <div className="nav text-[#706F6F] space-x-3">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div>
          <img src={userIcon} alt="" />
        </div>
        {user && user?.email ? (
          <button onClick={logOut} className="btn bg-[#403F3F] text-[#FFFFFF]">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn bg-[#403F3F] text-[#FFFFFF]">
            Login
          </Link>
        )}
        
      </div>
    </div>
  );
};

export default Navbar;
