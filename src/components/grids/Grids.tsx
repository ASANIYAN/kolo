import Grid2 from "./Grid2";
import "./Grids.css";
import { Grid1 } from "./Grid1";

const Grids = () => {
    return (
        <section className="mt-16 px-[3%] lg:px-0 ">
            <Grid1 />
            <Grid2 />
        </section>
    );
}
 
export default Grids;