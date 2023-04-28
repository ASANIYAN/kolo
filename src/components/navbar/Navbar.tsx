import { useState } from "react";
import logo from "../../assets/images/navbar-logo.svg";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
      

    return (
        <>
            <motion.nav 
            className="px-[3%]"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            >
                <section className="flex justify-between flex-wrap items-center mt-4 navbar space-y-2">
                    <img src={logo} alt="logo" loading="lazy"/>
                    <ul className="text-color3 text-base font-medium hidden md:flex space-x-6">
                        <li className="text-color2 cursor-pointer"> Product </li>
                        <li className="cursor-pointer hover:text-color2"> Features </li>
                        <li className="cursor-pointer hover:text-color2"> FAQs </li>
                        <li className="cursor-pointer hover:text-color2"> Resources </li>
                    </ul>
                    <section className="md:hidden">
                        <GiHamburgerMenu className="text-color1 text-2xl" onClick={() => setIsOpen(true)} />
                    </section>
                    <section className="flex items-center space-x-3 text-sm sm:text-base ml-2">
                        <p className="text-color3 font-medium hover:text-color2 cursor-pointer"> Log In </p>
                        <button className="font-semibold  bg-color1 border-2 border-color1 py-2 px-2 text-white rounded-[10px] btn-nav"> Sign Up For Free </button>
                    </section>
                </section>
            </motion.nav>
            { isOpen && 
                <AnimatePresence>
                    <motion.aside            
                    initial={{ x: `-100%` }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                    exit={{ x: '-100%' }}
                    className="h-full w-full md:hidden fixed left-0 top-0 bg-white z-[1000]"
                    >
                        <section className="flex justify-end pr-4 pt-4">
                            <IoMdClose className="text-color1 text-3xl" onClick={() => setIsOpen(false)} />
                        </section>
                            <motion.nav                  
                                initial={{ x: '-100%' }}
                                animate={{ x: 0 }}
                                transition={{ duration: 0.6 }}
                                exit={{ x: '-100%' }}
                                className="mt-20"
                                >
                                    <ul className="text-color3 text-base font-medium flex items-center h-full justify-center flex-col space-y-6">
                                        <li className="text-color2 cursor-pointer"> Product </li>
                                        <li className="cursor-pointer hover:text-color2"> Features </li>
                                        <li className="cursor-pointer hover:text-color2"> FAQs </li>
                                        <li className="cursor-pointer hover:text-color2"> Resources </li>
                                    </ul>
                            </motion.nav>
                    </motion.aside>
                </AnimatePresence>
            }
        </>
    );
}
 
export default Navbar;