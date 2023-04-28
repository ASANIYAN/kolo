import OIO from "../../assets/images/OIO.svg";
import Lookscout from "../../assets/images/Lookscout.svg";
import Harvard from "../../assets/images/Harvard.svg";
import Pamper from "../../assets/images/PAMPER.svg";
import "./Featured.css";

const Featured = () => {
    

    return (
        <section className="bg-color12 py-4 px-[3%] hidden lg:flex flex-wrap space-x-5 mt-4">
            <h3 className="text-color1 font-bold text-3xl lg:text-4xl"> As featured in </h3>
            <section className="flex-1">
                <section className="flex justify-evenly space-x-5 items-center">
                        <img src={OIO} alt="oio" width={100} loading="lazy" />
                        <img src={Lookscout} alt="lookscout" width={150} loading="lazy" />
                        <img src={Harvard} alt="harvard" width={150} loading="lazy" />
                        <img src={Pamper} alt="pamper" width={120} loading="lazy" />
                </section>
            </section>
        </section>
    );
}
 
export default Featured;