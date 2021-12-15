import { Field, Form, Formik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { createTask } from '../../actions/todoCreators';

const FormCreateTaks = (props) => {
  const {createTaskAction}= props;
  const onSubmit = (values, formikBag, meta)=>{
    createTaskAction(values);
    formikBag.resetForm();
  }
  return (
    <div>
      <Formik onSubmit={onSubmit} initialValues={{text:'', isDone:false}}>
        <Form>
          <Field name='text'/>
          <input type='submit' value='Add task'/>
          <input type='reset' value='Reset'/>
        </Form>
      </Formik>
    </div>
  );
}
const mapDispatchToProp = (dispatch) =>({
  createTaskAction: (values)=>dispatch(createTask(values))
})
export default connect(undefined,mapDispatchToProp)(FormCreateTaks);
