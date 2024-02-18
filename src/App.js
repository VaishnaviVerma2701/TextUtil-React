import React,{useState} from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode]=useState('light'); // whether dark mode is enable or not
  const [alert , setAlert] =useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => { // alert is autmatically remove  after 1500 sec
      setAlert(null)
    },1500);
  }
   //const removeBodyClasses=() =>{
      //document.body.classList.remove('bg-light')
     // document.body.classList.remove('bg-dark')
    // document.body.classList.remove('bg-warning')
    // document.body.classList.remove('bg-danger')
    // document.body.classList.remove('bg-success')
 // }
  const toggleMode =(cls)=>{ // this is change the mode in dark or light
    //removeBodyClasses();
    console.log(cls);
    //document.body.classList.add('bg-'+cls)
    if(cls==='dark'){
      setMode('white')
    }
    else{
      setMode('dark')
    }
    if(mode ==='light'){
       setMode("dark")
       document.body.style.backgroundColor="#042743"
       showAlert("dark mode has been enable","success")
 
       //tut 15: change title

      //  document.title="TextUtils-Dark Mode" // this change the title in anable to dark mode and show in brower
      //  //this are used to atract you and also used  to show fake alert
      //  setInterval(()=>{
      //   document.title ="TextUtil is Amazing Mode"
      //  },2000)
      }
      else{
        setMode("light")
       document.body.style.backgroundColor="white"
       showAlert("light mode has been enable","success")

      //  document.title="TextUtils-light Mode" // this change the title in anable to light  mode and show in brower
      //  //this are used to atract you and also used  to show fake alert
      //  setInterval(()=>{
      //   document.title =" install TextUtil "
      //  },1500)
      }
  }
  return (
    <>
     
   <Navbar title="textutil" aboutText="About us" mode={mode} toggleMode={toggleMode}/>  
   
     <Alert alert={alert}/>
   
     <div className="container  my-3">
     
      {/* exact keyword are used to exact matching the component than change either not change because react are do parsial matching  than it run previous component*/}
             <TextForm 
             heading="Try TextUtil- Word Counter , Charecter Counter , Remove Extra Space" 
             mode={mode} 
             toggleMode={toggleMode} 
             showAlert={showAlert}/>
            
            <About mode={mode}/>
          </div>
   </>
  );
}
export default App;

