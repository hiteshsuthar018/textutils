import React from 'react'

function Alert(props) {
    const capatelized = (text)=>{
        const newText = text.toLowerCase();
        return newText.charAt(0).toUpperCase()+newText.slice(1);
    }
    return (
        props.alert && <div>
            <div className={`alert alert-${props.alert.type}`} role="alert">
                {capatelized(props.alert.type)} : {props.alert.msg}
            </div>
        </div>
    )
}

export default Alert


