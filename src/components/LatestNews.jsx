import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center bg-[#F3F3F3] p-2">
      <p className="bg-[#D72050] text-[#FFFFFF] font-medium text-xl px-2 py-2">
        Latest
      </p>
      <Marquee pauseOnHover={true} className="text-[#403F3F] text-lg font-semibold space-x-10">
       <Link to='/news'>Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
       Germany vs Spain as...</Link> 
       <Link to='/news'>Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
       Germany vs Spain as...</Link> 
       <Link to='/news'>Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
       Germany vs Spain as...</Link> 
      </Marquee>
    </div>
  );
};

export default LatestNews;
