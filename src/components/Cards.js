import React from 'react';
import "./card.css";

const Cards = ({val,hadleClick,increase}) => {
    
    return (
        <>
            <div onClick={
                (e)=>{
                    hadleClick(e);
            }} className="cell">{val}</div>
        </>
    );
};

export default Cards;