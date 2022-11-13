import React from "react"

import { LetterBoard } from "./LetterBoard"
import { GameField } from "./GameField"
import { Button } from "./Button"
import { Modal } from "./Modal"

import { range } from "../utils/array"
import getRandomLetter from "../utils/getRandomLetter"

const COLUMNS = 3
const ROWS = 3
const LETTERS = ["a", "b", "c"]
const DELAY = 5000
const BUTTON_NAME = "Start Game"
const MODAL_TITLE = {
  all: "✨ You WIN!",
  half: "I know, you can do better!",
  less: "Not bad at all, you're a loser!"
}

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
  const [modalShow, setModalShow] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState('');

  let countCorrectAnswers = 0
  let countClicks = 0

  const gameOver = () => {

    setModalShow(modalShow => !modalShow)

    if (countCorrectAnswers === (COLUMNS * ROWS)) {
      setModalTitle(MODAL_TITLE.all)
    } else if (countCorrectAnswers >= 5) {
      setModalTitle(MODAL_TITLE.half)
    } else {
      setModalTitle(MODAL_TITLE.less)
    }
  }

  if (countClicks === (COLUMNS * ROWS)) {
    gameOver()
  }

  const handlePressed = (letter) => {
    let getCurrentLetter = selectLetter.toUpperCase()
    let selectedLetter = letter.letter;

    countCorrectAnswers += countCorrectAnswers + 1
    countClicks += countClicks++
    console.log(countClicks);

    setBoard((prev) => {
      const newBoard = [...prev];
      // const newBoardFlat = newBoard.flat();
      // const changeCell = newBoardFlat.find(
      //   (el) => el.letter = selectedLetter
      // );

      if (selectedLetter.toUpperCase() === getCurrentLetter) {
        setVisibleNotificationYes(visibleNotificationYes => !visibleNotificationYes)
        // changeCell.letter = selectedLetter
      } else {
        setVisibleNotificationNo(visibleNotificationNo => !visibleNotificationNo)
        // changeCell.letter = selectedLetter
      }

      setHide(hide => !hide)

      // setVisibleNotificationNo(visibleNotificationNo => visibleNotificationNo)
      // setVisibleNotificationYes(visibleNotificationYes => visibleNotificationYes)

      return newBoard
    });
  };

  // React.useEffect(() => {
  //   const handleCell = (e) => {
  //     handlePressed(e);
  //   };
    
  //   document.addEventListener("keypress", handleCell);
  //   return () => {
  //     document.removeEventListener("keypress", handleCell);
  //   };
  // }, [handlePressed]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setHide(hide => !hide)
    }, DELAY);
    return () => clearTimeout(timer)
  }, [])

  const handleButton = () => {
    setBoard((prev) => {
      const newBoard = [...prev];
      const newBoardFlat = newBoard.flat();

      newBoardFlat.map((el) => el.letter = getRandomLetter())
      return newBoard
    });

    setVisibleField(visibleField => !visibleField)
  }

  const btnCloseModal = () => {
    setModalShow(modalShow => modalShow)
  }

  return (
    <main className="game">
      <LetterBoard
        letters={LETTERS}
        selectLetter={selectLetter}
        setSelectLetter={setSelectLetter}
      />

      <GameField
        board={board}
        visibleField={visibleField}
        handlePressed={(letter) => handlePressed(letter)}
        hide={hide}
        visibleNotificationYes={visibleNotificationYes}
        visibleNotificationNo={visibleNotificationNo}
      />

      <Button
        handleButton={handleButton}
        buttonName={BUTTON_NAME}
      />

      <Modal
        modalShow={modalShow}
        modalTitle={modalTitle}
        btnClose={btnCloseModal}
      />
    </main >
  )
}