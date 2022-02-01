import {takeLatest} from 'redux-saga/effects';
import ACTION_TYPES from "../actions/actionTypes";
import {createUsersSaga,getUsersSaga} from './userSagas'

function * rootSaga (){
  yield takeLatest(ACTION_TYPES.CREATE_USER_REQUEST, createUsersSaga);
  yield takeLatest(ACTION_TYPES.GET_USERS_REQUEST, getUsersSaga);
};

export default rootSaga;