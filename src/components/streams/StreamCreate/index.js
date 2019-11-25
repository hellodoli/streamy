import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback
} from 'reactstrap';

import { createStream } from '../../../actions/streams';

class StreamCreate extends Component {

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

  submit = (formValues) => {
    this.props.createStream(formValues);
  }

  render () {
    return(
      <div className="s-create">
        <h2>Stream Create</h2>
        <form onSubmit={this.props.handleSubmit(this.submit)}>
          <Field name="title" component={this.renderInput} label="Enter Title" />
          <Field name="description" component={this.renderInput} label="Enter Description" />
          <Button>Submit</Button>
        </form>
      </div>
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

const formWrapper = reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapper);
