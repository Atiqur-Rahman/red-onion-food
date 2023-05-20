import { useEffect, useState } from 'react';

const useBreakfast = () => {
    const [breakfastMenu, setBreakfastMenu] = useState([]);

    useEffect(() => {
        fetch('breakfast.json')
            .then((res) => res.json())
            .then((data) => setBreakfastMenu(data));
    }, []);
    return [breakfastMenu, setBreakfastMenu];
};

export default useBreakfast;
