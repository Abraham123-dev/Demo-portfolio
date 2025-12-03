import { House } from "lucide-react";
import { User } from 'lucide-react';
import { Phone } from 'lucide-react';
import React from "react";

function Navbar() {
  return (
    <nav className="flex gap-4 md:gap-0 items-start md:items-center justify-between flex-wrap md:flex-row ">
      <span className="bg-[#301CA0] text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl">
        A
      </span>

      <div className="flex items-center justify-center gap-8 "> 
        <span className="text-gray-600 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 ease-in-out hover:text-blue-500">
          <House/>
            <span className="font-bold">Home</span>
        </span>

        <span className="text-gray-600 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 ease-in-out hover:text-blue-500">
          <User />
            <span className="font-bold">About me</span>
      
        </span>

        <span className="text-gray-600 flex items-center justify-center gap-2 cursor-pointer transition-all duration-00 ease-in-out hover:text-blue-500">
          <Phone />  
            <span className="font-bold">Contact me</span>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;


