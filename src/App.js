import { BrowserRouter, Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import ReduxSample from "./redux/redux-sample";

function App() {
  return (
    <BrowserRouter>
      <div className="Nav">
        <Link to="/">Home</Link>
        <Link to="/redux">Redux</Link>
      </div>
      <Route exact path="/">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Route>
      <Route path="/redux" component={ReduxSample} />
    </BrowserRouter>
  );
}

export default App;
