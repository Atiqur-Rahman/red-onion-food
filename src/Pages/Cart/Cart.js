import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
    // console.log(breakfast);
    return (
        <div className="text-center mt-5 pt-5">
            <button onClick={() => navigate('/ordercomplete')}>Place Order</button>
        </div>
    );
};

export default Cart;
