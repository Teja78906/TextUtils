import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success")
  };
  
  const handleCopy = ()=>{
    console.log("Text Copied");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpaces = ()=>{
       console.log("ExtraSpace Removed");
       let newText = text.split(/[ ]+/);
       setText(newText.join(" "))
       props.showAlert("Extra spaces removed","success")
  }
  const handleLoClick = () => {
    console.log("LowerCase was clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success")
  };
  const handleClearClick = () => {
    console.log("text clear clicked" + text);
    setText("")
    props.showAlert("text cleared","danger")
  };
  const handleOnchange = (event) => {
    console.log("text changed");
    setText(event.target.value)
  };

  const [text, setText] = useState("");

  return (
    <>
    <div className="container">
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea className="form-control border-5" value={text} style={{backgroundColor: props.mode==='dark'?'#d1d1e0':'white'}} id="myBox" onChange={handleOnchange} rows="8"></textarea>
      </div>
      <button className="btn btn-danger mx-2 my-2" onClick={handleUpClick}> Convert To UpperCase </button>
      <button className="btn btn-danger mx-2 my-2" onClick={handleLoClick}> Convert To LowerCase </button>
      <button className="btn btn-danger mx-2 my-2" onClick={handleCopy}> Copy Text</button>
      <button className="btn btn-danger mx-2 my-2" onClick={handleExtraSpaces}> Remove ExtraSpaces</button>
      <button className="btn btn-danger mx-2 my-2" onClick={handleClearClick}> Clear</button>
    </div>
    <div className="container">
      <h3>your text summary</h3>
      <p>{text===""?0:text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words, {text.length} characters
      </p>
      <p>{text===""?0:0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"enter some text above to preview here"}</p>
    </div>
    </>
  );
}
