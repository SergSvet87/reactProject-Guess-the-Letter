import React from "react"
import { LetterBoard } from "./LetterBoard"
import { GameField } from "./GameField"
import { Button } from "./Button"
import getRandomLetter from "../utils/getRandomLetters"

export const Game = () => {

  const [visibleLetter, setVisibleLetter] = React.useState(false)
  const [visibleField, setVisibleField] = React.useState(false)
  // const [visibleCell, setVisibleCell] = React.useState(true)

  // const clickHandler = (event) => {
  //   let currentCell = event.target
  //   let currentLetter = currentCell.textContent

  //   console.log(currentLetter);
  // }

  const getLetter = () => {
    getRandomLetter();
  }

  const chooseLetter = (event) => {
    let currentLetter = event.target
    console.log(currentLetter);
    setVisibleLetter(true);
  }

  return (
    <main className="game">
      <LetterBoard visibleLetter={visibleLetter}
        chooseLetter={(btn) => chooseLetter(btn)} />

      <GameField visibleField={visibleField}
        setVisibleField={() => setVisibleField}
        getLetter={() => getLetter} />

      <Button setVisibleField={setVisibleField} />
    </main >
  )
}