import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [curr, setCurr] = useState("X");

  function checkWinner() {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    for (let val of winnerLogic) {
      const [a, b, c] = val;
      if (state[a] !== null && state[a] === state[b] && state[b] === state[c]) {
        return state[a];
      }
    }
    return false;
  }

  const isWinner = checkWinner();

  function onClick(idx) {
    if (state[idx] !== null) return;
    setState((curState) => {
      const board = [...curState];
      board[idx] = curr;
      return board;
    });
    setCurr(curr === "X" ? "O" : "X");
  }
  function reset() {
    setState(Array(9).fill(null));
    setCurr("X");
  }

  return (
    <div className="board_container">
      {isWinner ? (
        <>
          <h1>{isWinner} has won the game </h1>
          <button onClick={reset}>reset</button>
        </>
      ) : (
        <>
          <div className="board_row">
            <Square value={state[0]} handleClick={() => onClick(0)} />
            <Square value={state[1]} handleClick={() => onClick(1)} />
            <Square value={state[2]} handleClick={() => onClick(2)} />
          </div>

          <div className="board_row">
            <Square value={state[3]} handleClick={() => onClick(3)} />
            <Square value={state[4]} handleClick={() => onClick(4)} />
            <Square value={state[5]} handleClick={() => onClick(5)} />
          </div>

          <div className="board_row">
            <Square value={state[6]} handleClick={() => onClick(6)} />
            <Square value={state[7]} handleClick={() => onClick(7)} />
            <Square value={state[8]} handleClick={() => onClick(8)} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
