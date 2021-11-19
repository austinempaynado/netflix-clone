import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
          </Route>
          <Route exact path="/home">
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
