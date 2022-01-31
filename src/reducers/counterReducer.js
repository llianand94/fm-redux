import ACTION_TYPES from "../actions/actionTypes";
const initialState= {
  count:0,
  step:1,  
};

function counterReducer (prevState=initialState, action){
  const {count, step}= prevState;
  const {newStep} = action;
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return {
        ...prevState,
        count:count+step}
      
    case ACTION_TYPES.DECREMENT:
      return {
        ...prevState,
        count:count-step}
    
    case ACTION_TYPES.SET_STEP:{
      return {
        ...prevState,
        step:newStep}
    }
    default:
      return prevState;
  }
}

export default counterReducer;