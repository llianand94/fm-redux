import React, { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import * as UserActions from '../../actions/createUsers';

const UsersList = (props) => {
  const {users, isFetching,error} = useSelector(({users})=> users);
  const dispatch = useDispatch();
  const getUsersReq = ({limit,offset}={})=>dispatch(UserActions.getUsersRequest({limit,offset}));

  useEffect(() => { getUsersReq() },[]);
  return (
    <section>
      <h2>Users list</h2>
      {isFetching && 'Loading ...'}
      {error && JSON.stringify(error)}
      <ul> 
        { users.map((user)=>(          
          <li key={user.id}>{user.email}</li>
        ))} 
      </ul>
      <button onClick={()=>{getUsersReq({offset:users.length})}}>Open more users</button>
    </section>
  );
}


export default UsersList;
