import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form' // redux-form reducer 
import { reducer as toastrReducer } from 'react-redux-toastr'
import { homeReducer } from './home/Reducer'


export const rootReducer = combineReducers({
  toastr: toastrReducer,
  form: formReducer,
  home: homeReducer
});