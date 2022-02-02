import React, { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActions from '../../actions/createUsers';

const UsersList = (props) => {
  const {users, isFetching,error} = useSelector(({users})=> users);  
  const {getUsersRequest, clearUserError} = bindActionCreators(UserActions, useDispatch());
  const loadMore = ({limit,offset}={})=>getUsersRequest({limit, offset:users.length});

  useEffect(() => { loadMore() },[]);
  return (
    <section>
      <h2>Users list</h2>
      {isFetching && 'Loading ...'}
      {error && <div>
      <p>{error.message}</p>
      <button onClick={clearUserError}>Clear Errors</button>
      </div>}
      <ul> 
        { users.map((user)=>(          
          <li key={user.id}>{user.email}</li>
        ))} 
      </ul>
      <button onClick={loadMore}>Open more users</button>
    </section>
  );
}


export default UsersList;
