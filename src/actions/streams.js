import { CREATE_STREAM } from '../constants/streams';
import streams from '../apis/streams';

export const createStream = (formValues) => async dispatch => {
  const response = await streams.post('/streams', formValues);
  dispatch({
    type: CREATE_STREAM,
    payload: response.data
  });
};
