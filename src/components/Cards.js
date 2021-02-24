import React from 'react';
import "./card.css";

const Cards = ({val}) => {
    const hadleClick=(e)=>{
        e.target.className="clicked"
    }
    return (
        <>
            <div onClick={(e)=>hadleClick(e)} className="cell">{val}</div>
        </>
    );
};

export default Cards;