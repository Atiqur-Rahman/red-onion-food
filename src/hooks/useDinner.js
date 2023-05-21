import { useEffect, useState } from 'react';

const useDinner = () => {
    const [DinnerMenu, setDinnerMenu] = useState([]);

    useEffect(() => {
        fetch('dinner.json')
            .then((res) => res.json())
            .then((data) => setDinnerMenu(data));
    }, []);
    return [DinnerMenu, setDinnerMenu];
};

export default useDinner;
