// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [alert, setalert] = useState(null);
  const showAlert = (message,type) =>{
    setalert({
      msg:message,
      alertType: type
    })
    setTimeout(() => {
    setalert(null);
  },1500);
  }
  
  const[darkMode, setDarkMode] = useState('light');
  const toggleMode = () =>{
    if(darkMode === 'light'){
      setDarkMode('dark');
      showAlert("Dark Mode enable", "success")
    }
    else{
      setDarkMode('light');
      showAlert("Light mode has been enabled", "primary");
    }

  }
  return (
    <>
    <Router>
    
<Navbar title = "TextUtils" about = "About us" darkMode = {darkMode} toggleMode = {toggleMode}></Navbar>

<Alert alert = {alert}></Alert>
<div className="container my-3">
  <Routes>
    <Route exact path = "/about" element = {<About></About>}>
    </Route>
    <Route exact path = "/" element = {<TextForm heading = "Write Here"></TextForm>}>
  
  </Route>
  

  </Routes>
</div>


</Router>

    </>
    
    
  );
}

export default App;
