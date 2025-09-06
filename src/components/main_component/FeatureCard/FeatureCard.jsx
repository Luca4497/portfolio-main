// Import style
import style from "./FeatureCard.module.css";

export default function FeatureCard({ item }) {

    return (
        <div className="col">
            {/* box image */}
            <div className={style.image_box}>
                <img src={item.image} alt="" />
            </div>
            {/* title */}
            <h4 className={style.title}>{item.title}</h4>
        </div>
    )
}