import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {FormGroup, Checkbox, Button, Row, Col} from "react-bootstrap";
import './SmallBusiness.css';
import history from '../../../../history';

const required = value => (value ? undefined : 'Required');


 const renderField = ({ placeholder, input, label, type, meta: { touched, error }}) => (
    <div className="form-group">
      <label className="labelTxt">{label}</label>
      <input {...input} placeholder={placeholder} type={type} className="form-control SqaureText" />
      {touched && ((error && (<span className="errorTxt">{error}</span>)))}
    </div>
  );

  const renderCheckbox = ({ placeholder, input, label, type}) => (
      <input {...input} placeholder={placeholder} type={type} />
  );
  

const SmallBusiness = (props) => {
    const { handleSubmit, pristine, submitting, reset, dirty, loginError, onNext, previousPage } = props;
    // const handleSubmitForm = (values) => {
    //     onNext(values);
    //   console.info('FormValues', values);
    // };
    return (
      // <div className="Formbuttonwrap">
      <form className="form-style" onSubmit={handleSubmit}>
        <Field name="fullName" component={renderField}  validate={required} label="Your Full Name" />
        <Field name="businessName" component={renderField} validate={[required]} label="Business Name" />
        <Field name="ein" component={renderField} validate={[required]} label="EIN" />
        <Field name="streetAddress1" component={renderField} validate={[required]} label="Street Address 1" />
        <Field name="city" component={renderField} validate={[required]} label="City" />
        <Row>
          <Col lg={7} sm={7}><Field name="state" component={renderField} validate={[required]} label="State" /></Col>
          <Col lg={5} sm={5}><Field name="zip"  type="number" component={renderField} validate={[required]} label="Zip" /></Col>
        </Row>
        
        <label className="labelTxt">Are you a non-profit 501(c)?(Optional)</label><br/>
        <label><Field name="nonProfit" type="radio" component={renderCheckbox} value="yes" />Yes</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <label><Field name="nonProfit" type="radio" component={renderCheckbox} value="no"/>No</label>
        <div className="formBtnWrap">
          <button className="formBtn" type="submit" onClick={() => history.push('/login')} >Back</button>
          <button className="formBtn" type="submit" disabled={submitting}>Next</button>
        </div>
      </form>
    
    );
}

export default reduxForm({
    form: 'Com', // a unique identifier for this form
    destroyOnUnmount: false,      // <------ preserve form data
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
  })(SmallBusiness)

