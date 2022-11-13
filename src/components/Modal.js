import closeSvg from '../assets/close.svg';

export const Modal = ({
  showModal,
  titleModal,
  btnCloseModal
}) => {

  return (
    <div className={`overlay ${showModal ? 'modal-show' : ''}`}>
      <div className="modal">
        <button className="modal-close-btn">
          <img src={closeSvg} alt="Close Button" onClick={() => btnCloseModal()} />
        </button>
        <h3 className="modal-title">
          {titleModal}
        </h3>
      </div>
    </div>
  )
}