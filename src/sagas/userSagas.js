import {put} from 'redux-saga/effects';
import * as API from '../api';
import * as CreateUserActions from '../actions/createUsers';

export function * createUsersSaga (action){
  try{
    const {data:{data:[user]}} = yield API.createUser(action.values);

    yield put(CreateUserActions.createUserSuccess(user));
  }catch(error){
    
    yield put(CreateUserActions.createUserError(error));
  }

}

