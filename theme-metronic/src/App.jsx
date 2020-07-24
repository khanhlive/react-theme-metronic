import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PageHeaderComponent from "./components/layouts/PageHeaderComponent/PageHeaderComponent";
import PageContainerComponent from "./components/layouts/PageContainerComponent/PageContainerComponent";
import PageFooterComponent from "./components/layouts/PageFooterComponent/PageFooterComponent";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* BEGIN HEADER */}
        <PageHeaderComponent></PageHeaderComponent>
        {/* END HEADER */}
        <div className="clearfix"></div>

        {/* BEGIN CONTAINER */}
        <PageContainerComponent></PageContainerComponent>
        {/* END CONTAINER */}

        {/* BEGIN FOOTER */}
        <PageFooterComponent></PageFooterComponent>
        {/* END FOOTER */}
      </React.Fragment>
    );
  }
}

export default App;
