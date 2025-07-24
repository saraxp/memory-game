import './App.css'
import './components/grid'
import './components/turns'
import { useState, useEffect} from 'react';
import GridElement from './components/grid'
import Turns from './components/turns';
import patternsData from './patternsData'

function App() {
  const [numberOfTurns, setNumberOfTurns] = useState(''); 
  const [currentTurn, setCurrentTurn] = useState(0);
  const [showPattern, setShowPattern] = useState([]);
  const [answerPattern, setAnswerPattern] = useState([]); 
  const [gameActive, setGameActive] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const handleTurnSelection = (selectedTurn) => {
    setNumberOfTurns(Number(selectedTurn)); 
    setCurrentTurn(1);
    setGameStarted(true);
    console.log('Number of turns selected in App.jsx:', selectedTurn);
  };
  
  
  useEffect(() => {
    const randomInt = (Math.floor(Math.random() * 30)) + 1;
    const targetID = randomInt.toString();
    const selectedPattern = patternsData.data.patterns[targetID];
    setAnswerPattern(selectedPattern);

    if (!gameStarted) return;

    if(currentTurn > numberOfTurns){
      console.log("Game Over");
      setGameStarted(false);
      return ;
    } 
  
    const timeout1 = setTimeout(() => {
      setShowPattern(selectedPattern);
    }, 3000);

    const timeout2 = setTimeout(() => {
      setShowPattern([]);
      setGameActive(true);
    }, 10000);

    const nextTurnTimeout = setTimeout(() => {
      setGameActive(false); 
      setCurrentTurn(prev => prev + 1); 
    }, 15000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(nextTurnTimeout);
    };
    

  }, [currentTurn, numberOfTurns, gameStarted]);

  /*
  const handleUserSubmit = (userInput) => {
    

    setGameActive(false);        
    setCurrentTurn(prev => prev + 1); 
  };
  */

  return (
    <>
      <Turns onSelect={handleTurnSelection} />
      {numberOfTurns && (
        <p>You have chosen {numberOfTurns} turns for the game.</p>
      )}
      <GridElement highlightedCells={showPattern} gameActive={gameActive}  answerPattern={answerPattern}/>
    </>
  )
}

export default App
