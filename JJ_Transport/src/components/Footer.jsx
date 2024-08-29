import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa"
import logo from "../assets/logo2.png"

const Footer = () => {
  return (
    <footer className='w-full bg-[#873884] flex flex-col items-center justify-center h-auto py-7'>
      <img src={logo} alt="JJ company logo" className="text-white block" />
      <div className="flex my-4">
        <p className="text-white border-r-2 border-white px-1">Careers</p>
        <p className="text-white border-r-2 border-white px-1">Service Areas</p>
        <p className="text-white px-1">News</p>
      </div>
      <div className="flex space-x-4">
        <FaLinkedin className="w-5 h-5 text-[#873884] bg-white p-1 rounded-md hover:cursor-pointer" />
        <FaFacebook className="w-5 h-5 text-[#873884] bg-white p-1 rounded-md hover:cursor-pointer" />
        <FaInstagram className="w-5 h-5 text-[#873884] bg-white p-1 rounded-md hover:cursor-pointer" />
      </div>
      <p className="text-white py-3">Copyright @2024</p>
    </footer>
  )
}

export default Footer
