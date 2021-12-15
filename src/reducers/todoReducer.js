import ACTION_TYPES from "../actions/actionTypes";
const initialState= {  
  tasks:[{
    id:0,
    text:'test',
    isDone:false
  }]
};
let serial = 1;
function todoReducer (prevState=initialState, action){  
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
    default:
      return prevState;
  }
}

export default todoReducer;