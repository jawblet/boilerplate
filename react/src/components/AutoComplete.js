import React from 'react';

export default function AutoComplete({ results }) {

    return(
        <ul className="autocomplete">
          {results.map(el => {
              return(
                  <li className="autocomplete__item" key={el._id}>
                     <h4>{el.username}</h4>
                </li>
              )
          })}
        </ul>
    )
}