
import React, { useState } from 'react'

import copy from "copy-to-clipboard";

export default function TextForm(props) {
  const [text, setText] = useState('');

  


  const handleUpClick = () => {
    setText(text.toUpperCase())
    props.showAlert("Converted to Upper Case","success")
  }
  const handleLoClick = () => {
    setText(text.toLowerCase())
    props.showAlert("Converted to Lower Case","success")
  }
  const handleClearText = () => {
    setText('')
    props.showAlert("Text Cleared","success")
  }
  const handleCopyText = () => {
    copy(text);
    props.showAlert("Copy to ClipBoard","success")
    
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed","success")
  }
  
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>

        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#343a40':'white',color:props.mode==='dark'?'white':'black'} } placeholder='Enter text here' value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
          
        </div>
        <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleClearText}>Clear Text</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleCopyText}>Copy Text</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove ExtraSpaces</button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008*(text.split(" ").length-1)} minutes to read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>

  )
}
