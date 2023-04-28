import Card from "./Card";
import "./Testimonials.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

const Testimonial = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.8 });
    useEffect(() => {
        if (inView) {
          controls.start('visible');
        }
      }, [controls, inView]);

    return (
        <section className="py-10 bg-color13 flex flex-wrap justify-evenly lg:space-x-5 px-[3%]">
            <section ref={ref}>
                <motion.section
                initial={{ opacity: 0, x: -500 }}
                animate={controls}
                variants={{
                visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6}
                },
                }}
                className="mt-4">
                    <p className="uppercase text-lg s:text-xl font-semibold text-color3"> TESTIMONIALS </p>
                    <h4 className="mt-3 font-bold text-2xl s:text-3xl md:text-4xl"> What Our Customers <br /> Says About Us </h4>
                </motion.section>
            </section>
            <Card />
        </section>
    );
}
 
export default Testimonial;