import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage"

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
       <HomePage name="Vedant"/>
    </div>
    )
  }
}

const appDiv = document.getElementById("app");
render(<App name="Vedant"/>, appDiv);