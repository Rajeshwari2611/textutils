
import React ,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import banner from './images/Pictures/ban2.jpg';


function App() {
  const [mode, setMode] = React.useState('light');
 const removeBodyClasses=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-success')

  document.body.classList.remove('bg-info')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-dark')
 }
  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    setMode(mode === 'light' ? 'dark' : 'light'); //whether dark mode is enable or not
  }
  const[alert,setAlert]=useState('');
  

  const showAlert=(message, type)=>{
   setAlert({
     msg:message,
     type:type
    })
  }
  return (
 <>
  <div
      style={{
        backgroundImage: `url(${banner})`,
        height: '35vh',
        backgroundSize: 'cover',
      }}
    >
      {/* Other components */}
    
<Router>
 {/*<Navbar title="Textutils" aboutText="About Text"/>*/}
  {/*<Navbar/> */}
 <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/>
<div className="container my=3">
<Routes>
<Route path="/" element={<TextForm />}>
 </Route>
<Route path="/about" element={<About mode={mode}/>} >
</Route>
</Routes>
{/*<TextForm  showAlert={showAlert} heading='Enter the text to Analyze' mode={mode} />*/}


      </div>
      </Router>
      </div>
  </>
  ); 
  
  }

export default App;
