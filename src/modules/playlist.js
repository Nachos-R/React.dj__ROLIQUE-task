// types
const ADD_TRACKS = 'ADD_TRACKS';
const REMOVE_TRACK = 'REMOVE_TRACK';

const initialState = { first: [], second: [] };
// reducer
export default function playlistReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TRACKS:
      return payload.zone === 1
        ? { ...state, first: [...payload.tracks] }
        : { ...state, second: [...payload.tracks] };
    case REMOVE_TRACK:
      return payload.zone === 1
        ? {
            ...state,
            first: state.first.filter(track => track.id !== payload.id)
          }
        : {
            ...state,
            second: state.second.filter(track => track.id !== payload.id)
          };
    default:
      return state;
  }
}

// actions
export const addTracks = (tracks, zone) => ({
  type: ADD_TRACKS,
  payload: { tracks, zone }
});

export const removeTrack = (id, zone) => ({
  type: REMOVE_TRACK,
  payload: { id, zone }
});
