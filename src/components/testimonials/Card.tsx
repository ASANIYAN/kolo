import star from "../../assets/icons/Stars.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

const Card = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.8 });
    useEffect(() => {
        if (inView) {
          controls.start('visible');
        }
      }, [controls, inView]);

    return (
        <section ref={ref}>
            <motion.section 
            initial={{ opacity: 0, x: 500 }}
            animate={controls}
            variants={{
            visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6}
            },
            }}
            className="px-3 pt-5 pb-3 bg-white rounded-2xl max-w-[630px] shadow-sm card">
                <p className="text-black text-lg s:text-xl font-light"> Dealt with enquiry and subsequent queries efficiently and quickly, so pleased with the customer service. </p>
                <p className="text-color1 font-semibold text-base s:text-lg mt-4"> Ojo Oluwakemi mariam </p>
                <img src={star} alt="star-icon" className="mt-2" loading="lazy" />
            </motion.section>
        </section>
    );
}
 
export default Card;