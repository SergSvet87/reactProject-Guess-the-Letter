
export const LetterBoard = ({ letters, selectLetter, setSelectLetter }) => {

  return (
    <ul className="letters">
      {letters.map((letter, indexBtn) => (
        <li className="letter" key={indexBtn}>
          <button
            className={selectLetter === letter && 'show'}
            data-item={indexBtn}
            onClick={() => setSelectLetter(letter)}
            type="button"
            value={letter}>
            {letter}
          </button>
        </li>
      ))}
    </ul>
  )
};