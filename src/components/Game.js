import React from "react"

import { LetterBoard } from "./LetterBoard"
import { GameField } from "./GameField"
import { Button } from "./Button"

import { range } from "../utils/array"
import getRandomLetter from "../utils/getRandomLetter"

const COLUMNS = 3
const ROWS = 3
const LETTERS = ["a", "b", "c"]
const DELAY = 5000
const BUTTON_NAME = "Start Game"

const getEmptyState = () =>
  range(ROWS).map((row) =>
    range(COLUMNS).map((n) => ({
      letter: "",
    }))
  );

export const Game = () => {

  const [selectLetter, setSelectLetter] = React.useState(LETTERS[0])
  const [visibleField, setVisibleField] = React.useState(false)
  const [hide, setHide] = React.useState(false)
  const [visibleNotificationYes, setVisibleNotificationYes] = React.useState(false)
  const [visibleNotificationNo, setVisibleNotificationNo] = React.useState(false)
  const [board, setBoard] = React.useState(getEmptyState());


  const handlePressed = (letter, event) => {
    setVisibleNotificationNo(false)
    setVisibleNotificationYes(false)

    let getCurrentLetter = selectLetter.toUpperCase()
    const selectedLetter = letter.letter;
    // setBoard((prev) => {
    //   const newBoard = [...prev];
    //   const newBoardFlat = newBoard.flat();

    //   newBoardFlat.map(
    //     (element) => {
          if (selectedLetter.toUpperCase() === getCurrentLetter) {
            setVisibleNotificationYes(true)
            letter = selectedLetter.toUpperCase()
            setHide(false)
          } else {
            setVisibleNotificationNo(true)
            letter = selectedLetter.toUpperCase()
            setHide(false)
          }
      //   }
      // );
    //   console.log(newBoard);
    //   return newBoard
    // });
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true)
    }, DELAY);
    return () => clearTimeout(timer)
  }, [])

  const handleButton = () => {
    setBoard((prev) => {
      const newBoard = [...prev];
      const newBoardFlat = newBoard.flat();

      newBoardFlat.map((el) => {
        setHide(false)
        el.letter = getRandomLetter()
      })

      return newBoard
    });

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
        handlePressed={(letter) => handlePressed(letter)}
        hide={hide}
        visibleNotificationYes={visibleNotificationYes}
        visibleNotificationNo={visibleNotificationNo} />

      <Button handleButton={handleButton} buttonName={BUTTON_NAME} />
    </main >
  )
}