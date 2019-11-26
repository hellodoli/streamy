import React, { Component } from "react";
import { Switch, Route, NavLink as RRNavLink } from "react-router-dom";

import {
  Row,
  Col,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import { connect } from 'react-redux';

// import Loading from './components/Loading';
import Header from "./components/Header";
import StreamList from "./components/streams/StreamList";
import StreamCreate from "./components/streams/StreamCreate";
import StreamDetail from './components/streams/StreamDetail';

class App extends Component {

  renderStreamCreateLink = () => {
    if (this.props.userId) {
      return(
        <NavItem>
          <NavLink tag={RRNavLink} to="/streams/new">Create Stream</NavLink>
        </NavItem>
      );
    }
    return null;
  }

  render() {
    return(
      <div className="s-stream-main">
        <Header />
        <main style={{ marginTop: '50px' }}>
          <div className="container">
            <div className="s-stream-wrapp">
              <Row>
                <Col md="8">
                  <div className="s-stream-left">
                    <Switch>
                      <Route exact path="/" component={StreamList} />
                      <Route path="/streams/new" component={StreamCreate} />
                      <Route path="/streams/edit/:id" component={StreamDetail} />
                    </Switch>
                  </div>
                </Col>
                <Col md="4">
                  <div className="s-stream-right">
                    {/* Aside Nav Pills */}
                    <Nav pills vertical>
                      <NavItem>
                        <NavLink tag={RRNavLink} exact to="/" activeClassName="active">Home</NavLink>
                      </NavItem>
                      { this.renderStreamCreateLink() }
                    </Nav>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.oauthReducer.userId
});

export default connect(mapStateToProps)(App);
