// types
const ADD_TRACKS = 'ADD_TRACKS';
const REMOVE_TRACK = 'REMOVE_TRACK';

const initialState = [];
// reducer
export default function playlistReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TRACKS:
      return [...state, ...payload];
    case REMOVE_TRACK:
      return state.filter(track => track.id !== payload);
    default:
      return state;
  }
}

// actions
export const addTracks = (tracks, history) => dispatch => {
  Promise.resolve(1)
    .then(() =>
      dispatch({
        type: ADD_TRACKS,
        payload: tracks
      })
    )
    .then(() => history.push('/dj-controller'))
    .catch(err => console.log(err));
};

export const removeTrack = id => ({
  type: REMOVE_TRACK,
  payload: id
});
