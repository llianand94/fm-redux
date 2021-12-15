import ACTION_TYPES from "../actions/actionTypes";
const initialState= {
  count:0,
  step:1,
  tasks:[{
    id:0,
    text:'test',
    isDone:false
  }]
};
let serial = 1;
function reducer (prevState=initialState, action){
  const {count, step}= prevState;
  const {newStep} = action;
  switch (action.type) {
    case ACTION_TYPES.CREATE_TASK:{ 
      const {tasks} = prevState; 
      const {values} = action;    
      return {
        ...prevState,
        tasks:[...tasks,
          { ...values,id:serial++}]
      }
    }
    case ACTION_TYPES.UPDATE_TASK:{
      const {id,values} = action;
      const {tasks} = prevState;
      const newTasks = tasks.map((task)=>{
        if(task.id===id){
          return {...task, ...values}
        }
        return {...task}
      })
      return{
        ...prevState,
        tasks: newTasks,
      }
    }
    case ACTION_TYPES.DELETE_TASK:{
      const {id} = action;
      const {tasks} = prevState;
      const newTasks = tasks.filter(task=>task.id!==id)
      return {
        ...prevState,
        tasks: newTasks
      }
    }
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

export default reducer;