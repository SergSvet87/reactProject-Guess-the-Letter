
export const LetterBoard = ({ visibleLetter, chooseLetter, letters }) => {
  return (
    <ul className="letters">
      {letters.map((letter, indexBtn) => (
        <li className="letter" key={indexBtn}>
          <button className={`${visibleLetter ? 'show' : ''}`} data-item={indexBtn} onClick={chooseLetter} type="button" value={letter}>{letter}</button>
        </li>
      ))}
    </ul>
  )
};