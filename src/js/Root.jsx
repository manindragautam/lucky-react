import React, { Component} from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = () => <h1> Testing Lucky with React, going to add react router </h1>

const About = () => <h1>About React Router</h1>

class Root extends Component{
  render(){
    return(
      <Router>
        <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route render={ () => <h1>404 Error</h1> } />
        </Switch>
      </div>
      </Router>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));