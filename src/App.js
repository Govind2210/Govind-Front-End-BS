import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import Ships from './Components/Ships'
import Cores from './Components/Cores'

function App() {
  return (
    <>
       <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/ships" element={<Ships/>}/>
          <Route path="/cores" element={<Cores/>}/>
        </Routes>  
      </Router>
          
    </div>
    
    </>
   
  );
}

export default App;
