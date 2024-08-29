import bgPic from "../assets/rectangle.png"
const Hero = () => {
    return (
        <div style={{ backgroundImage: `url(${bgPic})` }} className='h-[80vh] w-full md:w-full bg-cover bg-center my-0'>
            <div className='flex justify-center h-screen items-center content-center flex-col'>
                <h1 className='text-white text-6xl font-bold text-center'>The Way to go</h1>
                <button className='text-white font-semibold border-2 border-[#873884] rounded-3xl px-6 py-1 mt-3 text-center hover:bg-[#873884] hover:text-white transition-all duration-500'><a href="#contact">Contact Us</a></button>
            </div>

        </div>
    )
}

export default Hero
