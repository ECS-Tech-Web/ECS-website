import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bottom-0 w-full text-white py-8 px-4">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">

        <div className="text-center tablet:text-left mb-6 tablet:mb-0 tablet:ml-[5vw] xl:ml-0">
          <h2 className="text-foot text-base mb-3">QUICK LINKS</h2>
          <ul className="mobile:-translate-x-[20vw] tablet:transform-none top-0 space-y-2 text-base text-left font-rajdhani">
            <li><Link to="/Resource+Hub" className="hover:text-[#819BE2]">Resource Hub</Link></li>
            <li><Link to="" className="hover:text-[#819BE2]">Messages</Link></li>
            <li><Link to="/annual-attraction" className="hover:text-[#819BE2]">Annual<br />Attraction</Link></li>
            
          </ul>
        </div>

        <div className="flex flex-col items-center mb-6 md:mb-0 xl:-translate-y-[50px]">
          {/* Logo */}
          <div className="mb-[25px]">
            <img
              src="https://i.postimg.cc/zGFN7qZR/Mask-group.png" // Replace with your logo path
              alt="Logo"
              className="h-[114px]"
            />
          </div>

          <h2 className="text-foot text-base mb-3">CONTACT US</h2>
          <p className="text-base font-rajdhani mb-3">Email: ecs.nitsilchar2026@gmail.com</p>

          {/* Social Links */}
          <h2 className="text-foot text-base mb-3 bg-gradient-to-b from-top to-bot bg-clip-text text-transparent">FOLLOW US</h2>
          <div className="flex col gap-2">
            
            <a href="https://www.facebook.com/groups/245209962205928" target="_blank" aria-label="Facebook">
              <img
                src="https://i.postimg.cc/2jgC8H73/Facebook.png"
                alt="Facebook"
                className="h-6 w-6"
              />
            </a>
            <a href="https://www.instagram.com/ecs.nits/" target="_blank" aria-label="Instagram">
              <img
                src="https://www.citypng.com/public/uploads/preview/hd-white-instagram-round-logo-icon-png-7017516951188732y4dxbmogd.png"
                alt="Facebook"
                className="h-6 w-6"
              />
            </a>
            <a href="https://www.linkedin.com/company/electronics-and-communication-society-nit-silchar?trk=blended-typeahead" target="_blank" aria-label="Linked In">
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png"
                alt="Facebook"
                className="h-6 w-6"
              />
            </a>
            
            
          </div>
        </div>

        <div className="text-center tablet:text-left tablet:mr-[5vw] xl:mr-none">
          <h2 className="mobile:hidden text-foot text-base mb-3 tablet:block">QUICK LINKS</h2>
          <ul className="mobile:absolute tablet:static top-[18.1vw] right-[15vw] space-y-2 text-right text-base font-rajdhani">
            <li><Link to="/members" className="hover:text-[#819BE2]">Members</Link></li>
            <li><Link to="/photogallery" className="hover:text-[#819BE2]">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-[#819BE2]">About Us</Link></li>
            <li><Link to="/faq" className="hover:text-[#819BE2]">FAQs</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
