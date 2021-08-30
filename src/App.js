import "./App.css";
import "./css/reset.css";
import "./css/grid.css";
import "./css/main.css";

import React, { Component } from "react";
import WOW from "wowjs";

import Homepage from "./containers/HomePageContainer/Homepage";
import ScrollToTop from "./components/ScrollToTop";

class App extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div className="App">
        <Homepage />
        <ScrollToTop />
      </div>
    );
  }
}

export default App;
