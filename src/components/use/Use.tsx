import iPhone14 from "../../assets/images/iPhone14.png";

const Use = () => {
    return (
        <section className="bg-white s:px-5 sm:px-8 md:px-16">
            <section className="translate-y-10 bg-color1 px-2 s:px-0 flex flex-wrap-reverse justify-center s:justify-evenly mt-8 s:rounded-[30px] mx-auto">
                <img src={iPhone14} className="mt-8 lg:mt-6" alt="iPhone14-image" />
                <section className="mt-4"> 
                   <p className="text-white font-bold text-2xl text-center s:text-3xl lg:text-4xl max-w-[500px]"> Thousand of people use Fampay every single day. </p>
                   <p className="font-medium text-base text-white my-3 text-center"> NOW ITS YOUR TURN </p>
                   <div className="flex justify-between max-w-[500px]  rounded-[10px] bg-color14 pl-3.5 pr-1">
                        <input placeholder="Your email..." className="border-none border-0 outline-none text-white w-[140px] cclx:w-[180px] s:w-fit text-sm placeholder:text-white bg-transparent" />
                        <button className="font-semibold bg-white border-2 border-white px-3 ccclx:px-5 py-2.5 s:px-7 text-color1 text-[12px] s:text-base rounded-[10px]"> 
                            Sign Up For Free 
                        </button>
                   </div>
                </section>

            </section>
        </section>
    );
}
 
export default Use;