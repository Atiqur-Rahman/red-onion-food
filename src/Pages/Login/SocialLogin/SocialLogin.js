import React from 'react';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../../../images/google.png';
import Loading from '../../../Shared/Loading/Loading';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if (loading) {
        <Loading></Loading>;
    }

    if (error) {
        errorElement = <p className="text-danger">Error: {error?.message}</p>;
    }

    if (user) {
        navigate('/');
    }
    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: '1px' }} className="bg-secondary w-50"></div>
                <p className="mt-3 px-3">OR</p>
                <div style={{ height: '1px' }} className="bg-secondary w-50"></div>
            </div>
            <button onClick={() => signInWithGoogle()} className="btn btn-info w-100 d-block mx-auto py-3 my-2">
                <img src={google} alt="" />
                <span className="px-2">Google Sign In</span>
            </button>
            {errorElement}
        </div>
    );
};

export default SocialLogin;
