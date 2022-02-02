import {put} from 'redux-saga/effects';
import * as API from '../api';
import * as CreateUserActions from '../actions/createUsers';

export function * createUsersSaga (action){
  try{
    const {data:{data:[user]}} = yield API.createUser(action.payload.values);
    yield put(CreateUserActions.createUserSuccess({user}));
  }catch(error){
    yield put(CreateUserActions.createUserError({error}));
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
