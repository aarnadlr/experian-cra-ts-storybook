import { call, all, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from "axios";


// function that makes the api request and returns a Promise for response
function fetchDog() {
  // make a http request to this URL
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breeds/image/random"
  });
}



// worker Saga:
function* workerSagaIncrement(action) {
   try {
      // const user = yield call(v=>v);
      yield put({type: "INCREMENT", payload: 9});
   } catch (e) {
      yield put({type: "ERROR"});
   }
}

// worker Saga: Will dispatch this NEW action object
function* workerSagaChangeColor(action) {
   try {
      // const user = yield call(v=>v);
      yield put({type: "CHANGE_COLOR", payload: 'green'});
   } catch (e) {
      yield put({type: "ERROR"});
   }
}


/*
  Watcher saga: will be fired on INC_SAGA actions
*/
function* watcherSagaIncrement() {
  yield takeEvery("INC_SAGA", workerSagaIncrement);
}

/*
  Watcher saga: will be fired on CHANGE_COLOR_SAGA actions
*/
function* watcherSagaChangeColor() {
  yield takeEvery("CHANGE_COLOR_SAGA", workerSagaChangeColor);
}




// worker saga: makes the api call when watcher saga sees the action
function* workerSagaAPI() {
  try {
    // call the fetchDog function. Store the response
    const response = yield call(fetchDog);


    const dog = response.data.message;

    // dispatch a success action to the store with the dog URL
    yield put({ type: "API_CALL_SUCCESS", dog });

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}

// WATCH FOR ACTION "API_CALL_REQUEST"
export function* watcherSagaAPI() {
  yield takeLatest("API_CALL_REQUEST", workerSagaAPI);
}



export default function* rootSaga() {
  yield all([
      watcherSagaIncrement(),
      watcherSagaChangeColor(),
      watcherSagaAPI()
  ]);
}




// export default mySaga;
