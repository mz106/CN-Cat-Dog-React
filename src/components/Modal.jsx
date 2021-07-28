

function Modal(props) {
    return (
        <div className="modal">
            <p>{props.text}</p>
            <p className='close--inst'>Click off the modal to close</p>
        </div>
    )
}

export default Modal;