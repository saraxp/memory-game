import 'react'
import 'react-dom/client'
import {useState} from 'react';


function Square({value, highlightedCells, gameActive, answerPattern}){
    const [color, setColor] = useState('');

    function handleClick(){
        if (!gameActive || !answerPattern) return;

        const isCorrect = answerPattern.includes(value);
        console.log("this button was clicked!: " + value);

        if(isCorrect){
            setColor('purple');
        } else {
            setColor('red');
                setTimeout(() => {
                    setColor('');
                }, 1000);
        }
    }
    const isHighlighted = highlightedCells.includes(value);

    return(
        <button 
        className={`box ${isHighlighted ? 'highlighted' : ''}`} 
        style={{
            backgroundColor: color,
            transition: 'background-color 0.3s ease',
        }} 
        id={value}  
        onClick={handleClick}>
            {value}
        </button>
    );
}


export default function GridElement({highlightedCells, gameActive, answerPattern}){

    return(
        <div className='container'>
            <div className='tile-row'>
                <Square value="1" highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} />
                <Square value="2" highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} />
                <Square value="3" highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} />
                <Square value="4" highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} />
            </div>
            <div className='tile-row'>
                <Square value="5" highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} />
                <Square value="6" highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} />
                <Square value="7" highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} />
                <Square value="8" highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} />
            </div>
            <div className='tile-row'>
                <Square value="9"  highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} />
                <Square value="10" highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} />
                <Square value="11" highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} />
                <Square value="12" highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern}/>
            </div>
            <div className='tile-row'>
                <Square value="13" highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} />
                <Square value="14" highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} />
                <Square value="15" highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} />
                <Square value="16" highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} />
            </div>
        </div>
);
}