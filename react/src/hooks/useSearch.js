import React, { useState } from 'react';
import axios from 'axios'; 

export default function useSearch() {
    //create ref to forward to search component 
    const searchRef = React.createRef(); 

    //initialize state for search query and results
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    //handle text input 
    const handleChange = e => {
        const value = e.target.value; 
        setQuery(value);
        try{
            axios({
                method: 'GET',
                url: `search/?search=${value}/`
            }).then(res => {
                const returnObj = res.data.data.results; 
                setResults(returnObj);
            })
        } catch(err) {
            console.error(err);
        }
    }

    //clear input
    const clearInput = () => {
        searchRef.current.value = "";
    }

    return {
        searchRef,
        query,
        handleChange,
        clearInput,
        results
    }
}