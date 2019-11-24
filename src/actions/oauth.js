import { SIGN_IN, SIGN_OUT } from '../constants/oauth';

export const signIn = () => ({
  type: SIGN_IN,
});

export const signOut = () => ({
  type: SIGN_OUT,
});