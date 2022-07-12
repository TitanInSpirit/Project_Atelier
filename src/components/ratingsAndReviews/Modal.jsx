import React from 'react';
import ReactDom from 'react-dom'

const Modal = ({showModal, onCloseModal, children}) => {
  if(!showModal) return null;

  return ReactDom.createPortal(
    <>
      <div className='reviewModalBg'>
        <div className='reviewModal'>
          {children}

        </div>
      </div>
    </>,
    document.getElementById('portal')

  )
}

export default Modal;