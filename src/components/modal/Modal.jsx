import style from "./Modal.module.css"

const Modal = ({children, onClose}) => {
    return(
        <>
        <div className={style.backdrop} onClick={onClose}/>
        <dialog open={true} className={style.modal}>{children}</dialog>
        </>
    )
}

export default Modal;