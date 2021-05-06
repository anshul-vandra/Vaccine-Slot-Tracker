import {applyMiddleware,createStore} from 'redux'
import { rootReducer} from './RootReducer'; // state reducer
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;