import React from 'react';
import { Link } from 'react-router-dom';

const PreviewHome = () => {
    return (
        <div>
            <h1>Preview Home</h1>
            <Link to={'/login'}><button>Sigh-In</button></Link>
            <Link to={'/registration'}><button>Sign-Up</button></Link>


        </div>
    );
};

export default PreviewHome;