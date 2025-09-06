// import Hooks
import { useContext } from "react";
// import Contexts
import cvContext from "../../context/cvContext";
// import Styles
import style from "../Main.module.css";
// import Data
import serviceData from "../../data/ServiceData";
// import functions
import { generateFeatureCards } from "../../functions/generateFeatureCards";


export default function ServiceSection() {

    return (
        <section>
            {/* external container */}
            <div className="container px-4 py-0 ">
                <div className={`row flex-nowrap ${style.list_row}`}>
                    {/* Experise Card */}
                    {/* {serviceData.map(item => {
                        console.log(item)
                        return (
                            <FeatureCard
                                key={item.id}
                                item={item}
                            />
                        )
                    })} */}
                    {generateFeatureCards(serviceData)}


                </div>
            </div>
        </section>
    )
}