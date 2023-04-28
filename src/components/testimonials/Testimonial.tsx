import Card from "./Card";
import "./Testimonials.css";

const Testimonial = () => {
    return (
        <section className="py-10 bg-color13 flex flex-wrap justify-evenly lg:space-x-5 px-[3%]">
            <section className="mt-4">
                <p className="uppercase text-lg s:text-xl font-semibold text-color3"> TESTIMONIALS </p>
                <h4 className="mt-3 font-bold text-2xl s:text-3xl md:text-4xl"> What Our Customers <br /> Says About Us </h4>
            </section>
            <Card />
        </section>
    );
}
 
export default Testimonial;