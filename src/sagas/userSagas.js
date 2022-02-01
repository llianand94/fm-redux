import {put} from 'redux-saga/effects';
import * as API from '../api';
import * as CreateUserActions from '../actions/createUsers';

export function * createUsersSaga (action){
  try{
    const {data:{data:[users]}} = yield API.createUser(action.values);
    yield put(CreateUserActions.createUserSuccess(users));
  }catch(error){
    yield put(CreateUserActions.createUserError(error));
  }
}
export function * getUsersSaga (action){
  try{
    const {data:{data:users}} = yield API.getUser(action.payload);
    yield put(CreateUserActions.getUsersSuccess({users}));
  }catch(error){
    yield put(CreateUserActions.getUsersError({error}));
  }
}
