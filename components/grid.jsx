import 'react'
import 'react-dom/client'
import {useState, useEffect} from 'react';


function Square({value, highlightedCells, gameActive, answerPattern, onUserClick, userInput}){
    const [color, setColor] = useState('');

    useEffect(() => {
        setColor('');
    }, [gameActive]);


    function handleClick(){
        if (!gameActive) return;

        const isCorrect = answerPattern.includes(value);
        const alreadyClicked = userInput.includes(value);
        console.log("this button was clicked!: " + value);

        if (!isCorrect && !alreadyClicked) {
            setColor('red');
            setTimeout(() => {
                setColor('');
            }, 500);
        }
        if (onUserClick) {
            onUserClick(value); 
        }
    }

    const isHighlighted = highlightedCells.includes(value);
    const isClickedCorrect = userInput.includes(value);

    return(
        <button 
        className={`box ${isHighlighted ? 'highlighted' : ''}`} 
        style={{
            backgroundColor: isClickedCorrect ? 'purple' : color,
            transition: 'background-color 0.3s ease',
        }} 
        id={value}  
        onClick={handleClick}>
            {value}
        </button>
    );
}
    




export default function GridElement({highlightedCells, gameActive, answerPattern, onUserClick, userInput}){

    return(
        <div className='container'>
            <div className='tile-row'>
                <Square value="1" highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} onUserClick={onUserClick} userInput={userInput} />
                <Square value="2" highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} onUserClick={onUserClick} userInput={userInput} />
                <Square value="3" highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} onUserClick={onUserClick} userInput={userInput} />
                <Square value="4" highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} onUserClick={onUserClick} userInput={userInput} />
            </div>
            <div className='tile-row'>
                <Square value="5" highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} onUserClick={onUserClick} userInput={userInput} />
                <Square value="6" highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} onUserClick={onUserClick} userInput={userInput} />
                <Square value="7" highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} onUserClick={onUserClick} userInput={userInput} />
                <Square value="8" highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} onUserClick={onUserClick} userInput={userInput} />
            </div>
            <div className='tile-row'>
                <Square value="9"  highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} onUserClick={onUserClick} userInput={userInput} />
                <Square value="10" highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} onUserClick={onUserClick} userInput={userInput} />
                <Square value="11" highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} onUserClick={onUserClick} userInput={userInput} />
                <Square value="12" highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} onUserClick={onUserClick} userInput={userInput} />
            </div>
            <div className='tile-row'>
                <Square value="13" highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} onUserClick={onUserClick} userInput={userInput} />
                <Square value="14" highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} onUserClick={onUserClick} userInput={userInput} />
                <Square value="15" highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} onUserClick={onUserClick} userInput={userInput} />
                <Square value="16" highlightedCells={highlightedCells} gameActive={gameActive} answerPattern={answerPattern} onUserClick={onUserClick} userInput={userInput} />
            </div>
        </div>
);
}