import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as UserActions from '../../actions/createUsers';

const UsersList = (props) => {
  const {users, isFetching,error,getUsersReq} = props;
  useEffect(() => {
    getUsersReq()
  }, [getUsersReq]);
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
    </section>
  );
}


const mapStateToProps = ({users})=> users;
const mapDispatchToProps = (dispatch) =>({
  getUsersReq:({limit,offset}={})=>dispatch(UserActions.getUsersRequest({limit,offset}))
});
export default connect(mapStateToProps,mapDispatchToProps)(UsersList);
