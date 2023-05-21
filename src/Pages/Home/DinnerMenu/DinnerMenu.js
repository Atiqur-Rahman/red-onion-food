import React from 'react';
import { useNavigate } from 'react-router-dom';
import useDinner from '../../../hooks/useDinner';
import './DinnerMenu.css';

const DinnerMenu = () => {
    const [dinnerMenu] = useDinner();
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="dinner-container">
                {dinnerMenu.map((dinner) => {
                    return (
                        <div onClick={() => navigate('/dinner/' + dinner.id)} className="text-center box">
                            <div>
                                <img className="mt-4" style={{ width: '250px' }} src={dinner.img} alt="" />
                                <h6 className="mt-4">{dinner.name}</h6>
                                <h5>${dinner.price}</h5>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DinnerMenu;
