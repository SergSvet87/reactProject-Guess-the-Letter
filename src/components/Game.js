import React from "react"

import { LetterBoard } from "./LetterBoard"
import { GameField } from "./GameField"
import { Button } from "./Button"

import { range } from "../utils/array";

const COLUMNS = 3;
const ROWS = 3;
const LETTERS = ["a", "b", "c"]

const getEmptyState = () =>
  range(ROWS).map((row) =>
    range(COLUMNS).map((n) => ({
      letter: "",
    }))
  );

export const Game = () => {

  const [selectLetter, setSelectLetter] = React.useState(LETTERS[0])
  const [visibleField, setVisibleField] = React.useState(false)
  const [visibleNotificationYes, setVisibleNotificationYes] = React.useState(false)
  const [visibleNotificationNo, setVisibleNotificationNo] = React.useState(false)

  const [board, setBoard] = React.useState(getEmptyState());

  console.log(selectLetter);

  // const boardRef = React.useRef(board)

  const handlePressed = (event) => {
    let getCurrentLetter = selectLetter.toLowerCase()
    console.log(getCurrentLetter);

    let getCurrentValueCell = event.target.textContent.toLowerCase()
    setBoard((prev) => {
      const newBoard = [...prev];

      const newBoardFlat = newBoard.flat();

      let currentCell = newBoardFlat.findIndex(
        (element) => {
          if (getCurrentValueCell === getCurrentLetter) {
            setVisibleNotificationYes(true)
            currentCell = getCurrentValueCell
            return newBoard;
          } else {
            setVisibleNotificationNo(true)
            currentCell = getCurrentValueCell
            return newBoard;
          }
        }
      );
      console.log(currentCell);
    });
  };

  // const clickHandler = (event) => {
  //   let currentCell = event.target
  //   let currentLetter = currentCell.textContent

  //   console.log(currentLetter);
  // }


  // React.useEffect(() => {

  //   document.addEventListener("keypress", handleBtn);
  //   return () => {
  //     document.removeEventListener("keypress", handleBtn);
  //   };
  // }, []);

  const handleButton = () => {
    setVisibleField(true)
  }

  return (
    <main className="game">
      <LetterBoard letters={LETTERS}
        selectLetter={selectLetter}
        setSelectLetter={setSelectLetter}
      />

      <GameField board={board}
        visibleField={visibleField}
        handlePressed={handlePressed}
        visibleNotificationYes={visibleNotificationYes}
        visibleNotificationNo={visibleNotificationNo} />

      <Button handleButton={handleButton} />
    </main >
  )
}