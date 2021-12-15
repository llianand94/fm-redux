import React from 'react';
import FormCreateTaks from '../FormCreateTaks';
import TodoList from '../TodoList';

const Todo = () => {
  return (
    <div>
      <FormCreateTaks/>
      <TodoList/>
    </div>
  );
}
const mapStateToProp = {}
export default Todo;
