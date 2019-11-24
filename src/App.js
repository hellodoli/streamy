import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import StreamList from "./components/streams/StreamList";
import StreamCreate from "./components/streams/StreamCreate";

class App extends Component {

  render() {
    return(
      <div className="s-main">
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" component={StreamList} />
            <Route path="/streams/new" component={StreamCreate} />
            {/*<Route path="/streams/edit/:id" component={StreamDetail} />*/}
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
