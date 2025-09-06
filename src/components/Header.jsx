import style from "./Header.module.css";
import { useContext } from "react";
import cvContext from "../context/cvContext";


export default function Header() {

    const { navLink, scrollToSection } = useContext(cvContext)




    return (
        <>
            <header className={style.header}>
                {/* external box */}
                <div className={`container`}>
                    <div className={style.nav_container}>
                        {/* navBar-tablet & pc*/}
                        <nav className="d-none d-md-block">
                            <ul className="row p-0 m-0">
                                {navLink.map((item) => {
                                    // console.log(item)
                                    return (
                                        <li
                                            className="col"
                                            key={item.id}

                                        >
                                            <span
                                                className={style.header_link}
                                                onClick={() => {
                                                    scrollToSection(item.ref)
                                                }}
                                            >{item.link}
                                            </span>
                                        </li>
                                    )
                                })}

                            </ul>
                        </nav>

                        {/* navbar-mobile */}
                        <div className="row w-100 m-0">
                            <div className="col-12 p-0">
                                <nav className="navbar d-md-none">
                                    {/* burgher button */}
                                    <button className={`navbar-toggler ${style.burger_menu}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse w-100 mt-2" id="navbarTogglerDemo02">
                                        <ul className="navbar-nav w-100 text-center mb-2 mb-lg-0 p-0 m-0">
                                            {navLink.map((item) => {
                                                return (
                                                    <li className="nav-item w-100" key={item.id}>
                                                        <span
                                                            className={style.header_link}
                                                            onClick={() => {
                                                                scrollToSection(item.ref)
                                                            }}
                                                        >{item.link}
                                                        </span>
                                                        {/* <a className="nav-link active" aria-current="page" href="#">{item.link}</a> */}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div >
            </header >
        </>
    )
}