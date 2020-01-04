import React, { Component } from "react";
import "./App.css";
import "./styles.css";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="content">
          <Home />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
