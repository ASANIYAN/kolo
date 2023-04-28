import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

const Start = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.8 });
    useEffect(() => {
        if (inView) {
          controls.start('visible');
        }
      }, [controls, inView]);
    const contents = [
        { no: "01", heading: "Download the Mobile  app", text: "Sign up for an account with your name, email and phone number" }, 
        { no: "02", heading: "Sign up easily", text: "Sign up for an account with your name, email and phone number" }, 
        { no: "03", heading: "Start your Fampay journey", text: "Sign up for an account with your name, email and phone number" }, 
    ]

    return (
        <section className="w-fit max-w-xl">
            <section ref={ref}>
                <motion.h3
                initial={{ opacity: 0, x: 500 }}
                animate={controls}
                variants={{
                visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6}
                },
                }} 
                className="font-bold text-color4 text-2xl sm:text-3xl lg:text-4xl"> 
                    Start the journey to reach your financial goals today. 
                </motion.h3>
            </section>
            <section className="mt-6">
                { contents.map((content, id) => (
                    <section key={id} className="mt-3 flex space-x-3" ref={ref}>
                        <motion.section
                        initial={{ opacity: 0, y: -500 }}
                        animate={controls}
                        variants={{
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.5 + id/10 }
                        },
                        }} 
                        >
                            <span className="text-color1 font-medium text-xl sm:text-2xl"> { content.no } </span>
                            { content.no !== "03" && <div className="bg-color1 w-[0.05rem] mx-auto mt-3 h-[80px]"> </div> }
                        </motion.section>
                        <motion.section
                        initial={{ opacity: 0, y: 500 }}
                        animate={controls}
                        variants={{
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.5 + id/10 }
                        },
                        }} 
                        className=""
                        >
                            <span className="font-bold text-lg sm:text-xl text-color4"> { content.heading } </span>
                            <p className="text-color7 font-extralight text-base max-w-sm mt-3"> { content.text } </p>
                        </motion.section>
                    </section>
                ))
                }
            </section>
        </section>
    );
}
 
export default Start;