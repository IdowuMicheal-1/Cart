import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

export const Modal = (props) => {
    const ModalOverlay = (props) => {
        return (
            <div className={classes.modalStyle}>{props.children}</div>
        )
    }

    const Backdrop = () => {
        return (
            <div  className={classes.backdrop} onClick={props.onClose}></div>
        )
    }
  return (
    <div>
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,document.getElementById("overlay"))}
        {ReactDOM.createPortal(<Backdrop />,document.getElementById("overlay"))}
    </div>
  )
}
