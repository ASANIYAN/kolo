import measure from "../../assets/images/DebitCard.svg.svg";
import analytics from "../../assets/images/Allowance.svg.svg";
import management from "../../assets/images/Savings.svg.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

export const Grid1 = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.8 });
    useEffect(() => {
        if (inView) {
          controls.start('visible');
        }
      }, [controls, inView]);

    const contents = [
        { img: measure, heading: 'Measure your performance', text: 'Stay connected with your team and make quick decisions wherever you are.' },
        { img: analytics , heading: 'Custom analytics', text: 'Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place.' },
        { img: management , heading: 'Team Management', text: 'Our calendar lets you know what is happening with customer and projects so you ' }
    ];

    return (
        <section className="flex flex-wrap justify-evenly gap-8 md:pt-[100px] grid1">
            { contents.map((content, id) => (
                <section
                ref={ref}
                className="max-w-[350px] mt-8" key={id}>
                    <motion.img
                    initial={{ opacity: 0, x: -500 }}
                    animate={controls}
                    variants={{
                    visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.6}
                    },
                    }}
                    src={content.img} 
                    className="mx-auto" 
                    alt="performance" 
                    width={60} height={60} 
                    loading="lazy" 
                    />
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
                    className="font-bold text-2xl text-center text-color2 mt-3"> { content.heading } </motion.p>
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
                    className="text-center font-medium text-color3 text-base max-w-[320px] mx-auto mt-2"> 
                        { content.text }  
                    </motion.p>
                </section>
            ))
            }
        </section>
    );
}