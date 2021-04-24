import React, { forwardRef, useState } from 'react';
import { VscClose, VscAdd } from 'react-icons/vsc';
import AutoComplete from './AutoComplete';

const Search = forwardRef((props, ref) => { 
    const results = props.results;
    const value = props.value;
    const [focus, setFocus] = useState(false);

    const handleFocus = () => {  
        setFocus(true);  
    }
 
    //open if results AND input
    const openAutoComplete = ((results.length !== 0) && (value !== ''));
    console.log(openAutoComplete);

    return(
        <div className="searchContainer">
            <div className="search">
            {focus && <div className="search__icon">
                    <VscClose className="icon icon__btn icon--small" onClick={props.clearInput}/>
                </div> }
                    <input type="text" className="input search__bar" ref={ref} 
                    name={props.name} value={value} placeholder={props.placeholder} 
                    onChange={props.handleChange} 
                    //onKeyDown={props.handleKeyDown}
                    onFocus={handleFocus}
                    />
                {focus && <div className="search__icon--end" onClick={props.addTags}>
                    <VscAdd className="icon icon__btn icon--small"/>
                </div>}
            </div>
            {openAutoComplete && 
                <AutoComplete results={props.results}/>
            }
        </div>
    )
}); 

export default Search;