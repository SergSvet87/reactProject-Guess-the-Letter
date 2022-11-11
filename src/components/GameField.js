import getRandomLetter from "../utils/getRandomLetter"

export const GameField = ({ board, visibleField, handlePressed, visibleNotificationYes, visibleNotificationNo }) => {

  return (
    <div className={`game-field ${visibleField ? 'visible' : ''}`}>
      <div className="board">

        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="board-row">
            {row.map((cell, index) => (
              <span className="board-cell" key={index} onClick={(cell) => handlePressed(cell)}>
                {getRandomLetter()}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="notification">
        <p className={`notification-item ${visibleNotificationYes ? 'yes' : ''}`}>Yes, yes!</p>
        <p className={`notification-item ${visibleNotificationNo ? 'no' : ''}`}>Oh, Nо!</p>
      </div>
    </div>
  )
}