import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, updateTask } from '../../actions/todoCreators';

const TodoList = (props) => {
  const {tasks,updateTaskAction,deleteTaskAction} = props;
  return (
    <section>
      <h2>To-do list</h2>
      <ol>
      {tasks.map((task)=>(
        <li key={task.id}>
          <p>{task.text}<input type='checkbox' checked={task.isDone} onChange={({target:{checked}})=>updateTaskAction({id:task.id, values:{...task, isDone:checked}})}/>
          <button onClick={()=>deleteTaskAction(task.id)}>Delete</button></p>
          </li>
        ))}
      </ol>
    </section>
  );
}

const mapStateToProp= ({todo})=>todo;
const mapDispatchToProp = (dispatch) =>({
  updateTaskAction: ({id,values})=>dispatch(updateTask({id,values})),
  deleteTaskAction: (id)=>dispatch(deleteTask(id))
})

export default connect(mapStateToProp,mapDispatchToProp)(TodoList);
