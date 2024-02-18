// tut 10 Enable Dark Mode  using useState HOOK

import React from 'react'

function About( props) {

  // const [myStyle ,setMyStyle] =useState({
  //   color: "black",
  //   backgroundColor:"white"
  // }
  // )

  // const [btntext,setBtnText] =useState("Enable Dark Mode")
  //  const toggleStyle =()=>{
  //   if(myStyle.color ==='black'){
  //     setMyStyle({
  //       color:'white',
  //       backgroundColor:'black',
  //       border:'1px solid white'
  //     })
  //     setBtnText("Enable Light Mode")
  //   }
  //   else{
  //     setMyStyle({
  //       color:'black',
  //       backgroundColor:'white'
  //     })
  //     setBtnText("Enable Dark Mode")

  //   }
  // }

  let myStyle ={
    color:props.mode ==="dark"?'white':'#042743',
    backgroundColor :props.mode ==="dark"?'rgb(36 74 104)':'white',
  }
  return (
    <div className="container" >
      <h1 className='my-3' style={{ color:props.mode==='dark'?'white':'#042743'}} > About us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         <strong>Analyze to use</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
         TextUtls give you a way ti analyze your text quickly and efficiently. Be it word count, charecter count or analyze your text
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtil is afree charecater counter tools than provides instant charecter count & word count statistics for a given text. TextUtil reports 
        Number of words and charecter. thus it is suitable for writing text word/ charecter limit
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser compatibility</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This word counter software work in any browsers such as chrome, firefox, Internet Explorer , Safari, Opera. It suits ti count charecter in facebook , blog, books, excel document, pdf document, essays,etc
      </div>
    </div>
  </div>
</div>
{/* <div className="container">
<button onClick={toggleStyle} type='button' className='btn btn-primary my-2'>{btntext}</button>
    </div> */}
    </div>
  )
}

export default About
