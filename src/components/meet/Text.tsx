import arrow_right from "../../assets/icons/arrow_right.svg";

const Text = () => {
    return (
        <section className="mt-16">
            <h3 className="text-white text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-bold">  Meet the fam <br /> of the month! </h3>
            <p className="font-normal text-sm s:text-base text-center lg:text-left lg:max-w-md text-white mt-3"> 
                Every month, we shine a spotlight on one Family, asking them questions about their Money culture and how fampay is specifically helping them shape 
                how they spend and save for future responsibilities. 
            </p>
            <section className="flex justify-center lg:justify-start items-center space-x-3 mt-10">
                <img src={arrow_right} alt="arrow-right-with-circle-icon" />
                <span className="text-white text-base font-bold"> Meet The Adedejis </span>
            </section>
        </section>
    );
}
 
export default Text;