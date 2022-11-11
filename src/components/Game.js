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

  const [visibleLetter, setVisibleLetter] = React.useState(false)
  const [visibleField, setVisibleField] = React.useState(false)
  const [visibleNotificationYes, setVisibleNotificationYes] = React.useState(false)
  const [visibleNotificationNo, setVisibleNotificationNo] = React.useState(false)

  const [letters, setIsActiveLetter] = React.useState(LETTERS)
  const [board, setBoard] = React.useState(getEmptyState());


  const boardRef = React.useRef(board)

  const handlePressed = (letter) => {
    setBoard((prev) => {
      const newBoard = [...prev];

      const newBoardFlat = newBoard.flat();

      const nextCell = newBoardFlat.find(
        (element) => element.letter === ""
      );

      nextCell.letter = letter;

      return newBoard;
    });
  };

  // const clickHandler = (event) => {
  //   let currentCell = event.target
  //   let currentLetter = currentCell.textContent

  //   console.log(currentLetter);
  // }

  // const chooseLetter = (e) => {
  //   const button = e.target
  //   console.log(button);
  //   if (button) {
  //     button.button = setVisibleLetter(true);
  //   }
  // }

  React.useEffect(() => {
    const handleBtn = (e) => {
      chooseLetter(e.target);
      const button = e.target
      if (button) {
        setVisibleLetter(true)
      }
    };

    document.addEventListener("keypress", handleBtn);
    return () => {
      document.removeEventListener("keypress", handleBtn);
    };
  }, []);

  const chooseLetter = (e) => {
    setIsActiveLetter(() => {

      const button = e.target.dataset.item
      if (button === 0) {
        button.add.className = 'show'
      }
    })
  }

  const handleButton = () => {
    setVisibleField(true)
  }

  return (
    <main className="game">
      <LetterBoard letters={letters}
        visibleLetter={visibleLetter}
        chooseLetter={chooseLetter} />

      <GameField board={board}
        visibleField={visibleField}
        handlePressed={() => handlePressed}
        visibleNotificationYes={visibleNotificationYes}
        visibleNotificationNo={visibleNotificationNo} />

      <Button handleButton={handleButton} />
    </main >
  )
}