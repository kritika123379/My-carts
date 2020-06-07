import React from "react";
import "./ErrorModal.css";

const ErrorModal = React.memo(props=>{
    return(
        <React.Fragment>
        <div className="backdrop" onClick={props.onClick}>
        <div className="error-modal">
        <h2>An error has occured!</h2>
        <p>{props.children}</p>
        <div className="error-modal-actions">
        <button type="button" onClick={props.onClose}>
        </button>
        </div>
        </div>
        </div>
        </React.Fragment>
    )
})