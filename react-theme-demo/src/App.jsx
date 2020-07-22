import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeaderComponent from "./components/layouts/HeaderComponent/HeaderComponent";
import PageContainerComponent from "./components/layouts/PageContainerComponent/PageContainerComponent";

class App extends React.Component {
  render() {
    return (
      <Router>
        {/* Main navbar */}
        <HeaderComponent></HeaderComponent>
        {/* /main navbar */}
        {/* Page container */}
        <PageContainerComponent></PageContainerComponent>
        {/* /page container */}
      </Router>
    );
  }
}

export default App;
