import './App.css'
import './components/grid'
import './components/turns'
import { useState, useEffect } from 'react';
import GridElement from './components/grid'
import patternsData from './patternsData'
import Turns from './components/turns';

function App() {
  const[showPattern, setShowPattern] = useState([]);
  
  
  
  useEffect(() => {
    const randomInt = 0; //(Math.floor(Math.random() * 30));
    const targetID = randomInt.toString();
    console.log(targetID);
    const selectedPattern = patternsData.data.patterns[targetID];
    
    const timer = setTimeout(() => {
        if(selectedPattern){
          setShowPattern(selectedPattern);
        }else{
          console.warn("ID doesn't exist: ${targetID}");
        }
      }, 3000);

      return () => clearTimeout(timer);
    }
  );

  const [numberOfTurns, setNumberOfTurns] = useState(''); 

  
  const handleTurnSelection = (selectedTurn) => {
    setNumberOfTurns(selectedTurn);
    console.log('Number of turns selected in App.jsx:', selectedTurn);
  };


  return (
    <>
      <Turns onSelect={handleTurnSelection} />
      {numberOfTurns && (
        <p>You have chosen {numberOfTurns} turns for the game.</p>
      )}
      <GridElement highlightedCells={showPattern}/>
    </>
  )
}

export default App
