import { faCartShopping, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Dinner = () => {
    const { dinnerId } = useParams();
    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(1);

    const dinnerMenu = [
        {
            id: 1,
            name: 'Tetrazzini',
            price: '18.99',
            description: 'Tetrazzini is an American dish consisting of pasta tossed with diced poultry or seafood in a creamy parmesan cheese sauce. Some cooks like to add steamed peas, mushrooms, or carrots to the dish in order to enhance its flavors even further. The dish is often baked as a casserole and garnished with almonds or parsley.',
            img: 'https://i.ibb.co/8NnbGtG/dinner1.png',
        },
        {
            id: 2,
            name: 'Amish Chicken',
            price: '14.99',
            description: 'Amish chicken is a traditional American poultry dish. It is made with a combination of chicken, flour, garlic powder, heavy cream, paprika, water, salt, and pepper. The chicken is dredged in flour and seasonings, and it is then covered with a combination of cream and water.',
            img: 'https://i.ibb.co/QQBjwnd/dinner2.png',
        },
        {
            id: 3,
            name: 'Carne Asada Burrito',
            price: '21.99',
            description: 'Carne asada burrito is a type of burrito that originates from San Diego. The dish consists of a large flour tortilla topped with carne asada meat, pico de gallo, and guacamole. The carne asada parts is made with a combination of beef (skirt or flank steak), lemon juice, lime juice, salt, pepper, and onions.',
            img: 'https://i.ibb.co/30tPdWS/dinner3.png',
        },
        {
            id: 4,
            name: 'Navajo Tacos',
            price: '15.99',
            description: "Navajo tacos, Indian tacos, or frybread tacos is a traditional American dish originating from the Midwest and Intermountain region states such as Arizona, South Dakota, and Oklahoma. These tacos are made with Indian fry bread that's topped with a combination of ingredients such as ground beef, beans, shredded lettuce, cheddar cheese, sour cream, and tomatoes.",
            img: 'https://i.ibb.co/hRRGf0J/dinner4.png',
        },
        {
            id: 5,
            name: 'Tuna Tartare',
            price: '16.99',
            description: 'Tuna tartare is an elegant starter originating from Los Angeles. The dish is made with a combination of raw tuna, avocado, egg yolks, green peppercorns, capers, chives, tarragon, mustard, olive oil, lemon juice, salt, and pepper. It was invented in 1984 by chef Shigefumi Tachibe at the Chaya Brasserie when a few customers came in wanting beef tartare.',
            img: 'https://i.ibb.co/B3Y0YfF/dinner5.png',
        },
        {
            id: 6,
            name: 'Loco Moco',
            price: '11.99',
            description: "Loco moco is Hawaii's popular comfort food, most often consisting of sticky rice at the bottom, topped with a hamburger patty, a fried egg, and the thick gravy that is poured on top of the whole combination, although there are numerous variations using bacon, ham, chicken, oysters, and shrimp.",
            img: 'https://i.ibb.co/Y295p3x/dinner6.png',
        },
    ];

    const handleIncrement = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const dinner = dinnerMenu.filter((item) => item.id === parseInt(dinnerId));
    console.log(dinner);

    return (
        <div className="container" style={{ marginTop: '8vh' }}>
            <div className="row">
                <div className="col-6">
                    <div>
                        <div className="row">
                            <div className="col-11">
                                <h2 style={{ fontSize: '64px', marginTop: '5vh' }} className="mb-4 ">
                                    {dinner[0].name}
                                </h2>
                                <p style={{ lineHeight: '36px', fontSize: '18px' }}>{dinner[0].description}</p>
                                <div className="d-flex align-items-center mb-4">
                                    <h2 className="pe-4">${dinner[0].price}</h2>
                                    <div className="border border-1 rounded-pill" style={{ height: '48px', width: '125px' }}>
                                        <div className="d-flex justify-content-evenly align-items-center mt-2">
                                            <button style={{ background: 'none', border: 'none' }}>
                                                <FontAwesomeIcon onClick={handleDecrement} icon={faMinus}></FontAwesomeIcon>
                                            </button>
                                            <span style={{ fontSize: '20px' }}>{quantity}</span>
                                            <button style={{ background: 'none', border: 'none' }}>
                                                <FontAwesomeIcon style={{ cursor: 'pointer' }} onClick={handleIncrement} icon={faPlus}></FontAwesomeIcon>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => navigate(`/cart`)} className="border border-1 rounded-pill text-white" style={{ height: '48px', width: '125px', backgroundColor: 'red' }}>
                                    <FontAwesomeIcon className="pe-2" icon={faCartShopping}></FontAwesomeIcon>
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <img style={{ width: '68vh' }} src={dinner[0].img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Dinner;
