import React from 'react';

const Launch = ({ launch }) => {
    const { id, name, price, description, img } = launch;

    return (
        <div>
            <img src={img} alt="" />
            <h5>{name}</h5>
            <p>{price}</p>
        </div>
    );
};

export default Launch;
