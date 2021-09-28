import React from "react";
import{ Link } from 'react-router-dom';

const Card = ({data}) => {

    return (
        <>
        {data.map((card,index) => (
            <div key = {index} className = "card">
                <h1>{card.name} </h1>
                <p>@{card.username}</p>
                <Link to ={`/cards/${card.username}`}> View more</Link>
            </div>
        ))}
        </>
    );
};

export default Card;