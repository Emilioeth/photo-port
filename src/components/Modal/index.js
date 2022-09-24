import React from 'react';


const Modal = ({ onClose, currentPhoto }) => {
    const {name, category, description, index,} = currentPhoto;

    return (
        <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">{name}</h3>
          <img alt={category}  src={require(`../../assets/small/${category}/${index}.jpg`)}/>
          <p>
            {description}
          </p>
          <button onClick={onClose} type="button">
            Close this modal
          </button>
        </div>
      </div>
    );
  }
  
  export default Modal;