export const Button = ({handleButton, buttonName}) => {
  return(
    <button className="button" type="button" onClick={() => handleButton()}>{buttonName}</button>
  )
}