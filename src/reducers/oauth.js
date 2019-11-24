import { SIGN_IN, SIGN_OUT } from '../constants/oauth';

const INTIAL_STATE = {
  isSignedIn: null
};

const oauthReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true };
    case SIGN_OUT:
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
}

export default oauthReducer;