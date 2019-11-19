import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import StreamList from './components/streams/StreamList';
import StreamCreate from './components/streams/StreamCreate';

class App extends Component {

  render() {
    return(
      <div className="container">
        <Switch>
          <Route exact path="/" component={StreamList} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit/:id" component={StreamDetail} />
        </Switch>
      </div>
    );
  }
};

export default App;
