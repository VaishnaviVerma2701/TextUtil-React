 // tut 06 : props and propsType

 import React from 'react'
 //import PropTypes from 'prop-types'

// this is  props
 export default function Navbar(props) {
   return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      {/* <a className="navbar-brand" href="/">Textutil</a> */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
          {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
          <a className="nav-link" href="/">{props.aboutText}</a>
          </li>
        </ul>
        {/* day 20 */}
        {/* <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:"30px",width:"30px", cursor:"pointer"}}></div>
          <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:"30px",width:"30px", cursor:"pointer"}}></div>
          <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:"30px",width:"30px", cursor:"pointer"}}></div>
          <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:"30px",width:"30px", cursor:"pointer"}}></div>
        </div> */}
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
        
        {/* tut 12: using switch to enable dark mode */}
        <div className={`form-check form-switch text-${props.mode ==='light'? 'dark':'light'}`}>
  <input className="form-check-input mx-2" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  {/* <input className="form-check-input mx-2" onClick={()=>{props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/> */}
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle mode</label>
</div>
      </div>
    </div>
  </nav>
   )
 }
 
 /*  PROPS 
 if we add the heading title username  in calling type than we add the  this heading title and usename in html with the help of props
 */

/* this is set the our type of props

    Navbar.propTypes ={ 
        title:PropTypes.string,
        aboutText:PropTypes.string
    }
*/


 /* if use isRequired  and do not give title ans about text and also not give default than is show error to give title and aboutText 

    Navbar.propTypes ={ 
            title:PropTypes.string.isRequired,
            aboutText:PropTypes.string.isRequired 
    }
*/


// this is default props if we does not define props than is set
   Navbar.defaultProps={
            title:"set title here",
            aboutText:"about text here"
    }