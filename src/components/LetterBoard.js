const letters = ["a", "b", "c"]

export const LetterBoard = ({ visibleLetter, chooseLetter }) => {

  return (
    <ul className="letters">
      {letters.map(letter => (
        <li className="letter" key={letter}>
          <button className={visibleLetter} onClick={chooseLetter(letter)} type="button" value={letter}>{letter}</button>
        </li>
      ))}
    </ul>
  )
};