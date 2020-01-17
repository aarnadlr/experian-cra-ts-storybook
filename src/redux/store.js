import { combineReducers, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './sagas'


// action types
const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const initialCardState = {
  card: '',
  to: '',
  from: '',
  email: '',
  count: 0,
  color: 'papayawhip'
};

const initialAPIReducerState = {
  fetching: false,
  dog: null,
  error: null
}

const middleware = [sagaMiddleware];

// Individual reducer, passed into `rootReducer`
const cardReducer = (state = initialCardState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + action.payload };
    case 'CHANGE_COLOR':
      return {
        ...state,
        color: action.payload
      }
    default:
      return state;
  }
};

const APIReducer = (state = initialAPIReducerState, action )=>{
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, dog: action.dog };
    case API_CALL_FAILURE:
      return { ...state, fetching: false, dog: null, error: action.error };
    default:
      return state;
  }
};

const JSONReducer = (state = initialAPIReducerState, action )=>{
  switch (action.type) {
    case "JSON_CALL_REQUEST":
      return { ...state, fetching: true, error: null };
    case "JSON_CALL_SUCCESS":
      return { ...state, fetching: false, json: action.payload };
    case "JSON_CALL_FAILURE":
      return { ...state, fetching: false, dog: null, error: action.error };
    default:
      return state;
  }
};




// Combine / Pass in all Individual reducers
// This is what our state will look like in Redux DevTools (state.cardReducer, etc)
const rootReducer = combineReducers({
	cardReducer,
  APIReducer,
  JSONReducer
});


const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);


// then run the saga
sagaMiddleware.run(rootSaga);


export default store;
