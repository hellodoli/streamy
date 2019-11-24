import React from 'react';
import { Button } from 'reactstrap';

const ButtonOAuth = ({ isSignedIn, signInAndSignOut }) => {
  const color = isSignedIn ? 'danger' : 'primary';
  return(
    <Button color={color} onClick={signInAndSignOut}>
      { isSignedIn ? 'Sign Out' : 'Sign In with Google' }
    </Button>
  );
}

export default ButtonOAuth;