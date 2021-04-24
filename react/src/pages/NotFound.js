import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return(
        <div>
            You seem lost. 
            <Link to="/">click</Link>
        </div>
    )
}