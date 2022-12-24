import icon from "../img/icon.png"
import {FaDiscord, FaYoutube} from "react-icons/fa"
import {BsFacebook, BsTwitter, BsGithub} from "react-icons/bs"
import useWindowDimensions from '../js/useWindowDimensions';

const  Footer = () => {
    const { height, width } = useWindowDimensions();


    return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <div className={"text-main flex items-center justify-around" + ((width >= 650) ? " flex-row" : " flex-col")}>
        <div className="text-main flex items-center flex-col">
            <div className="flex items-center justify-start flex-col p-4">
                <div className="flex justify-center items-center">
                    <img className="w-12 m-2" src={icon} alt="icon"/>
                    <p className="text-2xl  m-2">Nautilus</p>
                </div>
                <p>© 2022 Nautilus</p>
            </div>
            <div className="flex justify-center items-center flex-row p-4">
                <FaYoutube className="text-3xl transition-all  hover:text-main m-2"/>
                <BsFacebook className="text-3xl transition-all  hover:text-main m-2"/>
                <BsTwitter className="text-3xl transition-all  hover:text-main m-2"/>
                <BsGithub className="text-3xl transition-all  hover:text-main m-2"/>
                <FaDiscord className="text-3xl transition-all  hover:text-main m-2"/>
            </div>
        </div>

        <div className="text-main flex items-center  flex-col m-8 h-full">
            <p className=" text-2xl m-4">Courses</p>
            <p>Nmap</p>
            <p>Metasploit</p>
            <p>SQL injections</p>
            <p>Burpsuite</p>
        </div>

        <div className="text-main flex items-center justify-end flex-col m-8 h-full">
            <p className=" text-2xl m-4">Company</p>
            <p>About Us</p>
            <p>Constact Us</p>
            <p>News</p>
        </div>
      </div>
    </>
    );
  }
  
  export default Footer;