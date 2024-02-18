//  tut 13: adding + auto Dismissing Alert Message

import React from 'react'

 function Alert(props) {
  const capitalize =(word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() +lower.slice(1) // this is change to 1st letter of success is capital letter
  }
  return (
    // write inside of div so our teaxt area or about are not sift
        <div style={{ height:"50px"}}> 
       {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" >
         <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
         {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>   */}
      </div>}
      </div>
    
  )
}
export default Alert

/* TYPE OF ALERT
    1. PRIMARY => alert(blue color)
    2. Success => success(green color)
    3. Warning => warning(yellow color)
    4. Danger => danger(red color)
 */


