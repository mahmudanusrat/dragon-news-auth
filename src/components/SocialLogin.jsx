import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div>
      <h2 className="text-[#403F3F] font-semibold mb-3">Login With</h2>
      <div className="flex flex-col space-y-2">
        <button className="btn bg-base-100 "><FaGoogle />Login With Google</button>
        <button className="btn bg-base-100"><FaGithub />Login With Github</button>
      </div>
    </div>
  );
};

export default SocialLogin;
