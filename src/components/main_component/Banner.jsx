import style from '../Main.module.css';
export default function Banner({ position, element }) {
    // console.log("questo è l'elemento", element);
    //render
    return (
        <div ref={element.ref} className={style.banner_section}>
            <h1 className={`${style.banner_title} ${position === 'end' ? 'text-end' : 'text-start'}`}>{element.link}</h1>
        </div>
    )
}