import { useEffect, useState } from 'react';
import './App.css';
import Cell from './Cell';

function App() {
  const [cell, setCell] = useState(Array(9).fill(''));
  const [go, setGo] = useState('Player1');
  const winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [winningMessage, setWinningMessage] = useState('');
  const reload=()=>{
   window.location.reload(); 
  }
  useEffect(() => {
    // Check for a winner
    winning.forEach((combo) => {
      const Player1Win = combo.every((index) => cell[index] === 'Player1');
      const Player2Win = combo.every((index) => cell[index] === 'Player2');
      if (Player1Win) {
        setWinningMessage('Player1 is Winning!');
      } else if (Player2Win) {
        setWinningMessage('Player2 is Winning!');
      }
    });

    // Check for a draw
    if (cell.every((index) => index !== '') && !winningMessage) {
      setWinningMessage("Draw");
    }

  }, [cell]); // Dependency only on 'cell'

  return (
    <div className="container">
      <div className="gameboard">
        {cell.map((item, itemIndex) => (
          <Cell
            go={go}
            setGo={setGo}
            id={itemIndex}
            cell={cell}
            setCell={setCell}
            winningMessage={winningMessage}
            key={itemIndex}
          />
        ))}
     
        
      </div>
      <div className='mt-2'>
      {winningMessage}  
      </div>
      
      {!winningMessage && (
        <div className='mt-2'>
          It's now {go}'s turn!
        </div>
      )}
      <div>
        <button className='btn btn-secondary mt-2' onClick={reload}> Return</button>
      </div>
    </div>
  );
}

export default App;