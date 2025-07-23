import React, { useState } from 'react';

export default function Turns({onSelect}){

    const [selectedTurn, setSelectedTurn] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedTurn(value);
        console.log('You selected:', value);
        if (onSelect) {
            onSelect(value);
        }
    }

    return(
        <div>
            <label htmlFor="my-dropdown">Choose the number of turns:</label>
            <select id="my-dropdown" value={selectedTurn} onChange={handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
  );

};