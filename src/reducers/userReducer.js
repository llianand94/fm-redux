import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  users:[],
  isFetching:false,
  error:null
}

function userReducer(state= initialState, action){
  // const 
  switch (action.type) {
    case ACTION_TYPES.CREATE_USER_REQUEST:{
      return {
        ...state,
        isFetching:true
      }
    }
    case ACTION_TYPES.CREATE_USER_SUCCESS:{
      const {user} = action.values;
      return {
        ...state,
        isFetching:false,
        users : [...state.users, user]
      }
    }
    case ACTION_TYPES.CREATE_USER_ERROR:{
      const {error} = action;
      return {
        ...state,
        isFetching:false,
        error
      }
    }
    default:
      return state;
  }
};

export default userReducer;