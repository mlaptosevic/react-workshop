import React from 'react';

const PizzaCard = ({name, price, setInfo, url, hides}) => {
    if(hides) {
        return null;
    }

    return (
        <div>
            <img 
            height={64}
            width={64}
            alt="pizza"
            src={url}
            />
            <div>
                {name}
            </div>            
            <div>
                {price}
            </div>
            <button onClick={setInfo}>More Info</button>
        </div>
    );
};

export default PizzaCard;