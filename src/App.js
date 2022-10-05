import "./App.css";
import {useState, useEffect} from 'react';
import Square from "./Square";

function App() {




const [board, setBoard] = useState(Array(9).fill(""))
const [xIsNext, setXIsNext] = useState(true)
const [winner, setWinner] = useState()


useEffect(() => {

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  
  let lineIndex = 0
  let newWinner = null
  
  while (lineIndex < lines.length && !newWinner){
    const checkLinePosition = lines[lineIndex]
    const checkLineValue = checkLinePosition.map(index => board[index])
    const chekingValue = checkLineValue[0]
    const isFinished = checkLineValue.every((value) => value === chekingValue && chekingValue)
    newWinner = isFinished ? chekingValue : null
    lineIndex++
  }
  
  if (newWinner){
    setWinner(newWinner === 'X' ? 'X' : 'O')
  }

}, [board])



const handleClick = (index) => {
  if(winner || board[index]) return

  const newBoard = [...board]
  newBoard.splice(index, 1, xIsNext ? "X" : "O")
  setBoard(newBoard)
  setXIsNext(!xIsNext)
}


const handleNewGame = () => {
      setBoard(Array(9).fill(''))
      setXIsNext(true)
      setWinner(null)
    }


  return (
    <div className="game">
    <div className="game-board">

      {board.map((element, index) => (
        <Square key={index} value={element} index={index} handleClick={handleClick} />
      ))}

      
    </div>
    

    <p style={{color: "black", fontSize: "20px", textAlign:"center", fontWeight: "bold"}}>
      {winner ? 'Winner ' + winner : 'Next is ' + (xIsNext ? 'X' : 'O')}
    </p>
    <p style={{textAlign:"center"}}><button onClick={handleNewGame} className="button">Start new game</button></p>
    </div>
  );
}

export default App;
