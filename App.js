// * Description: App Entry Point
import React, { Component } from "react";

import { Provider } from "react-redux";

import Router from "./index";
// import store from './app/redux/store';

class App extends Component {
  render() {
    return (
      /*<Provider store={store}>*/
      <Router />
      // </Provider>
    );
  }
}

export default App;
