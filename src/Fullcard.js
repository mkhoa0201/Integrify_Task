import React from "react";

import {useParams} from 'react-router-dom';

const Fullcard = ({data}) => {
    const { username } = useParams();

    return (
        <section className = "full">
            <div className = "container">
                {data.filter(card => card.username === username).map((card,index) => (
                    <div key = {index} className = "fullcard">
                        <h1>{card.name} </h1>
                        <p>{card.username}</p>
                        <p>{card.email}</p>
                        <p>{card.phone}</p>
                        <p>{card.company.name}</p>
                        <p>{card.website}</p>
                        <p>Address</p>
                        <p>Street: {card.address.street}</p>
                        <p>Suite: {card.address.suite}</p>
                        <p>City: {card.address.city}</p>
                        <p>Zipcode: {card.address.zipcode}</p>

                    </div>
                ))}
            </div>
        </section>
    );
    
};

export default Fullcard;