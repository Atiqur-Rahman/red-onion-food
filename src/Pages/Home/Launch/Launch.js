import { faCartShopping, faMinus, faPlus, faPlusMinus, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Launch = () => {
    const { launchId } = useParams();
    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(1);

    const launchItems = [
        {
            id: 1,
            name: 'Carne Asada Fries',
            price: '11.50',
            description: "Originating from San Diego, California, this American-Mexican fusion dish consists of shoestring fries topped with carne asada, cheese (often Cotija cheese), guacamole, and sour cream. The sour cream and guacamole should be on separate sides of the container so that they don't mix.",
            img: 'https://i.ibb.co/ChKZcgF/lunch1.png',
        },
        {
            id: 2,
            name: 'Amish Chicken',
            price: '12.99',
            description: 'Amish chicken is a traditional American poultry dish. It is made with a combination of chicken, flour, garlic powder, heavy cream, paprika, water, salt, and pepper. The chicken is dredged in flour and seasonings, and it is then covered with a combination of cream and water.',
            img: 'https://i.ibb.co/sPyxyHn/lunch2.png',
        },
        {
            id: 3,
            name: 'Navajo Tacos',
            price: '18.99',
            description: "Navajo tacos, Indian tacos, or frybread tacos is a traditional American dish originating from the Midwest and Intermountain region states such as Arizona, South Dakota, and Oklahoma. These tacos are made with Indian fry bread that's topped with a combination of ingredients such as ground beef, beans, shredded lettuce, cheddar cheese, sour cream, and tomatoes.",
            img: 'https://i.ibb.co/gRSswFD/lunch3.png',
        },
        {
            id: 4,
            name: 'Plate Lunch',
            price: '21.99',
            description: 'Plate lunch is an original, traditional Hawaiian dish consisting of two large scoops of white rice, macaroni salad that is heavy on the mayonnaise, and one meat-based entrée. If a plate has more than one entrée, it is then called a mixed plate.',
            img: 'https://i.ibb.co/8b8GVbL/lunch4.png',
        },
        {
            id: 5,
            name: 'Chicken Fried Rice',
            price: '24.99',
            description: "Chicken fried rice is the comfort dish of Chinese food. It's been around for a very long time and is also common in East, Southeast, and South Asian cuisines. The dish started as way to use leftover fried rice that has dried out some and may not be great on its own, but is still perfectly edible.",
            img: 'https://i.ibb.co/yFfgTgf/lunch5.png',
        },
        {
            id: 6,
            name: 'California Burrito',
            price: '17.99',
            description: "California burrito is the specialty of San Diego, which is also the place where it was invented. It was originally made as a way to feed the city's hungry surfers, because there is a dominant beach culture in San Diego. The burrito usually consists of a flour tortilla stuffed with carne asada, large amounts of cheese, french fries, sour cream, and guacamole.",
            img: 'https://i.ibb.co/q9NNFth/lunch6.png',
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

    // const [launch, setLaunch] = useState([]);

    // useEffect(() => {
    //     const getData = async () => {
    //         await fetch('dinner.json')
    //             .then((res) => res.json())
    //             .then((data) => setLaunch(data));
    //     };
    //     getData();

    //     console.log('it is working');
    // }, []);

    // console.log(launchItems);
    console.log(typeof parseInt(launchId));

    const launch = launchItems.filter((item) => item.id === parseInt(launchId));
    console.log(launch);

    return (
        <div className="container" style={{ marginTop: '8vh' }}>
            <div className="row">
                <div className="col-6">
                    <div>
                        <div className="row">
                            <div className="col-11">
                                <h2 style={{ fontSize: '64px', marginTop: '5vh' }} className="mb-4 ">
                                    {launch[0].name}
                                </h2>
                                <p style={{ lineHeight: '36px', fontSize: '18px' }}>{launch[0].description}</p>
                                <div className="d-flex align-items-center mb-4">
                                    <h2 className="pe-4">${launch[0].price}</h2>
                                    <div className="border border-1 rounded-pill" style={{ height: '5vh', width: '13vh' }}>
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
                                <button onClick={() => navigate(`/cart`)} className="border border-1 rounded-pill text-white" style={{ height: '5vh', width: '13vh', backgroundColor: 'red' }}>
                                    <FontAwesomeIcon className="pe-2" icon={faCartShopping}></FontAwesomeIcon>
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <img style={{ width: '68vh' }} src={launch[0].img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Launch;
