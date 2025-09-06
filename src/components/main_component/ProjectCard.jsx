import AccordionItem from "./Accordion/Accordion";
import style from "../Main.module.css";

export default function ProjectCard({ item, currentlyActive, handleAccordionClick }) {


    return (
        <div className={style.project_card}>
            {/* box image */}
            <div className={style.project_card_image}>
                <img src={item.image}></img>
            </div>
            <AccordionItem
                isActive={currentlyActive === item.id}
                onClick={() => handleAccordionClick(item.id)}
                handleAccordionClick={handleAccordionClick}
                item={item}
            />
        </div>
    )
}