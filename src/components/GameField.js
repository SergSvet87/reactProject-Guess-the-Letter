

export const GameField = ({ board, visibleField, handlePressed, visibleNotificationYes, visibleNotificationNo, hide }) => {

  return (
    <div className={`game-field ${visibleField ? 'visible' : ''}`}>

      <div className="board">
        {board.map((col, colIndex) => (
          <div className="board-col" key={colIndex}>
            {col.map((cell, index) => (
              <div key={index} className="board-cell">
                <span className={`board-cell ${hide ? 'hide' : ''}`} onClick={() => handlePressed(cell)}>
                  {cell.letter}
                </span>
              </div>
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