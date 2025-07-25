import './index.css'
import './components/grid'
import './components/turns'
import { useState, useEffect} from 'react';
import GridElement from './components/grid'
import PlayAgainButton from './components/playAgain';
import Turns from './components/turns';
import patternsData from './patternsData'

function App() {
  const [numberOfTurns, setNumberOfTurns] = useState(''); 
  const [currentTurn, setCurrentTurn] = useState(0);
  const [showPattern, setShowPattern] = useState([]);
  const [answerPattern, setAnswerPattern] = useState([]);
  const [userInput, setUserInput] = useState([]); 
  const [gameActive, setGameActive] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const handleTurnSelection = (selectedTurn) => {
    setNumberOfTurns(Number(selectedTurn)); 
    setCurrentTurn(0);
    setGameStarted(true);
    console.log('Number of turns selected in App.jsx:', selectedTurn);
  };
  
  
  useEffect(() => {
    if (!gameStarted || currentTurn >= numberOfTurns) {
      if (currentTurn >= numberOfTurns) {
        console.log("Game Over");
        setGameStarted(false);
        setUserInput([]);
      }
      return;
    }

    setUserInput([]);
    const randomInt = (Math.floor(Math.random() * 30)) + 1;
    const targetID = randomInt.toString();
    const selectedPattern = patternsData.data.patterns[targetID];
    setAnswerPattern(selectedPattern);
  
    const timeout1 = setTimeout(() => {
      setShowPattern(selectedPattern);
    }, 2000);

    const timeout2 = setTimeout(() => {
      setShowPattern([]);
      setGameActive(true);
      setUserInput([]);
    }, 5000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
    

  }, [currentTurn, numberOfTurns, gameStarted]);

  const handleUserClick = (value) => {
  if (!gameActive) return;

  if (userInput.includes(value)) return;

  const isCorrect = answerPattern.includes(value);

  if (isCorrect) {
    const updated = [...userInput, value];
    setUserInput(updated);

    if (updated.length === answerPattern.length) {
      console.log(" pattern cells selected.");
      setGameActive(false);
      setTimeout(() => {
        setCurrentTurn(prev => prev + 1);
      }, 1000);
    }
  } else {
    console.log(" Incorrect click");
  }
};


  return (
    <>
      <Turns onSelect={handleTurnSelection} />
      {gameStarted && currentTurn < numberOfTurns && (
        <p className='font-GoogleSansCode text-white text-xl font-light mb-4'>Turn {currentTurn + 1} / {numberOfTurns}</p>
      )}
      <GridElement highlightedCells={showPattern} gameActive={gameActive}  answerPattern={answerPattern} onUserClick={handleUserClick} userInput={userInput}/>
      {!gameStarted && numberOfTurns && (
        <PlayAgainButton onClick={() => {
          setNumberOfTurns('');
          setCurrentTurn(0);
          setShowPattern([]);
          setAnswerPattern([]);
          setUserInput([]);
          setGameActive(false);
        }} />
      )}
    </>
  );
}

export default App
