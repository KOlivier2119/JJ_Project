import contact from "../assets/contact.svg";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contacts = () => {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        message: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(userData);
            await axios.post("http://localhost:5000/contacts", userData);
            toast.success("Message sent successfully!");
            setUserData({
                username: "",
                email: "",
                message: ""
            });
        } catch (err) {
            console.log(err);
            
            toast.error("Oops, message failed to be sent");
        }
    };

    return (
        <div className="py-5 px-3" id="contact">
            <ToastContainer /> {/* Add this line to render toasts */}
            <h1 className="text-center font-semibold text-2xl p-7">Contact Us</h1>
            <div className="flex flex-col md:flex-row justify-around items-center">
                <img src={contact} alt="Contact Us svg photo" />
                <div className="w-full md:w-[40%]">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col py-2">
                            <label htmlFor="username">Full Name</label>
                            <input
                                type="text"
                                name="username"
                                value={userData.username}
                                required
                                className="bg-gray-300 rounded-lg w-full py-2 px-2 outline-none text-gray-500"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="flex flex-col py-2">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={userData.email}
                                required
                                className="bg-gray-300 rounded-lg w-full py-2 px-2 outline-none text-gray-500"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="flex flex-col py-2">
                            <label htmlFor="message">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                value={userData.message}
                                required
                                className="bg-gray-300 rounded-lg w-full px-2 py-2 outline-none text-gray-500"
                                onChange={handleInputChange}
                            ></textarea>
                        </div>
                        <button className="bg-[#873884] text-white text-center w-full py-3 rounded-lg hover:bg-[#941c90]">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
