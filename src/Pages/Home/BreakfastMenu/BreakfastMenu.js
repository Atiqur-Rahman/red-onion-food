import React from 'react';
import useBreakfast from '../../../hooks/useBreakfast';
import { useNavigate } from 'react-router-dom';

const BreakfastMenu = () => {
    const [breakfastMenu] = useBreakfast();
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="breakfast-container">
                {breakfastMenu.map((breakfast) => {
                    return (
                        <div onClick={() => navigate('/breakfast/' + breakfast.id)} className="text-center box">
                            <div>
                                <img className="mt-4" style={{ width: '250px' }} src={breakfast.img} alt="" />
                                <h6 className="mt-4">{breakfast.name}</h6>
                                <h5>${breakfast.price}</h5>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BreakfastMenu;
