import arrow_right from "../../assets/icons/arrow_right.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

const Text = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.8 });
    useEffect(() => {
        if (inView) {
          controls.start('visible');
        }
      }, [controls, inView]);

    return (
        <section className="mt-16">
            <section ref={ref}>
                <motion.h3
                initial={{ opacity: 0, x: -500 }}
                animate={controls}
                variants={{
                visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6}
                },
                }}
                className="text-white text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-bold">  
                    Meet the fam <br /> of the month!
                </motion.h3>
            </section>
            <section ref={ref}>
                <motion.p
                initial={{ opacity: 0, x: -500 }}
                animate={controls}
                variants={{
                visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6}
                },
                }}
                className="font-normal text-sm s:text-base text-center lg:text-left lg:max-w-md text-white mt-3"> 
                    Every month, we shine a spotlight on one Family, asking them questions about their Money culture and how fampay is specifically helping them shape 
                    how they spend and save for future responsibilities. 
                </motion.p>
                <motion.section
                initial={{ opacity: 0, scale: 0.2 }}
                animate={controls}
                variants={{
                visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.7}
                },
                }}
                className="flex justify-center lg:justify-start items-center space-x-3 mt-10">
                    <img src={arrow_right} alt="arrow-right-with-circle-icon" />
                    <span className="text-white text-base font-bold"> Meet The Adedejis </span>
                </motion.section>
            </section>
        </section>
    );
}
 
export default Text;