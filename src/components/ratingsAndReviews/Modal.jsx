import React from 'react';
import ReactDom from 'react-dom'

const Modal = ({showModal, children, setShowModal}) => {
  if(!showModal) return null;

  return ReactDom.createPortal(
    <>
      <div onClick={() => setShowModal(false)} className='reviewModalBg'>
        <div onClick={(e) => e.stopPropagation()} className='reviewModal'>
          {children}
        </div>
      </div>
    </>,
    document.getElementById('portal')

  )
}

export default Modal;