import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import oauthReducer from './oauth';
import streamsReducer from './streams';

const rootReducer = combineReducers({
  oauthReducer,
  streamsReducer,
  form: formReducer
});

export default rootReducer;