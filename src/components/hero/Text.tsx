import { AnimationControls, motion } from 'framer-motion';


type props = {
    controls: AnimationControls
}

const Text = ({ controls } : props) => {


    return (
        <motion.section
        initial={{ opacity: 0, scale: 0.2 }}
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4 }
          },
        }} 
        className="w-full lg:w-fit">
            <h2 className="text-color4 font-bold text-3xl xl:leading-[66px] s:text-4xl lg:mx-0  xl:text-5xl lg:max-w-[450px] xl:max-w-[550px]">
                The smart <span className="text-color1"> family </span> <br /> app for Parents & Kids all in one place. 
            </h2>
            <p className="text-color4 text-base font-normal mt-3 lg:max-w-[500px]">
                Take control of your family's finances and download Fampay. It's the smart choice for families who want to save time, money, 
                and stress when it comes to managing their finances.
            </p>
        </motion.section>
    );
}
 
export default Text;