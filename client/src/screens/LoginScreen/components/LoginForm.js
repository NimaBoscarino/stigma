import React from 'react'
import axios from 'axios'
import { Form, Icon, Input, Button } from 'antd';
import styled from 'styled-components'
const FormItem = Form.Item;

const StyledForm = styled(Form)`
  background-color: white;
  padding-top: 25px;
  width: 350px;
  margin-left: 5px;
  margin-right: 5px;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
`

const FullWidthButton = styled(Button)`
width: 100%;
`

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);

        this.props.onSignIn(values)
      }
    });
  };

  hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }  

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    // Only show error after a field is touched.
    const emailError = isFieldTouched('email') && getFieldError('email');
    const passwordError = isFieldTouched('password') && getFieldError('password');

    return (
      <StyledForm onSubmit={this.handleSubmit} className="login-form">
        <FormItem
          validateStatus={emailError ? 'error' : ''}
          help={emailError || ''}
        >
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Email" />
          )}
        </FormItem>
        <FormItem
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >  
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem style={{textAlign: 'center', marginBottom: 0}}>
          <FullWidthButton 
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={this.props.logging_in}
            disabled={this.hasErrors(getFieldsError())}            
          >
          { !this.props.logging_in ? <Icon type="smile" /> : null }Log In
          </FullWidthButton>
          Don't have an account? <span style={{color: 'blue', cursor: 'pointer'}}>Register here!</span>
        </FormItem>
      </StyledForm>
    );
  }
}

export default Form.create({ name: 'normal_login' })(NormalLoginForm);