import star from "../../assets/icons/Stars.svg.svg";

const Card = () => {
    return (
        <section className="px-3 pt-5 pb-3 bg-white rounded-2xl max-w-[630px] shadow-sm card">
            <p className="text-black text-lg s:text-xl font-light"> Dealt with enquiry and subsequent queries efficiently and quickly, so pleased with the customer service. </p>
            <p className="text-color1 font-semibold text-base s:text-lg mt-4"> Ojo Oluwakemi mariam </p>
            <img src={star} alt="star-icon" className="mt-2" loading="lazy" />
        </section>
    );
}
 
export default Card;