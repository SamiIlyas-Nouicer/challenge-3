import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
    <Navbar />
      <Router>
      <Switch>
        <Route path="/" exact component={Home} >
            <Home />
        </Route>
      </Switch>

      </Router>
      
    </div>
  );
}

export default App;
