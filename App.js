import React, { Component } from "react";
import { Provider } from "react-redux";
import Router from "./app/index";

export default class App extends Component {
  render() {
    return <Router />;
  }
}
