import { faCartShopping, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Breakfast = () => {
    const { breakfastId } = useParams();
    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(1);

    const breakfastMenu = [
        {
            id: 1,
            name: 'English Breakfast',
            price: '8.99',
            description: 'Also known as the full breakfast, this traditional British dish appears everywhere with a few essentials and some regional additions. First, there is the meat usually a combination of sausages and bacon. The sausage is plain pork sausage, while the bacon can be streaky or back bacon. Then there are vegetables and legumes baked beans and tomatoes, both cooked over high heat. The balance of sweetness and acidity in the tomatoes nicely balances out the fattiness on the other side of the plate. Lastly, there is a crispy piece of fried bread and two or three over-easy eggs to tie the whole meal together.',
            img: 'https://i.ibb.co/P6HHJk7/breakfast1.png',
        },
        {
            id: 2,
            name: 'Crumpet',
            price: '11.99',
            description: 'A quintessential British teatime treat, crumpet is a small round bread or cake that is traditionally cooked in a special crumpet ring on a griddle. It is typically prepared with flour, milk or water, and yeast, though sugar, salt, and baking powder or baking soda are also often added to the combination.',
            img: 'https://i.ibb.co/QCx9xW2/breakfast2.png',
        },
        {
            id: 3,
            name: 'Butteries',
            price: '17.99',
            description: 'Also known as Aberdeen butteries, butterie rowies, or simply rowies, these small breakfast rolls are a popular choice for starting the day all over Scotland. The rolls feature a decadently high proportion of butter to flour, which makes them particularly flaky and tender.',
            img: 'https://i.ibb.co/09t13Qq/breakfast3.png',
        },
        {
            id: 4,
            name: 'Kedgeree',
            price: '15.99',
            description: "Originally created in the melting pot of the 19th century British Raj, kedgeree is often described as the culinary lovechild of Indian flavors and Victorian comfort food—it's essentially the British version of khichdi, an Indian dish of spiced rice and lentils.",
            img: 'https://i.ibb.co/V3PxVYL/breakfast4.png',
        },
        {
            id: 5,
            name: 'Eggy Bread',
            price: '7.99',
            description: 'Eggy bread is the British version of French toast. Also known as Poor Knights of Windsor, the dish is usually prepared with a combination of crustless sandwich bread, milk, icing sugar, eggs, butter, cinnamon, and often a bit of sherry and strawberry jam.',
            img: 'https://i.ibb.co/9vf3h39/breakfast5.png',
        },
        {
            id: 6,
            name: 'Ulster Fry',
            price: '13.99',
            description: "Considered to be the ultimate breakfast food, Ulster fry is Northern Ireland's favorite dish consisting of sausages, streaky bacon, eggs and tomatoes, with the addition of griddle-baked soda farls (quarters) and potato bread, fried until golden crispy on the exterior, and tenderly fluffy on the interior.",
            img: 'https://i.ibb.co/LScw4F2/breakfast6.png',
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

    const breakfast = breakfastMenu.filter((item) => item.id === parseInt(breakfastId));
    console.log(breakfast);

    return (
        <div className="container" style={{ marginTop: '8vh' }}>
            <div className="row">
                <div className="col-6">
                    <div>
                        <div className="row">
                            <div className="col-11">
                                <h2 style={{ fontSize: '64px', marginTop: '5vh' }} className="mb-4 ">
                                    {breakfast[0].name}
                                </h2>
                                <p style={{ lineHeight: '36px', fontSize: '18px' }}>{breakfast[0].description}</p>
                                <div className="d-flex align-items-center mb-4">
                                    <h2 className="pe-4">${breakfast[0].price}</h2>
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
                    <img style={{ width: '68vh' }} src={breakfast[0].img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Breakfast;
