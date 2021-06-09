import React, { Component } from "react";
import { render } from "react-dom";
import HomePage1 from "./HomePage1"

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
       <HomePage1 name="Vedant"/>
    </div>
    )
  }
}

const appDiv = document.getElementById("app");
render(<App/>, appDiv);