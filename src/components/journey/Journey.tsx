import journey from "../../assets/images/Journey.jpg";
import Start from "./Start";
import "./Journey.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

const Journey = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.8 });
    useEffect(() => {
        if (inView) {
          controls.start('visible');
        }
      }, [controls, inView]);

    return (
        <section className="mt-24 flex flex-wrap lg:space-x-5 justify-center px-[3%] journey">
            <section className="max-w-[450px]" ref={ref}>
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
                src={journey} 
                className="w-full" 
                alt="journey" 
                loading="lazy" 
                />
            </section>
            <Start />
        </section>
    );
}
 
export default Journey;