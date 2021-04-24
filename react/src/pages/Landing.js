import React, { useEffect, useContext } from 'react'; 
import { UserContext } from '../hooks/UserContext';
import Home from './Home';
import GenericLanding from './GenericLanding';

export default function Landing() {
    //if user exists, it should be set by now
    const { user } = useContext(UserContext);

    return(
        <Home/>
    )
}

/*
<>
    {user ? <Home/>
    : <GenericLanding/>}
</>
*/