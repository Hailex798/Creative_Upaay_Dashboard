import React, { useState } from "react";
import { VscTasklist } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineAddBox } from "react-icons/md";
import { PiDotsThreeBold } from "react-icons/pi";
import { FaLightbulb } from "react-icons/fa";
import { useSelector } from "react-redux";
import sharePerson from "../assets/sharePerson.png";
import menuGrid from "../assets/menuGrid.png";
import { BsChatSquareDots } from "react-icons/bs";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  console.log(isMenuOpen);
  const [project, setProject] = useState("Mobile App");
  const data = [
    {
      name: "Mobile App",
      color: "bg-green-300",
    },
    {
      name: "Website Redesign",
      color: "bg-orange-300",
    },
    {
      name: "Design System",
      color: "bg-violet-300",
    },
    {
      name: "Wireframes",
      color: "bg-blue-300",
    },
  ];
  if (!isMenuOpen) return null;
  return (
    <div className=" w-full z-50 bg-white md:w-1/5 sm:pr-0 h-full flex border-r-2  border-gray-300  font-inter flex-col justfiy-center  items-start">
      <div className=" pt-4 flex flex-col justify-start text-gray-500  cursor-pointer items-start gap-4  font-light">
        <div className="flex justify-center items-start gap-5">
          <img
            src={menuGrid}
            alt="Menu Grid"
            style={{ width: "20px", height: "20px", color: "#787486" }}
          />
          <p>Home</p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <BsChatSquareDots size={20} color="gray" />
          <p>Messages</p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <VscTasklist size={20} color="gray" />
          <p>Tasks</p>
        </div>
        <div className="flex justify- items-center gap-5">
          <img
            src={sharePerson}
            alt="Share Logo"
            style={{ width: "20px", height: "20px", color: "#787486" }}
          />
          <p>Members</p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <IoSettingsOutline size={20} color="gray" />
          <p>Settings</p>
        </div>
      </div>

      <div className="w-[90%] h-[1px] bg-gray-300  my-4"></div>
      <div className="w-[90%]">
        <div className="flex text-sm justify-between items-center font-light gap-4">
          <p className="text-sm text-gray-500 font-semibold">MY PROJECTS</p>
          <MdOutlineAddBox size={18} color="#787486" />
        </div>

        <div className="flex pt-4   w-[90%] flex-col justify-center items-start text-sm font-light gap-3">
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex  w-full justify-between font-semibold items-center cursor-pointer  p-2 ${
                project === item.name
                  ? "bg-violet-100 text-black rounded-md"
                  : "text-gray-500"
              } `}
              onClick={() => setProject(item.name)}
            >
              <div className="flex justify-center items-center    gap-2">
                <div
                  className={`w-[8px] h-[8px] rounded-full ${item.color}`}
                ></div>
                <p className="text-sm">{item.name}</p>
              </div>
              <PiDotsThreeBold size={20} color={project === item.name ? "black" : ""}/>
            </div>
          ))}
        </div>

        <div className="relative w-[100%] flex flex-col my-4 justify-center items-center ">
          <div
            className="absolute top-0 flex justify-center items-center z-10 bg-gray-100 w-[50px] h-[50px] rounded-full"
            >
            <div
              style={{
                background: 'radial-gradient(circle at center, #FCD64AB2 0%, #FCD64A00 100%)',
                boxShadow: '0 0 10px #FCD64A80',
                filter: 'brightness(1.2)'
              }}
            >
              <FaLightbulb size={25} color="yellow" />
            </div>
          </div>
          <div className="w-[100%] rounded-2xl flex flex-col mb-3 p-3   pt-8 justify-center text-sm items-center  mt-7 bg-gray-100 gap-2">
            <p className="font-semibold">Thoughts Time</p>
            <p className="w-[80%] text-xs  text-[#787486] leading-relaxed text-center">
              We don’t have any notice for you, till then you can share your
              thoughts with your peers.
            </p>
            <button className="bg-white p-2 text-black w-[80%] rounded-md text-sm mt-1 ">
              Write a Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
