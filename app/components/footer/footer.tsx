import React from "react";
import Link from "next/link";
import {FaGithub, FaTwitter, FaFacebook, FaLinkedin} from "react-icons/fa"


const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p- flex justify-between">
       <Link href={'/'}> <span className=" text-xl hover:text-yellow-500">Afzal Faizi</span></Link>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
      <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-1 text-white text-4x lg:text-5xl p-4">
              <Link className="text-white/90 hover:text-yellow-500" href={"https://github.com/Afzalfaizi"}><FaGithub/></Link>
              <Link className="text-white/90 hover:text-yellow-500" href={"https://twitter.com/Afzal_faizi_"}><FaTwitter/></Link>
              <Link className="text-white/90 hover:text-yellow-500" href={"https://www.facebook.com/Afzalfaizii"}><FaFacebook/></Link>
              <Link className="text-white/90 hover:text-yellow-500" href={"https://www.linkedin.com/in/mafzalfaizi/"}><FaLinkedin/></Link>
        </div>

    </footer>
  );
};

export default Footer;
