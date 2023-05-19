import { useEffect, useState } from 'react';

const useLaunchx = () => {
    const [launchMenu, setLaunchMenu] = useState([]);

    useEffect(() => {
        fetch('launch.json')
            .then((res) => res.json())
            .then((data) => setLaunchMenu(data));
    }, []);
    return [launchMenu, setLaunchMenu];
};

export default useLaunchx;
