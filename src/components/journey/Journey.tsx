import journey from "../../assets/images/Journey.jpg";
import Start from "./Start";
import "./Journey.css";

const Journey = () => {
    return (
        <section className="mt-24 flex flex-wrap lg:space-x-5 justify-center px-[3%] journey">
            <section className="max-w-[450px]">
                <img src={journey} className="w-full" alt="journey" loading="lazy" />
            </section>
            <Start />
        </section>
    );
}
 
export default Journey;