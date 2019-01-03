import React, { Component } from "react";
import App from "./views/Index";
import LayOut from "./views/LayOut";
import { BrowserRouter, Route } from "react-router-dom";
import LinkTo from "./components/link";

class BaseView extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <LinkTo />
          <Route exact path="/" component={App} />
          <Route path="/layout" component={LayOut} />
        </div>
      </BrowserRouter>
    );
  }
}

export default BaseView;
