import { useState } from 'react';
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';
import logo from '../assets/JJ_logo.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className='py-3 w-full my-0 sticky top-0 md:static bg-white opacity-85' id='home'>
                <div className='flex justify-between items-center px-4 lg:px-10'>
                    <img src={logo} alt="company logo" className='w-16 h-auto md:w-20' />
                    <div className='hidden md:block relative'>
                        <FaSearch className='absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400' />
                        <input
                            type="text"
                            placeholder="Search..."
                            className='border rounded-lg pl-8 pr-2 py-1'
                        />
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='md:hidden' onClick={toggleMenu}>
                            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </div>
                        <div className='hidden md:flex gap-3'>
                            <a className='border-2 border-[#873884] rounded-3xl text-[#873884] font-semibold py-1 px-4 hover:bg-[#873884] hover:text-white transition-all duration-500 cursor-pointer'>
                                Join Now
                            </a>
                            
                        </div>
                    </div>
                </div>

                <div className={`flex-col md:flex md:flex-row justify-between items-center bg-[#873884] text-white p-3 mt-1      ${menuOpen ? 'flex' : 'hidden'} md:flex`}>

                    <h1 className='text-xl mb-2 md:mb-0'>J&J Experience</h1>
                    <p className='cursor-pointer transition-all duration-500'><a href="#home">Home</a></p>
                    <p className='cursor-pointer transition-all duration-500'><a href="#whyus">Why Us</a></p>
                    <p className='cursor-pointer transition-all duration-500'><a href="#vehicles">Vehicles</a></p>
                    <p className='cursor-pointer transition-all duration-500'><a href="#about">About Us</a></p>
                    <p className='cursor-pointer transition-all duration-500'><a href="#contact">Contact</a></p>

                </div>

                <div className={`flex flex-col gap-3 md:hidden bg-[#873884] text-white px-4 py-2 ${menuOpen ? 'block' : 'hidden'}`}>
                    <a className='border-2 border-[#873884] rounded-3xl text-[#873884] font-semibold py-1 px-4 hover:bg-[#873884] hover:text-white transition-all duration-500 cursor-pointer'>
                        Join Now
                    </a>
                   
                </div>
            </nav>
        </>
    );
};

export default Navbar;
