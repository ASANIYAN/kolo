import { useInView } from 'react-intersection-observer';
import Text from "./Text";
import appleIcon from  "../../assets/icons/apple_icon.svg";
import playStoreIcon from  "../../assets/icons/play_store_icon.svg";
import hero from  "../../assets/images/hero-img.jpg";
import "./Hero.css";
import { motion,useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const Hero = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.8 });
    useEffect(() => {
        if (inView) {
          controls.start('visible');
        }
      }, [controls, inView]);
    return (
        <section className="flex flex-wrap w-full justify-between mt-20 px-[3%] lg:px-0 lg:pl-[3%] space-y-10 xl:space-y-0">
            <section className="w-full text-center lg:text-left lg:w-fit" ref={ref}>
                <Text controls={controls} />
                <section className="mt-7">
                    <motion.button 
                    initial={{ opacity: 0, x: -500 }}
                    animate={controls}
                    variants={{
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5}
                      },
                    }}
                    className="font-semibold  bg-color1 border-2 border-color1 py-2.5 px-10 text-white rounded-[10px] btn-nav"
                    > 
                        Sign Up For Free 
                    </motion.button>
                    <div className="flex flex-wrap space-y-3 ccclx:space-y-0 justify-center lg:justify-start space-x-2 text-color10 font-bold mt-7">
                        <motion.button
                        initial={{ opacity: 0, y: -500 }}
                        animate={controls}
                        variants={{
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.5},
                        },
                        }} 
                        className="border border-color11 rounded-xl py-3 px-5 text-[12.82px] flex items-center space-x-2">
                            <img src={appleIcon} className="inline" alt="apple-icon" loading="lazy" /> <span className=""> Get on iPhone </span> 
                        </motion.button>
                        <motion.button
                        initial={{ opacity: 0, y: -500 }}
                        animate={controls}
                        variants={{
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.5},
                        },
                        }} 
                        className="border border-color11 rounded-xl py-3 px-5 text-[12.82px] flex items-center space-x-2"> 
                            <img src={playStoreIcon} className="inline" alt="play-store-icon" loading="lazy" /> <span> Get on Android </span> 
                        </motion.button>
                    </div>
                </section>
            </section>

            <section className="max-w-[500px] mx-auto lg:ml-auto lg:max-w-[520px] xl:max-w-[600px] hero-img" ref={ref}>
                <motion.img
                initial={{ opacity: 0, x: 50 }}
                animate={controls}
                variants={{
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }} 
                src={hero} className="w-full"  alt="hero" loading="lazy"/>
            </section>
        </section>
    );
}
 
export default Hero;