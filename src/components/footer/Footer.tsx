import play_store_icon from "../../assets/images/Google.svg.svg";
import fb from "../../assets/icons/fb.svg";
import insta from "../../assets/icons/insta.svg";
import twitter from "../../assets/icons/twitter.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import { TbExternalLink } from "react-icons/tb";
import { CopyRight } from "./CopyRight";
import "./Footer.css";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Footer = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.5 });
    useEffect(() => {
        if (inView) {
          controls.start('visible');
        }
      }, [controls, inView]);

    return (
        <footer className="bg-color4 py-24 pb-16 px-[5%]">
            
            <section className="flex flex-wrap justify-between gap-10">
                <section ref={ref}>
                    <motion.section
                    initial={{ opacity: 0, scale: 0.2 }}
                    animate={controls}
                    variants={{
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.5}
                    },
                    }} 
                    >
                        <h4 className="text-white font-bold text-xl"> fampay </h4>
                        <p className="text-color8 font-extralight text-base mt-2"> The smart banking app for kids and <br /> teens </p>
                        <img src={play_store_icon} alt="play-store-icon" className="mt-2.5" />
                        <section className="mt-2 flex space-x-2">
                            <span> <img src={fb} alt="facebook-icon" loading="lazy" /> </span>
                            <span> <img src={insta} alt="instagram-icon" loading="lazy" /> </span>
                            <span> <img src={twitter} alt="twitter-icon" loading="lazy" /> </span>
                            <span> <img src={linkedin} alt="linkedin-icon" loading="lazy" /> </span>
                        </section>
                    </motion.section>
                </section>

                    <section ref={ref}>
                        <motion.section
                        initial={{ opacity: 0, scale: 0.2 }}
                        animate={controls}
                        variants={{
                        visible: {
                            opacity: 1,
                            scale: 1,
                            transition: { duration: 0.5}
                        },
                        }} 
                        >
                            <h4 className="text-[#CED1D4] font-semibold text-xl"> Users </h4>
                            <ul>
                                <li className="text-color8 font-extralight text-base mt-2"> <a href="#"> Parents </a> </li>
                                <li className="text-color8 font-extralight text-base mt-2"> <a href="#">  Kids  </a> </li>
                                <li className="text-color8 font-extralight text-base mt-2"> <a href="#">  Company  </a> </li>
                            </ul>
                        </motion.section>
                    </section>

                    <section ref={ref}>
                        <motion.section
                        initial={{ opacity: 0, scale: 0.2 }}
                        animate={controls}
                        variants={{
                        visible: {
                            opacity: 1,
                            scale: 1,
                            transition: { duration: 0.5}
                        },
                        }} 
                        >
                            <h4 className="text-[#CED1D4] font-semibold text-xl"> Company </h4>
                            <ul>
                                <li className="text-color8 font-extralight text-base mt-2"> <a href="#"> About Us </a> </li>
                                <li className="text-color8 font-extralight text-base mt-2"> <a href="#">  FAQs  </a> </li>
                                <li className="text-color8 font-extralight text-base mt-2"> 
                                    <a href="#"  className="flex items-center">  
                                        Careers <TbExternalLink className="text-[#DBDCDF] text-sm ml-1" /> 
                                    </a> 
                                </li>
                                <li className="text-color8 font-extralight text-base mt-2"> 
                                    <a href="#" className="flex items-center">  
                                        Blog <TbExternalLink className="text-[#DBDCDF] text-sm ml-1" /> 
                                    </a> 
                                </li>
                            </ul>
                        </motion.section>
                    </section>

                    <section ref={ref}>
                        <motion.section
                        initial={{ opacity: 0, scale: 0.2 }}
                        animate={controls}
                        variants={{
                        visible: {
                            opacity: 1,
                            scale: 1,
                            transition: { duration: 0.5}
                        },
                        }}
                        >
                            <h4 className="text-[#CED1D4] font-semibold text-xl"> Contact us </h4>
                            <ul>
                                <li className="text-color8 font-extralight text-base mt-2"> <a href="#"> +234 905 482 1941 </a> </li>
                                <li className="text-color8 font-extralight text-base mt-2"> <a href="#"> hello@Fampay.com </a> </li>
                                <li className="text-color8 font-extralight text-base mt-2"> <a href="#"> sales@Fampay.com </a> </li>
                            </ul>
                        </motion.section>
                    </section>
            </section>

            <section className="mt-10 flex flex-wrap gap-10 justify-between">
                <CopyRight />
                <section className="text-base flex gap-4 flex-wrap text-color8 font-bold space-x-3">
                    <span>Privacy Policy</span>
                    <span>foodclique</span>
                    <span>AML Policy</span>
                </section>
            </section>
        </footer>
    );
}
 
export default Footer;