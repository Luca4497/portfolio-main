// import style
import style from "../Main.module.css";
// import hooks
import { useState, useContext } from "react";
// import context
import cvContext from "../../context/cvContext";
// import components
import ProjectCard from "./ProjectCard";
// import Data
import portfolioData from "../../data/PortfolioData";



export default function PortfolioSection() {
    // destructuring context
    const { sections } = useContext(cvContext)

    // create Accordion state
    const [currentlyActive, setCurrentlyActive] = useState(null)

    // accordion function
    const handleAccordionClick = (newActiveAccordion) => {
        setCurrentlyActive(newActiveAccordion === currentlyActive ? null : newActiveAccordion)
    };

    return (
        <section>
            {/* external container */}
            <div className="container px-4 py-0">
                {/* project card box  */}
                <div className={style.project_card_box}>
                    {/* project card */}
                    {portfolioData.map(item => {
                        // console.log(item)
                        return (
                            <ProjectCard
                                key={item.id}
                                item={item}
                                currentlyActive={currentlyActive}
                                handleAccordionClick={handleAccordionClick}
                            />

                        )
                    })}

                </div>
            </div>
        </section >
    )
}