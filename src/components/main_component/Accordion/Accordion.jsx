
// import Assets
import generalAssets from '../../../assets/general/generalAssets';

// import style
import style from "./accordion.module.css";

export default function AccordionItem({ isActive, onClick, item }) {

    const { link, tile, title, abstract } = item;

    const { docLight } = generalAssets;

    return (

        // Accordion Item
        <div className={`${style.item} ${isActive ? style.active : ''}`} onClick={onClick}>
            {/* icon */}
            {/* accordion title */}
            <div className="row align-items-center py-2 my-1">

                {/* col with circle button */}
                <div className="col-2 col-md-1 p-0">
                    <div className={` ${style.icon_container}  ${isActive ? style.active : ''}`}>
                        <div className={`${style.stroke_one}  ${isActive ? style.active : ''}`}></div>
                        <div className={`${style.stroke_two}`}></div>
                    </div>
                </div>

                {/* col with tile*/}
                <div className={`${link ? "col-8" : "col-10"} p-0`}>
                    <h4 className={style.tile}>{tile}</h4>
                </div>

                {/* col with link button */}
                {link ?
                    <div className="col-2 col-md-3 d-flex justify-content-end p-0">
                        <a
                            className={style.project_link_box}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={docLight} alt="document icon" />
                        </a>
                    </div>
                    :
                    null
                }

                {/* accordion content */}
                <div className={`${style.content}  ${isActive ? style.active : ''}`}>
                    <h5>{title}</h5>
                    <h6>{abstract}</h6>
                    {link ?
                        <a
                            className={style.task_link}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer">
                            Read Document
                        </a>


                        :
                        null
                    }
                </div>
            </div>
        </div >
    )
}