import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createStream, fetchStream } from '../../../actions/streams';
import StreamForm from '../StreamForm';

class StreamCreate extends Component {

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }

  render () {
    return(
      <div className="s-stream-create">
        <h2>Stream Create</h2>
        {/* Stream Form */}
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream, fetchStream })(StreamCreate);
