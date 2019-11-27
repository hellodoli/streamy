import { 
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM
} from '../constants/streams';
import streams from '../apis/streams';
import history from '../history';

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().oauthReducer;
  const response = await streams.post('/streams', { ...formValues, userId });
  dispatch({
    type: CREATE_STREAM,
    payload: response.data
  });
  // push back to root
  history.push('/');
}

export const fetchStream = (streamId) => async dispatch => {
  const response = await streams.get(`/streams/${streamId}`);
  dispatch({
    type: FETCH_STREAM,
    payload: response.data
  });
}

export const fetchStreams = () => async dispatch => {
  const response = await streams.get(`/streams`);
  dispatch({
    type: FETCH_STREAMS,
    payload: response.data
  });
}

export const editStream = (streamId, formValues) => async dispatch => {
  const response = await streams.put(`/streams/${streamId}`, formValues);
  dispatch({
    type: EDIT_STREAM,
    payload: response.data
  });
  // push back to root
  history.push('/');
}

export const deleteStream = (streamId) => async dispatch => {
  await streams.delete(`/streams/${streamId}`);
  dispatch({
    type: DELETE_STREAM,
    payload: streamId
  });
}
