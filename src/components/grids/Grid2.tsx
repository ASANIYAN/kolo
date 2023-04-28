import measure from "../../assets/images/Earnit.svg.svg";
import analytics from "../../assets/images/Parental.svg.svg";
import management from "../../assets/images/Allowance.svg.svg";

const Grid2 = () => {
    const contents = [
        { img: measure, heading: 'Measure your performance', text: 'Stay connected with your team and make quick decisions wherever you are.' },
        { img: analytics , heading: 'Custom analytics', text: 'Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place.' },
        { img: management , heading: 'Team Management', text: 'Our calendar lets you know what is happening with customer and projects so you ' }
    ];

    return (
        <section className="flex flex-wrap justify-evenly gap-8 mt-24 md:pb-[30px] grid2">
            { contents.map((content, id) => (
                <section className="max-w-[350px]" key={id}>
                    <img src={content.img} className="mx-auto" alt="performance" width={60} height={60} loading="lazy" />
                    <p className="font-bold text-2xl text-center text-color2 mt-3"> { content.heading } </p>
                    <p className="text-center font-medium text-color3 text-base max-w-[320px] mx-auto mt-2"> 
                        { content.text }  
                    </p>
                </section>
            ))
            }
        </section>
    );
}
 
export default Grid2;