const Start = () => {
    const contents = [
        { no: "01", heading: "Download the Mobile  app", text: "Sign up for an account with your name, email and phone number" }, 
        { no: "02", heading: "Sign up easily", text: "Sign up for an account with your name, email and phone number" }, 
        { no: "03", heading: "Start your Fampay journey", text: "Sign up for an account with your name, email and phone number" }, 
    ]

    return (
        <section className="w-fit max-w-xl">
            <h3 className="font-bold text-color4 text-2xl sm:text-3xl lg:text-4xl"> Start the journey to reach your financial goals today. </h3>
            <section className="mt-6">
                { contents.map((content, id) => (
                    <section key={id} className="mt-3 flex space-x-3">
                        <section>
                            <span className="text-color1 font-medium text-xl sm:text-2xl"> { content.no } </span>
                            { content.no !== "03" && <div className="bg-color1 w-[0.05rem] mx-auto mt-3 h-[80px]"> </div> }
                        </section>
                        <section className="">
                            <span className="font-bold text-lg sm:text-xl text-color4"> { content.heading } </span>
                            <p className="text-color7 font-extralight text-base max-w-sm mt-3"> { content.text } </p>
                        </section>
                    </section>
                ))
                }
            </section>
        </section>
    );
}
 
export default Start;