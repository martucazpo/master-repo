

const Modal = (props) => {
    const handleClick = () => {
        props.action()
    }
    return (
        <div className={`modal ${props.modalClass}`}>
            <span><button onClick={handleClick} >CLOSE</button></span> 
            {props.children}
        </div>
    )
}


export default Modal




