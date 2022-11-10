export const Button = ({setVisibleField}) => {
  return(
    <button className="button" type="button" onClick={() => setVisibleField(true)}>Start Game</button>
  )
}