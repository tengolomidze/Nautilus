import icon from "../img/icon.png"
import {BsList} from "react-icons/bs"
import {CgClose} from "react-icons/cg"
import {AiOutlineHome, AiOutlineMail} from "react-icons/ai"
import {MdOutlinePlayLesson} from "react-icons/md"
import {TbZoomMoney} from "react-icons/tb"

import { useState } from "react"
import { useDetectScroll } from "@smakss/react-scroll-direction"

const  Header = () => {

    const [nav, setNav] = useState(false);
    const [scrollDir] = useDetectScroll({});

    return (
      <>
        <div className={"fixed flex z-10 top-0 left-0 justify-between items-center w-screen p-4 text-main bg-bg transition-all"
        + ((scrollDir === "up") ? " translate-y-0" : " -translate-y-full")}>
          <div className="flex justify-center items-center">
              <img className="w-12 m-2" src={icon} alt="icon"/>
              <p className="text-2xl  m-2">Nautilus</p>
          </div>

          <div className="m-2 flex justify-center items-center">
            <BsList className="text-5xl" onClick={() => setNav(true)}/>
          </div>
        </div>

        
        <div className={"fixed top-0 right-0 z-20 flex flex-col h-screen w-72 p-4 bg-neutral-800 text-main transition-all" + (nav ? " translate-x-0" : " translate-x-full")}>
          <div>
            <CgClose className="text-5xl" onClick={() => setNav(false)}/>
          </div>
          <div className="flex flex-col h-full p-4">
            <div className="flex flex-rew justify-between py-4">
              <p className="text-2xl">Home</p>
              <AiOutlineHome className="text-3xl"/>
            </div>
            <div className="flex flex-rew justify-between py-4">
              <p className="text-2xl">Courses</p>
              <MdOutlinePlayLesson className="text-3xl"/>
            </div>
            <div className="flex flex-rew justify-between py-4">
              <p className="text-2xl">Pricing</p>
              <TbZoomMoney className="text-3xl"/>
            </div>
            <div className="flex flex-rew justify-between py-4">
              <p className="text-2xl">Contact</p>
              <AiOutlineMail className="text-3xl"/>
            </div>
            
            <div className="flex justify-between p-4 my-16 text-gray-50">
              <button className="bg-main py-2 px-4 rounded-md font-bold">Sign up</button>
              <button className="bg-main py-2 px-4 rounded-md font-bold">Sign in</button>
            </div>

          </div>
        </div>
      </>
    );
  }
  
export default Header;