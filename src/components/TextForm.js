
//  tut 07 state & Handing Event

import React,{useState} from 'react' 

export default function TextForm(props) {

    // convert uppercase
    const handleUpClick =()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to upper case" , "success")
    }
    // convert lowercase
    const handleLoClick =()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lower case" , "success")

    }
    // clear the text
    const handleClearClick =()=>{
        let newText = "";
        setText(newText)
        props.showAlert("text are clean" , "success")

    }
    // copy the text
    const handleCopyClick =()=>{
        var newText = document.getElementById("myBox");
        newText.select();
        newText.setSelectionRange(0,9999)
        navigator.clipboard.writeText(newText.value)
        //   document.getSelection().removeAllRanges()
        props.showAlert("text are copied" , "success")

    }
    // remove extra space
    const handleExtraSpace =()=>{
        var newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("remove to extra space" , "success")


    }
    const handleOnChange =(event)=>{
        // console.log("handle on change");
        setText(event.target.value); // used to set the value in previous + new both
    }
     
// this is state
const [text ,setText] = useState('enter text here');
/*
 text =>varible  to  assing the useState value
 setText=>  used to change our text

 setText("the text here") // this is a currect way to  change the state
 text = "new text" // this is wrong way to change the state
*/
  return (
    <>
    <div className='container' style={{color: props.mode ==='dark'? 'white':'black'}}>
            <h3 className='mb-4'>{props.heading}</h3>
           <div className="mb-3">
                <textarea className="form-control"   value={text}  onChange={handleOnChange} id="myBox" rows="1" style={{backgroundColor: props.mode ==='dark'? '#13466e':'white' , color:  props.mode ==='dark'? 'white':'black'}}></textarea>
            </div>
             {/* disabled keyword are used to disable the button if textbox is empty */}
            <button disabled={text.length===0} className="btn btn-primary  mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to  lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>clear text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>text copy</button>
            <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
        {/* day 08 */}
    <div className='container my-3' style={{color: props.mode ==='dark'? 'white':'black'}}>
        <h4>Your text Summary</h4>
        <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} word and {text.length} charecter</p>
        <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read the word</p>
        <h4>Preview</h4>
        <p>{text.length>0? text:" Nothing to preview"}</p>
    </div>
    </>
  )
}

  /* EVENT 
   onChange => used to type new word on textarea
   onclick => used to covert the text into upper case
  */
 
   /* HOOK
    useState
    */

