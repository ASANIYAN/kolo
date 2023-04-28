import OIO from "../../assets/images/OIO.svg";
import Lookscout from "../../assets/images/Lookscout.svg";
import Harvard from "../../assets/images/Harvard.svg";
import Pamper from "../../assets/images/PAMPER.svg";
import "./Featured.css";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Featured = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.5 });
    useEffect(() => {
        if (inView) {
          controls.start('visible');
        }
      }, [controls, inView]);
    

    return (
        <section className="bg-color12 py-4 px-[3%] hidden lg:flex flex-wrap space-x-5 mt-4" ref={ref}>
            <motion.h3
            initial={{ opacity: 0, x: -500 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.5}
              },
            }} 
            className="text-color1 font-bold text-3xl lg:text-4xl"> 
                As featured in 
            </motion.h3>
            <motion.section
            initial={{ opacity: 0, scale: 0 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5}
              },
            }} 
            
            className="flex-1">
                <section className="flex justify-evenly space-x-5 items-center">
                        <img src={OIO} alt="oio" width={100} loading="lazy" />
                        <img src={Lookscout} alt="lookscout" width={150} loading="lazy" />
                        <img src={Harvard} alt="harvard" width={150} loading="lazy" />
                        <img src={Pamper} alt="pamper" width={120} loading="lazy" />
                </section>
            </motion.section>
        </section>
    );
}
 
export default Featured;