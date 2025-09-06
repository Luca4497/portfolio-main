// import hooks
import { useContext } from "react";

// import context
import cvContext from "../../context/cvContext";

// import data
import linkData from "../../data/linkData";
import heroData from "../../data/HeroData";

// import assets
import generalAssets from "../../assets/general/generalAssets";

// import style
import style from "../Main.module.css";

export default function HeroSection() {

    const { sections } = useContext(cvContext)

    const { profilePic } = generalAssets;

    const { mainTitle, title, abstract } = heroData;

    return (
        <section ref={sections.home} className={style.heroSection}>
            <div className="container">
                {/* riga */}
                <div className="row">
                    {/* colonna sinistra */}
                    <div className="col-12 col-md-8 py-4">
                        {/* riga foto profilo (only mobile) & titolo*/}
                        <div className="row align-items-center">
                            {/* colonna sinistra con foto profilo*/}
                            <div className={`col-5 d-md-none`}>
                                {/* box foto */}
                                <div className={style.profile_circle}>
                                    <img src={profilePic} alt="Foto profilo mobile" />
                                </div>
                            </div>
                            {/* colonna destra con titolo */}
                            <div className="col-7 col-md-12">
                                <h2 className={style.catch_phrase}>
                                    {mainTitle}
                                </h2>
                            </div>
                        </div>

                        {/* box presentazione */}
                        <div className={style.box_presentation}>
                            <h5>{title}</h5>
                            <p>
                                {abstract}
                            </p>
                            {/* riga per link */}
                            <div className={`row ${style.channel_box} `}>
                                {linkData.map(link => {
                                    return (
                                        <div key={link.id} className="col">
                                            <div className={style.channel}>
                                                <a 
                                                href={link.link}                             
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                    <img src={link.image} alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                    {/* colonna destra */}
                    <div className={`d-sm-none d-md-block col-4 ${style.profile}`}>
                        {/* foto profilo */}
                        <div className={style.profile_box_image}>
                            <img src={profilePic} alt="Foto profilo desktop" />
                        </div>
                    </div>
                </div>
            </div>

            {/* banner next section */}
            <div ref={sections.experience} className={style.banner_section}>
                <h1 className={style.banner_title}>EXPERIENCE</h1>
            </div>

        </section >
    )
}