import { 
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM
} from '../constants/streams';

import { mapKeys } from '../helper';

const streamsReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_STREAM:
    case CREATE_STREAM:
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAMS:
      return { ...state, ...mapKeys(action.payload, 'id') };
    case DELETE_STREAM:
      delete state[action.payload]; // action.payload is streamId
      return state;
    default:
      return state;
  }
}

export default streamsReducer;
