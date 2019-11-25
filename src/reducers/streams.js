import { CREATE_STREAM } from '../constants/streams';

const streamsReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return action.payload;
    default:
      return state;
  }
}

export default streamsReducer;