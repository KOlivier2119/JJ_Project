import users from "../assets/workers.png"
import { HiCheck } from "react-icons/hi";
import { FaArrowRight } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div className='flex flex-col md:flex-row flex-1 gap-5 mt-16 px-3' id="whyus">
            <img src={users} alt="Users" className='w-full md:w-[50%] h-[500px] p-2 object-fill' />
            <div className='w-full md:w-[50%] p-6'>
                <p className='border-l-4 border-[#873884] pl-3 my-2'>Why choose Us</p>
                <h1 className='font-bold text-4xl mb-1'>We Provide You The Best Experience</h1>
                <p>We provide real time services and ensure the best user experience.
                    We ensure that the product you ordered reach you within maximum of 3 days!
                </p>
                <ul className='mt-6 pl-6'>
                    <li className='p-1'><HiCheck className='rounded-full bg-[#873884] text-white w-6 h-6 inline-block'/> Since we have established a very good </li>
                    <li className='p-1'><HiCheck className='rounded-full bg-[#873884] text-white w-6 h-6 inline-block'/> Since we have established a very good</li>
                    <li className='p-1'><HiCheck className='rounded-full bg-[#873884] text-white w-6 h-6 inline-block'/> Since we have established a very good </li>
                </ul>
                <button className='bg-[#873884] px-5 py-3 text-white font-bold rounded-3xl text-center ml-3 mt-6 w-[90%] hover:bg-[#941c90]'>Get a Quote <FaArrowRight className='inline-block text-white w-10'/> </button>
            </div>
        </div>
    )
}

export default AboutUs
