import Text from "./Text";
import adedejis from "../../assets/images/Adedejis.png";

const Meet = () => {
    return (
        <section className="bg-color1 px-[3%] lg:px-0 lg:pl-[3%] flex flex-wrap justify-center lg:justify-between mt-20">
            <Text />
            <section className="lg:max-w-[520px] xl:max-w-[550px] mt-8 lg:mt-0">
                <img src={adedejis} alt="adedejis_image" loading="lazy" />
            </section>
        </section>
    );
}
 
export default Meet;