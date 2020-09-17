import React, { Component } from "react";
import About from "./About";
import Home from "./Home";
import Pricing from "./Pricing";
import Products from "./Products";
import ErrorPage from "./ErrorPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pricing: [
        {level: "Hobby", cost: 0},
        {level: "Startup", cost: 10},
        {level: "Enterprise", cost: 100}
      ]
    };
  }
  
  render() {
    return (
      <Router>
        <React.Fragment>
          <h4>Main App</h4>
          <NavBar />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/pricing"
           render={() => <Pricing prices={this.state.pricing}/>} />
          <Route path="/products" component={Products} />
          <Route component={ErrorPage} /> 
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
    
}

export default Main;
