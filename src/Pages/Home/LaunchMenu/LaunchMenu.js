import React from 'react';
import './LaunchMenu.css';
import { useNavigate } from 'react-router-dom';
import useLaunchx from '../../../hooks/useLaunch';

const LaunchMenu = () => {
    const [launchMenu] = useLaunchx();
    const navigate = useNavigate();

    console.log('launchmenu', launchMenu);

    return (
        <div className="container">
            <div className="launch-container">
                {launchMenu.map((launch) => {
                    return (
                        <div onClick={() => navigate('/launch/' + launch.id)} className="text-center box">
                            <div>
                                <img className="mt-4" style={{ width: '250px' }} src={launch.img} alt="" />
                                <h6 className="mt-4">{launch.name}</h6>
                                <h5>${launch.price}</h5>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LaunchMenu;
