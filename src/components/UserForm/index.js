import { Field, Form, Formik } from 'formik';
import { connect } from 'react-redux';
import React from 'react';
import * as CreateUserActions from '../../actions/createUsers';

const initialValues = {
  firstName:'',
  lastName:'',
  email:'',
  password:'',
  birthday:'',
  isMale:true
};



const UserForm = (props) => {
  const {createUserReqAction} = props;
  const onSubmit = (values, formikBag) =>{
    createUserReqAction(values);
    formikBag.resetForm();
  }
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field name='firstName' placeholder='firstName'/>
          <Field name='lastName' placeholder='lastName'/>
          <Field name='email' placeholder='email'/>
          <Field name='password' placeholder='password'/>
          <Field name='birthday' placeholder='birthday'/>
          <Field name='isMale' placeholder='isMale' type='checkbox'/>
          <button type='submit'>Send Form</button>
        </Form>
      </Formik>
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>({
  createUserReqAction : (values)=> dispatch(CreateUserActions.createUserRequest(values))
})

export default connect(undefined,mapDispatchToProps)(UserForm);
