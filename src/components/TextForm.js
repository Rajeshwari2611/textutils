import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleUpClick1=()=>{
      console.log("Lowercase was clicked" + text);
      let newText=text.toLowerCase();
      setText(newText)
  }
  const handleUpClick2=()=>{
  
    let newText='';
    setText(newText)
}
const handleUpClick3=()=>{
  var text=document.getElementById("myBox")
  text.select();
  navigator.clipboard.writeText(text.value)
}


    const handleOnChange=(event)=>{
        console.log("On change");

        
        setText(event.target.value)
    }
  const[text,setText]=useState('Enter text here');
  return (
    <>
    <div className="Container">
    <h1>{props.heading}</h1>
  <div className="mb-3">
    <label for="myBox" className="form-label"><h1><strong>Example</strong></h1></label>
    <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="6" style={{border:'Solid rgb(75, 124, 124)'}} ></textarea>
    
  </div>
  
  <button type="button" disabled={text.length===0} class="btn btn-success mx-2 my-1"  onClick={handleUpClick}>Convert to uppercase</button>
  <button type="button" disabled={text.length===0} class="btn btn-success mx-2 my-1" onClick={handleUpClick1}>Convert to lowercase</button>
  <button type="button" disabled={text.length===0} class="btn btn-success mx-2 my-1" onClick={handleUpClick2}>Clear text</button>
  <button type="button" disabled={text.length===0} class="btn btn-success mx-2 my-1" onClick={handleUpClick3}>Copy text</button>
  </div>
  <div className="container my-3">
    <h1>Your text summary</h1>
    <p>
          {
            text.trim().length > 0
              ? `${text.trim().split(/\s+/).length} words and ${text.length} characters`
              : '0 words and 0 characters'
          }
        </p>
  
  </div>
  
  </>
    
 )
}
