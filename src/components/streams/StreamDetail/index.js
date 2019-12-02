import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchStream, editStream } from '../../../actions/streams';
import StreamForm from '../StreamForm';

class StreamDetail extends Component {

  componentDidMount () {
    const streamId = this.props.match.params.id;
    this.props.fetchStream(streamId);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.stream.id, formValues);
  }

  render () {
    const { stream } = this.props;
    return(
      <div className="s-stream-edit">
        { (stream && stream.id) &&
            <StreamForm
              initialValues={{ title: stream.title, description: stream.description }}
              onSubmit={this.onSubmit}
            />
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streamsReducer[ownProps.match.params.id]
});

export default connect(mapStateToProps, { fetchStream, editStream })(StreamDetail);
