import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  return (
    
    <div className="App">
      <div className="nav"><Navbar /></div>
      <div className="home-1">
      
      <Home />
      </div>
      
    </div>
  );
}

export default App;
