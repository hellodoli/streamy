import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback
} from 'reactstrap';

class StreamForm extends Component {

  renderInput = ({ input, meta, label }) => {
    const isInvalid = !!((meta.error && meta.touched));
    return(
      <FormGroup>
        <Label>{ label }</Label>
        <Input type="text" placeholder={label} invalid={isInvalid} {...input} autoComplete="off" />
        { isInvalid && <FormFeedback>{ meta.error }</FormFeedback> }
      </FormGroup>
    );
  }

  submit = formValues => {
    this.props.onSubmit(formValues); // callback onSubmit
  }

  render() {
    return(
      <form onSubmit={this.props.handleSubmit(this.submit)}>
        <Field name="title" label="Enter Title" component={this.renderInput} />
        <Field name="description" label="Enter Description" component={this.renderInput} />
        <Button>Submit</Button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter description';
  }
  return errors;
}

export default reduxForm({
  form: 'StreamForm',
  validate
})(StreamForm);