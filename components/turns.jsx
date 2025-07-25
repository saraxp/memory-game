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
        <div className='mb-4'>
            <label className='bg-transparent font-GoogleSansCode text-white text-xl font-medium' htmlFor="my-dropdown">Choose the number of turns </label>
            <select  className='bg-transparent font-GoogleSansCode text-white inset-shadow-sm inset-shadow-white/30 rounded-md p-1' id="my-dropdown" value={selectedTurn} onChange={handleChange}>
                <option className='bg-black font-GoogleSansCode text-white' value="1" >1</option>
                <option className='bg-black font-GoogleSansCode text-white' value="2" >2</option>
                <option className='bg-black font-GoogleSansCode text-white' value="3" >3</option>
                <option className='bg-black font-GoogleSansCode text-white' value="4" >4</option>
                <option className='bg-black font-GoogleSansCode text-white' value="5" >5</option>
            </select>
        </div>
  );

};