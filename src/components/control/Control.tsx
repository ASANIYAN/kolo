import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

const Control = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.8 });
    useEffect(() => {
        if (inView) {
          controls.start('visible');
        }
      }, [controls, inView]);
    return (
        <section className="mt-12" ref={ref}>
            <motion.h3
            initial={{ opacity: 0, scale: 0.2 }}
            animate={controls}
            variants={{
            visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6},
            },
            }} 
            className="text-2xl s:text-3xl lg:text-4xl font-bold text-color4 text-center">
                Take control of your <span className="text-color1"> family's finances </span> with <br /> fampay &achieve financial goals easily
            </motion.h3>
        </section>
    );
}
 
export default Control;