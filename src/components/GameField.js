import React from "react"
import { range } from "../utils/array";

const COLUMNS = 3;
const ROWS = 3;

// const CellState = {
//   letter: "",
//   variant: "correct" | "incorrect"
// };

const getEmptyState = () =>
  range(ROWS).map((row) =>
    range(COLUMNS).map((n) => ({
      letter: "",
    }))
  );

export const GameField = ({ visibleField, getLetter }) => {

  const [board, setBoard] = React.useState(getEmptyState());

  // React.useEffect(() => {
  //   const handleKeyboard = (e) => {
  //     handlePressed(e.key);
  //   };

  //   document.addEventListener("keypress", handleKeyboard);
  //   return () => {
  //     document.removeEventListener("keypress", handleKeyboard);
  //   };
  // }, [board]);

  return (
    <div className={`game-field ${visibleField ? 'visible' : ''}`}>
      <div className="board">

        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="board-row">
            {row.map((cell, index) => (
              <div className="board-cell" key={index}>
                {getLetter}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="notification">
        <p className="notification-item yes">Yes, yes!</p>
        <p className="notification-item no">Oh, Nо!</p>
      </div>
    </div>
  )
}