import { combineReducers, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './sagas'

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

// Combine / Pass in all Individual reducers
// This is what our state will look like in Redux DevTools (state.cardReducer, etc)
const rootReducer = combineReducers({
	cardReducer: cardReducer
});


const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);


// then run the saga
sagaMiddleware.run(rootSaga);


export default store;
