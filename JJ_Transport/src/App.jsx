import AboutUs from "./components/AboutUs"
import Booking from "./components/Booking"
import Contacts from "./components/Contacts"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import MoreAbout from "./components/MoreAbout"
import Navbar from "./components/Navbar"




function App() {


  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutUs />
      <Booking />
      <MoreAbout />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
