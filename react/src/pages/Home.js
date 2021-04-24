import React from 'react';
import Header from './../sections/Header';
import { Link } from 'react-router-dom';

export default function Home() {

    return(
        <div className="page">
            <Header/>
            The content here is protected for logged in users :)
            <Link to="/me">profile</Link>
        </div>
    )
};