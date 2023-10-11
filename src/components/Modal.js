import "./modal.css"
import ReactDOM from "react-dom"

 function Modal({children , handleClose}) {
  return ReactDOM.createPortal ((
    <div className ="modal-backdrop">
        <div className = "modal">
            {children}
            <button onClick={handleClose}>Close</button>
        </div>

    </div>
  ), document.body) 
}


export default Modal