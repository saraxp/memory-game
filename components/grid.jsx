import 'react'
import 'react-dom/client'


function Square({value, highlightedCells}){
    function handleClick(){
        console.log("this button was clicked!: " + value);
    }
    const isHighlighted = highlightedCells.includes(value.toString());

    return(
        <button className={`box ${isHighlighted ? 'highlighted' : ''}`}  id={value}  onClick={handleClick}>{value}</button>
    );
}


export default function GridElement({highlightedCells}){

    return(
        <div className='container'>
            <div className='tile-row'>
                <Square value={1} highlightedCells={highlightedCells} />
                <Square value={2} highlightedCells={highlightedCells} />
                <Square value={3} highlightedCells={highlightedCells} />
                <Square value={4} highlightedCells={highlightedCells} />
            </div>
            <div className='tile-row'>
                <Square value={5} highlightedCells={highlightedCells} />
                <Square value={6} highlightedCells={highlightedCells} />
                <Square value={7} highlightedCells={highlightedCells} />
                <Square value={8} highlightedCells={highlightedCells} />
            </div>
            <div className='tile-row'>
                <Square value={9}  highlightedCells={highlightedCells} />
                <Square value={10} highlightedCells={highlightedCells} />
                <Square value={11} highlightedCells={highlightedCells} />
                <Square value={12} highlightedCells={highlightedCells} />
            </div>
            <div className='tile-row'>
                <Square value={13} highlightedCells={highlightedCells} />
                <Square value={14} highlightedCells={highlightedCells} />
                <Square value={15} highlightedCells={highlightedCells} />
                <Square value={16} highlightedCells={highlightedCells} />
            </div>
        </div>
);
}