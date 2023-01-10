import React from 'react';
import "./Card.css";

const Card = (props) => {

    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
        {/* FORMA SIN CONDICIONALES
        {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
        {props.location === "Online" && <div className="card--badge">ONLINE</div>*/}
        {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../../public/assets/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                    <span class="material-symbols-outlined">star  </span>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>




    );
}

export default Card;
