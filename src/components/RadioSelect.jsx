import { useState } from "react"

import all from "../assets/images/all.png"
import women from "../assets/images/women.png"
import men from "../assets/images/men.png"
import kids from "../assets/images/kids.png"
import teen from "../assets/images/teen.png"

import "../assets/stylesheet/radioselect.css"

function RadioSelect({handleTrendingFilter}) {

    const [active, setActive] = useState("all")

    return (
        <div className="radioselect__wrapper" onClick={(e) => {
            setActive(e.target.dataset.icon)
            handleTrendingFilter(e.target.dataset.icon)
        }}>
            <div className={`icons__box ${active === 'all'?"active_category":""}`} data-icon="all">
                <img src={all} width="28px" data-icon="all"/>
                <p data-icon="all" >All</p>
            </div>
            <div className={`icons__box ${active === 'women'?"active_category":""}`} data-icon="women">
                <img src={women} width="28px" data-icon="women"/>
                <p data-icon="women" >Women</p>
            </div>
            <div className={`icons__box ${active === 'men'?"active_category":""}`} data-icon="men">
                <img src={men} width="28px" data-icon="men"/>
                <p data-icon="men" >Men</p>
            </div>
            <div className={`icons__box ${active === 'kids'?"active_category":""}`} data-icon="kids">
                <img src={kids} width="28px" data-icon="kids"/>
                <p data-icon="kids" >Kids</p>
            </div>
            <div className={`icons__box ${active === 'teen'?"active_category":""}`} data-icon="teen">
                <img src={teen} width="28px" data-icon="teen"/>
                <p data-icon="teen">Teen</p>
            </div>
        </div>
    )
}

export default RadioSelect