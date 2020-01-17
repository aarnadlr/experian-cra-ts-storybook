import { call, all, put, takeEvery, takeLatest } from 'redux-saga/effects'

// worker Saga:
function* workerSaga(action) {
   try {
      // const user = yield call(v=>v);
      yield put({type: "INCREMENT", payload: 9});
   } catch (e) {
      yield put({type: "ERROR"});
   }
}

// worker Saga:
function* workerSagaChangeColor(action) {
   try {
      // const user = yield call(v=>v);
      yield put({type: "CHANGE_COLOR", payload: 'green'});
   } catch (e) {
      yield put({type: "ERROR"});
   }
}


/*
  Watcher saga: will be fired on USER_FETCH_REQUESTED actions
*/
function* watcherSagaIncrement() {
  yield takeEvery("INC", workerSaga);
}

/*
  Watcher saga: will be fired on USER_FETCH_REQUESTED actions
*/
function* watcherSagaChangeColor() {
  yield takeEvery("CHANGE_COLOR_SAGA", workerSagaChangeColor);
}



export default function* rootSaga() {
  yield all([
      watcherSagaIncrement,
      watcherSagaChangeColor()
  ]);
}




// export default mySaga;
