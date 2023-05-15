import React, { useEffect, useState } from 'react';
import Launch from '../Launch/Launch';

const LaunchMenu = () => {
    const [launchMenu, setLaunchMenu] = useState([]);

    useEffect(() => {
        fetch('launch.json')
            .then((res) => res.json())
            .then((data) => setLaunchMenu(data));
    }, []);

    console.log(launchMenu);
    return (
        <div className="container">
            <div className="launch-container">
                {launchMenu.map((launch) => (
                    <Launch key={launch.id} launch={launch}></Launch>
                ))}
            </div>
        </div>
    );
};

export default LaunchMenu;
