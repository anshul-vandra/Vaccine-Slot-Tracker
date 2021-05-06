import * as ACTION_TYPES from './Types';

const initialState = {
  state: [],
  district: [],
  why_join: [],
  how_to_use: [],
  social_media: null,
  message: '',
  error: null
}

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.STATE_LIST_SUCCESS:
      return {
        ...state,
        state: action.payload.data,
        message: action.payload.message,
        error: null
      }
    case ACTION_TYPES.DISTRICT_LIST_SUCCESS:
      return {
        ...state,
        district: action.payload.data,
        message: action.payload.message,
        error: null
      }
    default:
      return state;
  }
}
