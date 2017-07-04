import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action ) {
  switch (action.type) {
    case FETCH_WEATHER:
      // concat does not replace the old state, it creates a new instance of state
      // return state.concat([action.payload.data]);
      return [action.payload.data, ...state ];
  }
  return state;
}
