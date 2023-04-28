import Text from "./Text";
import adedejis from "../../assets/images/Adedejis.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

const Meet = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.8 });
    useEffect(() => {
        if (inView) {
          controls.start('visible');
        }
      }, [controls, inView]);
      
    return (
        <section className="bg-color1 px-[3%] lg:px-0 lg:pl-[3%] flex flex-wrap justify-center lg:justify-between mt-20">
            <Text />
            <section className="lg:max-w-[520px] xl:max-w-[550px] mt-8 lg:mt-0" ref={ref}>
                <motion.img 
                initial={{ opacity: 0, scale: 0.2 }}
                animate={controls}
                variants={{
                visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.6}
                },
                }}
                src={adedejis} alt="adedejis_image" loading="lazy" 
                />
            </section>
        </section>
    );
}
 
export default Meet;