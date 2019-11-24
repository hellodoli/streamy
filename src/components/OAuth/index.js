import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Spinner } from 'reactstrap';

import { signIn, signOut } from '../../actions/oauth';

import ButtonOAuth from './ButtonOAuth';

class OAuth extends Component {
  componentDidMount () {
    window.gapi.load('client:auth2', () => {
      window.gapi.auth2.init({
        client_id: '272935394212-0tpk33a8gigesb0mojmj0eci5oiut43b.apps.googleusercontent.com',
        scope: 'email'
      })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  }

  signInAndSignOut = () => {
    const { isSignedIn } = this.props;
    if (isSignedIn) {
      // Sign Out
      this.auth.signOut();
    } else {
      // Sign In
      this.auth.signIn();
    }
  }
  
	render() {
    const { isSignedIn } = this.props;
		return(
      <div className="s-oauth">
        { isSignedIn === null
            ? <Spinner type="grow" color="primary" />
            : <ButtonOAuth isSignedIn={isSignedIn} signInAndSignOut={this.signInAndSignOut} />
        }
    </div>
		);
	}
}

const mapStateToProps = state => ({
  isSignedIn: state.oauthReducer.isSignedIn
});

export default connect( mapStateToProps, 
  {
    signIn,
    signOut
  }
)(OAuth);
